'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

const expertise = [
  {
    category: 'Asset Classes',
    items: [
      'High-rise residential towers',
      'Class A office buildings',
      'Mixed-use developments',
      'Healthcare facilities',
      'Retail and hospitality',
      'Adaptive reuse projects',
    ],
  },
  {
    category: 'Geographic Focus',
    items: [
      'Manhattan',
      'Brooklyn',
      'Queens',
      'Strategic suburban markets',
      'Transit-oriented developments',
      'Waterfront locations',
    ],
  },
  {
    category: 'Technical Expertise',
    items: [
      'Complex zoning navigation',
      'Landmark preservation',
      'LEED certification',
      'Union labor coordination',
      'Ground-up construction',
      'Renovation and repositioning',
    ],
  },
  {
    category: 'Key Relationships',
    items: [
      'Major institutional lenders',
      'City agencies and departments',
      'Premier architectural firms',
      'Top-tier general contractors',
      'Engineering consultants',
      'Legal and accounting advisors',
    ],
  },
];

export default function Expertise() {
  return (
    <Section background="charcoal" containerSize="xl">
      <div className="max-w-[2000px] mx-auto">
        <motion.h2
          className="text-white mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Deep <span className="font-bold">Expertise</span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-4xl font-light leading-relaxed mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Two decades building across New York City&apos;s most challenging markets.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {expertise.map((section, index) => (
            <motion.div
              key={section.category}
              className="border-l-2 border-[#d4a574] pl-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#d4a574] mt-1.5 flex-shrink-0">•</span>
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
