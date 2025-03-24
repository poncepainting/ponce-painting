'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

export interface SEOProps {
  /**
   * Page title - will be appended with site name if not containing the site name already
   */
  title?: string;
  /**
   * Page description
   */
  description?: string;
  /**
   * Canonical URL for the page
   */
  canonical?: string;
  /**
   * Should search engines index this page?
   */
  noIndex?: boolean;
  /**
   * Should search engines follow links on this page?
   */
  noFollow?: boolean;
  /**
   * Additional meta tags
   */
  additionalMetaTags?: Array<{ name: string; content: string }>;
  /**
   * Open Graph image URL
   */
  ogImage?: string;
  /**
   * Page type for Open Graph
   */
  pageType?: 'website' | 'article' | 'profile' | 'book';
}

/**
 * SEO component for managing meta tags within client components.
 * Note: For most pages, use the metadata export in the page.tsx instead.
 * This component is for dynamic metadata that needs client-side data.
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  noIndex = false,
  noFollow = false,
  additionalMetaTags = [],
  ogImage,
  pageType = 'website',
}) => {
  const pathname = usePathname();

  // Format title - append site name if not already included
  const formattedTitle = title
    ? title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.name}`
    : siteConfig.defaultMetadata.title;

  // Use provided description or fall back to default
  const metaDescription = description || siteConfig.defaultMetadata.description;

  // Build robots directive
  const robotsContent = `${noIndex ? 'noindex' : 'index'}, ${
    noFollow ? 'nofollow' : 'follow'
  }`;

  // Normalize URLs
  const formatUrl = (url: string) => {
    if (url.startsWith('http')) return url;
    return `${siteConfig.url}${url.startsWith('/') ? url : `/${url}`}`;
  };

  // Normalize canonical URL
  const fullCanonical = canonical 
    ? formatUrl(canonical) 
    : formatUrl(pathname);

  // Normalize OG image URL
  const ogImageUrl = ogImage 
    ? formatUrl(ogImage) 
    : siteConfig.defaultMetadata.ogImage 
      ? formatUrl(siteConfig.defaultMetadata.ogImage) 
      : undefined;

  // This injects metadata into the document head via React Hooks
  React.useEffect(() => {
    // Update the document title
    document.title = formattedTitle;
    
    // Helper function to set or update a meta tag
    const setMetaTag = (name: string, content: string, property = false) => {
      const attributeName = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attributeName}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attributeName, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };
    
    // Set description
    setMetaTag('description', metaDescription);
    
    // Set robots
    setMetaTag('robots', robotsContent);
    
    // Set canonical
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (canonicalElement) {
      canonicalElement.setAttribute('href', fullCanonical);
    } else if (fullCanonical) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      canonicalElement.setAttribute('href', fullCanonical);
      document.head.appendChild(canonicalElement);
    }
    
    // Set Open Graph tags
    setMetaTag('og:type', pageType, true);
    setMetaTag('og:title', formattedTitle, true);
    setMetaTag('og:description', metaDescription, true);
    setMetaTag('og:url', fullCanonical, true);
    if (ogImageUrl) setMetaTag('og:image', ogImageUrl, true);
    
    // Set Twitter tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', formattedTitle);
    setMetaTag('twitter:description', metaDescription);
    if (ogImageUrl) setMetaTag('twitter:image', ogImageUrl);
    
    // Set additional meta tags
    additionalMetaTags.forEach(({ name, content }) => {
      setMetaTag(name, content);
    });
    
    // No cleanup needed as we're setting global metadata
  }, [
    formattedTitle,
    metaDescription,
    robotsContent,
    fullCanonical,
    ogImageUrl,
    pageType,
    additionalMetaTags,
  ]);

  // This component doesn't render anything visible
  return null;
};

export default SEO; 