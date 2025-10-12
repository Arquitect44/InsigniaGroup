'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '../ui/Section';
import { projects } from '@/data/projects';

// Featured projects: NYU Langone (in-progress), Insignia Hotel (self-developed flagship), LIC Tower (largest residential)
const featuredProjectSlugs = ['nyu-langone-brooklyn', 'insignia-hotel-brooklyn', 'lic-tower'];
const featuredProjects = projects
  .filter(p => featuredProjectSlugs.includes(p.slug))
  .map(p => ({
    title: p.title,
    location: p.location,
    type: p.sector.charAt(0).toUpperCase() + p.sector.slice(1),
    details: p.numberOfUnits
      ? `${p.numberOfUnits} ${p.sector === 'commercial' ? 'Keys' : 'Units'}`
      : p.services.includes('full-integration') ? 'Self-Developed & Owned' : 'Design-Build',
    image: p.heroImage,
    slug: p.slug,
  }));

export default function FeaturedProjects() {
  return (
    <Section background="warm-gray" containerSize="xl">
      <div className="mb-10 lg:mb-14">
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 lg:mb-8 text-[#1a1a1a]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="font-semibold">Projects</span>
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Three generations of expertise delivering landmark developments across hotels, residential, healthcare, and commercial properties throughout New York City.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 xl:gap-8 mb-8 lg:mb-10">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <Link href={`/portfolio/${project.slug}`} className="group block cursor-pointer">
              <div className="relative aspect-[4/3] bg-gray-300 mb-6 lg:mb-8 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold text-lg lg:text-xl">View Project →</span>
                </div>
              </div>
              <div className="space-y-3 lg:space-y-4">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#1a1a1a] group-hover:text-[#d4a574] transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg lg:text-xl text-gray-600">{project.location}</p>
                <div className="flex flex-col gap-2">
                  <p className="text-sm lg:text-base text-gray-500 uppercase tracking-wide">{project.type}</p>
                  <p className="text-base lg:text-lg text-[#d4a574] font-medium">{project.details}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/portfolio"
            className="inline-block px-12 py-5 lg:px-14 lg:py-6 border-2 border-[#1a1a1a] text-[#1a1a1a] font-semibold uppercase tracking-wide text-sm lg:text-base hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
