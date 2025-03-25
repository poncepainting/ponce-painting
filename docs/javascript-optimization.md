# JavaScript Optimization Guide

This document outlines best practices for reducing unused JavaScript in our Next.js application.

## Implemented Optimizations

1. **Dynamic Imports**

   - Added utility functions in `src/utils/dynamicImports.ts` for optimized component loading.
   - Components like carousels now use `clientOnly()` to load only on the client side.

2. **Next.js Configuration**

   - Updated `next.config.mjs` with:
     - `removeConsole` in production to eliminate console statements
     - `swcMinify` for better minification
     - `modularizeImports` for tree-shaking icon libraries
     - Strict mode for preventing unnecessary renders

3. **Client-Only Components**
   - Created `ClientOnly.tsx` wrapper for components that rely on browser APIs
   - Prevents hydration errors and reduces server bundle size

## Best Practices for Development

### 1. Code Splitting

- **Component Level Splitting**:

  ```tsx
  // Instead of direct imports:
  import HeavyComponent from '@/components/HeavyComponent';

  // Use dynamic imports:
  import { clientOnly } from '@/utils';
  const HeavyComponent = clientOnly(() => import('@/components/HeavyComponent'));
  ```

- **Page Level Splitting**:
  - Use dynamic imports for page sections not visible on initial load
  - Consider route-based code splitting for complex pages

### 2. Dependency Management

- **Import Only What You Need**:

  ```tsx
  // AVOID:
  import * as Icons from 'lucide-react';

  // BETTER:
  import { Menu, X, ChevronDown } from 'lucide-react';
  ```

- **Use Tree-Shakable Libraries**
  - Prefer modern ES module compatible libraries
  - Check bundle size with tools like [bundlephobia](https://bundlephobia.com/)

### 3. Component Optimization

- **Lazy Loading for Off-Screen Content**:

  - Use IntersectionObserver for elements below the fold
  - Consider the `deferredSSR()` utility for SSR components that can wait for hydration

- **State Management**:
  - Keep state as local as possible
  - Consider using React Context selectively rather than globally

### 4. Performance Monitoring

- **Analyze Bundles**:

  ```bash
  # Generate stats about bundle
  ANALYZE=true npm run build
  ```

- **Use React DevTools Profiler** to identify expensive renders

### 5. Image Optimization

- Always use Next.js Image component with proper sizes
- Use WebP/AVIF formats (already configured)
- Lazy load images below the fold

### 6. Third-Party Scripts

- Use the `next/script` component with appropriate strategy:

  ```tsx
  import Script from 'next/script';

  <Script
    src="https://example.com/script.js"
    strategy="lazyOnload" // or afterInteractive
  />;
  ```

### 7. Tree-Shaking

- Use ES modules syntax
- Avoid side effects in modules
- Keep your dependency tree clean

## Measuring Impact

When implementing these optimizations, measure before and after with:

1. Lighthouse Performance score
2. Web Vitals (especially LCP, TTI, and TBT)
3. Bundle size analysis
4. Chrome DevTools Performance tab

## Resources

- [Next.js Documentation on Optimization](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Web.dev Guide to Performance](https://web.dev/fast/)
- [Reduce JavaScript Payloads](https://web.dev/reduce-javascript-payloads-with-code-splitting/)
