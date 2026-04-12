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
          title="あなたの写真、マッチしない理由があります"
          subtitle="マッチングアプリで「いいね」が増えない男性の9割は、写真が原因です。心当たりのある写真はありますか？"
        />

        {/* NG例 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-[#1A2744]/5 border border-[#1A2744]/20 rounded-2xl p-5 overflow-hidden"
            >
              {/* NG バッジ */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-[#1A2744] text-white rounded-full flex items-center justify-center font-bold text-xs leading-none">
                NG
              </div>
              <div className="flex items-start gap-3 pr-8">
                <div className="w-10 h-10 bg-[#1A2744]/10 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  {point.icon}
                </div>
                <div>
                  <p className="font-bold text-[#1A2744] text-sm mb-1">{point.title}</p>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 橋渡し区切り */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative text-center mb-12"
        >
          {/* 区切りライン */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9A96E]/40" />
            <div className="bg-[#1A2744] text-white text-xs font-bold px-5 py-2.5 rounded-full tracking-widest">
              マッチする写真には共通の法則がある
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9A96E]/40" />
          </div>

          <h3 className="text-2xl font-bold text-[#1A2744]" style={{ fontFamily: 'var(--font-heading)' }}>
            女性が本能的に好む<span className="text-[#C9A96E]">3つの要素</span>
          </h3>
        </motion.div>

        {/* OK例 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {MATCH_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-[#C9A96E]/8 border border-[#C9A96E]/30 rounded-2xl p-5 overflow-hidden"
            >
              {/* OK バッジ */}
              <div
                className="absolute top-3 right-3 w-8 h-8 text-[#1A2744] rounded-full flex items-center justify-center font-bold text-xs leading-none"
                style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 100%)' }}
              >
                OK
              </div>
              <div className="flex items-start gap-3 pr-8">
                <div className="w-10 h-10 bg-[#C9A96E]/15 rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  {point.icon}
                </div>
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
