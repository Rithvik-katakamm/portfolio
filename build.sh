#!/bin/bash

echo "🏗️  Building portfolio for production..."
echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔨 Building project..."
npm run build

echo ""
echo "✅ Build complete! Check the 'dist' folder for production files."
