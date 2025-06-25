#!/bin/bash

# Build script for Render deployment
echo "🚀 Starting ThorSignia build process..."

# Build frontend
echo "📦 Building frontend..."
cd frontend
npm ci --only=production
npm run build
cd ..

# Setup backend
echo "🐍 Setting up backend..."
cd backend
pip install -r requirements.txt
cd ..

echo "✅ Build process completed successfully!" 