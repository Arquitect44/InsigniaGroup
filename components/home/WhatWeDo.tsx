'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '../ui/Section';

const capabilities = [
  {
    title: 'Invest',
    description: 'Strategic land acquisition and capital deployment across high-growth markets.',
    number: '01',
    href: '/capabilities',
    image: '/images/invest.webp',
  },
  {
    title: 'Design',
    description: 'In-house architectural excellence creating iconic, functional spaces.',
    number: '02',
    href: '/capabilities',
    image: '/images/design.webp',
  },
  {
    title: 'Build',
    description: 'Vertically integrated construction ensuring quality, speed, and cost control.',
    number: '03',
    href: '/capabilities',
    image: '/images/build.webp',
  },
  {
    title: 'Manage',
    description: 'End-to-end property and asset management maximizing long-term value.',
    number: '04',
    href: '/capabilities',
    image: '/images/manage.webp',
  },
];

export default function WhatWeDo() {
  return (
    <Section background="white" containerSize="xl" noPadding>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
        <motion.h2
          className="text-[#1a1a1a] mb-8 md:mb-10 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Vertically Integrated.
          <br />
          <span className="font-bold">Completely Controlled.</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl font-light leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          From land acquisition to long-term asset management, our integrated model delivers
          unparalleled quality, efficiency, and accountability. One team. One vision. Zero compromises.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link
              href={capability.href}
              className="block group cursor-pointer h-full bg-white hover:bg-[#1a1a1a] transition-all duration-500 relative overflow-hidden hover:shadow-2xl hover:-translate-y-2"
            >
              <div>
                {capability.title === 'Build' || capability.title === 'Invest' || capability.title === 'Design' || capability.title === 'Manage' ? (
                  <div className="relative aspect-[3/2] overflow-hidden mb-8">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      loading="lazy"
                      className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[3/2] overflow-hidden mb-8 flex items-center justify-center bg-gray-100">
                    <span className="text-[8rem] font-bold text-gray-200 group-hover:text-[#d4a574]/20 transition-colors">
                      {capability.number}
                    </span>
                  </div>
                )}
                <div className="space-y-4 p-6 lg:p-8">
                  <h3 className="text-[#1a1a1a] group-hover:text-[#d4a574] transition-colors text-2xl lg:text-3xl font-semibold">
                    {capability.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 group-hover:text-gray-500 leading-relaxed transition-colors">
                    {capability.description}
                  </p>
                  <div className="flex items-center gap-3 text-[#d4a574] font-semibold text-sm uppercase tracking-wider group-hover:translate-x-3 transition-transform duration-300 pt-2">
                    <span>Learn more</span>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
