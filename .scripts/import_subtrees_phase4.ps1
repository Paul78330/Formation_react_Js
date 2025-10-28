<#
Script: import_subtrees_phase4.ps1
Purpose: For paths where a prefix already exists, do a safe subtree add by:
 - moving existing folder to .tmp/backup_<i>
 - removing any index entries for the prefix
 - creating a bare clone of the nested repo
 - git subtree add --prefix=path <bare> main
 - copy back files from backup (overwriting) and commit
 - keep .git.bak as backup

This script is destructive to the working tree (moves folders temporarily). Backups are kept under .tmp/phase4_backups.
#>

Set-StrictMode -Version Latest
$gitlinks = git ls-files -s | Select-String '^160000' | ForEach-Object { ($_ -split '\s+')[-1] }
if (-not $gitlinks) { Write-Host "No gitlinks found." ; exit 0 }

$root = (Get-Location).Path
$tmpRoot = Join-Path $root '.tmp\import_subtrees_phase4'
if (Test-Path $tmpRoot) { Remove-Item -Recurse -Force $tmpRoot }
New-Item -ItemType Directory -Path $tmpRoot | Out-Null

$backupsRoot = Join-Path $tmpRoot 'backups'
New-Item -ItemType Directory -Path $backupsRoot | Out-Null

$i = 0
$processed = @()
foreach ($path in $gitlinks) {
    $i++
    Write-Host "\n=== Phase4 processing [$i] $path ===" -ForegroundColor Cyan
    try { $abs = (Resolve-Path -LiteralPath $path).Path } catch { Write-Host "Path not found: $path" -ForegroundColor Yellow ; continue }
    $dotgitbak = Join-Path $abs '.git.bak'
    if (-not (Test-Path $dotgitbak)) { Write-Host "No .git.bak for $path -> skipping" -ForegroundColor Yellow ; continue }

    $backupDir = Join-Path $backupsRoot "backup_$i"
    New-Item -ItemType Directory -Path $backupDir | Out-Null

    # Move existing folder to backup
    try {
        Write-Host "Moving existing folder '$path' to backup..."
        Move-Item -LiteralPath $path -Destination $backupDir -Force
    } catch {
        Write-Host ("Failed to move $path to backup: " + $_) -ForegroundColor Red
        continue
    }

    # Ensure index does not have the path
    try {
        git rm -r --cached --ignore-unmatch -- "$path" 2>$null
    } catch {}

    # create bare clone from the nested repo (restore .git temporarily)
    $dotgit = Join-Path $abs '.git'
    try { Move-Item -LiteralPath $dotgitbak -Destination $dotgit -Force ; Write-Host "Restored .git temporarily" -ForegroundColor Green } catch { Write-Host "Failed to restore .git" -ForegroundColor Yellow }

    $tmpDir = Join-Path $tmpRoot "import_$i"
    New-Item -ItemType Directory -Path $tmpDir | Out-Null
    $bare = Join-Path $tmpDir 'repo.git'
    Write-Host "Cloning bare from $abs -> $bare"
    try { git clone --bare "$abs" "$bare" | Out-Null } catch { Write-Host ("Bare clone failed for " + $path + ": " + $_) -ForegroundColor Red ; Move-Item -LiteralPath $dotgit -Destination $dotgitbak -Force ; Move-Item -LiteralPath $backupDir -Destination $path -Force ; continue }

    # Ensure prefix doesn't exist (we moved it). Now run subtree add
    try {
        git subtree add --prefix="$path" "$bare" main
        Write-Host "Subtree added for $path" -ForegroundColor Green
    } catch {
        Write-Host ("git subtree add failed for " + $path + ": " + $_) -ForegroundColor Red
        # try a merge fallback
        try {
            $tempRemote = "temp4_$i"
            git remote add $tempRemote "$bare" 2>$null
            git fetch $tempRemote --tags | Out-Null
            $localTempBranch = "import_branch_4_$i"
            git branch $localTempBranch "$tempRemote/main" | Out-Null
            git merge -s ours --allow-unrelated-histories --no-commit $localTempBranch | Out-Null
            git read-tree --prefix="$path/" -u $localTempBranch
            git commit -m ("Import subtree history for $path via read-tree (fallback)") | Out-Null
            git branch -D $localTempBranch | Out-Null
            git remote remove $tempRemote 2>$null
            Write-Host "Fallback import succeeded for $path" -ForegroundColor Green
        } catch {
            Write-Host "Fallback import also failed for $path" -ForegroundColor Red
            # restore original folder back so user can recover
            if (Test-Path (Join-Path $backupDir '*')) { Move-Item -LiteralPath (Join-Path $backupDir '*') -Destination $path -Force }
            if (Test-Path $dotgit) { Move-Item -LiteralPath $dotgit -Destination $dotgitbak -Force }
            continue
        }
    }

    # After successful subtree add, restore backup files into the imported tree (overwriting)
    try {
        Write-Host "Restoring backup files into $path (overwriting)..."
        # Copy-Item recursively from backupDirasename/* to $path
        $items = Get-ChildItem -LiteralPath $backupDir -Force
        foreach ($item in $items) {
            $src = $item.FullName
            $dest = Join-Path $path $item.Name
            if (Test-Path $dest) { Remove-Item -Recurse -Force $dest }
            Copy-Item -LiteralPath $src -Destination $path -Recurse -Force
        }
        git add -- "$path"
        git commit -m ("Restore local files after subtree import for $path") | Out-Null
        Write-Host "Restoration committed for $path" -ForegroundColor Green
        $processed += $path
    } catch {
        Write-Host ("Failed to restore/commit backup for " + $path + ": " + $_) -ForegroundColor Red
    } finally {
        # cleanup: move .git back to .git.bak
        if (Test-Path $dotgit) { Move-Item -LiteralPath $dotgit -Destination $dotgitbak -Force }
        try { Remove-Item -Recurse -Force $tmpDir } catch {}
    }
}

Write-Host "\nPhase4 done. Processed:`n$($processed -join "`n")" -ForegroundColor Cyan
