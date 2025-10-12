'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';

const offices = [
  {
    title: 'Headquarters',
    address: '56-12 58th Street',
    city: 'Maspeth, NY 11378',
    phone: '(718) 366-6789',
    email: 'info@insigniagroup.com',
  },
];

export default function ContactInfo() {
  return (
    <Section background="charcoal" containerSize="xl" noPadding>
      <div className="max-w-[2000px] mx-auto py-10 md:py-12 lg:py-16">
        <motion.h2
          className="text-white mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="font-bold">Office</span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-4xl font-light leading-relaxed mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Centrally located in Queens, serving our portfolio of landmark buildings across New York City.
        </motion.p>

        <div className="grid grid-cols-1 gap-8 lg:gap-12 max-w-2xl">
          {offices.map((office, index) => (
            <motion.div
              key={office.title}
              className="bg-white/5 p-8 border-l-2 border-[#d4a574]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {office.title}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Address</p>
                  <p>{office.address}</p>
                  <p>{office.city}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Phone</p>
                  <a href={`tel:${office.phone.replace(/[^0-9]/g, '')}`} className="hover:text-[#d4a574] transition-colors">
                    {office.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Email</p>
                  <a href={`mailto:${office.email}`} className="hover:text-[#d4a574] transition-colors break-all">
                    {office.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Hours */}
        <motion.div
          className="mt-16 pt-16 border-t border-[#d4a574]/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
          <div className="text-gray-300 space-y-2">
            <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
            <p>Saturday: By Appointment</p>
            <p>Sunday: Closed</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
