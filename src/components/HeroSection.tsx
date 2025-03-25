'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { imageSizes, imageQuality } from '@/config/images';
import QuoteForm from '@/components/forms/QuoteForm';
import { colors } from '@/config/theme/colors';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  overlayOpacity?: number;
  height?: 'short' | 'medium' | 'tall' | 'full';
  textAlignment?: 'left' | 'center' | 'right';
  showQuoteForm?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  primaryCTA,
  secondaryCTA,
  overlayOpacity = 50,
  height = 'medium',
  textAlignment = 'center',
  showQuoteForm = false,
}) => {
  // Height classes based on the height prop
  const heightClasses = {
    short: 'h-[40vh]',
    medium: 'h-[60vh]',
    tall: 'h-[80vh]',
    full: 'h-screen',
  };

  // Text alignment classes
  const alignmentClasses = {
    left: 'text-center md:text-left',
    center: 'text-center',
    right: 'text-center md:text-right',
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      className={`relative flex items-center justify-center bg-dark-primary pt-12 md:pt-16 lg:pt-24 ${
        showQuoteForm ? 'min-h-screen py-20' : heightClasses[height]
      }`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <OptimizedImage
          src={imageUrl}
          alt={imageAlt}
          width={imageSizes.hero.width}
          height={imageSizes.hero.height}
          useFill={true}
          quality={imageQuality.high}
          priority={true}
          sizes={imageSizes.hero.sizes}
          fallbackText="Update hero image"
          className="object-cover"
        />
      </div>
      <div className={`absolute inset-0 bg-black/[0.${overlayOpacity}] z-10`}></div>
      <div className="absolute inset-0 bg-primary-600/50 mix-blend-multiply z-10"></div>
      <div className="absolute inset-0 bg-blue-900/30 mix-blend-darken z-10"></div>
      <Container className={`z-20 ${alignmentClasses[textAlignment]}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 lg:gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={showQuoteForm ? '' : 'lg:col-span-2'}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
              variants={itemVariants}
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                className="text-xl md:text-2xl mb-7 max-w-2xl mx-auto text-white"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
            )}

            {!showQuoteForm && primaryCTA && secondaryCTA && (
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={itemVariants}
              >
                {primaryCTA && (
                  <Button variant="primary" href={primaryCTA.href} size="lg">
                    {primaryCTA.text}
                  </Button>
                )}

                {secondaryCTA && (
                  <Button href={secondaryCTA.href} variant="outline" size="lg">
                    {secondaryCTA.text}
                  </Button>
                )}
              </motion.div>
            )}
          </motion.div>

          {showQuoteForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-1.5 sm:mt-3 lg:mt-0 mb-5 sm:mb-6 lg:mb-0"
            >
              <QuoteForm />
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
