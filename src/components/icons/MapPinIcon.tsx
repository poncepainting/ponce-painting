import React from 'react';
import { IconProps, baseSvgProps } from './types';

const MapPinIcon = (props: IconProps) => (
  <svg {...baseSvgProps(props)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default MapPinIcon;
