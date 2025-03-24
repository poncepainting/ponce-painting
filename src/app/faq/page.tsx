import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { faqItems, faqCategories } from '@/config/faq';
import FAQSection from '@/components/FAQSection';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/SectionHeading';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import PageSEO from '@/components/PageSEO';

export const metadata: Metadata = {
  title: 'FAQ | Your Business Name',
  description: 'Frequently asked questions about our services, process, and pricing.',
  openGraph: {
    title: 'FAQ | Your Business Name',
    description: 'Frequently asked questions about our services, process, and pricing.',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <main>
      {/* SEO Component */}
      <PageSEO 
        title="FAQ | Your Business Name"
        description="Frequently asked questions about our services, process, and pricing."
        canonical="/faq"
        schemaType="other"
      />

      {/* Hero Section */}
      <Section className="bg-primary-50 py-20">
        <AnimationWrapper type="fade">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services, process, and more."
            useSubheading={true}
            subheadingText="YOUR QUESTIONS ANSWERED"
            accentColor="primary.600"
            titleClass="text-primary-800"
            centered
          />
        </AnimationWrapper>
      </Section>

      {/* FAQ Section */}
      <Section className="py-12 md:py-20 bg-white">
        <Container>
          <AnimationWrapper type="fade">
            <FAQSection
              items={faqItems}
              categories={faqCategories}
              title="How can we help you?"
              description="Browse through these topics to find the information you need. If you still have questions, feel free to contact us directly."
              className="mb-16"
            />
          </AnimationWrapper>

          {/* Contact CTA */}
          <AnimationWrapper type="slide-up" delay={0.2}>
            <div className="text-center mt-12 p-8 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Still have questions?
              </h3>
              <p className="text-lg text-primary-600 max-w-2xl mx-auto mb-8">
                We are here to help. Contact our team for more information about our services or to schedule a consultation.
              </p>
              <Button 
                href="/contact" 
                variant="primary"
                size="lg"
                className="!px-8"
              >
                Contact Us
              </Button>
            </div>
          </AnimationWrapper>
        </Container>
      </Section>
    </main>
  );
}