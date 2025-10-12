'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';

const projects = [
  {
    id: 1,
    title: 'The Residences at LIC',
    location: 'Long Island City, Queens',
    type: 'Residential',
    category: 'residential',
    size: '450,000 SF',
    units: '320 Units',
    year: '2023',
    description: 'Luxury waterfront residences with panoramic Manhattan skyline views.',
    image: '/projects/lic-tower.webp',
    featured: true,
  },
  {
    id: 2,
    title: 'Hudson Yards Medical',
    location: 'Manhattan',
    type: 'Healthcare',
    category: 'healthcare',
    size: '280,000 SF',
    units: 'NYU Partnership',
    year: '2022',
    description: 'State-of-the-art medical facility adjacent to Hudson Yards development.',
    image: '/projects/medical-center.webp',
    featured: true,
  },
  {
    id: 3,
    title: 'Brooklyn Heights Plaza',
    location: 'Brooklyn Heights',
    type: 'Mixed-Use',
    category: 'mixed-use',
    size: '520,000 SF',
    units: '180 Units + Retail',
    year: '2021',
    description: 'Mixed-use development combining residential, retail, and community spaces.',
    image: '/projects/brooklyn-plaza.webp',
    featured: true,
  },
  {
    id: 4,
    title: 'Park Avenue Office Tower',
    location: 'Midtown Manhattan',
    type: 'Commercial',
    category: 'commercial',
    size: '720,000 SF',
    units: 'Class A Office',
    year: '2020',
    description: 'Premium office space with LEED Gold certification and modern amenities.',
    image: '/projects/park-tower.webp',
    featured: false,
  },
  {
    id: 5,
    title: 'Williamsburg Lofts',
    location: 'Williamsburg, Brooklyn',
    type: 'Residential',
    category: 'residential',
    size: '180,000 SF',
    units: '140 Units',
    year: '2019',
    description: 'Industrial conversion featuring exposed brick and modern luxury finishes.',
    image: '/projects/williamsburg.webp',
    featured: false,
  },
  {
    id: 6,
    title: 'Chelsea Market District',
    location: 'Chelsea, Manhattan',
    type: 'Mixed-Use',
    category: 'mixed-use',
    size: '650,000 SF',
    units: '220 Units + Retail',
    year: '2019',
    description: 'Contemporary mixed-use development in the heart of Chelsea.',
    image: '/projects/chelsea.webp',
    featured: false,
  },
  {
    id: 7,
    title: 'Upper East Side Medical',
    location: 'Upper East Side',
    type: 'Healthcare',
    category: 'healthcare',
    size: '340,000 SF',
    units: 'Medical Complex',
    year: '2018',
    description: 'Comprehensive healthcare facility with outpatient and specialty services.',
    image: '/projects/ues-medical.webp',
    featured: false,
  },
  {
    id: 8,
    title: 'Tribeca Corporate Center',
    location: 'Tribeca, Manhattan',
    type: 'Commercial',
    category: 'commercial',
    size: '890,000 SF',
    units: 'Class A Office',
    year: '2017',
    description: 'Iconic office tower serving Fortune 500 companies and creative firms.',
    image: '/projects/tribeca.webp',
    featured: false,
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'mixed-use', label: 'Mixed-Use' },
  { id: 'healthcare', label: 'Healthcare' },
];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 bg-[#d4a574] text-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                    {project.type}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-white text-[#1a1a1a] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      Featured
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
                      <p className="text-sm font-semibold text-[#1a1a1a]">{project.size}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Units</p>
                      <p className="text-sm font-semibold text-[#1a1a1a]">{project.units}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Year</p>
                      <p className="text-sm font-semibold text-[#1a1a1a]">{project.year}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note about additional projects */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 text-lg">
            Showcasing 8 of our 43 landmark buildings.
            <br />
            <span className="text-sm mt-2 block">Additional projects available upon request.</span>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
