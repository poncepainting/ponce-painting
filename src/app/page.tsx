import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/containers';
import { Button } from '@/components/ui/buttons';
import { InteractiveButton } from '@/components/ui/buttons';
import PageSEO from '@/components/seo/PageSEO';
import {
  ServiceCarousel,
  TestimonialCarousel,
  HomeFAQSection,
  HeroSection,
  SectionHeading,
} from '@/components/feature';
import { HeaderAccent } from '@/components/ui/typography';
import { AnimationWrapper } from '@/components/ui/animations';
import { HoverCard } from '@/components/ui/cards';
import { OptimizedImage } from '@/components/common';
import { imageSizes, imageQuality, preloadImages } from '@/config/images';
import { Icon } from '@/config/icons';
import { ctaConfig } from '@/config/site';
import { Suspense } from 'react';
import React from 'react';

// Lazy load components that are not needed for initial render or below the fold
const LazyServiceCarousel = () => {
  const ServiceCarouselComponent = React.lazy(
    () => import('@/components/carousel/ServiceCarousel')
  );
  return (
    <Suspense fallback={<div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
      <ServiceCarouselComponent />
    </Suspense>
  );
};

const LazyTestimonialCarousel = () => {
  const TestimonialCarouselComponent = React.lazy(
    () => import('@/components/carousel/TestimonialCarousel')
  );
  return (
    <Suspense fallback={<div className="w-full h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
      <TestimonialCarouselComponent autoplay={true} />
    </Suspense>
  );
};

export default function Home() {
  return (
    <>
      {/* SEO Component with Schema */}
      <PageSEO
        title="Lake Charles Professional Painting Services | Residential & Commercial | Ponce Painting"
        description="Elevate your property with Lake Charles' premier painting company. Trusted by homeowners and businesses since 2010 for flawless finishes and exceptional results."
        canonical="/"
        ogImage={siteConfig.ogImage}
        schemaType="home"
        additionalMetaTags={[
          { name: 'geo.region', content: 'US-LA' },
          { name: 'geo.placename', content: 'Lake Charles' },
          { name: 'geo.position', content: '30.2266;-93.2174' },
          { name: 'ICBM', content: '30.2266, -93.2174' },
          { name: 'twitter:label1', content: 'Est. reading time' },
          { name: 'twitter:data1', content: '4 minutes' },
          { name: 'twitter:label2', content: 'Serving' },
          { name: 'twitter:data2', content: 'Lake Charles, LA and surrounding areas' },
        ]}
      />

      {/* Hero Section */}
      <HeroSection
        title="Bring Your Vision to Life with Expert Painting Services"
        subtitle="Lake Charles' trusted painting professionals delivering flawless residential and commercial results since 2010"
        imageUrl="/images/painter-in-front-of-home.jpg"
        imageAlt="Professional painter giving thumbs up in front of a freshly painted home"
        primaryCTA={{ text: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ text: 'Explore Our Services', href: '/services' }}
        height="tall"
        showQuoteForm={true}
        textAlignment="left"
        overlayOpacity={40}
      />

      {/* About Us Section */}
      <Section name="about-us" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <AnimationWrapper type="slide-up" className="order-2 md:order-1 mb-6 md:mb-0">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[450px] aspect-4/3 rounded-lg overflow-hidden shadow-md">
              <OptimizedImage
                src={preloadImages.aboutUsSection}
                alt="Ponce Painting team working on a residential project in Lake Charles"
                width={imageSizes.medium.width}
                height={imageSizes.medium.height}
                className="object-cover"
                useFill={true}
                priority={false}
                quality={imageQuality.high}
                sizes={imageSizes.medium.sizes}
              />
            </div>
          </AnimationWrapper>

          <AnimationWrapper type="slide-up" delay={0.2} className="order-1 md:order-2">
            <div className="space-y-4 text-center md:text-left">
              <HeaderAccent
                color="primary.600"
                useAsSubheading={true}
                text="LOCAL PAINTING EXPERTS"
                centered={false}
                className="mx-auto md:mx-0 block"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800">
                Trusted by Lake Charles Homeowners & Businesses Since 2010
              </h2>
              <p className="text-gray-600">
                For over a decade, Ponce Painting has delivered exceptional painting services
                throughout Lake Charles and Southwest Louisiana. Our team of skilled professionals
                combines industry-leading techniques with premium materials to transform homes and
                businesses with stunning results.
              </p>
              <p className="text-gray-600">
                What sets us apart is our unwavering commitment to quality, attention to detail, and
                customer satisfaction. We work closely with every client to understand their vision
                and bring it to life with precision and care.
              </p>
              <div className="pt-4 flex justify-center md:justify-start">
                <Button href="/about" variant="primary">
                  Learn About Our Process
                </Button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </Section>

      {/* Features Section */}
      <Section name="features">
        <AnimationWrapper type="slide-up">
          <SectionHeading
            title="The Ponce Painting Difference"
            subtitle="When you choose Ponce Painting, you're choosing a partner committed to excellence in every aspect of your painting project."
            useSubheading={true}
            subheadingText="WHY CLIENTS CHOOSE US"
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
                    <Icon name="check-circle" size={32} className="text-primary-600" />
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
            title="Professional Painting Services for Every Need"
            subtitle="From residential interiors to commercial exteriors, our comprehensive painting solutions are tailored to deliver exceptional results for any project."
            accentColor="primary.500"
            useSubheading={true}
            subheadingText="OUR EXPERT SERVICES"
            titleClass="text-primary-800"
            subtitleClass="text-gray-600"
          />
        </AnimationWrapper>

        <AnimationWrapper type="fade" delay={0.2}>
          <LazyServiceCarousel />
        </AnimationWrapper>

        <AnimationWrapper type="slide-up" delay={0.3} className="text-center mt-8">
          <InteractiveButton href="/services" variant="primary">
            Explore All Services
          </InteractiveButton>
        </AnimationWrapper>
      </Section>

      {/* Testimonials Section with Carousel */}
      <Section name="testimonials">
        <AnimationWrapper type="slide-up">
          <SectionHeading
            title="See What Our Satisfied Clients Say"
            subtitle="Our reputation is built on consistently exceeding client expectations. Here's what our Lake Charles customers have experienced working with Ponce Painting."
            useSubheading={true}
            subheadingText="CLIENT TESTIMONIALS"
            accentColor="primary.500"
            titleClass="text-primary-800"
            subtitleClass="text-gray-600"
          />
        </AnimationWrapper>

        <AnimationWrapper type="fade" delay={0.2}>
          <LazyTestimonialCarousel />
        </AnimationWrapper>
      </Section>

      {/* FAQ Section */}
      <Section name="faq" className="bg-gray-50">
        <AnimationWrapper type="slide-up">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Get answers to the most common questions about our painting services in Lake Charles, our process, and what makes Ponce Painting the trusted choice for Southwest Louisiana homes and businesses."
            useSubheading={true}
            subheadingText="YOUR QUESTIONS ANSWERED"
            accentColor="primary.600"
            titleClass="text-primary-800"
            subtitleClass="text-gray-600"
          />
        </AnimationWrapper>

        <AnimationWrapper type="fade" delay={0.2}>
          <HomeFAQSection
            maxItems={6}
            showCategories={true}
            categories={['General', 'Residential', 'Process', 'Pricing']}
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
            subheadingText="SCHEDULE YOUR CONSULTATION"
            onDarkBackground={true}
          />
        </AnimationWrapper>

        <AnimationWrapper type="scale" delay={0.2} className="text-center">
          <Button
            href={ctaConfig.primary.buttonLink}
            variant="outline"
            size="lg"
            className="bg-white text-primary-600 border-white hover:bg-gray-50"
          >
            {ctaConfig.primary.buttonText}
          </Button>
        </AnimationWrapper>
      </Section>
    </>
  );
}
