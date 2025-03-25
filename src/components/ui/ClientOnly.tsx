'use client';

import { useState, useEffect, ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * A wrapper component that ensures its children are only rendered on the client side
 * Useful for components that rely on browser APIs or window/document objects
 *
 * Usage example:
 * <ClientOnly>
 *   <ComponentThatUsesWindowObject />
 * </ClientOnly>
 */
const ClientOnly = ({ children, fallback = null }: ClientOnlyProps) => {
  // State to track if we're on client side
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true on client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return fallback or nothing on server-side
  if (!isMounted) {
    return fallback;
  }

  // Return children on client-side
  return <>{children}</>;
};

export default ClientOnly;
