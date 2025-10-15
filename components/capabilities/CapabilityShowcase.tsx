'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

const capabilities = [
  {
    number: '01',
    title: 'Invest',
    subtitle: 'Strategic Capital Deployment',
    description: 'We identify and acquire prime development sites leveraging decades of market expertise and established relationships throughout New York City.',
    services: [
      'Site identification and acquisition',
      'Market analysis and feasibility studies',
      'Financial modeling and structuring',
      'Joint venture partnerships',
      'Capital markets expertise',
      'Risk assessment and mitigation',
    ],
    metrics: [
      { label: 'Projects Underwritten', value: '200+' },
      { label: 'Sites Acquired', value: '43' },
    ],
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Architectural Excellence',
    description: 'Our in-house design team creates buildings that maximize value while respecting context, combining aesthetic vision with practical functionality.',
    services: [
      'Conceptual design and massing',
      'Architectural documentation',
      'Interior design and space planning',
      'Zoning analysis and entitlements',
      'Building systems engineering',
      'Value engineering and cost optimization',
    ],
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Precision Construction',
    description: 'Direct construction oversight ensures quality standards are maintained throughout every phase. Daily site supervision catches issues before they become problems.',
    services: [
      'General contractor selection',
      'Construction management',
      'Quality control and inspection',
      'Schedule and budget oversight',
      'Subcontractor coordination',
      'Safety and compliance management',
    ],
    metrics: [
      { label: 'Buildings Built', value: '43' },
      { label: 'SF Delivered', value: '3.3M' },
    ],
  },
  {
    number: '04',
    title: 'Manage',
    subtitle: 'Long-Term Stewardship',
    description: 'We maintain the properties we build, ensuring sustained value through proactive management and continuous improvement.',
    services: [
      'Property management',
      'Leasing and tenant relations',
      'Building operations and maintenance',
      'Capital improvements planning',
      'Financial reporting and analysis',
      'Asset repositioning strategies',
    ],
  },
];

export default function CapabilityShowcase() {
  return (
    <Section background="white" containerSize="full">
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-24 lg:space-y-32">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.number}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              {/* Left Column - Title & Description */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <p className="text-[#d4a574] font-semibold text-sm tracking-wider uppercase mb-3">
                  {capability.number}
                </p>
                <h2 className="text-[#1a1a1a] mb-4">
                  {capability.title}
                </h2>
                <p className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6">
                  {capability.subtitle}
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                  {capability.description}
                </p>

                     {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                  {capability.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-3xl font-bold text-[#d4a574] mb-2">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 uppercase tracking-wide">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

    

              {/* Right Column - Services List */}
              <div className={`bg-gray-50 p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-lg font-bold text-[#1a1a1a] uppercase tracking-wide mb-6">
                  Core Services
                </h3>
                <ul className="space-y-4">
                  {capability.services.map((service, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.5 }}
                    >
                      <span className="text-[#d4a574] mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                        →
                      </span>
                      <span className="text-gray-700 leading-relaxed group-hover:text-[#1a1a1a] transition-colors duration-300">
                        {service}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
