Set-StrictMode -Version Latest
$root = 'C:\dev_web\REACT\ReactJs_section_Greta'
Write-Host "Disk drives and free space (GB):" -ForegroundColor Cyan
Get-PSDrive -PSProvider FileSystem | Select-Object Name,@{Name='FreeGB';Expression={[math]::Round($_.Free/1GB,2)}},@{Name='UsedGB';Expression={[math]::Round(($_.Used)/1GB,2)}} | Format-Table -AutoSize

Write-Host ("`nTop-level folder sizes in " + $root + " (GB):") -ForegroundColor Cyan
$folders = Get-ChildItem -LiteralPath $root -Force | Where-Object {$_.PSIsContainer}
$results = foreach ($f in $folders) {
    $sizeObj = Get-ChildItem -LiteralPath $f.FullName -Recurse -Force -ErrorAction SilentlyContinue | Where-Object {!$_.PSIsContainer} | Measure-Object -Property Length -Sum
    $size = 0
    if ($sizeObj -and $sizeObj.Sum) { $size = $sizeObj.Sum }
    [PSCustomObject]@{Name=$f.Name; SizeGB=[math]::Round($size/1GB,3); SizeMB=[math]::Round($size/1MB,2); SizeBytes=$size}
}
$results | Sort-Object -Property SizeBytes -Descending | Format-Table -AutoSize

Write-Host ("`nTop 30 largest files under " + $root + ":") -ForegroundColor Cyan
Get-ChildItem -LiteralPath $root -Recurse -File -ErrorAction SilentlyContinue | Sort-Object Length -Descending | Select-Object -First 30 @{Name='SizeMB';Expression={[math]::Round($_.Length/1MB,2)}},FullName | Format-Table -AutoSize

# Also write a basic plaintext report to .tmp/disk_report.txt
$reportDir = Join-Path $root '.tmp'
if (-not (Test-Path $reportDir)) { New-Item -ItemType Directory -Path $reportDir | Out-Null }
$reportFile = Join-Path $reportDir 'disk_report.txt'
"DRIVE INFO" | Out-File -FilePath $reportFile -Encoding utf8
Get-PSDrive -PSProvider FileSystem | Select-Object Name,@{Name='FreeGB';Expression={[math]::Round($_.Free/1GB,2)}},@{Name='UsedGB';Expression={[math]::Round(($_.Used)/1GB,2)}} | Out-String | Out-File -Append -FilePath $reportFile -Encoding utf8
"`nTOP-LEVEL FOLDER SIZES" | Out-File -Append -FilePath $reportFile -Encoding utf8
$results | Sort-Object -Property SizeBytes -Descending | Out-String | Out-File -Append -FilePath $reportFile -Encoding utf8
"`nTOP FILES" | Out-File -Append -FilePath $reportFile -Encoding utf8
Get-ChildItem -LiteralPath $root -Recurse -File -ErrorAction SilentlyContinue | Sort-Object Length -Descending | Select-Object -First 30 @{Name='SizeMB';Expression={[math]::Round($_.Length/1MB,2)}},FullName | Out-String | Out-File -Append -FilePath $reportFile -Encoding utf8

Write-Host "\nReport also written to: $reportFile" -ForegroundColor Green
