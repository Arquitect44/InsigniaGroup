import Hero from '@/components/capabilities/Hero';
import CapabilityShowcase from '@/components/capabilities/CapabilityShowcase';
import Expertise from '@/components/capabilities/Expertise';
import CTA from '@/components/capabilities/CTA';

export const metadata = {
  title: 'Capabilities | Insignia Group',
  description: 'Comprehensive development capabilities spanning investment, design, construction, and property management. Full-service expertise under one roof.',
};

export default function CapabilitiesPage() {
  return (
    <main>
      <Hero />
      <CapabilityShowcase />
      <Expertise />
      <CTA />
    </main>
  );
}
