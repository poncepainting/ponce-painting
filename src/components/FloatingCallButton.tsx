'use client';

import { useState, useEffect } from 'react';
import Button from './ui/Button';
import { siteConfig } from '@/config/site';

interface FloatingCallButtonProps {
  scrollThreshold?: number;
  showOnMobileOnly?: boolean;
}

const FloatingCallButton = ({
  scrollThreshold = 300,
  showOnMobileOnly = true,
}: FloatingCallButtonProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolled down past the threshold
      setVisible(window.scrollY > scrollThreshold);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  // Create the base class for the button
  const baseClass = `fixed bottom-6 right-6 z-50 shadow-lg transition-all duration-300 ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  } ${showOnMobileOnly ? 'md:hidden' : ''}`;

  return (
    <Button
      href={`tel:${siteConfig.contact.phone}`}
      icon="phone"
      iconOnly
      variant="primary"
      size="lg"
      className={baseClass}
      aria-label="Call us now"
    />
  );
};

export default FloatingCallButton; 