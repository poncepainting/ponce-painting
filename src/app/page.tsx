import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Icon } from '@/config/icons';
import { imageSizes, imageQuality } from '@/config/images';
import { siteConfig, ctaConfig } from '@/config/site';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import InteractiveButton from '@/components/ui/InteractiveButton';
import PageSEO from '@/components/PageSEO';
import ServiceCarousel from '@/components/ServiceCarousel';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SectionHeading from '@/components/SectionHeading';
import HeaderAccent from '@/components/ui/HeaderAccent';
import HomeFAQSection from '@/components/HomeFAQSection';
import HeroSection from '@/components/HeroSection';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import HoverCard from '@/components/ui/HoverCard';

export default function Home() {
  return (
    <>
      {/* SEO Component with Schema */}
      <PageSEO
        title="Home"
        description={siteConfig.description}
        canonical="/"
        ogImage={siteConfig.defaultMetadata.ogImage}
        schemaType="home"
      />

      {/* Hero Section */}
      <HeroSection
        title={siteConfig.name}
        subtitle={siteConfig.description}
        imageUrl="/images/hero/hero-image.jpg"
        imageAlt="Hero image showing business environment"
        primaryCTA={{ text: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ text: 'Our Services', href: '/services' }}
        height="tall"
        showQuoteForm={true}
        textAlignment="left"
      />

      {/* Features Section */}
      <Section name="features">
        <AnimationWrapper type="slide-up">
          <SectionHeading
            title="Why Choose Us"
            subtitle="We're dedicated to providing exceptional service and value to our customers. Here's what sets us apart from the competition."
            useSubheading={true}
            subheadingText="FEATURES"
            accentColor="primary.600"
            titleClass="text-primary-800"
            subtitleClass="text-gray-600"
          />
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {siteConfig.features.map((feature, index) => (
            <AnimationWrapper key={index} type="scale" delay={index * 0.15}>
              <HoverCard className="h-full">
                <div className="flex flex-col items-center text-center p-6 border border-primary-100 rounded-xl h-full bg-white">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </HoverCard>
            </AnimationWrapper>
          ))}
        </div>
      </Section>

      {/* Services Preview with Carousel */}
      <Section name="services" className="bg-gray-50">
        <AnimationWrapper type="slide-up">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a comprehensive range of services designed to meet your needs. Swipe or click to navigate through our offerings."
            accentColor="primary.500"
            useSubheading={true}
            subheadingText="WHAT WE OFFER"
            titleClass="text-primary-800"
            subtitleClass="text-gray-600"
          />
        </AnimationWrapper>

        <AnimationWrapper type="fade" delay={0.2}>
          <ServiceCarousel />
        </AnimationWrapper>

        <AnimationWrapper type="slide-up" delay={0.3} className="text-center mt-8">
          <InteractiveButton href="/services" variant="primary">
            View All Services
          </InteractiveButton>
        </AnimationWrapper>
      </Section>

      {/* Testimonials Section with Carousel */}
      <Section name="testimonials">
        <AnimationWrapper type="slide-up">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our clients have to say about our services."
            useSubheading={true}
            subheadingText="TESTIMONIALS"
            accentColor="primary.500"
            titleClass="text-primary-800"
            subtitleClass="text-gray-600"
          />
        </AnimationWrapper>

        <AnimationWrapper type="fade" delay={0.2}>
          <TestimonialCarousel autoplay={true} />
        </AnimationWrapper>
      </Section>

      {/* FAQ Section */}
      <Section name="faq" className="bg-gray-50">
        <AnimationWrapper type="slide-up">
          <SectionHeading
            title="Common Questions"
            subtitle="Quick answers to the questions we hear most often"
            useSubheading={true}
            subheadingText="FAQs"
            accentColor="primary.600"
            titleClass="text-primary-800"
            subtitleClass="text-primary-600"
          />
        </AnimationWrapper>

        <AnimationWrapper type="fade" delay={0.2}>
          <HomeFAQSection
            maxItems={6}
            showCategories={true}
            categories={['General', 'Services', 'Pricing']}
            showAllOption={true}
          />
        </AnimationWrapper>
      </Section>

      {/* Call to Action */}
      <Section name="cta" className="bg-dark-primary text-white">
        <AnimationWrapper type="slide-up">
          <SectionHeading
            title={ctaConfig.primary.title}
            subtitle={ctaConfig.primary.description}
            accentColor="primary.200"
            useSubheading={true}
            subheadingText="GET STARTED"
            onDarkBackground={true}
          />
        </AnimationWrapper>

        <AnimationWrapper type="scale" delay={0.2} className="text-center">
          <Button
            href={ctaConfig.primary.buttonLink}
            variant="primary"
            size="lg"
            className="bg-white text-primary-600 border border-white hover:bg-gray-50 rounded-full !px-8 !py-4"
          >
            {ctaConfig.primary.buttonText}
          </Button>
        </AnimationWrapper>
      </Section>
    </>
  );
}
