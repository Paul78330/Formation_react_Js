<#
Script: import_subtrees_phase3.ps1
Purpose: For gitlink paths that already have files in the parent (prefix exists),
import nested repo history into parent using merge + read-tree method.

Steps per path:
 - create a bare clone of the nested repo
 - add temporary remote and fetch
 - create temporary branch from temp remote
 - merge with '-s ours --no-commit' into parent
 - read-tree --prefix=path -u temp_branch to write files into prefix
 - commit merge
 - cleanup

WARNING: modifies history (creates merge commits). Backups (.git.bak) should exist.
#>

Set-StrictMode -Version Latest
$gitlinks = git ls-files -s | Select-String '^160000' | ForEach-Object { ($_ -split '\s+')[-1] }
if (-not $gitlinks) { Write-Host "No gitlinks found." ; exit 0 }

$root = (Get-Location).Path
$tmpRoot = Join-Path $root '.tmp\import_subtrees_phase3'
if (Test-Path $tmpRoot) { Remove-Item -Recurse -Force $tmpRoot }
New-Item -ItemType Directory -Path $tmpRoot | Out-Null

$processed = @()
$i = 0
foreach ($path in $gitlinks) {
    $i++
    Write-Host "\n=== Phase3 processing [$i] $path ===" -ForegroundColor Cyan
    try { $abs = (Resolve-Path -LiteralPath $path).Path } catch { Write-Host "Path not found: $path" -ForegroundColor Yellow ; continue }
    $dotgitbak = Join-Path $abs '.git.bak'
    if (-not (Test-Path $dotgitbak)) { Write-Host "No .git.bak for $path -> skipping (needs manual check)" -ForegroundColor Yellow ; continue }

    # restore .git temporarily
    $dotgit = Join-Path $abs '.git'
    if (-not (Test-Path $dotgit)) {
        try { Move-Item -LiteralPath $dotgitbak -Destination $dotgit -Force ; Write-Host "Restored .git for $path" -ForegroundColor Green } catch { Write-Host ("Failed to restore .git for " + $path + ": " + $_) -ForegroundColor Red ; continue }
    }

    # create bare clone
    $tmpDir = Join-Path $tmpRoot "import_$i"
    New-Item -ItemType Directory -Path $tmpDir | Out-Null
    $bare = Join-Path $tmpDir 'repo.git'
    Write-Host "Cloning bare for $path -> $bare" -ForegroundColor Cyan
    try { git clone --bare "$abs" "$bare" | Out-Null } catch { Write-Host ("Bare clone failed for " + $path + ": " + $_) -ForegroundColor Red ; Move-Item -LiteralPath $dotgit -Destination $dotgitbak -Force ; continue }

    $tempRemote = "temp3_$i"
    try { git remote add $tempRemote "$bare" } catch { git remote remove $tempRemote 2>$null ; git remote add $tempRemote "$bare" }
    git fetch $tempRemote --tags | Out-Null

    $importBranch = "${tempRemote}/main"
    $localTempBranch = "import_branch_$i"
    try {
        git branch $localTempBranch "$tempRemote/main" | Out-Null
    } catch { Write-Host ("Failed to create local branch from temp for " + $path + ": " + $_) -ForegroundColor Red ; git remote remove $tempRemote 2>$null ; Move-Item -LiteralPath $dotgit -Destination $dotgitbak -Force ; continue }

    # perform merge with ours strategy then read-tree
    try {
        git checkout -q main
        git merge -s ours --no-commit $localTempBranch | Out-Null
        git read-tree --prefix="$path/" -u $localTempBranch
        git commit -m ("Import subtree history for $path via read-tree") | Out-Null
        Write-Host ("Imported history for " + $path) -ForegroundColor Green
        $processed += $path
    } catch {
        Write-Host ("Import failed for " + $path + ": " + $_) -ForegroundColor Red
    } finally {
        # cleanup
        try { git branch -D $localTempBranch | Out-Null } catch {}
        try { git remote remove $tempRemote 2>$null } catch {}
        # move .git back to .git.bak so nested folder is normal
        if (Test-Path $dotgit) { Move-Item -LiteralPath $dotgit -Destination $dotgitbak -Force }
        try { Remove-Item -Recurse -Force $tmpDir } catch {}
    }
}

Write-Host "\nPhase3 done. Processed:`n$($processed -join "`n")" -ForegroundColor Cyan
