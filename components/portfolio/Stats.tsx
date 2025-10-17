'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import Section from '../ui/Section';

const stats = [
  { number: 43, label: 'Buildings Completed', suffix: '', decimals: 0 },
  { number: 3.3, label: 'Million SF', suffix: 'M', decimals: 1 },
  { number: 257, label: 'Projects under construction', suffix: '+', decimals: 0 },
  { number: 20, label: 'Years Experience', suffix: '', decimals: 0 },
];

function Counter({ value, decimals, suffix }: { value: number; decimals: number; suffix?: string }) {
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
      <motion.span>{rounded}</motion.span>
      {suffix && <span className="text-[#d4a574]">{suffix}</span>}
    </span>
  );
}

export default function Stats() {
  return (
    <Section background="white" containerSize="xl" noPadding>
      <div className="max-w-[2000px] mx-auto py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="text-5xl lg:text-6xl font-bold text-[#d4a574] mb-3 cursor-default"
                initial={{ scale: 0, rotate: -15 }}
                whileInView={{ scale: 1, rotate: 0 }}
                whileHover={{
                  scale: 1.15,
                  color: "#d4a574",
                  textShadow: "0 0 30px rgba(212, 165, 116, 0.8), 0 0 60px rgba(212, 165, 116, 0.4)"
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  duration: 0.7,
                  type: "spring",
                  bounce: 0.5,
                  scale: { duration: 0.2 },
                  color: { duration: 0.2 }
                }}
              >
                <Counter value={stat.number} decimals={stat.decimals} suffix={stat.suffix} />
              </motion.div>
              <div className="text-sm lg:text-base text-gray-600 uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
