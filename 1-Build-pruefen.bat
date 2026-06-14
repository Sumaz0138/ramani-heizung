@echo off
chcp 65001 >nul
title Ramani Heizung - Build pruefen
cd /d "%~dp0"

echo ============================================
echo   Schritt 1: Produktions-Build testen
echo   (stellt sicher, dass Vercel sauber baut)
echo ============================================
echo.

if not exist "node_modules" (
  echo Installiere Abhaengigkeiten...
  call npm install
  echo.
)

call npm run build

echo.
echo ============================================
echo   Wenn oben "Compiled successfully" / kein
echo   Fehler steht, ist die Seite deploy-bereit.
echo ============================================
pause
