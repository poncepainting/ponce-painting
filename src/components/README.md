# Components Directory Structure

This directory contains all React components used throughout the application, organized by function.

## Directory Structure

- `/common` - Reusable utility components that can be used across the application

  - Breadcrumb
  - OptimizedImage
  - Carousel
  - PageWrapper
  - etc.

- `/feature` - Feature-specific components

  - HeroSection
  - FAQSection
  - ServiceCarousel
  - etc.

- `/layout` - Layout components including header and footer

  - `/header` - Header components
  - `/footer` - Footer components

- `/seo` - SEO-related components

  - SEO
  - PageSEO
  - SchemaMarkup
  - etc.

- `/theme` - Theme-related components

  - ThemeProvider

- `/ui` - UI components organized by type
  - `/buttons` - Button components
  - `/containers` - Container components
  - `/typography` - Text and heading components
  - `/cards` - Card components
  - `/animations` - Animation components

## Import Conventions

To use components in your pages or other components, follow these import patterns:

```tsx
// Import from component categories (preferred)
import { Button, Section } from '@/components/ui';
import { PageSEO } from '@/components/seo';
import { OptimizedImage } from '@/components/common';
import { SectionHeading } from '@/components/feature';

// For specific subcategories
import { Button } from '@/components/ui/buttons';
import { Section } from '@/components/ui/containers';
```

## Error Troubleshooting

If you encounter import errors with components, ensure you're using the correct paths. After the recent reorganization, older paths like `@/components/ui/Button` need to be updated to `@/components/ui/buttons/Button` or preferably `import { Button } from '@/components/ui/buttons'` or `import { Button } from '@/components/ui'`.

## Adding New Components

When adding new components:

1. Place them in the appropriate directory based on their function
2. Update the corresponding index.ts/tsx file to export the component
3. Follow the existing naming and coding conventions in that directory
4. Add proper documentation and typing
