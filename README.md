# DesignFlow Website Recreation

This is a complete recreation of the DesignFlow website template originally found at https://designflow-template.webflow.io/about, built using React, Tailwind CSS, and modern web technologies.

## 🚀 Features

### Pages Implemented
- **About Page** (`/` and `/about`) - Hero section, team showcase, services overview, FAQ section
- **Work Page** (`/work`) - Project portfolio with category filtering
- **Pricing Page** (`/pricing`) - Three-tier pricing plans with monthly/annual toggle
- **Blog Page** (`/blog`) - Blog posts with category filtering
- **Contact Page** (`/contact`) - Contact form and company information
- **FAQ Page** (`/faq`) - Categorized frequently asked questions with expand/collapse functionality

### Interactive Features
- ✅ Responsive navigation with mobile menu
- ✅ Category filtering on Work and Blog pages
- ✅ Expandable FAQ sections
- ✅ Monthly/Annual pricing toggle
- ✅ Contact form with validation
- ✅ Newsletter subscription form
- ✅ Hover effects and smooth transitions
- ✅ Mobile-responsive design

### Technologies Used
- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and dev server

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation
```bash
# Clone or extract the project
cd designflow-website

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Development Server
The development server runs on `http://localhost:5173/` by default.

## 📁 Project Structure

```
designflow-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.jsx    # Navigation header
│   │   └── Footer.jsx    # Site footer
│   ├── pages/            # Page components
│   │   ├── About.jsx     # About/Home page
│   │   ├── Work.jsx      # Portfolio page
│   │   ├── Pricing.jsx   # Pricing plans
│   │   ├── Blog.jsx      # Blog listing
│   │   ├── Contact.jsx   # Contact form
│   │   └── FAQ.jsx       # FAQ page
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   └── main.jsx          # Entry point
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🎨 Design Fidelity

The recreation closely matches the original design with:
- **Typography**: Clean, modern sans-serif fonts
- **Color Scheme**: Light backgrounds with dark text, green accent colors
- **Layout**: Responsive grid layouts and proper spacing
- **Interactive Elements**: Hover effects, smooth transitions, and functional components
- **Mobile Experience**: Fully responsive design that works on all devices

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Build the project: `pnpm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Option 3: Traditional Web Hosting
1. Build the project: `pnpm run build`
2. Upload contents of `dist` folder to web server
3. Configure server for SPA routing (redirect all routes to index.html)

## 📝 Notes

- All images are currently using placeholder URLs (`/api/placeholder/...`)
- Replace placeholder images with actual assets before production deployment
- The contact form is set up but needs backend integration for actual email sending
- Newsletter subscription needs backend integration
- All interactive features are fully functional on the frontend

## 🔧 Customization

The website is built with modern, maintainable code that's easy to customize:
- Colors can be modified in `App.css` using CSS custom properties
- Components are modular and reusable
- Tailwind CSS makes styling adjustments straightforward
- Content can be easily updated by modifying the respective page components

## 📞 Support

For any questions or issues with the recreated website, please refer to the documentation or contact the development team.

---

**Built with ❤️ using React and modern web technologies**

