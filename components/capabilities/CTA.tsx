'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '../ui/Section';

export default function CTA() {
  return (
    <Section background="white" containerSize="xl">
      <div className="max-w-[2000px] mx-auto text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#1a1a1a] mb-6">
            Ready to discuss <span className="font-bold">your project?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
            Whether you're seeking a development partner, exploring joint ventures, or considering our management services, we'd welcome the conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-block px-10 py-5 bg-[#1a1a1a] text-white font-semibold uppercase tracking-wide text-sm hover:bg-[#d4a574] transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Get In Touch
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/portfolio"
                className="inline-block px-10 py-5 border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold uppercase tracking-wide text-sm hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
