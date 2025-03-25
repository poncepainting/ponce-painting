'use client';

import React from 'react';
import { Button } from '@/components/ui/buttons';
import { InteractiveButtonProps } from '@/types/buttons';

/**
 * A Button with hover/press animation effects
 */
const InteractiveButton: React.FC<InteractiveButtonProps> = ({ className = '', ...props }) => {
  // Only add animation classes to avoid interfering with button styling
  const animationClasses = 'hover:scale-[1.02] active:scale-[0.98] transform';
  const combinedClassName = `${animationClasses} ${className}`.trim();

  return <Button className={combinedClassName} {...props} />;
};

export default InteractiveButton;
