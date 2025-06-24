#!/bin/bash

# Build script for Render deployment

echo "Installing Python dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

echo "Installing Node.js dependencies..."
npm install

echo "Building React frontend..."
npm run build

echo "Build completed successfully!" 