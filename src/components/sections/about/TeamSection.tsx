import { Section } from '@/components/ui/containers';
import { SectionHeading } from '@/components/feature';
import { AnimationWrapper } from '@/components/ui/animations';
import { Button } from '@/components/ui/buttons';

const TeamSection = () => {
  return (
    <Section bgColor="light.white">
      <AnimationWrapper type="fade">
        <SectionHeading
          title="Our Team"
          subtitle="Meet the people who make it all happen"
          useSubheading={true}
          subheadingText="OUR TEAM"
          accentColor="primary.600"
        />
      </AnimationWrapper>

      <AnimationWrapper type="slide-up" delay={0.2}>
        <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
          <p className="text-gray-600 mb-6">
            Introduce your team members here. Highlight their expertise, experience, and what they
            bring to your business. This section is perfect for showcasing the people behind your
            brand.
          </p>

          <Button href="/team" variant="primary" size="lg">
            Meet Our Team
          </Button>
        </div>
      </AnimationWrapper>
    </Section>
  );
};

export default TeamSection;
