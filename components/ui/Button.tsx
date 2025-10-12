'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles = {
  primary: 'bg-white text-[#1a1a1a] hover:bg-[#d4a574] hover:text-white shadow-lg hover:shadow-2xl',
  secondary: 'bg-[#1a1a1a] text-white hover:bg-[#d4a574] shadow-lg hover:shadow-2xl',
  outline: 'border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white shadow-md hover:shadow-xl',
};

const sizeStyles = {
  md: 'px-8 py-4 text-sm',
  lg: 'px-12 py-5 lg:px-14 lg:py-6 text-sm lg:text-base',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'lg',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-semibold uppercase tracking-wide transition-all duration-300 cursor-pointer inline-block';
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      {href ? (
        <Link href={href} className={combinedStyles}>
          {children}
        </Link>
      ) : (
        <button onClick={onClick} type={type} className={combinedStyles}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return buttonContent;
}
