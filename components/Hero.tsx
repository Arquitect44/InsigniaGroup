'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-[#1a1a1a] h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#1a1a1a]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={(e) => {
            const video = e.currentTarget;
            video.play().catch(() => {});
          }}
        >
          <source src="/heroback.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay - 10% opacity */}
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      {/* Text Content - Over Video */}
      <div className="relative z-20 max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white mb-8 leading-tight">
            Vertically integrated.
            <br />
            Completely controlled.
            <br />
            <span className="font-bold">Lasting impact.</span>
          </h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-12 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            From initial vision to final delivery, we control every stage of development ensuring uncompromising quality across 43 landmark buildings throughout New York City.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 lg:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/portfolio"
                className="block px-8 py-4 lg:px-10 lg:py-5 bg-white text-[#1a1a1a] font-semibold uppercase tracking-wide text-sm lg:text-base hover:bg-[#d4a574] hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
              >
                Explore Portfolio
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/approach"
                className="block px-8 py-4 lg:px-10 lg:py-5 border-2 border-white text-white font-semibold uppercase tracking-wide text-sm lg:text-base hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 cursor-pointer"
              >
                Our Approach
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
