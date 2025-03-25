import React from 'react';
import { IconProps, baseSvgProps } from './types';

const FacebookIcon: React.FC<IconProps> = props => {
  return (
    <svg {...baseSvgProps(props)}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
};

export default FacebookIcon;
