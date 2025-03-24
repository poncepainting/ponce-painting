'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { shouldExcludeFromIndexing } from '@/config/seo';
import SEO, { SEOProps } from '@/components/SEO';

interface PageWrapperProps {
  children: ReactNode;
  seo?: Partial<SEOProps>;
}

/**
 * PageWrapper component that automatically handles SEO settings based on the current path
 *
 * Usage:
 * ```tsx
 * <PageWrapper seo={{ title: 'My Page Title', description: 'My page description' }}>
 *   <div>Page content</div>
 * </PageWrapper>
 * ```
 */
const PageWrapper = ({ children, seo = {} }: PageWrapperProps) => {
  const pathname = usePathname();
  const shouldNoIndex = seo.noIndex ?? shouldExcludeFromIndexing(pathname);
  const shouldNoFollow = seo.noFollow ?? shouldExcludeFromIndexing(pathname);

  // Default canonical to current path if not provided
  const canonical = seo.canonical || pathname;

  return (
    <>
      <SEO {...seo} canonical={canonical} noIndex={shouldNoIndex} noFollow={shouldNoFollow} />
      {children}
    </>
  );
};

export default PageWrapper;
