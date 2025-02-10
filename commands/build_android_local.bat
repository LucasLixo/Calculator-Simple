@echo off
setlocal enabledelayedexpansion
chcp 65001

set DRIVE=%CD:~0,2%
cd /d %DRIVE%

:: ENV
set PROJECT_DIR=%~dp0..\
cd /d %PROJECT_DIR%

:: Runs `npx expo prebuild` and continues only if successful
npx expo prebuild && (

    :: Runs the React Native build
    set NODE_ENV=production
    npx react-native build-android --mode=release && (
        cd android
        gradlew.bat assembleDebug
        cd ..
    )
)

exit /b