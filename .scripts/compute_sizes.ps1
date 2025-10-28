Set-StrictMode -Version Latest
$root = Get-Location
$folders = Get-ChildItem -Force | Where-Object {$_.PSIsContainer}
$result = @()
foreach ($f in $folders) {
    try {
        $size = (Get-ChildItem -Path $f.FullName -Recurse -Force -ErrorAction SilentlyContinue | Where-Object {-not $_.PSIsContainer} | Measure-Object -Property Length -Sum).Sum
    } catch {
        $size = 0
    }
    $result += [PSCustomObject]@{
        Name = $f.Name
        Path = $f.FullName
        SizeBytes = $size
        SizeGB = [math]::Round(($size / 1GB),3)
    }
}
$result | Sort-Object SizeBytes -Descending | Select-Object -First 50 | Format-Table @{Name='SizeGB';Expression={$_.SizeGB}},@{Name='Name';Expression={$_.Name}},@{Name='Path';Expression={$_.Path}} -AutoSize
