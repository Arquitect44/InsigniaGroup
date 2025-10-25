'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
const stats = [
  {
    number: 43,
    label: 'Buildings Delivered',
    suffix: '+',
    decimals: 0,
  },
  {
    number: 3.3,
    label: 'Square Feet Developed',
    suffix: 'M',
    decimals: 1,
  },
  {
    prefix: '$',
    number: 1.1,
    label: 'In Total Valuation',
    suffix: 'B',
    decimals: 1,
  },
  {
    number: 30,
    label: 'Years of Excellence',
    suffix: '+',
    decimals: 0,
  },
];

function Counter({ value, decimals, suffix, prefix }: { value: number; decimals: number; suffix?: string; prefix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref}>
      {prefix && <span className="text-[#d4a574]">{prefix}</span>}
      <motion.span>{rounded}</motion.span>
      {suffix && <span className="text-[#d4a574]">{suffix}</span>}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#1a1a1a] py-10 md:py-16 lg:py-20">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Proven track record. <span className="font-bold">Measurable impact.</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-light text-gray-300 mb-16 md:mb-20 lg:mb-24 max-w-4xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We've applied our deep expertise of investing in, managing and operating real estate to drive lasting economic and social impact. By prioritizing people, partnerships and places, we generate meaningful returns for our stakeholders and enhance value for our capital partners.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 lg:gap-12 xl:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-left border-l-4 border-[#d4a574] pl-8 lg:pl-10"
              initial={{ opacity: 0, x: -100, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight cursor-default"
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{
                  scale: 1.15,
                  color: "#d4a574",
                  textShadow: "0 0 30px rgba(212, 165, 116, 0.8), 0 0 60px rgba(212, 165, 116, 0.4)"
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2 + 0.3,
                  duration: 0.7,
                  type: "spring",
                  bounce: 0.5,
                  scale: { duration: 0.2 },
                  color: { duration: 0.2 }
                }}
              >
                <Counter value={stat.number} decimals={stat.decimals} suffix={stat.suffix} prefix={stat.prefix} />
              </motion.div>
              <motion.div
                className="text-gray-400 text-sm md:text-base lg:text-lg uppercase tracking-wider font-medium whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
