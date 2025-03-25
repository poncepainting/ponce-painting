'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils';
import { siteConfig } from '@/config/site';
import { navigationConfig } from '@/config/navigation';
import { OptimizedImage } from '@/components/common';
import { Container } from '@/components/ui/containers';
import { Button } from '@/components/ui/buttons';
import { Icon } from '@/components/icons';

// Header component with responsive mobile menu
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <OptimizedImage
              src="/images/logo.svg"
              alt={siteConfig.name}
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationConfig.mainNav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium',
                  pathname === item.href && 'text-primary-600 font-semibold'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href={`tel:${siteConfig.contact.phone}`} variant="primary" className="ml-2">
              Call Us
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col space-y-4 pt-2 pb-3">
            {navigationConfig.mainNav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200',
                  pathname === item.href && 'text-primary-600 bg-gray-50 font-medium'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button
                href={`tel:${siteConfig.contact.phone}`}
                variant="primary"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
