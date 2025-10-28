<#
Script: import_subtrees.ps1
Purpose: Import nested gitlinks (mode 160000) into the parent repository using git subtree.

Usage (from repo root):
  powershell -ExecutionPolicy Bypass -File .\.scripts\import_subtrees.ps1

This script will:
  - enumerate gitlink paths in the index
  - for each path that contains a .git, add a temporary remote pointing to the local nested repo
  - fetch the remote and run `git subtree add --prefix=<path> <temp> <branch>` to import history
  - remove the temporary remote
  - move nested .git to .git.bak (backup) so the directory becomes a normal folder
  - stage any resulting changes in the parent

WARNING: This modifies the parent history. Make a backup before running on an important repo.
#>

Write-Host "Starting subtree import..." -ForegroundColor Cyan

# get gitlink paths
$gitlinks = git ls-files -s | Select-String '^160000' | ForEach-Object { ($_ -split '\s+')[-1] }
if (-not $gitlinks) {
    Write-Host "No gitlinks found. Exiting." -ForegroundColor Yellow
    exit 0
}

$i = 0
$processed = @()
foreach ($path in $gitlinks) {
    $i++
    Write-Host "\n--- Processing [$i] $path ---" -ForegroundColor Cyan
    # resolve absolute path
    try {
        $abs = (Resolve-Path -LiteralPath $path).Path
    } catch {
        Write-Host "Could not resolve path $path. Skipping." -ForegroundColor Yellow
        continue
    }

    # ensure nested repo has commits
    try {
        $branch = git -C "${abs}" rev-parse --abbrev-ref HEAD 2>$null
        if (-not $branch) {
            Write-Host "Could not determine branch for $path. Skipping." -ForegroundColor Yellow
            continue
        }
        $branch = $branch.Trim()
        Write-Host "Nested repo branch: $branch" -ForegroundColor Green
    } catch {
        Write-Host ("Error reading branch in " + $path + ": " + $_) -ForegroundColor Red
        continue
    }

    $tempRemote = "temp_import_$i"
    try {
        git remote add $tempRemote "$abs"
    } catch {
        Write-Host "Failed to add remote $tempRemote -> $abs (maybe already exists). Removing and retrying." -ForegroundColor Yellow
        git remote remove $tempRemote 2>$null
        try { git remote add $tempRemote "$abs" } catch { Write-Host "Failed to add remote $tempRemote. Skipping." -ForegroundColor Red ; continue }
    }

    try {
        git fetch $tempRemote --tags
    } catch {
        Write-Host "Failed to fetch from $tempRemote. Removing remote and skipping." -ForegroundColor Red
        git remote remove $tempRemote 2>$null
        continue
    }

    # Try subtree add
    try {
        Write-Host "Running: git subtree add --prefix=\"$path\" $tempRemote $branch" -ForegroundColor Cyan
        git subtree add --prefix="$path" $tempRemote $branch
        Write-Host "Subtree added for $path" -ForegroundColor Green
        $processed += $path
    } catch {
        Write-Host ("git subtree add failed for " + $path + ": " + $_) -ForegroundColor Red
        Write-Host "Attempting git subtree merge instead..." -ForegroundColor Yellow
        try {
            git subtree merge --prefix="$path" $tempRemote $branch
            Write-Host ("Subtree merged for " + $path) -ForegroundColor Green
            $processed += $path
        } catch {
            Write-Host ("Subtree merge also failed for " + $path + ". Skipping.") -ForegroundColor Red
        }
    } finally {
        git remote remove $tempRemote 2>$null
    }

    # backup nested .git if exists to avoid nested repos
    $dotgit = Join-Path $abs ".git"
    if (Test-Path $dotgit) {
        try {
            $bak = Join-Path $abs ".git.bak"
            if (Test-Path $bak) { Remove-Item -Recurse -Force $bak }
            Move-Item -LiteralPath $dotgit -Destination $bak -Force
            Write-Host "Backed up nested .git to .git.bak" -ForegroundColor Green
        } catch {
            Write-Host ("Failed to backup .git for " + $path + ": " + $_) -ForegroundColor Yellow
        }
    } else {
        Write-Host "No .git found inside $path (already converted?)" -ForegroundColor Yellow
    }

}

if ($processed.Count -gt 0) {
    Write-Host "\nStaging processed paths in parent..." -ForegroundColor Cyan
    foreach ($p in $processed) { git add --all -- "$p" }
    try {
        git commit -m ("Import subrepos into parent via subtree: " + ($processed -join ', '))
    } catch {
        Write-Host "No commit required or commit failed." -ForegroundColor Yellow
    }
    Write-Host ("Done. Processed paths:`n" + ($processed -join "`n")) -ForegroundColor Cyan
} else {
    Write-Host "No paths were processed." -ForegroundColor Yellow
}

Write-Host "Finished import_subtrees.ps1" -ForegroundColor Cyan
