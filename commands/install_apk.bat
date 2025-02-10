@echo off
setlocal enabledelayedexpansion
chcp 65001

set DRIVE=%CD:~0,2%
echo %DRIVE%\>

cd /d %DRIVE%

:: ENV
set PROJECT_DIR=%~dp0..\
cd /d %PROJECT_DIR%

adb install %PROJECT_DIR%android\app\build\outputs\apk\release\app-release.apk
