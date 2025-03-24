'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/config/icons';

interface ScrollToTopButtonProps {
  threshold?: number;
  size?: 'sm' | 'md' | 'lg';
  position?: 'bottom-right' | 'bottom-left';
}

/**
 * A button that appears when scrolling down and scrolls back to top when clicked
 */
const ScrollToTopButton = ({
  threshold = 300,
  size = 'md',
  position = 'bottom-right',
}: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Size variations
  const sizeVariants = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-14 h-14 text-lg',
  };

  // Position variations
  const positionVariants = {
    'bottom-right': 'right-4 md:right-8 bottom-24 md:bottom-8',
    'bottom-left': 'left-4 md:left-8 bottom-24 md:bottom-8',
  };

  // Check scroll position to toggle visibility
  const checkScrollPosition = useCallback(() => {
    setIsVisible(window.scrollY > threshold);
  }, [threshold]);

  // Scroll back to top with smooth animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, [checkScrollPosition]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`fixed ${positionVariants[position]} ${sizeVariants[size]} rounded-full bg-primary-600 text-white shadow-lg z-50 flex items-center justify-center`}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <Icon name="chevron-up" size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton; 