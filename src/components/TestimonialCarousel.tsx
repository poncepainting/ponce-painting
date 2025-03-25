import { clientOnly } from '@/utils/dynamicImports';

const TestimonialCarousel = clientOnly(() => import('./feature/TestimonialCarousel'));

export default TestimonialCarousel;
