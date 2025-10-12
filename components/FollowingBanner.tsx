'use client';

import { motion } from 'framer-motion';

export default function FollowingBanner() {
  return (
    <motion.div
      className="fixed right-0 top-0 h-screen flex items-center justify-center pointer-events-none z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <div className="relative h-full flex items-center">
        {/* Vertical line */}
        <div className="absolute right-10 top-0 bottom-0 w-px bg-[#d4a574]/30" />

        {/* Rotated text */}
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <span className="text-sm tracking-[0.6em] font-semibold text-[#d4a574]/60 uppercase pb-0.5">
            INSIGNIA GROUP
          </span>
        </div>
      </div>
    </motion.div>
  );
}
