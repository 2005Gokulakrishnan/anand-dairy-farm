# Deployment Guide

## Overview

This guide covers deploying the Anand Dairy Farms website to various platforms.

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Business information updated in `client/src/data/products.js`
- [ ] Placeholder images replaced with actual photos
- [ ] Google Maps API key added and restricted
- [ ] WhatsApp business number verified
- [ ] Supabase project created (if using backend)
- [ ] SSL certificate ready (for custom domain)
- [ ] Analytics configured
- [ ] Tested on mobile and desktop
- [ ] Build passes without errors

## Build for Production

```bash
cd client
npm run build

# Output: client/dist/
# Test locally:
npm run preview
```

## Deployment Platforms

### 1. Vercel (Recommended)

#### Automatic Deployment

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
3. Import your repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variables:
   ```
   VITE_BUSINESS_NAME
   VITE_BUSINESS_PHONE
   VITE_BUSINESS_WHATSAPP
   VITE_BUSINESS_EMAIL
   VITE_BUSINESS_ADDRESS
   VITE_GOOGLE_MAPS_API_KEY
   VITE_SUPABASE_URL
   VITE_SUPABASE_ANON_KEY
   VITE_GA_MEASUREMENT_ID
   ```
6. Deploy

#### Vercel CLI

```bash
npm i -g vercel
cd client
vercel

# For production
vercel --prod
```

#### vercel.json (Optional)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 2. Netlify

#### Automatic Deployment

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect to Git provider
4. Configure:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/dist`
5. Add Environment Variables (same as Vercel)
6. Deploy

#### Netlify CLI

```bash
npm i -g netlify-cli
cd client
netlify deploy --prod --dir=dist
```

#### netlify.toml

```toml
[build]
  base = "client"
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[headers]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 3. AWS Amplify

```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - cd client
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: client/dist
    files:
      - '**/*'
  cache:
    paths:
      - client/node_modules/**/*
```

### 4. Docker Deployment

#### Dockerfile

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY client/package*.json ./
RUN npm ci
COPY client/ .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY client/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
}
```

#### Build & Run

```bash
docker build -t anand-dairy-farms .
docker run -p 80:80 anand-dairy-farms
```

### 5. Firebase Hosting

```bash
npm i -g firebase-tools
firebase login
firebase init hosting

# Select: Use existing project
# Public directory: client/dist
# Single-page app: Yes
# Overwrite index.html: No

firebase deploy
```

#### firebase.json

```json
{
  "hosting": {
    "public": "client/dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }],
    "headers": [
      {
        "source": "/assets/**",
        "headers": [{ "key": "Cache-Control", "value": "max-age=31536000" }]
      }
    ]
  }
}
```

### 6. Traditional VPS/Server

#### Using PM2

```bash
# On server
npm i -g pm2

# Build
cd client && npm run build

# Serve with nginx (recommended) or serve
npm i -g serve
pm2 serve dist 3000 --name "anand-dairy" --spa

# Or with nginx reverse proxy
```

#### Nginx Config

```nginx
server {
    listen 80;
    server_name ananddairyfarms.com www.ananddairyfarms.com;
    
    root /var/www/anand-dairy-farms/client/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_types text/css application/javascript application/json image/svg+xml;
}
```

#### SSL with Certbot

```bash
sudo certbot --nginx -d ananddairyfarms.com -d www.ananddairyfarms.com
```

## Domain Configuration

### Custom Domain Setup

1. **Purchase Domain** (e.g., ananddairyfarms.com)
2. **Configure DNS**:
   - A Record: `@` → Server IP (VPS) or Vercel/Netlify IP
   - CNAME: `www` → `ananddairyfarms.com` or platform domain
3. **Add Domain in Platform**:
   - Vercel: Project Settings → Domains
   - Netlify: Site Settings → Domain Management
4. **Enable HTTPS** (automatic on Vercel/Netlify)

### Subdomain for API (if using backend)

```
api.ananddairyfarms.com → Backend server
```

## Post-Deployment

### Verify Deployment

- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] WhatsApp links work
- [ ] Google Maps loads
- [ ] Contact form submits
- [ ] Cart persists on refresh
- [ ] Mobile responsive
- [ ] Images load (check WebP)
- [ ] SEO meta tags present
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`

### Performance Testing

```bash
# Lighthouse CI
npm i -g @lhci/cli
lhci autorun

# Or use PageSpeed Insights
# https://pagespeed.web.dev/
```

### Monitoring

- **Uptime**: UptimeRobot, Pingdom
- **Errors**: Sentry (add DSN to .env)
- **Analytics**: Google Analytics 4
- **Performance**: Vercel Analytics / Netlify Analytics

## CI/CD Pipeline

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: client/package-lock.json
      
      - name: Install dependencies
        run: cd client && npm ci
      
      - name: Build
        run: cd client && npm run build
        env:
          VITE_BUSINESS_NAME: ${{ secrets.BUSINESS_NAME }}
          VITE_BUSINESS_PHONE: ${{ secrets.BUSINESS_PHONE }}
          VITE_BUSINESS_WHATSAPP: ${{ secrets.BUSINESS_WHATSAPP }}
          VITE_BUSINESS_EMAIL: ${{ secrets.BUSINESS_EMAIL }}
          VITE_GOOGLE_MAPS_API_KEY: ${{ secrets.GOOGLE_MAPS_API_KEY }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        if: github.ref == 'refs/heads/main'
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Rollback Strategy

### Vercel/Netlify

- Previous deployments available in dashboard
- Click "Promote to Production" on any previous deployment

### Docker

```bash
# Tag releases
docker tag anand-dairy-farms:latest anand-dairy-farms:v1.0.0

# Rollback
docker run -p 80:80 anand-dairy-farms:v1.0.0
```

### Manual

- Keep previous `dist/` folder backup
- Replace current with backup
- Restart server

## Troubleshooting Deployment

### Build Fails

```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version  # Should be 20+

# Check for TypeScript errors (if applicable)
npx tsc --noEmit
```

### Environment Variables Not Working

- Ensure variables start with `VITE_` for client
- Rebuild after adding variables
- Check platform dashboard for correct values

### Routing Issues (404 on refresh)

- Ensure SPA rewrite rules configured
- Vercel: `vercel.json` rewrites
- Netlify: `_redirects` file or `netlify.toml`
- Nginx: `try_files $uri $uri/ /index.html;`

### Images Not Loading

- Check paths in `client/public/images/`
- Verify WebP support
- Check CORS headers for external images

### Google Maps Not Loading

- Verify API key restrictions
- Check billing enabled on Google Cloud
- Verify Maps JavaScript API enabled

## Maintenance

### Regular Updates

```bash
# Monthly
npm audit
npm outdated
npm update

# Check for security vulnerabilities
npm audit fix
```

### Backup Strategy

- Database: Supabase automatic backups
- Code: Git repository
- Assets: Cloud storage (S3, Cloudinary)
- Environment: Secure password manager

## Support

For deployment issues:
1. Check platform documentation
2. Review build logs
3. Verify environment variables
4. Test locally with production build