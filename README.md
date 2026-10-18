# Anand Dairy Farms - Complete Website

A modern, mobile-first, SEO-optimized website for Anand Dairy Farms - an organic milk and dairy products delivery business in Oragadam, Ambattur, Chennai.

## 🌟 Features

- **Mobile-First Design** - Optimized for 360px-430px mobile screens
- **Premium Brand Identity** - Custom color palette, typography (Playfair Display + Plus Jakarta Sans)
- **Full E-commerce Flow** - Product browsing, cart, checkout, WhatsApp ordering
- **Advanced Animations** - Framer Motion page transitions, scroll animations, micro-interactions
- **Local SEO Optimized** - Structured data, meta tags, sitemap, robots.txt
- **Delivery Area Management** - Confirmed/pending areas with pincode lookup
- **Google Maps Integration** - Embedded map with directions
- **Accessibility** - WCAG 2.1 AA compliant, reduced motion support
- **Performance Optimized** - Lazy loading, optimized images, code splitting

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite + TypeScript-ready
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand with persistence
- **Routing**: React Router v6
- **Backend Ready**: Supabase integration prepared
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
anand-dairy-farms/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── layout/     # Header, Footer, Layout
│   │   │   ├── product/    # ProductCard, ProductGrid
│   │   │   └── ui/         # Button, Input, Badge, Modal, Toast, Spinner
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── DeliveryAreas.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   ├── TermsConditions.jsx
│   │   │   └── RefundPolicy.jsx
│   │   ├── data/           # Product & business data
│   │   │   └── products.js
│   │   ├── store/          # Zustand stores
│   │   │   └── cartStore.js
│   │   ├── lib/            # Utilities & configurations
│   │   │   ├── utils.js
│   │   │   └── supabase.js
│   │   ├── routes/         # Route configuration
│   │   ├── styles/         # Global styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/             # Static assets
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── .env.example
├── server/                 # Express backend (optional)
├── database/               # Supabase migrations & seeds
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ (LTS recommended)
- npm 10+

### Installation

```bash
# Install all dependencies
npm run install:all

# Or install manually
npm install
cd client && npm install
cd ../server && npm install
```

### Development

```bash
# Start both frontend and backend
npm run dev

# Or start individually
npm run dev:client  # Frontend at http://localhost:5173
npm run dev:server  # Backend at http://localhost:3000
```

### Production Build

```bash
# Build frontend
cd client && npm run build

# Preview production build
cd client && npm run preview
```

## ⚙️ Configuration

### Required Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Business Information (REQUIRED)
VITE_BUSINESS_PHONE=+91-XXXXXXXXXX
VITE_BUSINESS_WHATSAPP=+91XXXXXXXXXX
VITE_BUSINESS_EMAIL=info@ananddairyfarms.com

# Google Maps (REQUIRED for maps)
VITE_GOOGLE_MAPS_API_KEY=your_api_key

# Supabase (Optional - for backend features)
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Business Data

Edit `client/src/data/products.js` to update:
- Products, categories, pricing
- Delivery areas (confirmed/pending)
- Business information
- FAQs, features, process steps

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Netlify

1. Connect repository
2. Build command: `cd client && npm run build`
3. Publish directory: `client/dist`
4. Add environment variables

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📋 Pages Included

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, features, categories, featured products, process, delivery areas, CTA |
| About | `/about` | Story, values, farm practices, visit info |
| Products | `/products` | Filterable, searchable product catalog with pagination |
| Product Detail | `/products/:slug` | Image gallery, details, nutrition, add to cart |
| Delivery Areas | `/delivery-areas` | Interactive area checker with search/filter |
| Contact | `/contact` | Contact form, info, FAQ accordion |
| Checkout | `/checkout` | 2-step checkout with WhatsApp order submission |
| Privacy Policy | `/privacy` | Comprehensive privacy policy |
| Terms & Conditions | `/terms` | Full terms of service |
| Refund Policy | `/refund` | Detailed refund/replacement policy |

## 🎨 Design System

### Colors
- **Primary Green**: `#315C3B` (Primary actions, headers)
- **Secondary Green**: `#63845B` (Secondary elements)
- **Light Cream**: `#F7F4E9` (Backgrounds)
- **Golden Accent**: `#D6AD5C` (Highlights, CTAs)
- **Dark Text**: `#26352A` (Primary text)

### Typography
- **Headings**: Playfair Display (400-700)
- **Body**: Plus Jakarta Sans (300-700)

### Spacing
- 8px base unit system
- Consistent spacing scale

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Focus visible states
- Color contrast ratios (WCAG AA)
- Reduced motion support
- Keyboard navigation
- Screen reader compatible

## 🔍 SEO Features

- Unique meta tags per page
- Open Graph & Twitter cards
- JSON-LD structured data (LocalBusiness, Product)
- XML sitemap generation
- Robots.txt
- Canonical URLs
- Semantic heading hierarchy
- Image alt texts
- Internal linking

## 📱 Responsive Breakpoints

- Mobile: 360px, 375px, 390px, 430px
- Tablet: 768px
- Laptop: 1024px
- Desktop: 1280px+
- Large: 1536px+

## 📝 License

MIT License - Feel free to use for your business.

## 🤝 Support

For questions or customization needs, contact the development team.