import { Section } from '@/components/ui/containers';
import { SectionHeading } from '@/components/feature';
import { AnimationWrapper } from '@/components/ui/animations';
import { HoverCard } from '@/components/ui/cards';
import { Icon } from '@/components/icons';
import type { IconName } from '@/components/icons/types';

const CompanyValues = () => {
  // Company values data
  const companyValues = [
    {
      title: 'Quality Craftsmanship',
      description:
        "We take immense pride in our work, using premium materials and proven techniques to deliver flawless finishes that stand the test of time in Lake Charles' challenging climate.",
      icon: 'star' as IconName,
    },
    {
      title: 'Honest Communication',
      description:
        'We believe in transparent, straightforward communication from start to finish. From detailed estimates to addressing concerns, we keep you informed throughout your painting project.',
      icon: 'check-circle' as IconName,
    },
    {
      title: 'Customer-First Approach',
      description:
        'Your complete satisfaction drives everything we do. We listen carefully to your needs, respect your property, and go above and beyond to exceed your expectations on every painting project.',
      icon: 'users' as IconName,
    },
  ];

  return (
    <Section className="bg-gray-50">
      <AnimationWrapper type="fade">
        <SectionHeading
          title="Our Core Values"
          subtitle="The principles that guide our Lake Charles painting services"
          useSubheading={true}
          subheadingText="VALUES"
          accentColor="primary.600"
        />
      </AnimationWrapper>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {companyValues.map((value, index) => (
          <AnimationWrapper key={value.title} type="scale" delay={index * 0.15}>
            <HoverCard className="h-full">
              <div className="flex flex-col items-center p-6 text-center h-full">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name={value.icon} size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </HoverCard>
          </AnimationWrapper>
        ))}
      </div>
    </Section>
  );
};

export default CompanyValues;
