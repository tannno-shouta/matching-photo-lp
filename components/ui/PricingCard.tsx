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
      initial={{ opacity: 0, y: 32, rotate: isRecommended ? 0 : index === 0 ? 0.5 : -0.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-2xl p-6 flex flex-col overflow-hidden ${
        isRecommended
          ? 'bg-[#1A2744] text-white shadow-2xl scale-105 ring-2 ring-[#C9A96E]'
          : 'bg-white text-[#1A1A1A] shadow-md border border-[#E5E7EB] hover:border-[#C9A96E]/30 hover:shadow-lg transition-all duration-300'
      }`}
    >
      {/* おすすめプランの背景パターン */}
      {isRecommended && (
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 24px, rgba(201,169,110,0.06) 24px, rgba(201,169,110,0.06) 25px)',
          }}
        />
      )}

      {/* おすすめリボンバッジ */}
      {isRecommended && (
        <>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div
              className="text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 50%, #C9A96E 100%)',
              }}
            >
              ⭐ 最人気プラン
            </div>
          </div>
          {/* 上部ゴールドライン */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
        </>
      )}

      <div className="relative z-10 mb-6 mt-2">
        <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${isRecommended ? 'text-[#C9A96E]' : 'text-[#6B7280]'}`}>
          {name}
        </p>
        <div className="flex items-end gap-1 mb-1">
          <span
            className={`text-4xl font-bold ${isRecommended ? '' : 'text-[#1A2744]'}`}
            style={isRecommended ? {
              background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            } : {}}
          >
            ¥{price.toLocaleString()}
          </span>
          <span className={`text-sm mb-1 ${isRecommended ? 'text-white/60' : 'text-[#6B7280]'}`}>/回</span>
        </div>
        <div className={`flex gap-4 text-xs ${isRecommended ? 'text-white/60' : 'text-[#6B7280]'}`}>
          <span>撮影時間 {duration}</span>
          <span>納品 {photos}枚</span>
        </div>
      </div>

      <ul className="relative z-10 flex-1 space-y-2.5 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className="text-[#C9A96E] font-bold mt-0.5 flex-shrink-0">✓</span>
            <span className={isRecommended ? 'text-white/90' : 'text-[#6B7280]'}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="relative z-10">
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
      </div>
    </motion.div>
  );
}
