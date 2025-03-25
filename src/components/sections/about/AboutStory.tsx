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
              subtitle="How we started and where we're going"
              centered={false}
              useSubheading={true}
              subheadingText="OUR JOURNEY"
              accentColor="primary.600"
              titleClass="text-center lg:text-left"
              subtitleClass="text-center lg:text-left"
              className="mx-auto lg:mx-0"
            />

            <p className="text-gray-600 mb-4 text-center lg:text-left">
              Founded in 2010, Ponce Painting has established itself as Lake Charles' premier
              professional painting company, serving both residential and commercial clients
              throughout the region.
            </p>

            <p className="text-gray-600 mb-4 text-center lg:text-left">
              Our journey began with a simple mission: to provide exceptional painting services that
              transform spaces and exceed customer expectations. Over the years, we've built our
              reputation on quality craftsmanship, attention to detail, and professional service.
            </p>

            <p className="text-gray-600 text-center lg:text-left">
              Today, our team of skilled professionals continues to deliver outstanding results for
              homeowners and businesses across Lake Charles and surrounding areas. We take pride in
              our work and are committed to making every project a success.
            </p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper type="slide-up" delay={0.2}>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <OptimizedImage
              src="/images/ponce-painting-about-us.jpg"
              alt="Ponce Painting professionals at work - Professional painting team serving Lake Charles"
              width={600}
              height={400}
              className="w-full h-auto"
              quality={imageQuality.high}
            />
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mt-8">
            <h3 className="text-xl font-bold mb-4 text-primary-800">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To deliver exceptional painting services that enhance the beauty, value, and
              protection of our clients' properties through skilled craftsmanship and superior
              customer service.
            </p>

            <h3 className="text-xl font-bold mb-4 text-primary-800">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted painting company in Lake Charles, known for our commitment to
              quality, integrity, and customer satisfaction in every project we undertake.
            </p>
          </div>
        </AnimationWrapper>
      </div>
    </Section>
  );
};

export default AboutStory;
