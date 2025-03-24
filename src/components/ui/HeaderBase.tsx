import Text from './Text';
import Container from './Container';
import { themeConfig } from '@/config/theme';
import { getCssColorVariable } from '@/utils/themeUtils';

type HeaderBaseProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  borderBottom?: boolean;
  backgroundColor?: string;
  textColor?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  subtitleAs?: React.ElementType;
  titleClassName?: string;
  subtitleClassName?: string;
};

/**
 * HeaderBase component for consistent header styling across the site
 * This component uses our theme system for consistent typography
 */
const HeaderBase = ({
  title,
  subtitle,
  centered = false,
  className = '',
  borderBottom = false,
  backgroundColor,
  textColor,
  as = 'h1',
  subtitleAs = 'p',
  titleClassName = '',
  subtitleClassName = '',
}: HeaderBaseProps) => {
  const textAlignment = centered ? 'text-center' : 'text-left';

  const textVariant = getTextVariantFromHeadingElement(as);
  const subtitleVariant = 'bodyLarge';

  // Style for background & text colors
  const style: React.CSSProperties = {};
  if (backgroundColor) {
    style.backgroundColor = getCssColorVariable(backgroundColor);
  }
  if (textColor) {
    style.color = getCssColorVariable(textColor);
  }

  return (
    <header
      className={`py-8 md:py-12 ${borderBottom ? 'border-b border-gray-200' : ''} ${className}`}
      style={style}
    >
      <Container>
        <div className={textAlignment}>
          <Text variant={textVariant} as={as} className={titleClassName}>
            {title}
          </Text>

          {subtitle && (
            <Text variant={subtitleVariant} as={subtitleAs} className={`mt-3 ${subtitleClassName}`}>
              {subtitle}
            </Text>
          )}
        </div>
      </Container>
    </header>
  );
};

/**
 * Helper function to map heading element to text variant
 */
function getTextVariantFromHeadingElement(
  element: string
): keyof typeof themeConfig.typography.textStyles {
  switch (element) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    default:
      return 'h1';
  }
}

export default HeaderBase;
