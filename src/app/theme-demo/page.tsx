import { Metadata } from 'next';
import Text from '@/components/ui/Text';
import Container from '@/components/ui/Container';
import { themeConfig } from '@/config/theme';
import Section from '@/components/ui/Section';
import { getCssColorVariable } from '@/utils/themeUtils';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Theme Demo',
  description: 'Demonstration of our theme system with global color variables and text styles',
};

export default function ThemeDemoPage() {
  return (
    <main>
      <Section>
        <Container>
          <Text variant="h1" className="mb-8">
            Theme System Demo
          </Text>

          <div className="mb-12">
            <Text variant="h2" className="mb-4">
              Buttons
            </Text>
            <div className="space-y-6">
              <div>
                <Text variant="h3" className="mb-4">
                  Button Variants
                </Text>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="text">Text Button</Button>
                </div>
              </div>

              <div>
                <Text variant="h3" className="mb-4">
                  Button Sizes
                </Text>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" size="sm">
                    Small
                  </Button>
                  <Button variant="primary" size="md">
                    Medium
                  </Button>
                  <Button variant="primary" size="lg">
                    Large
                  </Button>
                </div>
              </div>

              <div>
                <Text variant="h3" className="mb-4">
                  Button States
                </Text>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Normal</Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                  <Button variant="primary" isLoading>
                    Loading
                  </Button>
                </div>
              </div>

              <div>
                <Text variant="h3" className="mb-4">
                  Button with Icons
                </Text>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" leftIcon="home">
                    Left Icon
                  </Button>
                  <Button variant="primary" rightIcon="chevron-right">
                    Right Icon
                  </Button>
                  <Button variant="primary" icon="star" iconOnly aria-label="Star" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <Text variant="h2" className="mb-4">
              Typography
            </Text>

            <div className="space-y-6 mb-8">
              <div>
                <Text variant="h1">Heading 1</Text>
                <Text variant="bodySmall" className="mt-1">
                  Font size: {themeConfig.typography.sizes['4xl'].fontSize}, Weight:{' '}
                  {themeConfig.typography.weights.bold}
                </Text>
              </div>

              <div>
                <Text variant="h2">Heading 2</Text>
                <Text variant="bodySmall" className="mt-1">
                  Font size: {themeConfig.typography.sizes['3xl'].fontSize}, Weight:{' '}
                  {themeConfig.typography.weights.bold}
                </Text>
              </div>

              <div>
                <Text variant="h3">Heading 3</Text>
                <Text variant="bodySmall" className="mt-1">
                  Font size: {themeConfig.typography.sizes['2xl'].fontSize}, Weight:{' '}
                  {themeConfig.typography.weights.bold}
                </Text>
              </div>

              <div>
                <Text variant="h4">Heading 4</Text>
                <Text variant="bodySmall" className="mt-1">
                  Font size: {themeConfig.typography.sizes.xl.fontSize}, Weight:{' '}
                  {themeConfig.typography.weights.bold}
                </Text>
              </div>

              <div>
                <Text variant="h5">Heading 5</Text>
                <Text variant="bodySmall" className="mt-1">
                  Font size: {themeConfig.typography.sizes.lg.fontSize}, Weight:{' '}
                  {themeConfig.typography.weights.bold}
                </Text>
              </div>

              <div>
                <Text variant="h6">Heading 6</Text>
                <Text variant="bodySmall" className="mt-1">
                  Font size: {themeConfig.typography.sizes.base.fontSize}, Weight:{' '}
                  {themeConfig.typography.weights.bold}
                </Text>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Text variant="bodyLarge">Body Large Text</Text>
                <Text variant="bodySmall" className="mt-1">
                  Font size: {themeConfig.typography.sizes.lg.fontSize}, Weight:{' '}
                  {themeConfig.typography.weights.normal}
                </Text>
              </div>

              <div>
                <Text variant="body">Body Text</Text>
                <Text variant="bodySmall" className="mt-1">
                  Font size: {themeConfig.typography.sizes.base.fontSize}, Weight:{' '}
                  {themeConfig.typography.weights.normal}
                </Text>
              </div>

              <div>
                <Text variant="bodySmall">Body Small Text</Text>
                <Text variant="bodySmall" className="mt-1">
                  Font size: {themeConfig.typography.sizes.sm.fontSize}, Weight:{' '}
                  {themeConfig.typography.weights.normal}
                </Text>
              </div>

              <div>
                <Text variant="caption">Caption Text</Text>
                <Text variant="bodySmall" className="mt-1">
                  Font size: {themeConfig.typography.sizes.xs.fontSize}, Weight:{' '}
                  {themeConfig.typography.weights.normal}
                </Text>
              </div>

              <div>
                <Text variant="link" as="a" href="#">
                  Link Text
                </Text>
                <Text variant="bodySmall" className="mt-1">
                  Interactive link with hover states
                </Text>
              </div>

              <div>
                <Text variant="button">Button Text</Text>
                <Text variant="bodySmall" className="mt-1">
                  Text style used in buttons
                </Text>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <Text variant="h2" className="mb-4">
              Color Palette
            </Text>

            <Text variant="h3" className="mb-4">
              Primary Colors
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {Object.entries(themeConfig.colors.primary).map(([shade, color]) => (
                <div
                  key={`primary-${shade}`}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                    className="h-20"
                    style={{ backgroundColor: getCssColorVariable(`primary.${shade}`) }}
                  />
                  <div className="p-3">
                    <Text variant="body" className="font-medium">
                      Primary {shade === 'DEFAULT' ? '(Default)' : shade}
                    </Text>
                    <Text variant="bodySmall">
                      {typeof color === 'string' ? color : JSON.stringify(color)}
                    </Text>
                  </div>
                </div>
              ))}
            </div>

            <Text variant="h3" className="mb-4">
              Gray Scale
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {Object.entries(themeConfig.colors.gray).map(([shade, color]) => (
                <div
                  key={`gray-${shade}`}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                    className="h-20"
                    style={{ backgroundColor: getCssColorVariable(`gray.${shade}`) }}
                  />
                  <div className="p-3">
                    <Text variant="body" className="font-medium">
                      Gray {shade === 'DEFAULT' ? '(Default)' : shade}
                    </Text>
                    <Text variant="bodySmall">
                      {typeof color === 'string' ? color : JSON.stringify(color)}
                    </Text>
                  </div>
                </div>
              ))}
            </div>

            <Text variant="h3" className="mb-4">
              Functional Colors
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['success', 'warning', 'error', 'info'].map(colorName => {
                const color = themeConfig.colors[colorName as keyof typeof themeConfig.colors];
                return (
                  <div
                    key={colorName}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div
                      className="h-20"
                      style={{ backgroundColor: getCssColorVariable(colorName) }}
                    />
                    <div className="p-3">
                      <Text variant="body" className="font-medium capitalize">
                        {colorName}
                      </Text>
                      <Text variant="bodySmall">
                        {typeof color === 'string' ? color : JSON.stringify(color)}
                      </Text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <Text variant="h2" className="mb-4">
              Background Colors
            </Text>

            <Text variant="h3" className="mb-4">
              Light Backgrounds
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {Object.entries(themeConfig.backgrounds.light).map(([name, color]) => (
                <div
                  key={`bg-light-${name}`}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                    className="h-32 p-4 flex items-center justify-center"
                    style={{ backgroundColor: color }}
                  >
                    <Text variant="body">Content on {name} background</Text>
                  </div>
                  <div className="p-3">
                    <Text variant="body" className="font-medium capitalize">
                      {name}
                    </Text>
                    <Text variant="bodySmall">{color}</Text>
                  </div>
                </div>
              ))}
            </div>

            <Text variant="h3" className="mb-4">
              Dark Backgrounds
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(themeConfig.backgrounds.dark).map(([name, color]) => (
                <div
                  key={`bg-dark-${name}`}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                    className="h-32 p-4 flex items-center justify-center"
                    style={{ backgroundColor: color }}
                  >
                    <Text variant="body" style={{ color: '#ffffff' }}>
                      Content on {name} background
                    </Text>
                  </div>
                  <div className="p-3">
                    <Text variant="body" className="font-medium capitalize">
                      {name}
                    </Text>
                    <Text variant="bodySmall">{color}</Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
