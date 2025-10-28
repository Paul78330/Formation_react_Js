<#
Script: commit_subrepos.ps1
But: Dans la racine d'un super-projet contenant des 'gitlinks' (dossiers indexés en mode 160000),
      ce script:
        - détecte les chemins de type gitlink
        - pour chaque chemin qui contient un dépôt Git (un .git), il propose de commit les modifications locales
        - ajoute les pointeurs dans le super-projet
        - propose d'amender le dernier commit du super-projet ou de créer un nouveau commit

Usage: Exécuter depuis la racine du super-projet (PowerShell) :
    powershell -ExecutionPolicy Bypass -File .\.scripts\commit_subrepos.ps1

ATTENTION: Ce script va exécuter des 'git commit' dans les sous-dossiers et modifier le commit du dépôt parent si vous l'autorisez.
Sauvegardez/clonez le repo si vous avez des doutes.
#>

param(
    [switch]$AutoCommit = $false,   # si true, commit sans demander confirmation pour chaque sous-repo
    [switch]$AmendParent = $true     # si true, amende le dernier commit du parent par défaut
)

function Write-Header($text) {
    Write-Host "`n=== $text ===`n" -ForegroundColor Cyan
}

<#
Script: commit_subrepos.ps1
Purpose: In a super-repo containing gitlinks (mode 160000), this script:
  - detects gitlink paths
  - for each path that contains a .git, commits local changes inside that repo
  - stages the updated gitlinks in the parent repo
  - amends the parent last commit or creates a new one

Usage (run from repo root):
  powershell -ExecutionPolicy Bypass -File .\.scripts\commit_subrepos.ps1 [-AutoCommit] [-AmendParent:$true|$false]

WARNING: This script runs 'git commit' in nested repos and modifies the parent commit if you allow it.
#>

param(
    [switch]$AutoCommit = $false,
    [switch]$AmendParent = $true
)

function Write-Header($text) {
    Write-Host "`n=== $text ===`n" -ForegroundColor Cyan
}

# 1) detect gitlinks in index (mode 160000)
$gitlinks = git ls-files -s | Select-String '^160000' | ForEach-Object { ($_ -split '\s+')[-1] }
if (-not $gitlinks) {
    Write-Host "No gitlinks (mode 160000) found. Nothing to do." -ForegroundColor Yellow
    exit 0
}

Write-Header "Detected gitlinks"
$gitlinks | ForEach-Object { Write-Host $_ }

# 2) for each gitlink, if it contains a .git, commit changes inside
$updatedPaths = @()
foreach ($path in $gitlinks) {
    if (Test-Path (Join-Path $path '.git')) {
        Write-Header "Handling sub-repo: $path"
        Push-Location $path
        try {
            $status = git status --porcelain
            if (-not $status) {
                Write-Host "No local changes in $path" -ForegroundColor Green
            } else {
                Write-Host ("Changes detected in " + $path + "`n" + $status + "`n") -ForegroundColor Yellow
                if ($AutoCommit) {
                    git add .
                    git commit -m ("Update: commit changes in " + $path) | Out-Null
                    $updatedPaths += $path
                } else {
                    $resp = Read-Host ("Run 'git add .' and 'git commit' in " + $path + " ? (y/n)")
                    if ($resp -eq 'y') {
                        git add .
                        git commit -m ("Update: commit changes in " + $path) | Out-Null
                        $updatedPaths += $path
                    } else {
                        Write-Host ("Skipping " + $path) -ForegroundColor Yellow
                    }
                }
            }
        } catch {
            Write-Host ("Error while processing " + $path + ": " + $_) -ForegroundColor Red
        } finally {
            Pop-Location
        }
    } else {
        Write-Host ("Path " + $path + " is a gitlink but no .git found - skip or handle manually") -ForegroundColor Yellow
    }
}

if (-not $updatedPaths) {
    Write-Host "No sub-repo was modified or committed. Nothing to add in parent." -ForegroundColor Yellow
    exit 0
}

# 3) stage updated gitlinks in parent
Write-Header "Staging gitlink pointers in parent repo"
foreach ($p in $updatedPaths) { git add $p }

# 4) commit in parent (amend or new commit)
if ($AmendParent) {
    $resp2 = Read-Host "Amend parent last commit to include these changes? (y/n)"
    if ($resp2 -eq 'y') {
        git commit --amend --no-edit
        Write-Host "Parent commit amended." -ForegroundColor Green
    } else {
        git commit -m ("Update subrepos: " + ($updatedPaths -join ', '))
        Write-Host "New parent commit created." -ForegroundColor Green
    }
} else {
    git commit -m ("Update subrepos: " + ($updatedPaths -join ', '))
    Write-Host "New parent commit created." -ForegroundColor Green
}

Write-Header "Done. Summary"
Write-Host ("Sub-repos committed:`n" + ($updatedPaths -join "`n")) -ForegroundColor Cyan
Write-Host "Check 'git status' and 'git log' in parent and sub-repos." -ForegroundColor Cyan

# end
    Write-Host ("Sub-repos committed:`n" + ($updatedPaths -join "`n")) -ForegroundColor Cyan
