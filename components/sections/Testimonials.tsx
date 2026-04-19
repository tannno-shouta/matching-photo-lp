'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { STATS, TESTIMONIALS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { TestimonialCard } from '../ui/TestimonialCard';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 px-4 bg-[#0d1f3c] overflow-hidden" id="testimonials">
      {/* diagonal ストライプパターン */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(201,169,110,0.04) 30px, rgba(201,169,110,0.04) 31px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="お客様の声・実績"
          subtitle="「2週間で5人とデート」「付き合いました」── あなたと同じ悩みを持っていた男性たちの、リアルな結果です。"
          light
        />

        {/* カウンター */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/8 rounded-2xl p-5 text-center border border-white/10 hover:border-[#C9A96E]/40 hover:shadow-md transition-all duration-300"
            >
              <p className="text-3xl font-bold" style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.suffix.includes('倍') ? 1 : 0}
                />
              </p>
              <p className="text-white/60 text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* カルーセル + 矢印ボタン（lg未満） / グリッド（lg以上） */}
        <div className="relative">
          {/* 左矢印（md のみ。lg 以上は grid なので非表示） */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex lg:hidden absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 border border-white/20 rounded-full shadow-md items-center justify-center text-white/70 hover:border-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors duration-200"
            aria-label="前へ"
          >
            <svg aria-hidden="true" focusable="false" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* 右矢印（md のみ。lg 以上は grid なので非表示） */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex lg:hidden absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 border border-white/20 rounded-full shadow-md items-center justify-center text-white/70 hover:border-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors duration-200"
            aria-label="次へ"
          >
            <svg aria-hidden="true" focusable="false" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div ref={scrollRef} className="overflow-x-auto lg:overflow-visible pb-4 scrollbar-hide">
            <div className="flex gap-4 w-max lg:grid lg:grid-cols-2 lg:gap-6 lg:w-full">
              {TESTIMONIALS.map((t, i) => (
                <TestimonialCard key={i} {...t} index={i} />
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-white/40 text-xs mt-3 lg:hidden">← 横にスクロールできます →</p>
      </div>
    </section>
  );
}
