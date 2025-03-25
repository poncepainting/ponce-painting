# Local Business Website Template

A modern, responsive Next.js template designed specifically for local business websites. This template provides everything you need to quickly set up a professional website for a small business or local establishment.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Customization](#customization)
5. [Core Components](#core-components)
6. [Form Handling](#form-handling)
7. [SEO Controls](#seo-controls)
8. [JavaScript Optimization](#javascript-optimization)
9. [Deployment](#deployment)
10. [Sitemap and Robots.txt](#sitemap-and-robots.txt)

## Features

- **Modern Stack**: Next.js 15, TypeScript, and Tailwind CSS
- **Mobile-First Design**: Fully responsive with animated mobile menu
- **Performance Focused**: Optimized for speed and Core Web Vitals
- **SEO Ready**: Comprehensive metadata and semantic structure
- **Configurable Forms**: Multiple form handling options
- **Component Library**: Reusable UI components for consistent design
- **Accessibility**: Built with a11y best practices

## Getting Started

```bash
# Clone repository
git clone https://github.com/yourusername/local-business-template.git my-business-site
cd my-business-site

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/public
  /images             # Static images
/src
  /app                # App router pages
  /components         # React components
    /ui               # Reusable UI components
  /config             # Configuration files
  /hooks              # Custom React hooks
  /lib                # Core functionality
  /types              # TypeScript definitions
/docs                 # Additional documentation
```

## Customization

### Business Information

Edit `src/config/site.ts` to update:

- Business name, description, and contact info
- Services offered
- Testimonials
- Key business features

### Design & Theme

Modify the look and feel by editing:

- `src/config/theme.ts` - Design tokens
- `tailwind.config.js` - Tailwind settings
- `src/app/globals.css` - Global styles

### Layout Components

Customize core layout components:

- `src/app/layout.tsx` - Main layout
- `src/components/Header.tsx` - Navigation
- `src/components/Footer.tsx` - Footer

### Images

Replace placeholder images in `public/images/`:

- `logo.svg` - Business logo
- `hero/` - Hero images
- `services/` - Service images

## Core Components

### Container

```tsx
import Container from "@/components/ui/Container";

<Container>
  Your content here
</Container>

// With custom styling
<Container className="py-12 bg-gray-100">
  Content with custom styles
</Container>
```

### OptimizedImage

```tsx
import OptimizedImage from '@/components/ui/OptimizedImage';

<OptimizedImage
  src="/images/example.jpg"
  alt="Description"
  width={400}
  height={300}
  className="rounded"
  fallbackText="Alternative text"
/>;
```

## Form Handling

The template includes three form handling options:

1. **Formspree** (Default)

   - No server configuration required
   - Works on any hosting
   - Configure in `.env.local`:
     ```
     NEXT_PUBLIC_FORM_HANDLER=formspree
     NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
     ```

2. **Next.js API Route**

   - Optimized for Vercel deployments
   - Sends email via SMTP
   - Configure in `.env.local` with SMTP details

3. **EmailJS**
   - Client-side solution
   - No server configuration needed
   - Configure with EmailJS credentials

For detailed configuration, see [docs/FORM_HANDLING.md](docs/FORM_HANDLING.md)

## SEO Controls

### SEO Component

```tsx
import SEO from '@/components/SEO';

<SEO
  title="Service Page"
  description="Professional services in your area"
  canonical="/services"
  noIndex={false}
  noFollow={false}
/>;
```

### PageWrapper Component

```tsx
import PageWrapper from '@/components/PageWrapper';

export default function MyPage() {
  return (
    <PageWrapper
      seo={{
        title: 'My Page',
        description: 'Page description',
      }}
    >
      {/* Page content */}
    </PageWrapper>
  );
}
```

### Automatic noindex

The following pages are automatically set to noindex:

- Authentication pages
- Thank you/confirmation pages
- Admin/dashboard pages
- Error pages

See `src/config/seo.ts` to customize.

## JavaScript Optimization

This template includes several JavaScript optimizations:

1. **Dynamic Imports**

   ```tsx
   import { clientOnly } from '@/utils';
   const HeavyComponent = clientOnly(() => import('@/components/HeavyComponent'));
   ```

2. **Code Splitting**

   - Route-based and component-level splitting
   - Lazy loading for below-the-fold content

3. **Third-Party Scripts**

   ```tsx
   import Script from 'next/script';

   <Script src="https://example.com/script.js" strategy="lazyOnload" />;
   ```

For more details, see [docs/javascript-optimization.md](docs/javascript-optimization.md)

## Deployment

This template is optimized for deployment on Vercel, but works with any hosting service that supports Next.js.

### Vercel Deployment

```bash
npm run build
vercel
```

### Other Hosting

Follow standard Next.js deployment procedures for your chosen host.

## Sitemap and Robots.txt

This project uses Next.js App Router's built-in sitemap and robots.txt generation:

- `/src/app/sitemap.ts` - Generates the sitemap.xml file
- `/src/app/robots.ts` - Generates the robots.txt file

These files are automatically converted to `/sitemap.xml` and `/robots.txt` at build time and are accessible at the root of your domain.

The sitemap includes:

- All static routes with appropriate priorities
- Dynamic service routes from siteConfig
- Service area routes from siteConfig

You can modify these files to add additional routes or change priorities as needed.

For more information, see:

- [Next.js Sitemap Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Next.js Robots.txt Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)

## License

MIT License - Feel free to use for personal or commercial projects.
