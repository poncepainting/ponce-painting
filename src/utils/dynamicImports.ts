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
 * Loads a component only on the client side
 * Use this for components that rely on browser APIs
 * or aren't needed for the initial render
 *
 * IMPORTANT: This must only be used in client components
 * marked with 'use client' directive
 */
export const clientOnly = <T>(importFn: () => Promise<{ default: ComponentType<T> }>) =>
  dynamic(importFn, { ssr: false });

/**
 * Loads a component with SSR enabled
 * But defers hydration until after the page is interactive
 */
export const deferredSSR = <T>(importFn: () => Promise<{ default: ComponentType<T> }>) =>
  dynamic(importFn, {
    ssr: true,
    loading: () => null,
  });
