@echo off
chcp 65001 >nul
title Ramani-Heizung Website
cd /d "%~dp0"

echo ============================================
echo   Ramani-Heizung - Website wird gestartet
echo ============================================
echo.

REM Beim ersten Start Abhaengigkeiten installieren
if not exist "node_modules" (
  echo Erster Start: Abhaengigkeiten werden installiert...
  echo Das kann ein paar Minuten dauern.
  echo.
  call npm install
  echo.
)

REM Browser nach kurzer Wartezeit automatisch oeffnen
start "" cmd /c "timeout /t 9 >nul & start http://localhost:3000"

echo Server startet... Der Browser oeffnet sich automatisch.
echo.
echo   Website:  http://localhost:3000
echo.
echo Zum Beenden dieses Fenster schliessen oder Strg+C druecken.
echo ============================================
echo.

call npm run dev
pause
