import { clientOnly } from '@/utils/dynamicImports';

const ServiceCarousel = clientOnly(() => import('./feature/ServiceCarousel'));

export default ServiceCarousel;
