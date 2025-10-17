'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-[#1a1a1a] min-h-[60vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#d4a574 1px, transparent 1px), linear-gradient(90deg, #d4a574 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-[#d4a574] font-semibold text-sm lg:text-base tracking-wider uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About Us
          </motion.p>

          <h1 className="text-white mb-8 leading-tight">
            Three Generations.
            <br />
            One Vision.
            <br />
            <span className="font-bold">Complete Control.</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            For over two decades, our family of companies has delivered vertically integrated excellence across every stage of real estate development—from initial vision to lasting value.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
