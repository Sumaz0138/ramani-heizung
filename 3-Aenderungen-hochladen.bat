@echo off
chcp 65001 >nul
title Ramani Heizung - Aenderungen hochladen
cd /d "%~dp0"

echo ============================================
echo   Aenderungen zu GitHub hochladen
echo   (Vercel deployt danach automatisch neu)
echo ============================================
echo.

set /p MSG="Kurze Beschreibung der Aenderung (Enter = 'Update'): "
if "%MSG%"=="" set MSG=Update

git add .
git commit -m "%MSG%"
git push

echo.
echo Fertig. Vercel baut die neue Version automatisch.
pause
