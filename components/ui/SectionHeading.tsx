'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <p
          className="text-[#C9A96E] font-semibold tracking-widest text-sm uppercase mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-[#1A2744]'
        }`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-white/80' : 'text-[#6B7280]'
          }`}
        >
          {subtitle}
        </p>
      )}
      {/* 菱形モチーフ ── ◇ ── */}
      <div className={`flex items-center gap-3 mt-5 ${center ? 'justify-center' : ''}`}>
        <div
          className="h-px flex-1 max-w-[60px]"
          style={{ background: 'linear-gradient(to left, #C9A96E, transparent)' }}
        />
        <div
          className="w-1.5 h-1.5 rotate-45 flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 100%)' }}
        />
        <div
          className="h-px flex-1 max-w-[60px]"
          style={{ background: 'linear-gradient(to right, #C9A96E, transparent)' }}
        />
      </div>
    </motion.div>
  );
}
