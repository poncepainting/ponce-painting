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
          subtitle="Learn about our story, mission, and the team behind our success."
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
