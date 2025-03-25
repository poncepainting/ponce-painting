import { Section } from '@/components/ui/containers';
import { SectionHeading } from '@/components/feature';
import { AnimationWrapper } from '@/components/ui/animations';
import { OptimizedImage } from '@/components/common';
import { imageQuality } from '@/config/images';

const AboutStory = () => {
  return (
    <Section bgColor="light.white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimationWrapper type="slide-right" delay={0.2}>
          <div className="text-center lg:text-left">
            <SectionHeading
              title="Our Story"
              subtitle="Bringing color and quality to Lake Charles since 2010"
              centered={false}
              useSubheading={true}
              subheadingText="OUR JOURNEY"
              accentColor="primary.600"
              titleClass="text-center lg:text-left"
              subtitleClass="text-center lg:text-left"
              className="mx-auto lg:mx-0"
            />

            <p className="text-gray-600 mb-4 text-center lg:text-left">
              When we opened our doors in 2010, we had one simple goal: to become Lake Charles' most
              trusted painting company by delivering exceptional quality on every project. As local
              residents ourselves, we understand the unique challenges our Gulf Coast climate
              presents to homes and businesses in Southwest Louisiana.
            </p>

            <p className="text-gray-600 mb-4 text-center lg:text-left">
              What began as a small family operation has grown into Lake Charles' premier painting
              service through word-of-mouth referrals from satisfied customers. Our success comes
              from our unwavering commitment to quality craftsmanship, meticulous attention to
              detail, and treating every property with the same care we would our own homes.
            </p>

            <p className="text-gray-600 text-center lg:text-left">
              Today, our team of skilled Lake Charles painting professionals continues to serve
              residential and commercial clients throughout Lake Charles, Sulphur, Iowa, Moss Bluff,
              Vinton, and Westlake. We remain deeply committed to our community, delivering
              beautiful, durable finishes that protect and enhance properties across Southwest
              Louisiana.
            </p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper type="slide-up" delay={0.2}>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <OptimizedImage
              src="/images/ponce-painting-about-us.jpg"
              alt="Ponce Painting professionals transforming Lake Charles homes and businesses with expert painting services"
              width={600}
              height={400}
              className="w-full h-auto"
              quality={imageQuality.high}
            />
          </div>
        </AnimationWrapper>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <AnimationWrapper type="fade" delay={0.4}>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-primary-800">Our Mission</h3>
            <p className="text-gray-600">
              To elevate Lake Charles homes and businesses through expert painting services that
              provide lasting beauty, protection, and value. We combine premium materials, skilled
              craftsmanship, and exceptional customer service to exceed expectations on every
              project, large or small.
            </p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper type="fade" delay={0.6}>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-primary-800">Our Vision</h3>
            <p className="text-gray-600">
              To be recognized as the most trusted and respected painting contractor in Southwest
              Louisiana, known for our uncompromising quality, integrity, and dedication to customer
              satisfaction. We aim to build lasting relationships with our clients while beautifying
              our Lake Charles community one property at a time.
            </p>
          </div>
        </AnimationWrapper>
      </div>
    </Section>
  );
};

export default AboutStory;
