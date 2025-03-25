'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { Icon } from '@/components/icons';

interface BottomFloatingMenuProps {
  scrollThreshold?: number;
  hideOnDesktop?: boolean;
}

const BottomFloatingMenu = ({
  scrollThreshold = 300,
  hideOnDesktop = true,
}: BottomFloatingMenuProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the menu when scrolled down past the threshold
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

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Create the base class for the container
  const baseClass = `fixed bottom-0 left-0 w-full z-[100] transition-all duration-300 ${
    visible ? 'translate-y-0' : 'translate-y-full'
  } ${hideOnDesktop ? 'lg:hidden' : ''}`;

  return (
    <div className={baseClass}>
      <div className="flex items-center justify-between bg-white shadow-lg border-t border-gray-200">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex items-center text-primary-600 flex-grow py-4 px-6 justify-center"
          aria-label="Call for a quote"
        >
          <Icon name="phone" size={20} className="mr-3" />
          <span className="font-medium">Call for a Quote</span>
        </a>

        <div className="h-10 w-px bg-gray-300" aria-hidden="true" />

        <button
          onClick={handleScrollToTop}
          className="flex items-center justify-center text-primary-600 py-4 px-8 hover:bg-gray-50"
          aria-label="Scroll to top"
        >
          <Icon name="chevron-up" size={24} />
        </button>
      </div>
    </div>
  );
};

export default BottomFloatingMenu;
