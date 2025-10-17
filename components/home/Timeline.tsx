'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

const milestones = [
  {
    year: '2005',
    title: 'Foundation',
    description: 'Established with a vision for vertically integrated development in New York City.',
  },
  {
    year: '2008',
    title: 'First Major Development',
    description: 'Delivered our first major development, setting the standard for quality and efficiency.',
  },
  {
    year: '2015',
    title: 'First Hotel Development',
    description: 'Entered into the hospitality development sector, expanding our vertically integrated capabilities.',
  },
  {
    year: '2019',
    title: 'First Charter School Development',
    description: 'Began educational facility development, bringing expertise to the education sector.',
  },
  {
    year: '2020',
    title: 'Healthcare Expansion',
    description: 'Entered the healthcare development sector.',
  },
  {
    year: '2025',
    title: '257 Units Under Construction',
    description: 'Family legacy continues with 257 residential units actively under construction and 43 completed iconic buildings.',
  },
];

export default function Timeline() {
  return (
    <Section background="charcoal" containerSize="xl">
      <div className="max-w-[2000px] mx-auto">
        <motion.h2
          className="text-white mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Two Decades of <span className="font-bold">Excellence</span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-4xl font-light leading-relaxed mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          From our founding to today, we&apos;ve built a legacy of innovation, quality, and lasting impact across New York City&apos;s real estate landscape.
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#d4a574]/20 md:transform md:-translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Content */}
                <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16 md:flex md:flex-col md:items-end' : 'md:pl-16'}`}>
                  <div className="max-w-md">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-[#d4a574] font-semibold text-lg mb-4">{milestone.year}</p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 top-0 md:transform md:-translate-x-1/2"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#d4a574] border-4 border-[#1a1a1a] shadow-lg shadow-[#d4a574]/50" />
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
