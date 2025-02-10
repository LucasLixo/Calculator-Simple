@echo off
setlocal enabledelayedexpansion
chcp 65001

set DRIVE=%CD:~0,2%
cd /d %DRIVE%

:: ENV
set PROJECT_DIR=%~dp0..\
cd /d %PROJECT_DIR%

: npx eas build --platform android --profile preview
npx eas build --platform android --profile production

exit /b