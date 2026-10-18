# Installation Guide

## System Requirements

- **Node.js**: 20.x LTS or higher
- **npm**: 10.x or higher
- **Git**: 2.x or higher
- **OS**: Windows 10+, macOS 12+, or Linux (Ubuntu 20.04+)

## Step-by-Step Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd anand-dairy-farms
```

### 2. Install Root Dependencies

```bash
npm install
```

### 3. Install Client Dependencies

```bash
cd client
npm install
cd ..
```

### 4. Install Server Dependencies (Optional)

```bash
cd server
npm install
cd ..
```

### 5. Configure Environment Variables

```bash
# Copy example files
cp .env.example .env
cp client/.env.example client/.env
cp server/.env.example server/.env

# Edit with your actual values
# Required: Business phone, WhatsApp, email, Google Maps API key
```

### 6. Verify Installation

```bash
# Run development servers
npm run dev

# Frontend: http://localhost:5173
# Backend: http://localhost:3000
```

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173
npx kill-port 5173

# Kill process on port 3000
npx kill-port 3000
```

### Node Version Issues

```bash
# Check Node version
node --version

# Use nvm to switch versions
nvm use 20
```

### Dependency Conflicts

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind CSS Not Working

```bash
# Rebuild Tailwind
cd client
npx tailwindcss -i ./src/styles/index.css -o ./dist/output.css --watch
```

## Development Workflow

### Starting Development

```bash
# Terminal 1: Frontend
npm run dev:client

# Terminal 2: Backend (optional)
npm run dev:server

# Or both together
npm run dev
```

### Making Changes

1. Edit files in `client/src/`
2. Changes hot-reload automatically
3. Check browser console for errors

### Adding New Pages

1. Create component in `client/src/pages/`
2. Add route in `client/src/routes/AppRoutes.jsx`
3. Update navigation in `client/src/components/layout/Header.jsx`

### Updating Products

Edit `client/src/data/products.js`:
- Add/modify products array
- Update categories
- Modify delivery areas
- Change business info

## Production Build

```bash
cd client
npm run build

# Output in client/dist/
# Test with: npm run preview
```

## Common Commands

```bash
# Install all
npm run install:all

# Dev servers
npm run dev
npm run dev:client
npm run dev:server

# Build
cd client && npm run build

# Preview build
cd client && npm run preview

# Lint (if configured)
npm run lint

# Type check (if TypeScript)
npm run type-check
```

## IDE Setup

### VS Code Extensions (Recommended)

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": ["cn\\(([^)]*)\\)", "className=\"([^\"]*)\""]
}
```

## Next Steps

After installation:
1. Configure `.env` with your business details
2. Update `client/src/data/products.js` with your products
3. Replace placeholder images in `client/public/images/`
4. Test all pages and functionality
5. Deploy to your preferred platform