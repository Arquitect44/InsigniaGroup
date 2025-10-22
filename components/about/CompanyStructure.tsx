'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '../ui/Section';

const companies = {
  parent: {
    name: 'Insignia Group',
    tagline: 'Vertically Integrated Real Estate Development',
    description: 'Three generations of excellence delivering 43 prestigious buildings throughout New York City.',
    services: [
      'Real Estate Development',
      'Investment & Acquisitions',
      'Asset Management',
      'Property Management',
    ],
  },
  subsidiaries: [
    {
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
      name: 'Super Plumbing & Building Supply',
      tagline: 'MEP Systems & Supply Chain',
      description: 'Integrated supply chain control delivering cost optimization and procurement efficiency.',
      website: null, // Under construction
      services: [
        'MEP Systems',
        'Supply Chain Management',
        'Material Procurement',
        'Cost Optimization',
      ],
    },
    {
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
  ],
};

export default function CompanyStructure() {
  return (
    <Section background="white" containerSize="xl">
      <div className="max-w-[2000px] mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1a1a1a] mb-6 md:mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="font-bold">Family of Companies</span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl font-light leading-relaxed mb-20 text-center mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          United under one vision: delivering vertically integrated excellence at every stage of development.
        </motion.p>

        {/* Company Structure Diagram */}
        <div className="relative">
          {/* Parent Company - Insignia Group */}
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 lg:p-12 border-2 border-[#d4a574] shadow-2xl">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                {companies.parent.name}
              </h3>
              <p className="text-[#d4a574] text-lg lg:text-xl font-semibold mb-4">
                {companies.parent.tagline}
              </p>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
                {companies.parent.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {companies.parent.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className="text-[#d4a574]">→</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Connecting Lines */}
          <div className="relative flex justify-center mb-16">
            <div className="w-0.5 h-16 bg-[#d4a574]" />
          </div>

          {/* Subsidiaries Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Horizontal connecting line for desktop */}
            <div className="hidden lg:block absolute top-0 left-[16.67%] -translate-y-16 w-2/3 h-0.5 bg-[#d4a574]" />

            {/* Vertical lines connecting to each subsidiary */}
            <div className="hidden lg:block absolute top-0 left-[16.67%] -translate-y-16 w-0.5 h-16 bg-[#d4a574]" />
            <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16 w-0.5 h-16 bg-[#d4a574]" />
            <div className="hidden lg:block absolute top-0 right-[16.67%] -translate-y-16 w-0.5 h-16 bg-[#d4a574]" />

            {companies.subsidiaries.map((company, index) => {
              const CardContent = (
                <div className="bg-white border-2 border-gray-200 p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:border-[#d4a574] transition-all duration-300 group h-full">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#d4a574] transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-[#d4a574] text-base lg:text-lg font-semibold mb-4">
                    {company.tagline}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {company.description}
                  </p>
                  <ul className="space-y-3">
                    {company.services.map((service, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <span className="text-[#d4a574] mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300">
                          →
                        </span>
                        <span className="text-gray-700 group-hover/item:text-[#1a1a1a] transition-colors duration-300">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {company.website && (
                    <div className="mt-6 text-[#d4a574] text-sm font-semibold">
                      Visit Website →
                    </div>
                  )}
                </div>
              );

              return (
                <motion.div
                  key={company.name}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  {company.website ? (
                    <Link
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
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

        {/* Bottom Message */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This integrated structure allows us to control every aspect of development—ensuring quality, efficiency, and lasting value across all 43 prestigious buildings.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
