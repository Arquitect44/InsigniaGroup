'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

const differentiators = [
  {
    title: 'Vertically Integrated',
    description: 'From land acquisition to property management, we control every stage of development. No dependencies, no delays, no compromises.',
    icon: '01',
  },
  {
    title: 'Three Generations Strong',
    description: 'Family-owned since inception, we bring decades of institutional knowledge and long-term thinking to every project.',
    icon: '02',
  },
  {
    title: 'In-House Excellence',
    description: 'Our integrated team of architects, engineers, and construction professionals delivers unmatched quality and efficiency.',
    icon: '03',
  },
  {
    title: 'NYC-Focused Expertise',
    description: 'Deep local market knowledge across all five boroughs. We understand the complexities of New York City development.',
    icon: '04',
  },
];

export default function WhyChoose() {
  return (
    <Section background="white" containerSize="xl">
      <div className="max-w-[2000px] mx-auto">
        <motion.h2
          className="text-[#1a1a1a] mb-8 md:mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="font-bold">Insignia Group</span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl font-light leading-relaxed mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          When you work with Insignia Group, you're partnering with a fully integrated development firm that controls every aspect of the real estate lifecycle.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="flex gap-6 lg:gap-8">
                {/* Icon/Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 border-2 border-[#d4a574] flex items-center justify-center">
                    <span className="text-2xl lg:text-3xl font-bold text-[#d4a574]">
                      {item.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-[#1a1a1a] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute -bottom-6 left-0 right-0 h-px bg-gray-200 md:hidden" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 lg:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-xl lg:text-2xl text-gray-700 font-light mb-8">
            Ready to discuss your next project?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a
              href="/contact"
              className="inline-block px-12 py-5 lg:px-14 lg:py-6 bg-[#1a1a1a] text-white font-semibold uppercase tracking-wide text-sm lg:text-base hover:bg-[#d4a574] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
