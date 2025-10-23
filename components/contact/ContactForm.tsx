'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const inquiryTypes = [
  'Development Partnership',
  'Joint Venture Opportunity',
  'Property Management',
  'Investment Opportunity',
  'General Inquiry',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Using Web3Forms - Get your access key at https://web3forms.com
      // Just enter your email (info@insigniagroup.com) to get the key
      // Replace 'YOUR_ACCESS_KEY' with your actual key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Inquiry: ${formData.inquiryType}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact us directly at (718) 366-6789.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section background="white" containerSize="lg" noPadding>
      <div className="max-w-[2000px] mx-auto py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left Column - Intro */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#1a1a1a] mb-6">
              Get <span className="font-bold">In Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              We respond to all inquiries within 24 business hours. For time-sensitive opportunities, please call our main office directly.
            </p>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-start gap-3">
                <span className="text-[#d4a574] mt-1">•</span>
                <span>Development partnerships and joint ventures</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#d4a574] mt-1">•</span>
                <span>Property management services</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#d4a574] mt-1">•</span>
                <span>Investment opportunities</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#d4a574] mt-1">•</span>
                <span>Site acquisition and development consulting</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors duration-300 bg-white"
                >
                  <option value="">Select an option</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-[#d4a574] focus:ring-1 focus:ring-[#d4a574] outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  className="p-4 bg-green-50 border border-green-200 rounded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-green-800 font-semibold">Message sent successfully!</p>
                  <p className="text-green-700 text-sm mt-1">We'll get back to you within 24 business hours.</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  className="p-4 bg-red-50 border border-red-200 rounded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-red-800 font-semibold">Error</p>
                  <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                </motion.div>
              )}

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    backgroundColor: status === 'loading' ? '#999' : '#1a1a1a',
                    color: 'white',
                    borderWidth: '0',
                  }}
                  className="w-full px-10 py-5 font-semibold uppercase tracking-wide text-sm transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  onMouseEnter={(e) => {
                    if (status !== 'loading') {
                      e.currentTarget.style.backgroundColor = 'var(--color-gold)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (status !== 'loading') {
                      e.currentTarget.style.backgroundColor = '#1a1a1a';
                    }
                  }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
