import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

/**
 * Dynamically imports a component with customizable SSR options
 * This helps reduce the initial JavaScript bundle size
 */
export const dynamicImport = <T>(
  importFn: () => Promise<{ default: ComponentType<T> }>,
  ssr = false
) => dynamic(importFn, { ssr });

/**
 * Loads a component with SSR enabled
 * But defers hydration until after the page is interactive
 */
export const deferredSSR = <T>(importFn: () => Promise<{ default: ComponentType<T> }>) =>
  dynamic(importFn, {
    ssr: true,
    loading: () => null,
  });
