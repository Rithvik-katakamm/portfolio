# 🚀 GitHub Pages Deployment Guide

## Prerequisites
1. Make sure your repository is pushed to GitHub
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the sidebar

## Deployment Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Build and Deploy
```bash
npm run deploy
```

This command will:
- Build your portfolio
- Create a `gh-pages` branch
- Push the built files to that branch
- Your site will be live at: https://rithvik-katakamm.github.io/portfolio

### 3. Configure GitHub Pages (First Time Only)
1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select "Deploy from a branch"
4. Choose "gh-pages" branch
5. Select "/ (root)" folder
6. Click "Save"

### 4. Wait for Deployment
- GitHub will take 5-10 minutes to deploy
- You'll see a green checkmark when it's ready
- Visit: https://rithvik-katakamm.github.io/portfolio

## Updating Your Portfolio

To update your live portfolio:
```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### If images don't load:
- Make sure all images are in the `public` folder
- Use paths like `/Portfolio-picture.jpeg` (not `./Portfolio-picture.jpeg`)

### If the site shows 404:
- Wait 10 minutes after deployment
- Clear your browser cache
- Check that GitHub Pages is enabled in settings

### Custom Domain (Optional)
1. Create a file called `CNAME` in the `public` folder
2. Add your domain (e.g., `rithvik.dev`)
3. Configure DNS settings with your domain provider

## Quick Deploy Script

Create a file called `deploy.sh`:
```bash
#!/bin/bash
echo "🚀 Deploying to GitHub Pages..."
npm run build
npm run deploy
echo "✅ Deployment complete!"
echo "🌐 Your site will be live at: https://rithvik-katakamm.github.io/portfolio"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Then deploy with:
```bash
./deploy.sh
```
