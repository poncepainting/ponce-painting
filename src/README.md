# Website Template Source Code Structure

This document outlines the organization of the codebase to help navigate and expand the project.

## Directory Structure

### `/app`

Contains Next.js pages using the App Router pattern. Each subdirectory represents a route in the application.

### `/components`

Organized into logical categories:

- `/common` - Reusable utility components like Breadcrumb, OptimizedImage, Carousel
- `/feature` - Feature-specific components like HeroSection, FAQSection
- `/layout` - Layout components including header, footer
- `/seo` - SEO-related components like PageSEO, SchemaMarkup
- `/theme` - Theme-related components like ThemeProvider
- `/ui` - UI components organized by type:
  - `/buttons` - Button components
  - `/containers` - Container components
  - `/typography` - Text and heading components
  - `/cards` - Card components
  - `/animations` - Animation-related components

### `/config`

Configuration files for various aspects of the application.

### `/hooks`

Custom React hooks.

### `/lib`

Core functionality and utility libraries.

### `/types`

TypeScript type definitions.

### `/utils`

Utility functions.

## Import Conventions

For improved maintainability, imports should follow these patterns:

```tsx
// Import from component categories
import { Button, Section } from '@/components/ui';
import { PageSEO } from '@/components/seo';
import { OptimizedImage } from '@/components/common';

// For more specific imports from subcategories
import { Button } from '@/components/ui/buttons';
import { Section } from '@/components/ui/containers';
```

## Best Practices

1. Keep components focused on a single responsibility
2. Use the appropriate category when adding new components
3. Update index files when adding new components to a directory
4. Follow established naming conventions in each directory
