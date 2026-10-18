# Configuration Guide

## Environment Variables

### Client (.env)

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `VITE_BUSINESS_NAME` | Yes | Business name | `Anand Dairy Farms` |
| `VITE_BUSINESS_PHONE` | Yes | Phone with country code | `+91-9876543210` |
| `VITE_BUSINESS_WHATSAPP` | Yes | WhatsApp number (digits only) | `919876543210` |
| `VITE_BUSINESS_EMAIL` | Yes | Contact email | `info@ananddairyfarms.com` |
| `VITE_BUSINESS_ADDRESS` | Yes | Full address | `Oragadam, Ambattur, Chennai, Tamil Nadu 600053, India` |
| `VITE_GOOGLE_MAPS_API_KEY` | For Maps | Google Maps JavaScript API key | `AIza...` |
| `VITE_SUPABASE_URL` | Optional | Supabase project URL | `https://xxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Optional | Supabase anon key | `eyJ...` |
| `VITE_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 ID | `G-XXXXXXXXXX` |
| `VITE_ENABLE_ANALYTICS` | No | Enable analytics | `false` |
| `VITE_ENABLE_CHAT_WIDGET` | No | Enable chat widget | `false` |

### Server (.env)

| Variable | Required | Description |
|----------|----------|-------------|
| `SUPABASE_URL` | For backend | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | For backend | Supabase service role key |
| `PORT` | No | Server port (default: 3000) |
| `NODE_ENV` | No | Environment (development/production) |
| `CLIENT_URL` | Yes | Frontend URL for CORS |
| `GOOGLE_MAPS_API_KEY` | For Maps API | Google Maps API key |
| `WHATSAPP_API_TOKEN` | Optional | WhatsApp Business API token |
| `SMTP_HOST` | Optional | Email SMTP host |
| `SMTP_PORT` | Optional | Email SMTP port |
| `SMTP_USER` | Optional | Email username |
| `SMTP_PASS` | Optional | Email password |
| `JWT_SECRET` | For auth | Secret for JWT tokens |

## Business Data Configuration

Edit `client/src/data/products.js` to customize:

### Products Array

```javascript
{
  id: 'unique-id',
  name: 'Product Name',
  slug: 'product-name', // URL-friendly
  category: 'milk', // Must match category slug
  description: 'Full description',
  shortDescription: 'Short description for cards',
  price: 60, // In rupees
  comparePrice: 70, // Original price (for discount)
  unit: '1 Litre',
  stock: 100,
  images: ['/images/product-1.jpg', '/images/product-2.jpg'],
  thumbnail: '/images/product-thumb.jpg',
  isActive: true,
  isFeatured: false,
  tags: ['organic', 'daily-delivery'],
  sku: 'ADF-MILK-1L',
  weight: '1 kg',
  nutritionInfo: {
    energy: '61 kcal',
    protein: '3.2g',
    fat: '3.3g',
    carbohydrates: '4.8g',
    calcium: '120mg',
  }
}
```

### Categories Array

```javascript
{
  id: 'milk',
  name: 'Milk',
  slug: 'milk',
  description: 'Category description',
  image: '/images/categories/milk.jpg',
  icon: 'milk', // Lucide icon name
  sortOrder: 1
}
```

### Delivery Areas

```javascript
{
  id: 'area-slug',
  name: 'Area Name',
  confirmed: true, // false = coming soon
  pincode: '600053'
}
```

### Business Info

```javascript
businessInfo: {
  name: 'Anand Dairy Farms',
  tagline: 'Freshness Delivered to Your Doorstep',
  address: {
    street: 'Oragadam',
    city: 'Ambattur',
    state: 'Tamil Nadu',
    pincode: '600053',
    country: 'India',
    full: 'Full address string'
  },
  phone: '+91-XXXXXXXXXX',
  whatsapp: '+91XXXXXXXXXX',
  email: 'info@ananddairyfarms.com',
  hours: {
    open: '06:00',
    close: '20:00',
    days: 'Monday - Sunday'
  },
  coordinates: { lat: 13.1143, lng: 80.1548 },
  googleMapsUrl: 'https://maps.google.com/...',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?...',
  description: 'Business description',
  establishedYear: 2020
}
```

### FAQs

