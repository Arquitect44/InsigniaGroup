import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-[1400px]',
  xl: 'max-w-[2000px]',
  full: 'max-w-none',
};

export default function Container({ children, className = '', size = 'lg' }: ContainerProps) {
  return (
    <div className={`mx-auto px-4 md:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
