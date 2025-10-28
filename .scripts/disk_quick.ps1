Set-StrictMode -Version Latest
$root = (Get-Location).Path
Write-Host '== Quick targeted sizes ==' -ForegroundColor Cyan

# size of .tmp
$tmppath = Join-Path $root '.tmp'
if (Test-Path $tmppath) {
  $s=(Get-ChildItem -LiteralPath $tmppath -Recurse -File -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
  Write-Host (".tmp size (GB): " + [math]::Round(($s/1GB),3))
} else { Write-Host '.tmp not found' }

# size of root .git
$gitpath = Join-Path $root '.git'
if (Test-Path $gitpath) {
  $s=(Get-ChildItem -LiteralPath $gitpath -Recurse -File -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
  Write-Host (".git size (GB): " + [math]::Round(($s/1GB),3))
} else { Write-Host '.git not found' }

# Find .git.bak directories and sizes
Write-Host "`nSearching for .git.bak directories..." -ForegroundColor Cyan
$gbs = Get-ChildItem -LiteralPath $root -Directory -Recurse -Force -ErrorAction SilentlyContinue | Where-Object { $_.Name -ieq '.git.bak' }
if ($gbs) {
  foreach ($d in $gbs) {
    $s=(Get-ChildItem -LiteralPath $d.FullName -Recurse -File -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum
    Write-Host ("$($d.FullName) -> " + [math]::Round($s/1GB,3) + " GB")
  }
} else { Write-Host 'No .git.bak directories found' }

# Top 20 large files under repo
Write-Host "`nTop 20 largest files under repo:" -ForegroundColor Cyan
Get-ChildItem -LiteralPath $root -Recurse -File -ErrorAction SilentlyContinue | Sort-Object Length -Descending | Select-Object -First 20 @{Name='SizeMB';Expression={[math]::Round($_.Length/1MB,2)}}, FullName | Format-Table -AutoSize

# write small summary to .tmp/disk_quick.txt
$reportDir = $tmppath
if (-not (Test-Path $reportDir)) { New-Item -ItemType Directory -Path $reportDir | Out-Null }
$reportFile = Join-Path $reportDir 'disk_quick.txt'
"Quick disk report generated at $(Get-Date)" | Out-File -FilePath $reportFile -Encoding utf8
Get-ChildItem -LiteralPath $tmppath -Recurse -File -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum | Out-String | Out-File -Append -FilePath $reportFile -Encoding utf8
Write-Host "Report written to: $reportFile" -ForegroundColor Green
