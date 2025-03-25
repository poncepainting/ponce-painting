import { clientOnly } from '@/utils/dynamicImports';

const TestimonialCarousel = clientOnly(() => import('./carousel/TestimonialCarousel'));

export default TestimonialCarousel;