```javascript
faqs: [
  {
    question: 'Question text?',
    answer: 'Answer text with multiple sentences.'
  }
]
```

### Features

```javascript
features: [
  {
    id: 'unique-id',
    title: 'Feature Title',
    description: 'Feature description',
    icon: 'leaf' // Lucide icon name
  }
]
```

### Process Steps

```javascript
processSteps: [
  {
    step: 1,
    title: 'Step Title',
    description: 'Step description',
    icon: 'search' // Lucide icon name
  }
]
```

## Tailwind Configuration

### Custom Colors (tailwind.config.js)

```javascript
colors: {
  primary: { 50-950 },    // Green palette
  secondary: { 50-950 },  // Gray-green palette
  cream: { 50-950 },      // Cream/off-white palette
  gold: { 50-950 },       // Golden accent palette
  dark: { 50-950 }        // Dark text palette
}
```

### Custom Fonts

```javascript
fontFamily: {
  heading: ['Playfair Display', 'Georgia', 'serif'],
  body: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif']
}
```

### Custom Animations

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-out forwards',
  'slide-up': 'slideUp 0.6s ease-out forwards',
  'milk-drop': 'milkDrop 2s ease-in-out infinite',
  'float': 'float 3s ease-in-out infinite',
}
```

## Google Maps Setup

### 1. Get API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create project or select existing
3. Enable "Maps JavaScript API" and "Places API"
4. Create credentials → API Key
5. Restrict key to your domains

### 2. Configure Embed URL

```javascript
// In businessInfo:
googleMapsEmbedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z...!5e0!3m2!1sen!2sin!4v${Date.now()}`
```

### 3. Add to .env

```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## WhatsApp Configuration

### Business Number Format

```javascript
// In .env - digits only, no + or spaces
VITE_BUSINESS_WHATSAPP=919876543210

// In code - auto-formatted by generateWhatsAppUrl()
const url = generateWhatsAppUrl(phone, message);
// Output: https://wa.me/919876543210?text=encoded_message
```

### Pre-filled Messages

Messages are auto-generated in:
- `cartStore.js` - `getWhatsAppMessage()`
- `ProductDetail.jsx` - `handleWhatsAppOrder()`
- `Checkout.jsx` - `handlePlaceOrder()`
- `Contact.jsx` - `handleSubmit()`

Customize message templates in respective files.

## Supabase Setup (Optional)

### 1. Create Project

1. Go to [Supabase](https://supabase.com/)
2. Create new project
3. Note project URL and anon key

### 2. Run Migrations

```bash
# In Supabase SQL Editor, run migrations in order:
# database/migrations/001_create_users.sql
# database/migrations/002_create_categories.sql
# database/migrations/003_create_products.sql
# database/migrations/004_create_cart_wishlist.sql
# database/migrations/005_create_orders.sql
# database/migrations/006_rls_policies.sql
```

### 3. Seed Data

```bash
# Run seed files:
# database/seeds/seed_categories.sql
# database/seeds/seed_products.sql
```

### 4. Configure RLS

Policies in `006_rls_policies.sql` handle:
- User can only see own cart/wishlist/orders
- Public can read active products/categories
- Admins can manage all data

## Analytics Configuration

### Google Analytics 4

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_ENABLE_ANALYTICS=true
```

Add to `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Image Optimization

### Recommended Specifications

| Image Type | Dimensions | Format | Max Size |
|------------|------------|--------|----------|
| Hero | 1920x1080 | WebP/AVIF | 200KB |
| Product | 800x800 | WebP | 100KB |
| Category | 400x400 | WebP | 80KB |
| Thumbnail | 400x400 | WebP | 50KB |
| OG Image | 1200x630 | WebP | 150KB |

### Placeholder Images

Replace in `client/public/images/`:
- `/images/hero-milk.jpg`
- `/images/about-farm.jpg`
- `/images/products/*.jpg`
- `/images/categories/*.jpg`
- `/placeholder-product.jpg`

## Performance Tuning

### Vite Config (vite.config.js)

```javascript
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
```

## Feature Flags

Control features via `.env`:

```env
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHAT_WIDGET=false
VITE_ENABLE_PWA=false
```

Use in components:
```javascript
if (import.meta.env.VITE_ENABLE_ANALYTICS) {
  // Initialize analytics
}
```