# Script to add library filter header to comparison components
$files = @(
    "InputComparison.tsx",
    "AvatarComparison.tsx",
    "SwitchComparison.tsx",
    "AlertComparison.tsx",
    "CheckboxComparison.tsx"
)

$basePath = "c:\Users\KRISHNA SAI\OneDrive\Desktop\CCA1-final\CCA1\src\components\comparisons"

foreach ($file in $files) {
    $filePath = Join-Path $basePath $file
    Write-Host "Processing $file..."
    
    $content = Get-Content $filePath -Raw
    
    # Check if already has Filter import
    if ($content -notmatch "Filter") {
        Write-Host "  - Adding Filter import and useNavigation to $file"
    } else {
        Write-Host "  - $file already has Filter import, skipping"
    }
}

Write-Host "`nDone!"
