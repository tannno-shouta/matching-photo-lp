'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import { LINE_URL } from '@/lib/constants';

interface PricingCardProps {
  name: string;
  price: number;
  duration: string;
  photos: number;
  features: string[];
  isRecommended?: boolean;
  ctaText: string;
  index: number;
}

export function PricingCard({
  name,
  price,
  duration,
  photos,
  features,
  isRecommended = false,
  ctaText,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-2xl p-6 flex flex-col ${
        isRecommended
          ? 'bg-[#1A2744] text-white shadow-2xl scale-105 ring-2 ring-[#C9A96E]'
          : 'bg-white text-[#1A1A1A] shadow-md border border-[#E5E7EB]'
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A96E] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
          ⭐ 最人気プラン
        </div>
      )}

      <div className="mb-6">
        <p className={`text-sm font-bold tracking-widest uppercase mb-2 ${isRecommended ? 'text-[#C9A96E]' : 'text-[#6B7280]'}`}>
          {name}
        </p>
        <div className="flex items-end gap-1 mb-1">
          <span className={`text-4xl font-bold ${isRecommended ? 'text-white' : 'text-[#1A2744]'}`}>
            ¥{price.toLocaleString()}
          </span>
          <span className={`text-sm mb-1 ${isRecommended ? 'text-white/70' : 'text-[#6B7280]'}`}>/回</span>
        </div>
        <div className={`flex gap-4 text-sm ${isRecommended ? 'text-white/70' : 'text-[#6B7280]'}`}>
          <span>撮影時間 {duration}</span>
          <span>納品 {photos}枚</span>
        </div>
      </div>

      <ul className="flex-1 space-y-2.5 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className="text-[#C9A96E] font-bold mt-0.5">✓</span>
            <span className={isRecommended ? 'text-white/90' : 'text-[#6B7280]'}>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        href={LINE_URL}
        external
        variant={isRecommended ? 'cta' : 'outline'}
        size="md"
        className="w-full"
        pulse={isRecommended}
      >
        {ctaText}
      </Button>
    </motion.div>
  );
}
