'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

const capabilities = [
  {
    number: '01',
    title: 'Invest',
    description: 'Strategic capital deployment with deep market expertise and proven deal sourcing capabilities across New York City\'s most valuable neighborhoods.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Architectural excellence that maximizes value while respecting context. Our in-house design team creates spaces that stand the test of time.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Precision construction management with direct oversight. We maintain complete quality control through every phase of development.',
  },
  {
    number: '04',
    title: 'Manage',
    description: 'Long-term asset stewardship ensuring sustained value. We maintain the properties we build, protecting our investment and our reputation.',
  },
];

export default function VerticalIntegration() {
  return (
    <Section background="white" containerSize="xl">
      <div className="max-w-[2000px] mx-auto">
        <motion.h2
          className="text-[#1a1a1a] mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Vertically <span className="font-bold">Integrated</span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl font-light leading-relaxed mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Four core capabilities. One unified vision. Complete accountability.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.number}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="border-l-2 border-[#d4a574] pl-6 lg:pl-8 py-2">
                <p className="text-[#d4a574] font-semibold text-sm tracking-wider mb-3">
                  {capability.number}
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#d4a574] transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
