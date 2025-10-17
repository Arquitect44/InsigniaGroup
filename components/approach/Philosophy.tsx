'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

const principles = [
  {
    title: 'Three Generations',
    description: 'Family ownership ensures long-term thinking and unwavering commitment to quality over quarterly results.',
  },
  {
    title: 'No Compromises',
    description: 'When you control the entire process, you can maintain standards that others sacrifice for speed or cost.',
  },
  {
    title: 'Lasting Value',
    description: 'We build to hold, not flip. Every decision prioritizes decades of value, not short-term gains.',
  },
  {
    title: 'New York Focus',
    description: 'Deep local expertise and relationships built over 20 years. We know this market intimately.',
  },
];

export default function Philosophy() {
  return (
    <Section background="warm-gray" containerSize="xl">
      <div className="max-w-[2000px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#1a1a1a] mb-6">
              Our <span className="font-bold">Philosophy</span>
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed mb-8">
              Quality isn&apos;t an accident. It&apos;s the result of intention, experience, and complete control over every decision.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              For three generations, our family has built iconic properties across New York City. We&apos;ve learned that the only way to guarantee excellence is to own every stage of the process—from identifying the opportunity to managing the completed asset.
            </p>
          </motion.div>

          {/* Right Column - Principles */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="bg-white p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl lg:text-2xl font-bold text-[#1a1a1a] mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
