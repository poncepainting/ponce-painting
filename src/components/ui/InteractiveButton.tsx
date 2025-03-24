'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { InteractiveButtonProps } from '@/types/buttons';
import { buttonConfig } from '@/config/buttons';

/**
 * An enhanced button component that wraps the standard Button with subtle animations
 */
const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  target,
  rel,
  fullWidth = false,
  leftIcon,
  rightIcon,
  icon,
  isLoading = false,
  iconClassName,
  'aria-label': ariaLabel,
  ...props
}) => {
  // Animation variants with subtle scale effects
  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  // Only apply animations if not disabled and not loading
  const isInteractive = !disabled && !isLoading;

  // Create a custom wrapper className to avoid layout issues
  const wrapperClassName = fullWidth ? 'block w-full' : 'inline-block';

  // Calculate the real button size without affecting its appearance
  const sizeStyles = (icon && !children) ? buttonConfig.iconSizes[size] : buttonConfig.sizes[size];

  return (
    <motion.div
      className={wrapperClassName}
      whileHover={isInteractive ? "hover" : undefined}
      whileTap={isInteractive ? "tap" : undefined}
      variants={buttonVariants}
    >
      <Button
        href={href}
        variant={variant}
        size={size}
        disabled={disabled}
        className={className}
        onClick={onClick}
        fullWidth={fullWidth}
        type={type}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        icon={icon}
        isLoading={isLoading}
        iconClassName={iconClassName}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default InteractiveButton; 