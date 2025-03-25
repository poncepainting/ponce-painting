'use client';

import Link from 'next/link';
import { navigationConfig, siteConfig, type SocialPlatform } from '@/config/site';
import { Icon } from '@/config/icons';
import Container from './ui/Container';

const Footer = () => {
  const { footerNav } = navigationConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Business info */}
          <div key="business-info" className="col-span-1">
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="mb-4 text-gray-300 text-sm">{siteConfig.description}</p>
            <div className="flex space-x-4">
              {Object.entries(siteConfig.links).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${platform} profile`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Icon name={platform as SocialPlatform} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          {footerNav.map(section => (
            <div key={section.title} className="col-span-1">
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-white">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map(link => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
            <div key="address" className="flex items-center">
              <Icon name="map-pin" className="mr-2 text-gray-400" size={16} />
              <span className="text-sm">{siteConfig.contact.address}</span>
            </div>
            <div key="phone" className="flex items-center">
              <Icon name="phone" className="mr-2 text-gray-400" size={16} />
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white text-sm">
                {siteConfig.contact.phone}
              </a>
            </div>
            <div key="email" className="flex items-center">
              <Icon name="mail" className="mr-2 text-gray-400" size={16} />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white text-sm">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-700 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {/* Social links */}
            {Object.entries(siteConfig.links).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                className="text-gray-400 hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${platform} page`}
              >
                <Icon name={platform as SocialPlatform} className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1 flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
