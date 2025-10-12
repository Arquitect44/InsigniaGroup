import Hero from '@/components/contact/Hero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata = {
  title: 'Contact | Insignia Group',
  description: 'Get in touch with Insignia Group to discuss development partnerships, investment opportunities, or property management services.',
};

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <ContactForm />
      <ContactInfo />
    </main>
  );
}
