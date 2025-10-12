'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

const steps = [
  {
    phase: 'Phase 1',
    title: 'Identify & Acquire',
    duration: '3-6 months',
    description: 'Strategic site selection leveraging deep market knowledge and established relationships. We identify opportunities others miss.',
    details: [
      'Market analysis and opportunity screening',
      'Financial modeling and feasibility studies',
      'Due diligence and site evaluation',
      'Negotiation and acquisition closing',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Design & Permit',
    duration: '6-12 months',
    description: 'Architectural design that maximizes value while navigating complex zoning. Our in-house expertise accelerates approvals.',
    details: [
      'Conceptual design and massing studies',
      'Entitlement strategy and zoning analysis',
      'Detailed design and construction documents',
      'Permit submission and agency approvals',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Construct',
    duration: '18-36 months',
    description: 'Precision construction management with direct oversight. Daily site supervision ensures quality and schedule adherence.',
    details: [
      'GC selection and subcontractor coordination',
      'Daily construction oversight',
      'Quality control and materials verification',
      'Schedule management and milestone tracking',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Lease & Manage',
    duration: 'Ongoing',
    description: 'Long-term asset management protecting value and tenant relationships. We maintain what we build.',
    details: [
      'Tenant improvement coordination',
      'Lease-up strategy and execution',
      'Property management and maintenance',
      'Asset repositioning and value enhancement',
    ],
  },
];

export default function Process() {
  return (
    <Section background="charcoal" containerSize="xl">
      <div className="max-w-[2000px] mx-auto">
        <motion.h2
          className="text-white mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="font-bold">Process</span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-4xl font-light leading-relaxed mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          From site identification to long-term stewardship, we control every decision that impacts quality and value.
        </motion.p>

        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.phase}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pb-12 lg:pb-16 border-b border-[#d4a574]/20 last:border-b-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Left - Phase & Duration */}
              <div>
                <p className="text-[#d4a574] font-semibold text-sm tracking-wider uppercase mb-2">
                  {step.phase}
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Timeline: {step.duration}
                </p>
              </div>

              {/* Middle - Description */}
              <div className="lg:col-span-1">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Right - Details */}
              <div>
                <ul className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#d4a574] mt-1.5 flex-shrink-0">•</span>
                      <span className="text-gray-400 leading-relaxed">{detail}</span>
                    </li>
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
