'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '../ui/Section';

// Business data - single source of truth
const businesses = [
  {
    id: 1,
    name: "Jun's Construction",
    tagline: 'General Contracting Excellence',
    description: 'In-house construction arm ensuring uncompromising quality control from foundation to finish.',
    website: 'https://junsconstruction.com/',
    services: [
      'General Contracting',
      'Construction Management',
      'Project Oversight',
      'Quality Control & Inspection',
    ],
  },
  {
    id: 2,
    name: 'Super Plumbing & Building Supply',
    tagline: 'MEP Systems & Supply Chain',
    description: 'Integrated supply chain control delivering cost optimization and procurement efficiency.',
    website: '/super-plumbing',
    services: [
      'MEP Systems',
      'Supply Chain Management',
      'Material Procurement',
      'Cost Optimization',
    ],
  },
  {
    id: 3,
    name: 'Insignia Hotels',
    tagline: 'Hospitality & Asset Management',
    description: 'Self-developed and operated hotel portfolio delivering exceptional guest experiences and long-term value.',
    website: 'https://www.insigniabrooklyn.com/',
    services: [
      'Hotel Development',
      'Asset Management',
      'Hospitality Operations',
      'Brand Partnerships',
    ],
  },
];

// Derive marquee items from main data source (no duplication)
const marqueeItems = businesses.map(b => ({
  name: b.name,
  tagline: b.tagline
}));

// Semantic constants
const MARQUEE_REPETITIONS = 4; // Number of content duplications for seamless loop

export default function FeaturedBusinesses() {
  return (
    <>
      {/* Infinite Marquee Banner */}
      <div
        role="region"
        aria-label="Featured Business Partners"
        className="bg-[#1a1a1a] border-y-2 border-[#d4a574] overflow-hidden py-6"
      >
        <div className="flex animate-marquee whitespace-nowrap" aria-live="off">
          {/* Duplicate the items for seamless loop */}
          {[...Array(MARQUEE_REPETITIONS)].map((_, setIndex) => (
            <div
              key={`marquee-set-${setIndex}`}
              className={`flex items-center ${setIndex > 0 ? 'marquee-duplicate' : ''}`}
              aria-hidden={setIndex > 0}
            >
              {marqueeItems.map((item, index) => (
                <div
                  key={`business-${item.name}-${setIndex}`}
                  className="flex items-center mx-8 lg:mx-12"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white text-lg lg:text-xl font-semibold">
                      {item.name}
                    </span>
                    <span className="text-[#d4a574] text-2xl" aria-hidden="true">•</span>
                    <span className="text-gray-400 text-base lg:text-lg font-light">
                      {item.tagline}
                    </span>
                  </div>
                  <span
                    className="text-[#d4a574] text-3xl mx-8 lg:mx-12"
                    aria-hidden="true"
                  >
                    |
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Section background="charcoal" containerSize="xl">
        <div className="max-w-[2000px] mx-auto">
          {/* Section Header */}
          <motion.h2
            className="text-white mb-[var(--space-6)] md:mb-[var(--space-8)] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="font-bold">Family of Businesses</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-4xl font-light leading-relaxed mb-[var(--space-20)] text-center mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            United under one vision: delivering vertically integrated excellence at every stage.
          </motion.p>

          {/* Horizontal Org Diagram */}
          <div className="relative">
            {/* Parent Company */}
            <motion.div
              className="max-w-2xl mx-auto mb-[var(--space-12)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-[#2a2a2a] to-[var(--color-charcoal)] p-[var(--space-6)] lg:p-[var(--space-8)] border-2 border-[var(--color-gold)] shadow-xl text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-[var(--space-2)]">
                  Insignia Group
                </h3>
                <p className="text-[var(--color-gold)] text-base lg:text-lg font-semibold">
                  Vertically Integrated Real Estate Development
                </p>
              </div>
            </motion.div>

            {/* Connecting Line */}
            <motion.div
              className="w-0.5 h-[var(--space-12)] bg-[var(--color-gold)] mx-auto mb-[var(--space-12)]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />

            {/* Subsidiaries Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--space-8)] lg:gap-[var(--space-12)] relative">
              {/* Horizontal connecting line for desktop */}
              <div className="hidden lg:block absolute top-0 left-[16.67%] -translate-y-[var(--space-16)] w-2/3 h-0.5 bg-[var(--color-gold)]" />

              {/* Vertical lines connecting to each subsidiary */}
              <div className="hidden lg:block absolute top-0 left-[16.67%] -translate-y-[var(--space-16)] w-0.5 h-[var(--space-16)] bg-[var(--color-gold)]" />
              <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[var(--space-16)] w-0.5 h-[var(--space-16)] bg-[var(--color-gold)]" />
              <div className="hidden lg:block absolute top-0 right-[16.67%] -translate-y-[var(--space-16)] w-0.5 h-[var(--space-16)] bg-[var(--color-gold)]" />

              {businesses.map((company, index) => {
                const CardContent = (
                  <div className="bg-white/5 border-2 border-gray-700 p-[var(--space-6)] lg:p-[var(--space-8)] hover:border-[var(--color-gold)] hover:shadow-2xl transition-all duration-[var(--duration-normal)] group h-full">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-[var(--space-3)] group-hover:text-[var(--color-gold)] transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-[var(--color-gold)] text-sm lg:text-base font-semibold mb-[var(--space-4)]">
                      {company.tagline}
                    </p>
                    {company.description && (
                      <p className="text-gray-400 text-sm lg:text-base mb-[var(--space-4)] leading-relaxed">
                        {company.description}
                      </p>
                    )}
                    <ul className="space-y-[var(--space-2)]">
                      {company.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-[var(--space-2)] text-gray-400 text-sm lg:text-base"
                        >
                          <span className="text-[var(--color-gold)] mt-1" aria-hidden="true">→</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                    {company.website && (
                      <div className="mt-[var(--space-4)] text-[var(--color-gold)] text-sm font-semibold">
                        Visit Website →
                      </div>
                    )}
                  </div>
                );

                const isExternalLink = company.website?.startsWith('http');

                return (
                  <motion.div
                    key={company.id}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.2, duration: 0.8 }}
                  >
                    {company.website ? (
                      <Link
                        href={company.website}
                        {...(isExternalLink && {
                          target: "_blank",
                          rel: "noopener noreferrer"
                        })}
                        className="block h-full"
                      >
                        {CardContent}
                      </Link>
                    ) : (
                      CardContent
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
