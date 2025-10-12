import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  noPadding?: boolean;
  background?: 'white' | 'warm-gray' | 'charcoal';
}

const backgroundClasses = {
  white: 'bg-white',
  'warm-gray': 'bg-warm-gray',
  charcoal: 'bg-charcoal text-white',
};

export default function Section({
  children,
  className = '',
  containerSize = 'lg',
  noPadding = false,
  background = 'white',
}: SectionProps) {
  const paddingClass = noPadding ? '' : 'py-20 md:py-32 lg:py-40 xl:py-48';

  return (
    <section className={`${backgroundClasses[background]} ${paddingClass} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
