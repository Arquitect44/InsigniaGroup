'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/ui/Section';

export default function SuperPlumbingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Section background="white" containerSize="lg">
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Logo/Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] mb-6">
              Super Plumbing & <span className="font-bold">Building Supply</span>
            </h1>

            <div className="w-24 h-1 bg-[#d4a574] mx-auto mb-8" />

            {/* Coming Soon Message */}
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-light mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Coming Soon
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We're currently building our new website. Check back soon to learn more about our MEP systems and supply chain solutions.
            </motion.p>

            {/* Back to Home Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link
                href="/"
                className="inline-block bg-[#1a1a1a] text-white px-10 py-5 font-semibold uppercase tracking-wide text-sm hover:bg-[#d4a574] transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Return to Insignia Group
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
