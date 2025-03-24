# Local Business Website Template

A modern, responsive Next.js template designed specifically for local business websites. This template provides everything you need to quickly set up a professional website for a small business, service provider, or local establishment.

## Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Mobile-First Design**: Fully responsive with an animated mobile menu
- **Centralized Configuration**: Easy customization through config files
- **Optimized Images**: Built-in image optimization and fallback placeholders
- **Component Library**: Reusable UI components for consistent design
- **Smooth Animations**: Integrated Framer Motion for polished interactions
- **Performance Focused**: Optimized for speed and best practices
- **SEO Ready**: Proper metadata and semantic HTML structure

## Getting Started

First, clone this repository and install dependencies:

```bash
git clone https://github.com/yourusername/local-business-template.git my-business-site
cd my-business-site
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### 1. Business Information

All business information is centralized in `src/config/site.ts`. Update this file to include your:

- Business name and description
- Contact information
- Services offered
- Customer testimonials
- Key business features

### 2. Theme & Design

Customize the look and feel by editing:

- `src/config/theme.ts` - Colors, sizes, and design tokens
- `tailwind.config.js` - Extend Tailwind's default theme
- `src/app/globals.css` - Global styles and custom CSS

### 3. Site Layout

The core layout components can be customized:

- `src/app/layout.tsx` - Main layout wrapper
- `src/components/Header.tsx` - Site navigation header
- `src/components/Footer.tsx` - Site footer

### 4. Images

Replace placeholder images in the `public/images/` directory:

- `/public/images/logo.svg` - Business logo
- `/public/images/hero/` - Hero section images
- `/public/images/services/` - Service images

## Project Structure

```
/public
  /images             # Static images
    /hero
    /placeholders     # Fallback images
    /services
    logo.svg
/src
  /app                # App router pages
    /[page routes]
    layout.tsx        # Root layout
    globals.css       # Global styles
    page.tsx          # Homepage
  /components         # React components
    /ui               # Reusable UI components
    Header.tsx
    Footer.tsx
  /config             # Configuration files
    /icons.tsx        # Icon components
    /images.ts        # Image settings
    /site.ts          # Business information
    /theme.ts         # Design tokens
```

## Key Components

### Container

Use the `Container` component to maintain consistent width and padding:

```tsx
import Container from "@/components/ui/Container";

<Container>
  Your content here
</Container>

// With additional classes
<Container className="py-12 bg-gray-100">
  Content with custom padding and background
</Container>
```

### OptimizedImage

Use the `OptimizedImage` component for optimized, responsive images with fallbacks:

```tsx
import OptimizedImage from '@/components/ui/OptimizedImage';
import { imageSizes, imageQuality } from '@/config/images';

<OptimizedImage
  src="/images/example.jpg"
  alt="Description of image"
  width={400}
  height={300}
  className="your-custom-classes"
  fallbackText="Custom fallback message"
/>;
```

## Future Improvements

This template is designed to be extended with features such as:

- Blog functionality
- E-commerce integration
- Contact forms
- Appointment scheduling
- Map integration
- Analytics tracking

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## License

This template is MIT licensed. Feel free to use it for personal or commercial projects.

# SEO Control

The website includes comprehensive SEO controls for indexing and crawling directives.

## SEO Components

### Using the SEO Component

The `<SEO />` component provides control over meta tags, titles, descriptions, and robots directives:

```tsx
import SEO from '@/components/SEO';

// In your page component:
<SEO
  title="Service Page"
  description="Professional services in your area"
  canonical="/services"
  noIndex={false}
  noFollow={false}
/>;
```

Properties accepted by the SEO component:

| Property           | Type    | Description                                       |
| ------------------ | ------- | ------------------------------------------------- |
| title              | string  | Page title (will be appended with site name)      |
| description        | string  | Page description                                  |
| canonical          | string  | Canonical URL                                     |
| noIndex            | boolean | Should search engines index this page?            |
| noFollow           | boolean | Should search engines follow links on this page?  |
| ogImage            | string  | Open Graph image URL                              |
| pageType           | string  | Open Graph page type ('website', 'article', etc.) |
| additionalMetaTags | array   | Additional meta tags to include                   |

### Using the PageWrapper Component

For even easier implementation, use the `<PageWrapper />` component which automatically detects if a page should be excluded from indexing based on its path:

```tsx
import PageWrapper from '@/components/PageWrapper';

// In your page component:
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

## Automatic noindex for Sensitive Pages

The following page types are automatically set to noindex, nofollow:

- Authentication pages (/login, /signup, etc.)
- Thank you and confirmation pages
- Admin and dashboard pages
- Preview pages
- API endpoints
- Error pages

You can customize this list in `src/config/seo.ts`.

## Sitemap Generation

The sitemap automatically excludes pages that are set to noindex, so you don't need to maintain a separate list of excluded pages.

To manually control which pages appear in the sitemap, you can:

1. Configure paths in `src/config/seo.ts`
2. Override on individual pages using the `noIndex` prop on the SEO component
# Deployment test
