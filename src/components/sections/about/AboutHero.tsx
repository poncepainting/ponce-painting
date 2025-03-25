import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/containers';
import { SectionHeading } from '@/components/feature';
import { AnimationWrapper } from '@/components/ui/animations';

const AboutHero = () => {
  return (
    <Section className="bg-primary-50 py-20">
      <AnimationWrapper type="fade">
        <SectionHeading
          title={`About ${siteConfig.name}`}
          subtitle="Trusted Lake Charles painting professionals delivering exceptional results since 2010. Family-owned, customer-focused, and committed to transforming your spaces."
          useSubheading={true}
          subheadingText="OUR STORY"
          accentColor="primary.600"
          titleClass="text-primary-800"
        />
      </AnimationWrapper>
    </Section>
  );
};

export default AboutHero;
