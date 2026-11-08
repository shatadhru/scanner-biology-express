@echo off
title Shatadhru AI Admission Practice Portal
cd /d "%~dp0"
echo ====================================================
echo Starting Shatadhru AI Admission Practice Engine...
echo ====================================================
start "" http://localhost:3000/
node server.js
pause
