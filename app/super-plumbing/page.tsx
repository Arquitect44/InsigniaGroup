import type { Metadata } from 'next';
import SuperPlumbingContent from './SuperPlumbingContent';

export const metadata: Metadata = {
  title: 'Super Plumbing & Building Supply | Coming Soon',
  description: 'MEP Systems & Supply Chain solutions from Super Plumbing & Building Supply. Part of the Insignia Group family of companies.',
  themeColor: '#1a1a1a',
};

export default function SuperPlumbingPage() {
  return <SuperPlumbingContent />;
}
