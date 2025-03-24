import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/SectionHeading';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import PageSEO from '@/components/PageSEO';

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: 'Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 1, 2023'; // Update this with your actual date
  
  // Use string literals for SEO props to ensure they're the correct type
  const seoTitle = `Privacy Policy | ${siteConfig.name}`;
  const seoDescription = 'Learn how we collect, use, and protect your personal information.';

  return (
    <main>
      {/* SEO Component */}
      <PageSEO
        title={seoTitle}
        description={seoDescription}
        canonical="/privacy"
        schemaType="other"
      />

      <Section name="privacy-hero" className="bg-primary-50 py-20">
        <AnimationWrapper type="fade">
          <SectionHeading
            title="Privacy Policy"
            subtitle="How we collect, use, and protect your information"
            centered
            useSubheading={true}
            subheadingText="YOUR PRIVACY MATTERS"
            accentColor="primary.600"
            titleClass="text-primary-800"
          />
        </AnimationWrapper>
      </Section>

      <Section name="privacy-content" bgColor="light.white">
        <Container className="max-w-4xl">
          <AnimationWrapper type="slide-up">
            <div className="prose prose-lg mx-auto bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

              <section className="mb-12">
                <h2>Introduction</h2>
                <p>
                  This Privacy Policy explains how {siteConfig.name} ("<strong>we</strong>", "
                  <strong>our</strong>", or "<strong>us</strong>") collects, uses, and discloses
                  information about you when you visit our website at{' '}
                  <a href={siteConfig.url}>{siteConfig.url}</a>, use our services, or otherwise
                  interact with us.
                </p>
                <p>
                  We respect your privacy and are committed to protecting your personal information.
                  Please read this Privacy Policy carefully to understand our practices regarding
                  your information.
                </p>
              </section>

              <section className="mb-12">
                <h2>Information We Collect</h2>
                <h3>Information You Provide to Us</h3>
                <p>
                  We may collect the following types of information when you interact with our
                  services:
                </p>
                <ul>
                  <li>
                    <strong>Contact Information</strong>: Name, email address, phone number, and
                    mailing address.
                  </li>
                  <li>
                    <strong>Account Information</strong>: Username, password, and profile
                    information.
                  </li>
                  <li>
                    <strong>Communications</strong>: Messages you send us through our contact forms
                    or customer service.
                  </li>
                  <li>
                    <strong>Payment Information</strong>: Credit card details, billing address, and
                    other payment-related information (processed securely by our payment
                    processors).
                  </li>
                </ul>

                <h3>Information We Collect Automatically</h3>
                <p>
                  When you use our website, we may automatically collect certain information about
                  your device and usage, including:
                </p>
                <ul>
                  <li>
                    <strong>Device Information</strong>: Browser type, operating system, device
                    type, and language preferences.
                  </li>
                  <li>
                    <strong>Usage Data</strong>: Pages visited, time spent on pages, links clicked,
                    and interactions with our content.
                  </li>
                  <li>
                    <strong>Location Information</strong>: General location based on IP address.
                  </li>
                  <li>
                    <strong>Cookies and Similar Technologies</strong>: Information collected through
                    cookies and similar tracking technologies.
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul>
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing transactions and fulfilling orders</li>
                  <li>Responding to your inquiries and customer service requests</li>
                  <li>Sending you administrative communications and updates about our services</li>
                  <li>Sending marketing communications (subject to your preferences)</li>
                  <li>Personalizing your experience on our website</li>
                  <li>Analyzing usage patterns and improving our website and services</li>
                  <li>Protecting against fraudulent or unauthorized activity</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>How We Share Your Information</h2>
                <p>We may share your information in the following circumstances:</p>
                <ul>
                  <li>
                    <strong>Service Providers</strong>: With third-party service providers who
                    perform services on our behalf.
                  </li>
                  <li>
                    <strong>Business Transfers</strong>: In connection with a merger, acquisition,
                    or sale of all or a portion of our assets.
                  </li>
                  <li>
                    <strong>Legal Requirements</strong>: When required by law or to protect our
                    rights or the safety of our users.
                  </li>
                  <li>
                    <strong>With Your Consent</strong>: In other ways with your consent or at your
                    direction.
                  </li>
                </ul>
                <p>We do not sell your personal information to third parties.</p>
              </section>

              <section className="mb-12">
                <h2>Your Rights and Choices</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal
                  information, including:
                </p>
                <ul>
                  <li>Accessing, correcting, or deleting your personal information</li>
                  <li>Restricting or objecting to our processing of your data</li>
                  <li>Requesting portability of your information</li>
                  <li>Withdrawing consent where processing is based on consent</li>
                  <li>Opting out of marketing communications</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided in the
                  "Contact Us" section below.
                </p>
              </section>

              <section className="mb-12">
                <h2>Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your
                  personal information from unauthorized access, disclosure, alteration, or
                  destruction. However, no method of transmission over the Internet or electronic
                  storage is 100% secure, so we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-12">
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The updated version will be
                  indicated by an updated "Last Updated" date at the top of this page. We encourage
                  you to review this Privacy Policy periodically to stay informed about how we
                  collect, use, and protect your information.
                </p>
              </section>

              <section className="mb-12">
                <h2>Contact Us</h2>
                <p>
                  If you have any questions or concerns about our Privacy Policy or our privacy
                  practices, please contact us at:
                </p>
                <p>
                  Email:{' '}
                  <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                  <br />
                  Phone: <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                  <br />
                  Address: {siteConfig.contact.address}
                </p>
              </section>
            </div>
          </AnimationWrapper>
        </Container>
      </Section>
    </main>
  );
}
