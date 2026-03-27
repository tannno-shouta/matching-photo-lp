'use client';

import { motion } from 'framer-motion';
import { MATCH_POINTS, PAIN_POINTS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';

export function PainPoints() {
  return (
    <section className="py-20 px-4 bg-white" id="pain">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Problem"
          title="その写真、マッチしない理由があります"
          subtitle="マッチングアプリで「いいね」が来ない原因の90%は写真にあります。あなたはこんな写真を使っていませんか？"
        />

        {/* NG例 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#FFF5F5] border border-red-100 rounded-2xl p-5"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{point.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-500 font-bold text-lg">✕</span>
                    <p className="font-bold text-[#1A2744] text-sm">{point.title}</p>
                  </div>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 橋渡し */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block bg-[#1A2744] text-white text-sm font-bold px-6 py-2 rounded-full mb-8">
            マッチングアプリでいいねされる写真には、共通する法則がある
          </div>
          <h3 className="text-2xl font-bold text-[#1A2744] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            女性が本能的に好む<span className="text-[#C9A96E]">3つの要素</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {MATCH_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#F0FFF4] border border-green-100 rounded-2xl p-5"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{point.icon}</span>
                <p className="text-[#1A1A1A] text-sm leading-relaxed font-medium">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[#6B7280] mt-10 text-sm"
        >
          "作りすぎない、でもちゃんとした写真"が最も反応される ── これが{' '}
          <strong className="text-[#1A2744]">プロのロケーション撮影</strong>で実現できます。
        </motion.p>
      </div>
    </section>
  );
}
