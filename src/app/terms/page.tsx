import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/SectionHeading';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import PageSEO from '@/components/PageSEO';

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: 'Terms and conditions for using our services.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 1, 2023'; // Update this with your actual date

  // Use string literals for SEO props to ensure they're the correct type
  const seoTitle =
    typeof metadata.title === 'string' ? metadata.title : `Terms of Service | ${siteConfig.name}`;
  const seoDescription =
    typeof metadata.description === 'string'
      ? metadata.description
      : 'Terms and conditions for using our services.';

  return (
    <main>
      {/* SEO Component */}
      <PageSEO
        title={seoTitle}
        description={seoDescription}
        canonical="/terms"
        schemaType="other"
      />

      <Section name="terms-hero" className="bg-primary-50 py-20">
        <AnimationWrapper type="fade">
          <SectionHeading
            title="Terms of Service"
            subtitle="Please read these terms carefully before using our services"
            centered
            useSubheading={true}
            subheadingText="LEGAL AGREEMENT"
            accentColor="primary.600"
            titleClass="text-primary-800"
          />
        </AnimationWrapper>
      </Section>

      <Section name="terms-content" bgColor="light.white">
        <Container className="max-w-4xl">
          <AnimationWrapper type="slide-up">
            <div className="prose prose-lg mx-auto bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

              <section className="mb-12">
                <h2>Introduction</h2>
                <p>
                  These Terms of Service ("<strong>Terms</strong>") govern your access to and use of
                  the website, products, and services provided by {siteConfig.name} ("
                  <strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>").
                </p>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms and our
                  Privacy Policy. If you do not agree to these Terms, you should not access or use
                  our services.
                </p>
              </section>

              <section className="mb-12">
                <h2>Using Our Services</h2>
                <h3>Account Registration</h3>
                <p>
                  Some of our services may require you to create an account. You are responsible for
                  maintaining the confidentiality of your account credentials and for all activities
                  that occur under your account. You must provide accurate and complete information
                  when creating your account and keep this information up to date.
                </p>

                <h3>Eligibility</h3>
                <p>
                  By using our services, you represent and warrant that you are at least 18 years
                  old or have the legal capacity to enter into binding contracts under applicable
                  laws. If you are using our services on behalf of an organization, you represent
                  and warrant that you have the authority to bind that organization to these Terms.
                </p>

                <h3>Prohibited Conduct</h3>
                <p>You agree not to:</p>
                <ul>
                  <li>
                    Use our services in any way that violates any applicable law or regulation.
                  </li>
                  <li>Infringe on the rights of others, including intellectual property rights.</li>
                  <li>
                    Attempt to gain unauthorized access to our systems or other users' accounts.
                  </li>
                  <li>Transmit any viruses, malware, or other harmful code.</li>
                  <li>Engage in any activity that interferes with or disrupts our services.</li>
                  <li>Use our services to send unsolicited communications (spam).</li>
                  <li>
                    Impersonate any person or entity or misrepresent your affiliation with any
                    person or entity.
                  </li>
                  <li>Collect or harvest user data without proper consent.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2>Intellectual Property</h2>
                <p>
                  Our services and all content included on or otherwise made available through our
                  services, including but not limited to text, graphics, logos, images, software,
                  and code (collectively, "<strong>Content</strong>"), are owned by us or our
                  licensors and are protected by copyright, trademark, and other intellectual
                  property laws.
                </p>
                <p>
                  Subject to your compliance with these Terms, we grant you a limited,
                  non-exclusive, non-transferable, non-sublicensable license to access and use our
                  services for your personal or internal business purposes.
                </p>
              </section>

              <section className="mb-12">
                <h2>User Content</h2>
                <p>
                  Our services may allow you to upload, submit, store, send, or receive content ("
                  <strong>User Content</strong>"). You retain ownership of any intellectual property
                  rights that you hold in your User Content.
                </p>
                <p>
                  By submitting User Content to our services, you grant us a worldwide,
                  royalty-free, perpetual, irrevocable, non-exclusive, transferable, and
                  sublicensable license to use, reproduce, modify, adapt, publish, translate, create
                  derivative works from, distribute, and display such User Content in connection
                  with our services.
                </p>
                <p>
                  You represent and warrant that: (i) you own or have the necessary rights to your
                  User Content; (ii) your User Content does not violate the rights of any third
                  party; and (iii) your User Content complies with these Terms and all applicable
                  laws and regulations.
                </p>
              </section>

              <section className="mb-12">
                <h2>Termination</h2>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior
                  notice or liability, for any reason, including if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use our services will immediately cease. All
                  provisions of these Terms which by their nature should survive termination shall
                  survive, including, without limitation, ownership provisions, warranty
                  disclaimers, indemnity, and limitations of liability.
                </p>
              </section>

              <section className="mb-12">
                <h2>Disclaimer of Warranties</h2>
                <p>
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY
                  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT. WE MAKE NO WARRANTY THAT OUR SERVICES WILL MEET YOUR
                  REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS.
                </p>
              </section>

              <section className="mb-12">
                <h2>Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
                  WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE
                  LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR
                  SERVICES.
                </p>
              </section>

              <section className="mb-12">
                <h2>Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless us and our officers, directors,
                  employees, agents, and affiliates from and against any and all claims,
                  liabilities, damages, losses, costs, expenses, or fees (including reasonable
                  attorneys' fees) that arise from or relate to: (i) your use of our services; (ii)
                  your violation of these Terms; (iii) your violation of any rights of another
                  person or entity; or (iv) your User Content.
                </p>
              </section>

              <section className="mb-12">
                <h2>Changes to Terms</h2>
                <p>
                  We may modify these Terms at any time. We will provide notice of any material
                  changes by posting the updated Terms on our website or through other
                  communications. Your continued use of our services after the effective date of the
                  revised Terms constitutes your acceptance of the changes.
                </p>
              </section>

              <section className="mb-12">
                <h2>Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of
                  [YOUR JURISDICTION], without regard to its conflict of law principles.
                </p>
              </section>

              <section className="mb-12">
                <h2>Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
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
