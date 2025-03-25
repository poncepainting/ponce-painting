'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from './ui/OptimizedImage';
import Container from './ui/Container';
import Button from './ui/Button';
import { navigationConfig, siteConfig } from '@/config/site';
import { imageSizes } from '@/config/images';
import { themeConfig } from '@/config/theme';
import { Icon } from '@/config/icons';
import { useWindowEvents } from '@/hooks';
import { animations } from '@/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { mainNav } = navigationConfig;

  // Use custom hook for window events
  const { isScrolled: windowScrolled } = useWindowEvents({
    scrollThreshold: 50,
    onEscape: () => setIsMenuOpen(false),
    onResize: width => {
      if (width >= parseInt(themeConfig.breakpoints.md) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    },
  });

  useEffect(() => {
    setIsScrolled(windowScrolled);
  }, [windowScrolled]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white border-b border-gray-200' : 'bg-white'
      }`}
    >
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.4rem] md:h-[5rem]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <OptimizedImage
                src="/images/ponce-painting-logo-blue.png"
                alt={`${siteConfig.name} Logo`}
                width={imageSizes.logo.width}
                height={imageSizes.logo.height}
                className="h-10 w-auto mr-2"
                priority={true}
                fallbackText="Ponce Painting Logo"
                showImageName={false}
              />
              <span className="text-lg md:text-xl font-bold hidden sm:inline-block">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNav.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className={`
                  px-3 py-2 text-base font-medium rounded-md transition-colors duration-200
                  ${
                    link.href === pathname
                      ? 'text-primary-700'
                      : 'text-gray-600 hover:text-primary-700'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}

            <Button
              href={`tel:${siteConfig.contact.phone}`}
              variant="primary"
              size="sm"
              leftIcon="phone"
            >
              Call Us
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open menu</span>
              <Icon name={isMenuOpen ? 'x' : 'menu'} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-x-0 top-16 z-40 overflow-hidden bg-white border-t border-gray-200"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={animations.menu}
          >
            <motion.nav
              className="px-4 pt-4 pb-8"
              variants={animations.container}
              initial="hidden"
              animate="visible"
            >
              {mainNav.map(link => (
                <motion.div key={link.label} variants={animations.item}>
                  <Link
                    href={link.href}
                    className="block py-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 transition-colors duration-200 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={animations.item}
                className="pt-4 pb-3 border-t border-gray-200 mt-4"
              >
                <Button
                  href={`tel:${siteConfig.contact.phone}`}
                  onClick={() => setIsMenuOpen(false)}
                  variant="primary"
                  size="lg"
                  leftIcon="phone"
                  fullWidth
                >
                  Call Us Now
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
