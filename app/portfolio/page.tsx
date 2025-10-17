import Hero from '@/components/portfolio/Hero';
import ProjectGrid from '@/components/portfolio/ProjectGrid';
import Stats from '@/components/portfolio/Stats';

export const metadata = {
  title: 'Portfolio | Insignia Group',
  description: '43 iconic buildings across New York City. Explore our portfolio of residential, commercial, and mixed-use developments that define urban excellence.',
};

export default function PortfolioPage() {
  return (
    <main>
      <Hero />
      <Stats />
      <ProjectGrid />
    </main>
  );
}
