/**
 * Navigation configuration settings
 * Centralized management of navigation-related constants
 */

// Navigation link type definition
export type NavLink = {
  label: string;
  href: string;
};

// Footer navigation section type definition
export type FooterNavSection = {
  title: string;
  links: NavLink[];
};

// Navigation configuration
export const navigationConfig = {
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ] as NavLink[],
  footerNav: [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Residential Painting', href: '/services#residential' },
        { label: 'Commercial Painting', href: '/services#commercial' },
        { label: 'Specialty Finishes', href: '/services#specialty' },
        { label: 'All Services', href: '/services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Sitemap', href: '/sitemap.xml' },
      ],
    },
  ] as FooterNavSection[],
};
