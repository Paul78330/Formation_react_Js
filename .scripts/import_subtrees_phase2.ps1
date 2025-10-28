<#
Script: import_subtrees_phase2.ps1
Purpose: Second-phase importer to handle gitlinks whose .git was moved to .git.bak.
It will:
 - For each gitlink path that has a .git.bak, restore .git temporarily
 - Make a bare clone of that nested repo into .tmp/import_<i>/repo.git
 - Move current working tree contents (if any) to a temporary folder
 - Run `git subtree add --prefix=<path> <bare> <branch>` to import history into parent
 - Restore any local untracked/modified files from the temporary folder
 - Move nested .git back to .git.bak (so nested folder becomes a normal directory)
 - Stage and commit parent changes

WARNING: This script modifies the repository. It creates a .tmp folder in repo root and may take time.
#>

Set-StrictMode -Version Latest

$gitlinks = git ls-files -s | Select-String '^160000' | ForEach-Object { ($_ -split '\s+')[-1] }
if (-not $gitlinks) { Write-Host "No gitlinks found." ; exit 0 }

$root = (Get-Location).Path
$tmpRoot = Join-Path $root '.tmp\import_subtrees_phase2'
if (Test-Path $tmpRoot) { Remove-Item -Recurse -Force $tmpRoot }
New-Item -ItemType Directory -Path $tmpRoot | Out-Null

$processed = @()
$i = 0
foreach ($path in $gitlinks) {
    $i++
    Write-Host "\n=== Phase2 processing [$i] $path ===" -ForegroundColor Cyan
    try {
        $abs = (Resolve-Path -LiteralPath $path -ErrorAction Stop).Path
    } catch {
        Write-Host "Path not found (skipping): $path" -ForegroundColor Yellow
        continue
    }
    $dotgitbak = Join-Path $abs '.git.bak'
    if (-not (Test-Path $dotgitbak)) {
        Write-Host "No .git.bak found for $path -> skip (maybe already converted)" -ForegroundColor Yellow
        continue
    }

    # restore .git temporarily
    $dotgit = Join-Path $abs '.git'
    if (Test-Path $dotgit) { Write-Host ".git already present for $path" -ForegroundColor Yellow }
    else {
    try { Move-Item -LiteralPath $dotgitbak -Destination $dotgit -Force ; Write-Host ("Restored .git for " + $path) -ForegroundColor Green } catch { Write-Host ("Failed to restore .git for " + $path + ": " + $_) -ForegroundColor Red ; continue }
    }

    # determine branch
    try { $branch = (git -C "$abs" rev-parse --abbrev-ref HEAD).Trim() } catch { Write-Host "Could not determine branch for $path" -ForegroundColor Red ; continue }
    Write-Host "Branch: $branch"

    # prepare temp dirs
    $tmpDir = Join-Path $tmpRoot "import_$i"
    New-Item -ItemType Directory -Path $tmpDir | Out-Null
    $bare = Join-Path $tmpDir 'repo.git'
    $worktmp = Join-Path $tmpDir 'worktree'
    New-Item -ItemType Directory -Path $worktmp | Out-Null

    # create bare clone
    Write-Host "Creating bare clone from $abs to $bare..."
    try {
        git clone --bare "$abs" "$bare" | Out-Null
    } catch {
        Write-Host ("Failed to clone bare repo for " + $path + ": " + $_) -ForegroundColor Red
        # restore .git.bak
        if (Test-Path $dotgit) { Move-Item -LiteralPath $dotgit -Destination $dotgitbak -Force }
        continue
    }

    # move existing working files out of the way (if path exists and has files)
    $hasFiles = Get-ChildItem -LiteralPath $abs -Force | Where-Object { $_.Name -ne '.git' }
    if ($hasFiles) {
        Write-Host "Moving current working files to temp work folder..."
        try {
            Get-ChildItem -LiteralPath $abs -Force | Where-Object { $_.Name -ne '.git' } | ForEach-Object { Move-Item -LiteralPath $_.FullName -Destination $worktmp -Force }
        } catch {
            Write-Host "Failed to move working files: $_" -ForegroundColor Yellow
        }
    }

    # run subtree add
    try {
        Write-Host "Running git subtree add --prefix=\"$path\" $bare $branch" -ForegroundColor Cyan
        git subtree add --prefix="$path" "$bare" $branch
        Write-Host "Subtree import succeeded for $path" -ForegroundColor Green
    } catch {
        Write-Host ("Subtree add failed for " + $path + ": " + $_) -ForegroundColor Red
        Write-Host "Attempting subtree merge..." -ForegroundColor Yellow
        try { git subtree merge --prefix="$path" "$bare" $branch ; Write-Host ("Subtree merge succeeded for " + $path) -ForegroundColor Green } catch { Write-Host ("Subtree merge failed for " + $path + ": " + $_) -ForegroundColor Red }
    }

    # restore any moved working files (copy back non-conflicting)
    $moved = Get-ChildItem -LiteralPath $worktmp -Force -Recurse -ErrorAction SilentlyContinue
    if ($moved) {
        Write-Host "Restoring local working files (if any) back into $path..." -ForegroundColor Cyan
        try {
            Get-ChildItem -LiteralPath $worktmp -Force | ForEach-Object {
                $dest = Join-Path $abs $_.Name
                if (-not (Test-Path $dest)) { Move-Item -LiteralPath $_.FullName -Destination $abs -Force }
                else { Write-Host "File exists, skipping: $dest" -ForegroundColor Yellow }
            }
        } catch { Write-Host "Failed to restore work files: $_" -ForegroundColor Yellow }
    }

    # convert nested .git back to .git.bak to make path a normal folder
    if (Test-Path $dotgit) {
        try { Move-Item -LiteralPath $dotgit -Destination $dotgitbak -Force ; Write-Host "Moved .git to .git.bak for $path" -ForegroundColor Green } catch { Write-Host "Failed to move .git to .git.bak: $_" -ForegroundColor Yellow }
    }

    # stage and commit parent changes
    try {
        git add --all -- "$path"
        git commit -m ("Import subtree for $path") | Out-Null
        Write-Host "Committed parent changes for $path" -ForegroundColor Green
    } catch { Write-Host ("No parent commit needed or commit failed for " + $path + ": " + $_) -ForegroundColor Yellow }

    # cleanup temp bare
    try { Remove-Item -Recurse -Force $tmpDir } catch { }

    $processed += $path
}

Write-Host "\nPhase2 processed paths:`n$($processed -join "`n")" -ForegroundColor Cyan
Write-Host "Finished import_subtrees_phase2.ps1" -ForegroundColor Cyan
