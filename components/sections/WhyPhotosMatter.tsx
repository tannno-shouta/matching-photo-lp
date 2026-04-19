'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PHOTO_MATTERS_POINTS, PHOTO_CHECKLIST } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';

export function WhyPhotosMatter() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 px-4 bg-[#FAFAF8]" id="why-photos">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Why Photos Matter"
          title="マッチングの成否、その9割は写真で決まると言われている。"
          subtitle="どんなに中身が良くても、写真で止まらなければ出会いは生まれない。「写真が9割」と言われるほど、マッチングアプリでは第一印象がすべてを左右します。"
        />

        {/* 4つの根拠グリッド — カード群は一括フェードに軽量化 */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {PHOTO_MATTERS_POINTS.map((point, i) => (
            <div
              key={i}
              className="relative bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#C9A96E]/40 hover:shadow-md transition-all duration-300"
            >
              <p
                className="text-3xl md:text-4xl font-bold mb-2 leading-none"
                style={{
                  fontFamily: 'var(--font-heading)',
                  background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 50%, #C9A96E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {point.value}
              </p>
              <p className="text-sm font-bold text-[#1A2744] mb-2">{point.label}</p>
              <p className="text-xs text-[#6B7280] leading-relaxed">{point.detail}</p>
            </div>
          ))}
        </motion.div>

        {/* チェックリスト */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1A2744] rounded-2xl p-6 sm:p-8 shadow-lg overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-45deg, transparent, transparent 24px, rgba(201,169,110,0.06) 24px, rgba(201,169,110,0.06) 25px)',
            }}
          />

          <h3
            className="relative text-white text-xl sm:text-2xl font-bold mb-5 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            あなたのメイン写真、
            <br className="sm:hidden" />
            これ守れてますか？
          </h3>
          <ul className="relative space-y-3 max-w-xl mx-auto">
            {PHOTO_CHECKLIST.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-white/90 text-sm sm:text-base"
              >
                <span aria-hidden="true" className="inline-flex w-5 h-5 rounded-full border border-[#C9A96E] items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 着地コピー */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[#1A2744] mt-10 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          撮影技術だけでは足りない。
          <br />
          <strong>「撮る前の垢抜け」までやって、はじめて9割が機能する。</strong>
          <br />
          しかも<strong className="text-[#C9A96E]">「誰に刺さるか」まで設計して</strong>、はじめて好みの女性に届く。
        </motion.p>
      </div>
    </section>
  );
}
