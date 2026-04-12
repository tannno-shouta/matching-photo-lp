'use client';

import { motion } from 'framer-motion';
import { REASONS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';

const ICONS: React.ReactNode[] = [
  // ChatIcon — 会話型撮影
  <svg key="chat" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  // PinIcon — 福岡の撮影スポット
  <svg key="pin" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  // DiamondIcon — マッチングアプリ特化
  <svg key="diamond" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
  </svg>,
];

export function Reason() {
  return (
    <section className="py-20 px-4 bg-[#FAFAF8]" id="reason">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Why Us"
          title="選ばれる3つの理由"
          subtitle="「いいね数が増えた」「マッチして付き合った」── お客様の結果にコミットするための、3つのこだわり。"
        />

        <div className="space-y-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex gap-0 bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden hover:shadow-md hover:border-[#C9A96E]/30 transition-all duration-300"
            >
              {/* ゴールドのアクセントライン */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A96E] via-[#E8C97A] to-[#C9A96E]" />

              {/* 大きな番号 */}
              <div className="flex-shrink-0 flex items-center pl-6 pr-2 sm:pr-4">
                <span
                  className="block font-bold leading-none select-none"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                    background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 50%, #C9A96E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.35,
                  }}
                >
                  {reason.number}
                </span>
              </div>

              {/* テキスト */}
              <div className="flex-1 py-6 pr-4">
                <h3 className="text-lg font-bold text-[#1A2744] mb-2">{reason.title}</h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">{reason.description}</p>
              </div>

              {/* SVGアイコン */}
              <div className="flex-shrink-0 flex items-center pr-5 sm:pr-6">
                <div className="w-11 h-11 bg-[#1A2744]/5 rounded-full flex items-center justify-center">
                  {ICONS[i]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
