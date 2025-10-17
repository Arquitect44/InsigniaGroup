'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '../ui/Section';

const comparisons = [
  {
    category: 'Decision Speed',
    traditional: 'Multiple stakeholders, extended approval chains, misaligned incentives.',
    insignia: 'Direct ownership enables rapid decisions without compromise to quality or vision.',
  },
  {
    category: 'Quality Control',
    traditional: 'Fragmented oversight, contractor-driven standards, cost pressure on materials.',
    insignia: 'Complete visibility and control from design intent through final inspection.',
  },
  {
    category: 'Timeline Certainty',
    traditional: 'Coordination delays, scope disputes, finger-pointing when issues arise.',
    insignia: 'Single point of accountability and control minimizes delays and surprises.',
  },
  {
    category: 'Long-term Value',
    traditional: 'Build-to-sell mentality, value engineering that sacrifices durability.',
    insignia: 'Build-to-hold philosophy prioritizes decades of performance, not quarterly returns.',
  },
];

export default function Difference() {
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
          The <span className="font-bold">Difference</span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl font-light leading-relaxed mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Traditional developers coordinate multiple parties. We control them all.
        </motion.p>

        <div className="space-y-8 lg:space-y-12 mb-16">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.category}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 pb-8 lg:pb-12 border-b border-gray-200 last:border-b-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#1a1a1a]">
                  {comparison.category}
                </h3>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Traditional Approach
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {comparison.traditional}
                  </p>
                </div>

                <div className="bg-[#d4a574]/5 p-6 border-l-2 border-[#d4a574]">
                  <p className="text-xs font-semibold text-[#d4a574] uppercase tracking-wider mb-3">
                    Insignia Group
                  </p>
                  <p className="text-gray-800 leading-relaxed font-medium">
                    {comparison.insignia}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl text-gray-600 mb-8">
            See our approach in action across 43 iconic buildings.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/portfolio"
              className="inline-block px-10 py-5 bg-[#1a1a1a] text-white font-semibold uppercase tracking-wide text-sm hover:bg-[#d4a574] transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
