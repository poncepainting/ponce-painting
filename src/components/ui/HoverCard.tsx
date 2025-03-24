'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

/**
 * An enhanced card component with subtle hover animations
 */
const HoverCard = ({ 
  children, 
  className = '',
  href,
  onClick
}: HoverCardProps) => {
  const variants = {
    initial: { 
      y: 0, 
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    hover: { 
      y: -6, 
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
  };

  const content = (
    <motion.div
      className={`rounded-xl overflow-hidden transition-colors ${className}`}
      initial="initial"
      whileHover="hover"
      variants={variants}
      transition={{ 
        type: 'tween',
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0] // Cubic bezier curve for Apple-like smoothness
      }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button 
        className="w-full text-left bg-transparent border-0 p-0 m-0"
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  return content;
};

export default HoverCard; 