# My Story - Website

A modern, accessible React website for the My Story YouTube channel, featuring digital products, services, and community engagement.

## 🚀 Features

- ✅ Fully responsive design
- ✅ Mobile-first navigation with hamburger menu
- ✅ Google Analytics integration
- ✅ Newsletter subscription (Mailchimp/ConvertKit ready)
- ✅ Framer Motion animations
- ✅ Full accessibility (ARIA labels, keyboard navigation)
- ✅ Error boundary for graceful error handling
- ✅ SEO optimized (sitemap, robots.txt, meta tags)
- ✅ Lazy loading images
- ✅ Back-to-top button
- ✅ Form validation

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **React GA4** - Analytics
- **Font Awesome** - Icons

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required variables:
- `VITE_GA_MEASUREMENT_ID` - Google Analytics ID
- `VITE_NEWSLETTER_API_KEY` - Mailchimp/ConvertKit API key
- `VITE_NEWSLETTER_LIST_ID` - Newsletter list/form ID

### 3. Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### 4. Production Build

```bash
npm run build
```

Built files will be in the `dist/` folder.

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx
│   ├── BackToTop.jsx
│   ├── Community.jsx
│   ├── ErrorBoundary.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navigation.jsx
│   ├── Newsletter.jsx
│   ├── Services.jsx
│   └── Store.jsx
├── config/
│   └── siteConfig.js   # Centralized site configuration
├── services/
│   ├── analytics.js    # Google Analytics helpers
│   └── newsletter.js   # Newsletter integration
├── App.jsx             # Main app component
├── index.css           # Global styles
└── main.jsx            # App entry point

public/
├── logo.png            # Site logo
├── intro.jpg           # Channel trailer thumbnail
├── sitemap.xml         # SEO sitemap
└── robots.txt          # Search engine instructions
```

## 🎨 Customization

### Update Content

Edit `src/config/siteConfig.js` to update:
- Site name and social links
- Navigation items
- Products and pricing
- Services and features
- Stats

### Update Styles

- Colors: Edit Tailwind classes or `src/index.css`
- Fonts: Update `index.html` Google Fonts link
- Animations: Modify Framer Motion properties in components

### Add Payment Links

In `siteConfig.js`, add your Gumroad/Stripe URLs:

```javascript
products: [
  {
    ...
    purchaseUrl: 'https://yourstore.com/product-link'
  }
]
```

### Add Booking Links

In `siteConfig.js`, add your Calendly URL:

```javascript
services: [
  {
    ...
    bookingUrl: 'https://calendly.com/your-username'
  }
]
```

## 📊 Analytics Events Tracked

- Button clicks (CTA, Navigation)
- Social media clicks (YouTube, LinkedIn)
- Product purchase attempts
- Form submissions (Newsletter)
- Page views

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify

### Other Platforms

Deploy the `dist/` folder to any static hosting service.

## 📝 Next Steps

1. Add your Google Analytics ID to `.env`
2. Connect newsletter service (Mailchimp/ConvertKit)
3. Add payment links for products
4. Add booking links for services
5. Replace placeholder content with your own
6. Optimize images (convert to WebP)
7. Test and deploy!

## 📄 License

All rights reserved © 2025 My Story Channel

## 📧 Contact

For inquiries, visit [My Story YouTube Channel](https://www.youtube.com/@mystorystarts)
