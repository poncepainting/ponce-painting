'use client';

import { cn } from '@/utils';

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  onDarkBackground?: boolean;
  variant?: 'default' | 'custom';
  activeClassName?: string;
  inactiveClassName?: string;
}

/**
 * Reusable TabButton component used for tab navigation in various components
 */
const TabButton = ({
  isActive,
  onClick,
  children,
  onDarkBackground = false,
  variant = 'default',
  activeClassName,
  inactiveClassName,
}: TabButtonProps) => {
  // Default colors based on background context
  const defaultColors = onDarkBackground
    ? {
        active: 'bg-white text-gray-800',
        inactive: 'bg-dark-gray/50 text-white hover:bg-dark-gray/70',
      }
    : {
        active: 'bg-primary-600 text-white',
        inactive: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
      };

  // Choose colors based on variant and custom classes
  const colors = {
    active: activeClassName || defaultColors.active,
    inactive: inactiveClassName || defaultColors.inactive,
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-colors',
        isActive ? colors.active : colors.inactive
      )}
      type="button"
      aria-pressed={isActive}
    >
      {children}
    </button>
  );
};

export default TabButton;
