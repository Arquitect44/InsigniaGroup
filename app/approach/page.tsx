import Hero from '@/components/approach/Hero';
import VerticalIntegration from '@/components/approach/VerticalIntegration';
import Philosophy from '@/components/approach/Philosophy';
import Process from '@/components/approach/Process';
import Difference from '@/components/approach/Difference';

export const metadata = {
  title: 'Our Approach | Insignia Group',
  description: 'Discover how Insignia Group\'s vertically integrated approach to real estate development ensures uncompromising quality and complete control from vision to delivery.',
};

export default function ApproachPage() {
  return (
    <main>
      <Hero />
      <VerticalIntegration />
      <Philosophy />
      <Process />
      <Difference />
    </main>
  );
}
