'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

/**
 * Loads a component only on the client side
 * Use this for components that rely on browser APIs
 * or aren't needed for the initial render
 */
export const clientOnly = <T>(importFn: () => Promise<{ default: ComponentType<T> }>) =>
  dynamic(importFn, { ssr: false });
