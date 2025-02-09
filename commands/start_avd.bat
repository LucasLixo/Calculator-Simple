@echo off

setlocal enabledelayedexpansion

set PROJECT_DIR=%~dp0..\

E:

cd E:\Progams\Android\Sdk\emulator

emulator -list-avds

emulator -avd Small_Phone_API_35

cd %PROJECT_DIR%

exit