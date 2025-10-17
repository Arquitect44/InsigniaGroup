'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/approach', label: 'OUR APPROACH' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/capabilities', label: 'CAPABILITIES' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm relative">
      {/* Horizontal gold line - 4px up from bottom */}
      <div className="absolute left-0 right-0 bottom-3 h-0.5 bg-[#d4a574]" />
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center pl-4 md:pl-6 lg:pl-8 border-l-2 border-[#d4a574] -ml-4 md:-ml-6 lg:-ml-8 min-w-0">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold tracking-tight text-[#1a1a1a] whitespace-nowrap">
              INSIGNIA GROUP
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm lg:text-base font-medium tracking-wide text-gray-600 hover:text-[#d4a574] transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4a574] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#1a1a1a] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-medium text-[#1a1a1a] hover:text-[#d4a574] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
