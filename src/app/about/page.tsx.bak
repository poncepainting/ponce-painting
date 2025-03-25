import { siteConfig } from '@/config/site';
import Section from '@/components/ui/Section';
import { generatePageSchema } from '@/config/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import PageSEO from '@/components/PageSEO';
import SectionHeading from '@/components/SectionHeading';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import HoverCard from '@/components/ui/HoverCard';
import { Icon } from '@/components/icons';
import Button from '@/components/ui/Button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { imageSizes, imageQuality } from '@/config/images';
import type { IconName } from '@/components/icons/types';

export const metadata = {
  title: `Lake Charles Professional Painters | Our Story Since 2010 | ${siteConfig.name}`,
  description:
    "Meet Ponce Painting's expert team of professional painters serving Lake Charles since 2010. Learn about our mission, values, and commitment to exceptional quality and customer satisfaction in every residential and commercial painting project.",
};

export default function AboutPage() {
  // Generate about page schema
  const aboutSchemas = generatePageSchema('about');

  // Company values data
  const companyValues = [
    {
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do, setting high standards and consistently exceeding expectations.',
      icon: 'star' as IconName,
    },
    {
      title: 'Integrity',
      description:
        'We conduct our business with honesty, transparency, and ethical practices that build trust with our customers.',
      icon: 'check-circle' as IconName,
    },
    {
      title: 'Customer Focus',
      description:
        "We prioritize our customers' needs and satisfaction, ensuring a positive experience from start to finish.",
      icon: 'users' as IconName,
    },
  ];

  // Use string literals for SEO props to ensure they're the correct type
  const seoTitle =
    typeof metadata.title === 'string' ? metadata.title : `About Us | ${siteConfig.name}`;
  const seoDescription =
    typeof metadata.description === 'string'
      ? metadata.description
      : "Learn about Ponce Painting - Lake Charles' premier professional painting company serving residential and commercial clients since 2010.";

  return (
    <main>
      {/* SEO Component */}
      <PageSEO
        title={seoTitle}
        description={seoDescription}
        canonical="/about"
        schemaType="about"
        ogImage="/images/ponce-painting-about-us.jpg"
      />

      {/* Schema markup specific to about page */}
      <SchemaMarkup schemas={aboutSchemas} />

      {/* About Hero Section */}
      <Section className="bg-primary-50 py-20">
        <AnimationWrapper type="fade">
          <SectionHeading
            title={`About ${siteConfig.name}`}
            subtitle="Learn about our story, mission, and the team behind our success."
            useSubheading={true}
            subheadingText="OUR STORY"
            accentColor="primary.600"
            titleClass="text-primary-800"
          />
        </AnimationWrapper>
      </Section>

      {/* Our Story */}
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
                Our journey began with a simple mission: to provide exceptional painting services
                that transform spaces and exceed customer expectations. Over the years, we've built
                our reputation on quality craftsmanship, attention to detail, and professional
                service.
              </p>

              <p className="text-gray-600 text-center lg:text-left">
                Today, our team of skilled professionals continues to deliver outstanding results
                for homeowners and businesses across Lake Charles and surrounding areas. We take
                pride in our work and are committed to making every project a success.
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

      {/* Company Values */}
      <Section className="bg-gray-50">
        <AnimationWrapper type="fade">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
            useSubheading={true}
            subheadingText="VALUES"
            accentColor="primary.600"
          />
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {companyValues.map((value, index) => (
            <AnimationWrapper key={value.title} type="scale" delay={index * 0.15}>
              <HoverCard className="h-full">
                <div className="flex flex-col items-center p-6 text-center h-full">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={value.icon} size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </HoverCard>
            </AnimationWrapper>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section bgColor="light.white">
        <AnimationWrapper type="fade">
          <SectionHeading
            title="Our Team"
            subtitle="Meet the people who make it all happen"
            useSubheading={true}
            subheadingText="OUR TEAM"
            accentColor="primary.600"
          />
        </AnimationWrapper>

        <AnimationWrapper type="slide-up" delay={0.2}>
          <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
            <p className="text-gray-600 mb-6">
              Introduce your team members here. Highlight their expertise, experience, and what they
              bring to your business. This section is perfect for showcasing the people behind your
              brand.
            </p>

            <Button href="/team" variant="primary" size="lg">
              Meet Our Team
            </Button>
          </div>
        </AnimationWrapper>
      </Section>
    </main>
  );
}
