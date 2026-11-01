$dir = "c:\Users\LIKHITH GOWDA K\Desktop\water purifier website\showerfit\app\components"
Get-ChildItem $dir -Filter "*.tsx" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $updated = $content -replace '<style jsx>', '<style jsx global>'
    Set-Content -Path $_.FullName -Value $updated -NoNewline
    Write-Host "Fixed: $($_.Name)"
}
Write-Host "All done."
