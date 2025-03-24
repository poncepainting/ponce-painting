'use client';

import { motion, useInView, Variant } from 'framer-motion';
import { useRef } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  type?: 'fade' | 'slide-up' | 'slide-right' | 'scale' | 'none';
  margin?: string;
}

/**
 * A wrapper component that adds subtle animations to elements as they enter the viewport
 */
const AnimationWrapper = ({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className = '',
  variants,
  type = 'fade',
  margin = '-100px 0px',
}: AnimationWrapperProps) => {
  const ref = useRef(null);
  // @ts-expect-error - Framer Motion types are not fully compatible with React 18
  const isInView = useInView(ref, { once, margin });

  // Predefined animation variants
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  // Select the appropriate variant based on type
  const selectedVariants = variants || (
    type === 'fade' ? fadeVariants :
    type === 'slide-up' ? slideUpVariants :
    type === 'slide-right' ? slideRightVariants :
    type === 'scale' ? scaleVariants :
    { hidden: {}, visible: {} } // 'none' case
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectedVariants}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper; 