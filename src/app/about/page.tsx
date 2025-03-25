import { siteConfig } from '@/config/site';
import { generatePageSchema } from '@/config/schema';
import PageSEO from '@/components/seo/PageSEO';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { AboutHero, AboutStory, CompanyValues, TeamSection } from '@/components/sections/about';

export const metadata = {
  title: `Lake Charles Premier Painting Contractors | Our Story Since 2010 | ${siteConfig.name}`,
  description:
    'Discover why Lake Charles homeowners and businesses have trusted Ponce Painting since 2010. Our local, experienced team delivers exceptional interior and exterior painting services with quality craftsmanship, premium materials, and personalized service throughout Southwest Louisiana.',
};

export default function AboutPage() {
  // Generate about page schema
  const aboutSchemas = generatePageSchema('about');

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

      {/* About Page Sections */}
      <AboutHero />
      <AboutStory />
      <CompanyValues />
      <TeamSection />
    </main>
  );
}
