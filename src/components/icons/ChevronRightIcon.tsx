import React from 'react';
import { IconProps, baseSvgProps } from './types';

const ChevronRightIcon = (props: IconProps) => (
  <svg {...baseSvgProps(props)}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default ChevronRightIcon;
