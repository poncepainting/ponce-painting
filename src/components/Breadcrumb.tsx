'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { Icon } from '@/config/icons';

interface BreadcrumbItem {
  label: string;
  path: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
  showSchema?: boolean;
}

/**
 * Breadcrumb component with structured data for SEO
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '', showSchema = true }) => {
  const pathname = usePathname();

  // Generate breadcrumb items automatically if not provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname);

  return (
    <>
      {/* Render breadcrumb schema for SEO */}
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: breadcrumbItems.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@id': `${siteConfig.url}${item.path}`,
                  name: item.label,
                },
              })),
            }),
          }}
        />
      )}

      {/* Render visual breadcrumbs */}
      <nav aria-label="Breadcrumb" className={`py-3 ${className}`}>
        <ol className="flex flex-wrap items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            // Check if this is the last item (current page)
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <React.Fragment key={item.path}>
                <li className={isLast ? 'text-primary-600 font-medium' : 'text-gray-500'}>
                  {isLast ? (
                    <span aria-current="page">{item.label}</span>
                  ) : (
                    <Link
                      href={item.path}
                      className="hover:text-primary-600 hover:underline transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>

                {/* Add separator unless it's the last item */}
                {!isLast && (
                  <li className="text-gray-400">
                    <Icon name="chevron-right" size={14} />
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

/**
 * Generate breadcrumb items from current path
 */
const generateBreadcrumbsFromPath = (pathname: string): BreadcrumbItem[] => {
  // Always start with home
  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

  // If we're on the home page, just return that
  if (pathname === '/') {
    return breadcrumbs;
  }

  // Split path into segments
  const segments = pathname.split('/').filter(Boolean);

  // Build up breadcrumb paths
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLastSegment = index === segments.length - 1;

    // Format segment for display (capitalize, replace hyphens)
    const formattedLabel = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    breadcrumbs.push({
      label: formattedLabel,
      path: currentPath,
      isCurrentPage: isLastSegment,
    });
  });

  return breadcrumbs;
};

export default Breadcrumb;
