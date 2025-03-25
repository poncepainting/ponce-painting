'use client';

import { clientOnly } from '@/utils/clientImports';

const ServiceCarousel = clientOnly(() => import('./carousel/ServiceCarousel'));

export default ServiceCarousel;
