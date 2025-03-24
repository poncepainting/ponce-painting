import Container from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import Section from '@/components/ui/Section';
import { generatePageSchema } from '@/config/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import PageSEO from '@/components/PageSEO';
import SectionHeading from '@/components/SectionHeading';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import HoverCard from '@/components/ui/HoverCard';
import { Icon } from '@/config/icons';
import Button from '@/components/ui/Button';

export const metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: 'Learn more about our business and our story.',
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
      icon: 'check-circle',
    },
    {
      title: 'Integrity',
      description:
        'We conduct our business with honesty, transparency, and ethical practices that build trust with our customers.',
      icon: 'users',
    },
    {
      title: 'Innovation',
      description:
        'We continuously seek new ideas and approaches to improve our services and deliver better solutions.',
      icon: 'plus',
    },
  ];

  return (
    <main>
      {/* SEO Component */}
      <PageSEO
        title={metadata.title}
        description={metadata.description}
        canonical="/about"
        schemaType="about"
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
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="How we started and where we're going"
                centered={false}
                useSubheading={false}
                accentColor="primary.500"
              />

              <p className="text-gray-600 mb-4">
                This is a placeholder for your About page. Customize this page with your business's
                story, mission, vision, and team information.
              </p>

              <p className="text-gray-600 mb-4">
                Add your business's story here. Talk about how you started, your journey, and what
                makes your business unique. Share the challenges you've overcome and the milestones
                you've achieved.
              </p>

              <p className="text-gray-600">
                Highlight your expertise, experience, and what sets you apart from competitors. Tell
                your story in a way that connects with your audience and builds trust.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper type="slide-up" delay={0.2}>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 h-full">
              <h3 className="text-xl font-bold mb-4 text-primary-800">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                Describe your mission statement and core values here. What drives your business and
                what principles guide your operations?
              </p>

              <h3 className="text-xl font-bold mb-4 text-primary-800">Our Vision</h3>
              <p className="text-gray-600">
                Share your vision for the future. Where do you see your business going and what
                impact do you hope to make in your industry and community?
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

            <Button href="/team" variant="primary" size="lg" className="rounded-full">
              Meet Our Team
            </Button>
          </div>
        </AnimationWrapper>
      </Section>
    </main>
  );
}
