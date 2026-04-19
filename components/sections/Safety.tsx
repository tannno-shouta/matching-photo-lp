'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SAFETY_POINTS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';

export function Safety() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="safety" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Safety"
          title="ご依頼前の、安心ポイント"
          subtitle="初めての方でも迷わず一歩踏み出せるように。撮影前から撮影後まで、安心して任せられる仕組みを。"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SAFETY_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-[#FAFAF8] rounded-2xl border border-[#E5E7EB] p-6 hover:border-[#C9A96E]/40 hover:shadow-md transition-all duration-300"
            >
              {/* 上部ゴールドライン */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/60 to-transparent" />

              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,169,110,0.15), rgba(201,169,110,0.05))',
                  border: '1px solid rgba(201,169,110,0.3)',
                }}
                aria-hidden="true"
              >
                {point.icon}
              </div>

              <h3 className="text-base font-bold text-[#1A2744] mb-2 leading-snug">
                {point.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[#6B7280] text-xs mt-8"
        >
          ※ キャンセル規定・個人情報の詳細はLINEでのご相談時にご説明いたします。
        </motion.p>
      </div>
    </section>
  );
}
