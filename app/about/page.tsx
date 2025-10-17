import CompanyStructure from '@/components/about/CompanyStructure';
import Hero from '@/components/about/Hero';

export const metadata = {
  title: 'About | Insignia Group',
  description: 'Three generations of vertically integrated real estate excellence. Learn about Insignia Group and our family of companies.',
};

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <CompanyStructure />
    </main>
  );
}
