import Link from 'next/link';
import Container from './ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Approach', href: '/approach' },
    ],
    services: [
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Capabilities', href: '/capabilities' },
 
    ],
    contact: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Leasing Inquiries', href: '/contact?type=leasing' },
    ],
  };

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold mb-4">INSIGNIA GROUP</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Vertically integrated real estate development. From vision to completion.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-[#d4a574]">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-[#d4a574]">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-[#d4a574]">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Insignia Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm cursor-pointer">
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
