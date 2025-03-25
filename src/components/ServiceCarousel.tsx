'use client';

import { clientOnly } from '@/utils/dynamicImports';

const ServiceCarousel = clientOnly(() => import('./carousel/ServiceCarousel'));

export default ServiceCarousel;
