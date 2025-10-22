'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import { projects as allProjects } from '@/data/projects';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'mixed-use', label: 'Mixed-Use' },
  { id: 'industrial', label: 'Industrial' },
];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? allProjects
    : allProjects.filter(project => project.sector === activeCategory);

  return (
    <Section background="warm-gray" containerSize="full">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={activeCategory === category.id ? {
                backgroundColor: 'var(--color-gold)',
                color: 'white',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: 'var(--color-gold)'
              } : {
                backgroundColor: 'white',
                color: '#1a1a1a',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: '#d1d5db'
              }}
              className={`px-6 py-3 font-semibold uppercase tracking-wide text-sm transition-all duration-300 ${
                activeCategory === category.id ? 'shadow-lg' : ''
              }`}
              onMouseEnter={(e) => {
                if (activeCategory !== category.id) {
                  e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.id) {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#1a1a1a';
                  e.currentTarget.style.borderColor = '#d1d5db';
                }
              }}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Sector Badge */}
                  <div className="absolute top-4 left-4 bg-[#d4a574] text-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                    {project.sector}
                  </div>
                  {project.status === 'in-progress' && (
                    <div className="absolute top-4 right-4 bg-white text-[#1a1a1a] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      Under Construction
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#d4a574] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
                    {project.location}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Size</p>
                      <p className="text-sm font-semibold text-[#1a1a1a]">
                        {project.squareFootage ? `${project.squareFootage.toLocaleString()} SF` : 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Units</p>
                      <p className="text-sm font-semibold text-[#1a1a1a]">
                        {project.numberOfUnits ? `${project.numberOfUnits}` : 'N/A'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Completion</p>
                      <p className="text-sm font-semibold text-[#1a1a1a]">
                        {project.completionDate ? project.completionDate.split(' ')[1] || project.completionDate.split(' ')[0] : 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note about total projects */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 text-lg">
            Showcasing 26 of our 43 prestigious buildings.
            <br />
            <span className="text-sm mt-2 block">Each project reflecting our commitment to excellence and vertical integration.</span>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
