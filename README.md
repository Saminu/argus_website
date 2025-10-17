# ARGUS Website

Open-Source Smart Glasses & Visual Intelligence Platform website built with React and Vite.

## Features

- **Modern React App**: Built with React 19, Vite, and Tailwind CSS
- **SEO Optimized**: Complete SEO setup with meta tags, Open Graph, Twitter Cards, and structured data
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **HLS Video Support**: Integrated HLS.js for video streaming
- **Industry Pages**: Dedicated pages for automotive, healthcare, manufacturing, oil & gas, and warehousing
- **Open Source**: Built with open-source technologies and components

## SEO Features

### Meta Tags
- Dynamic page titles and descriptions
- Open Graph tags for social media sharing
- Twitter Card support
- Canonical URLs
- Theme colors and viewport settings

### Technical SEO
- `robots.txt` for search engine crawling
- `sitemap.xml` for better indexing
- Web app manifest for PWA support
- Structured data (JSON-LD) for rich snippets
- Preconnect to external domains

### Performance
- Optimized images and assets
- Preloading critical resources
- Efficient bundle splitting with Vite

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Saminu/argus_website.git
cd argus_website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Building for Production

```bash
# Build the application
pnpm build

# Preview the build
pnpm preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # UI component library
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   └── SEO.jsx         # SEO component
├── pages/              # Page components
│   ├── HomePage.jsx    # Landing page
│   ├── ProductsPage.jsx # Products page
│   └── ...             # Other pages
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets

public/
├── images/             # Image assets
├── robots.txt          # SEO robots file
├── sitemap.xml         # SEO sitemap
├── site.webmanifest    # PWA manifest
└── favicon.ico         # Favicon
```

## SEO Configuration

### Page-Specific SEO
Each page uses the `SEO` component to set dynamic meta tags:

```jsx
import SEO from '../components/SEO'

const MyPage = () => {
  return (
    <>
      <SEO 
        title="Page Title"
        description="Page description"
        keywords="keyword1, keyword2"
        image="https://argus.global/image.jpg"
        url="https://argus.global/page"
      />
      {/* Page content */}
    </>
  )
}
```

### Updating Sitemap
Update `public/sitemap.xml` when adding new pages:

```xml
<url>
  <loc>https://argus.global/new-page</loc>
  <lastmod>2024-12-19</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

## Technologies Used

- **React 19**: Latest React with concurrent features
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **HLS.js**: HTTP Live Streaming support
- **Lucide React**: Icon library
- **Radix UI**: Accessible component primitives

## Deployment

This is a Single Page Application (SPA) that requires server-side routing configuration to handle direct links to internal pages.

### Netlify
- Uses `netlify.toml` and `public/_redirects`
- Automatically configured for SPA routing

### Vercel
- Uses `vercel.json` for rewrites
- Automatically handles SPA routing

### Apache
- Uses `public/.htaccess`
- Requires mod_rewrite enabled

### Nginx
- Use the provided `nginx.conf.example`
- Configure `try_files $uri $uri/ /index.html;`

### Other Platforms
For other hosting platforms, ensure your server:
1. Serves `index.html` for all routes that don't match static files
2. Returns HTTP 200 (not 404) for SPA routes
3. Handles client-side routing properly

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Website: https://argus.global
- GitHub: https://github.com/Saminu/argus_website
- Email: contact@argus.global
