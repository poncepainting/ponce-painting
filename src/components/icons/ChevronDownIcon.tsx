import React from 'react';
import { IconProps, baseSvgProps } from './types';

const ChevronDownIcon = (props: IconProps) => (
  <svg {...baseSvgProps(props)}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default ChevronDownIcon;
