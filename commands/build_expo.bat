@echo off

setlocal enabledelayedexpansion

set PROJECT_DIR=%~dp0..\

npx expo prebuild

npx react-native build-android --mode=release
