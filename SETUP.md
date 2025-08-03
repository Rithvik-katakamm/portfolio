# 🚀 Portfolio Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   
   Or use the convenience script:
   ```bash
   bash start.sh
   ```

3. **View your portfolio:**
   - Open http://localhost:3000 in your browser
   - The browser should open automatically

## Build for Production

To build for deployment:
```bash
npm run build
```

Or use:
```bash
bash build.sh
```

The production files will be in the `dist` folder.

## 🚀 GitHub Pages Deployment

### Option 1: GitHub Actions (Automated - Recommended)
1. Push your code to GitHub
2. Go to Settings → Pages
3. Set Source to "GitHub Actions"
4. Push to main branch - it will auto-deploy!

### Option 2: Manual Deployment
1. Install gh-pages if not already installed:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Go to Settings → Pages in your GitHub repo
4. Set source to "Deploy from a branch"
5. Select "gh-pages" branch
6. Your site will be live at: `https://[username].github.io/portfolio/`

## 📱 Mobile Optimizations

✅ Responsive design for all screen sizes
✅ Mobile menu with smooth animations
✅ Touch-optimized scrolling
✅ Optimized image loading
✅ Smaller font sizes on mobile
✅ Touch-friendly tap targets

## ⚡ Performance Features

✅ Smooth scrolling with momentum
✅ GPU-accelerated animations
✅ Lazy loading for better performance
✅ Optimized for quick skimming
✅ Fast page transitions

## Customization

- **Profile Picture**: Already updated in `public/Portfolio-picture.jpeg`
- **Colors**: Edit `tailwind.config.js`
- **Content**: Update component files in `src/components/`
- **Base URL**: Update `base` in `vite.config.js` if deploying to a different path

## Features

✅ Dark mode with purple accents
✅ Buttery smooth scrolling
✅ Mobile-responsive design
✅ Modern rectangular profile image
✅ GitHub Pages ready
✅ SEO optimized
✅ Fast loading (Vite)
✅ Contact form
✅ Project showcase
✅ Skills visualization
✅ Timeline for experience

Enjoy your world-class portfolio! 🎉
