import Container from '@/components/ui/Container';
import { Icon } from '@/config/icons';
import { siteConfig } from '@/config/site';
import Section from '@/components/ui/Section';
import { generatePageSchema } from '@/config/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import PageSEO from '@/components/PageSEO';
import { designSystem } from '@/config/theme';
import SectionHeading from '@/components/SectionHeading';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import HoverCard from '@/components/ui/HoverCard';
import Button from '@/components/ui/Button';

export const metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: 'Get in touch with our team for inquiries, quotes, or support.',
};

export default function ContactPage() {
  // Generate contact page schema
  const contactSchemas = generatePageSchema('contact');

  return (
    <main>
      {/* SEO Component */}
      <PageSEO
        title={metadata.title}
        description={metadata.description}
        canonical="/contact"
        schemaType="contact"
      />

      {/* Schema markup specific to contact page */}
      <SchemaMarkup schemas={contactSchemas} />

      {/* Contact Hero Section */}
      <Section className="bg-primary-50 py-20">
        <AnimationWrapper type="fade">
          <SectionHeading
            title="Contact Us"
            subtitle="We'd love to hear from you. Here's how you can reach us."
            useSubheading={true}
            subheadingText="GET IN TOUCH"
            accentColor="primary.600"
            titleClass="text-primary-800"
          />
        </AnimationWrapper>
      </Section>

      {/* Contact Information and Form */}
      <Section name="contact-details" bgColor="light.white" className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimationWrapper type="slide-up">
            <HoverCard className="h-full">
              <div className="p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-primary-800">Get In Touch</h2>

                <div className="space-y-6">
                  <AnimationWrapper type="scale" delay={0.1}>
                    <div className="flex items-start">
                      <div className="mr-4 text-primary-600">
                        <Icon name="map-pin" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-gray-600">{siteConfig.contact.address}</p>
                      </div>
                    </div>
                  </AnimationWrapper>

                  <AnimationWrapper type="scale" delay={0.2}>
                    <div className="flex items-start">
                      <div className="mr-4 text-primary-600">
                        <Icon name="phone" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600">
                          <a
                            href={`tel:${siteConfig.contact.phone}`}
                            className="hover:text-primary-600 transition-colors"
                          >
                            {siteConfig.contact.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                  </AnimationWrapper>

                  <AnimationWrapper type="scale" delay={0.3}>
                    <div className="flex items-start">
                      <div className="mr-4 text-primary-600">
                        <Icon name="mail" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a
                            href={`mailto:${siteConfig.contact.email}`}
                            className="hover:text-primary-600 transition-colors"
                          >
                            {siteConfig.contact.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </AnimationWrapper>

                  <AnimationWrapper type="fade" delay={0.4}>
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="font-semibold mb-4">Business Hours</h3>
                      <ul className="space-y-2">
                        {Object.entries(siteConfig.businessHours).map(([day, hours]) => (
                          <li key={day} className="flex justify-between">
                            <span className="text-gray-600 capitalize">{day}</span>
                            <span className="font-semibold">{hours}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimationWrapper>

                  <AnimationWrapper type="fade" delay={0.5}>
                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="font-semibold mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        {Object.entries(siteConfig.links).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-primary-600 transition-colors"
                            aria-label={`${platform} profile`}
                          >
                            <Icon name={platform as any} size={24} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </AnimationWrapper>
                </div>
              </div>
            </HoverCard>
          </AnimationWrapper>

          {/* Contact Form Placeholder */}
          <AnimationWrapper type="slide-up" delay={0.2}>
            <div
              className={`bg-white border border-gray-200 p-8 ${designSystem.borderRadius.form}`}
            >
              <h2 className="text-2xl font-bold mb-6 text-primary-800">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                This is a placeholder for a contact form. You can implement a form here with fields
                for name, email, subject, and message.
              </p>

              <div className="space-y-4">
                <div
                  className={`border border-gray-300 ${designSystem.borderRadius.input} p-3 bg-gray-50`}
                >
                  <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                  <p className="text-gray-500 italic text-sm">Name field would go here</p>
                </div>

                <div
                  className={`border border-gray-300 ${designSystem.borderRadius.input} p-3 bg-gray-50`}
                >
                  <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  <p className="text-gray-500 italic text-sm">Email field would go here</p>
                </div>

                <div
                  className={`border border-gray-300 ${designSystem.borderRadius.input} p-3 bg-gray-50`}
                >
                  <label className="block text-sm font-medium text-gray-600 mb-1">Subject</label>
                  <p className="text-gray-500 italic text-sm">Subject field would go here</p>
                </div>

                <div
                  className={`border border-gray-300 ${designSystem.borderRadius.input} p-3 bg-gray-50`}
                >
                  <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
                  <p className="text-gray-500 italic text-sm">Message field would go here</p>
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-primary-100 text-primary-800 hover:bg-primary-200 border-primary-200"
                >
                  Send Message
                </Button>
                <p className="text-sm text-gray-500 italic text-center mt-2">
                  This button is a placeholder. Implement form handling logic for actual use.
                </p>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-white py-16">
        <AnimationWrapper type="fade">
          <SectionHeading
            title="Our Location"
            subtitle="Find us at our convenient location"
            useSubheading={true}
            subheadingText="VISIT US"
            accentColor="primary.600"
          />
        </AnimationWrapper>

        <AnimationWrapper type="slide-up" delay={0.2}>
          <div className="bg-primary-50 p-4 rounded-xl border border-primary-100 h-[400px] flex items-center justify-center">
            <div className="text-center p-8">
              <Icon name="map-pin" size={48} className="text-primary-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-primary-800">Map Placeholder</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                This is a placeholder for a map component. You can integrate Google Maps, Mapbox, or
                another mapping service to show your business location.
              </p>
            </div>
          </div>
        </AnimationWrapper>
      </Section>
    </main>
  );
}
