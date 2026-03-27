'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'cta' | 'primary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  pulse?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  cta: 'bg-[#06C755] hover:bg-[#05b34c] text-white font-bold shadow-lg',
  primary: 'bg-[#1A2744] hover:bg-[#243560] text-white font-bold shadow-md',
  outline: 'border-2 border-[#1A2744] text-[#1A2744] hover:bg-[#1A2744] hover:text-white font-bold',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export function Button({
  href,
  onClick,
  variant = 'cta',
  size = 'md',
  children,
  className = '',
  external = false,
  pulse = false,
}: ButtonProps) {
  const baseClass = `inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  const pulseAnimation = pulse
    ? {
        animate: {
          boxShadow: [
            '0 0 0 0 rgba(6, 199, 85, 0.4)',
            '0 0 0 12px rgba(6, 199, 85, 0)',
          ],
        },
        transition: { duration: 1.5, repeat: Infinity },
      }
    : {};

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
          {...motionProps}
          {...pulseAnimation}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} {...pulseAnimation}>
        <Link href={href} className={baseClass}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button onClick={onClick} className={baseClass} {...motionProps} {...pulseAnimation}>
      {children}
    </motion.button>
  );
}
