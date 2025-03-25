import type { Metadata } from 'next';
import { Section } from '@/components/ui/containers';
import { generateServicesSchema } from '@/config/schema';
import PageSEO from '@/components/seo/PageSEO';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { SectionHeading } from '@/components/feature';
import { AnimationWrapper } from '@/components/ui/animations';
import { Button } from '@/components/ui/buttons';
import { HoverCard } from '@/components/ui/cards';
import { OptimizedImage, Breadcrumb } from '@/components/common';
import { Container } from '@/components/ui/containers';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: `Professional Painting Services Lake Charles | Residential & Commercial | ${siteConfig.name}`,
  description:
    'Transform your home or business with our professional painting services in Lake Charles. We offer interior, exterior, residential, and commercial painting with premium materials and expert techniques for flawless results.',
};

export default function ServicesPage() {
  // Generate schema for all services
  const servicesSchemas = generateServicesSchema();

  // Use string literals for SEO props to ensure they're the correct type
  const seoTitle =
    typeof metadata.title === 'string' ? metadata.title : `Services | ${siteConfig.name}`;
  const seoDescription =
    typeof metadata.description === 'string'
      ? metadata.description
      : 'Explore our range of professional services tailored to your needs.';

  return (
    <main>
      {/* SEO Component */}
      <PageSEO
        title={seoTitle}
        description={seoDescription}
        canonical="/services"
        schemaType="services"
      />

      {/* Schema markup specific to services page */}
      <SchemaMarkup schemas={servicesSchemas} />

      {/* Breadcrumb Navigation */}
      <Container>
        <Breadcrumb />
      </Container>

      {/* Services Hero Section */}
      <Section className="bg-primary-50 py-20">
        <AnimationWrapper type="fade">
          <SectionHeading
            title="Our Services"
            subtitle="Explore our comprehensive range of services designed to meet your needs"
            useSubheading={true}
            subheadingText="WHAT WE OFFER"
            accentColor="primary.600"
            titleClass="text-primary-800"
          />
        </AnimationWrapper>
      </Section>

      {/* Services Grid */}
      <Section name="services-list" bgColor="light.white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <AnimationWrapper key={service.id} type="scale" delay={index * 0.1}>
              <HoverCard className="h-full">
                <div className="h-48 overflow-hidden relative rounded-t-xl">
                  <OptimizedImage
                    src={service.imageUrl}
                    alt={`${service.title} - Professional ${service.title} services in Lake Charles, LA by ${siteConfig.name}`}
                    width={400}
                    height={300}
                    useFill={true}
                    className="transition-transform duration-500 hover:scale-105"
                    fallbackText={`Image for ${service.title}`}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 text-primary-800">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    href="/services"
                    variant="text"
                    rightIcon="chevron-right"
                    className="text-primary-600 font-medium"
                  >
                    Learn more
                  </Button>
                </div>
              </HoverCard>
            </AnimationWrapper>
          ))}
        </div>
      </Section>

      {/* Custom Services CTA */}
      <Section className="bg-gray-50">
        <AnimationWrapper type="fade">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Need a Custom Solution?"
              subtitle="Don't see what you're looking for? We offer custom services tailored to your specific needs."
              useSubheading={true}
              subheadingText="CUSTOM SERVICES"
              accentColor="primary.600"
            />

            <AnimationWrapper type="slide-up" delay={0.2} className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
            </AnimationWrapper>
          </div>
        </AnimationWrapper>
      </Section>

      {/* Service Process */}
      <Section bgColor="light.white">
        <AnimationWrapper type="fade">
          <SectionHeading
            title="Our Service Process"
            subtitle="How we work with you from start to finish"
            useSubheading={true}
            subheadingText="OUR PROCESS"
            accentColor="primary.600"
          />
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <AnimationWrapper type="slide-up" delay={0.1}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-800">Consultation</h3>
              <p className="text-gray-600">
                We start with a detailed consultation to understand your specific needs and goals.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper type="slide-up" delay={0.2}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-800">Implementation</h3>
              <p className="text-gray-600">
                Our experts implement the solution, ensuring quality and attention to detail at
                every step.
              </p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper type="slide-up" delay={0.3}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-800">Support</h3>
              <p className="text-gray-600">
                We provide ongoing support and follow-up to ensure your complete satisfaction.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </Section>
    </main>
  );
}
