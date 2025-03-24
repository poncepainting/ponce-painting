'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * Adds a subtle fade-in transition when navigating between pages
 */
const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3,
      }}
      className={`bg-white ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
