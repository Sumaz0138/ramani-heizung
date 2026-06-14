@echo off
chcp 65001 >nul
title Ramani Heizung - Auf GitHub hochladen
cd /d "%~dp0"

echo ============================================
echo   Schritt 2: Projekt zu GitHub hochladen
echo ============================================
echo.
echo Voraussetzung: Du hast auf github.com ein NEUES, LEERES
echo Repository erstellt (ohne README/.gitignore) und dessen
echo URL kopiert, z.B.:
echo     https://github.com/DEINNAME/ramani-heizung.git
echo.

set /p REPO="GitHub-Repo-URL hier einfuegen und Enter: "

if "%REPO%"=="" (
  echo Keine URL eingegeben. Abbruch.
  pause
  exit /b
)

echo.
echo Initialisiere Git-Repository...
git init
git config user.email "kemal-yilmaz01@live.de"
git config user.name "Kemal Yilmaz"
git branch -M main

echo Fuege Dateien hinzu...
git add .
git commit -m "Ramani Heizung Website - erste Version"

git remote remove origin 1>nul 2>nul
git remote add origin %REPO%

echo.
echo Lade hoch... (es kann sich ein Browser-Fenster zur
echo GitHub-Anmeldung oeffnen - dort bitte einloggen)
echo.
git push -u origin main

echo.
echo ============================================
echo   Fertig. Wenn oben kein Fehler steht, ist
echo   dein Code jetzt auf GitHub.
echo   Weiter geht es auf vercel.com (siehe DEPLOYMENT.md)
echo ============================================
pause
