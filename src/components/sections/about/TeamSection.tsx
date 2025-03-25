import { Section } from '@/components/ui/containers';
import { SectionHeading } from '@/components/feature';
import { AnimationWrapper } from '@/components/ui/animations';
import { Button } from '@/components/ui/buttons';

const TeamSection = () => {
  return (
    <Section bgColor="light.white">
      <AnimationWrapper type="fade">
        <SectionHeading
          title="Meet Our Lake Charles Painting Team"
          subtitle="The skilled professionals who bring your vision to life"
          useSubheading={true}
          subheadingText="OUR TEAM"
          accentColor="primary.600"
        />
      </AnimationWrapper>

      <AnimationWrapper type="slide-up" delay={0.2}>
        <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
          <p className="text-gray-600 mb-6">
            At Ponce Painting, our team is our greatest asset. Each member brings years of
            specialized painting expertise and shares our commitment to exceptional quality. As Lake
            Charles locals, we understand the unique needs of our community and take pride in
            transforming spaces throughout Southwest Louisiana with precision, professionalism, and
            a friendly touch that makes us the region's most trusted painting contractors.
          </p>

          <Button href="/team" variant="primary" size="lg">
            Meet Our Expert Painters
          </Button>
        </div>
      </AnimationWrapper>
    </Section>
  );
};

export default TeamSection;
