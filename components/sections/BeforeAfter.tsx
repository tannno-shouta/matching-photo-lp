'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { SectionHeading } from '../ui/SectionHeading';

const METRICS = [
  { label: 'いいね数', before: '3件/日', after: '11件/日' },
  { label: 'マッチ率', before: '5%', after: '28%' },
  { label: '返信率', before: '20%', after: '65%' },
];

const CHANGE_POINTS = [
  {
    label: '眉・ヘア',
    detail: '平行眉に整え、前髪を流して清潔感を底上げ。美容師8年のノウハウで"似合う形"を設計。',
  },
  {
    label: '服装',
    detail: 'ライトブルーシャツで誠実さとフレッシュさを演出。好み女性から逆算した配色・丈感。',
  },
  {
    label: '表情・構図',
    detail: '会話でリラックスを引き出し、自然な微笑を切り出し。アプリUI最適化の縦構図で収めます。',
  },
];

export function BeforeAfter() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 px-4 bg-[#1A2744] overflow-hidden" id="before-after">
      {/* diagonal ストライプパターン */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(201,169,110,0.04) 30px, rgba(201,169,110,0.04) 31px)',
        }}
      />

      {/* 右上の装飾円 */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-[#C9A96E]/8 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Before / After"
          title="こんなに変わります"
          subtitle="スマホ自撮りとプロ撮影の差を、スライダーで比べてみてください。"
          light
        />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <BeforeAfterSlider
            beforeSrc="/images/before-after/before.jpg"
            afterSrc="/images/before-after/after.jpg"
            beforeAlt="撮影前：スマホ自撮り"
            afterAlt="撮影後：プロロケーション撮影"
          />
          <p className="text-center text-white/40 text-xs mt-3 tracking-widest uppercase">
            ← drag to compare →
          </p>
        </motion.div>

        {/* 変えたポイント — 偶然ではなく設計の結果であることを証明 */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-center text-[#C9A96E] text-[11px] font-bold tracking-[0.25em] uppercase mb-5">
            Designed, not accidental — 設計した"変化"
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CHANGE_POINTS.map((point, i) => (
              <motion.div
                key={point.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="relative bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3.5 hover:border-[#C9A96E]/40 transition-colors duration-300"
              >
                <p className="text-[#C9A96E] text-[10px] font-bold tracking-widest uppercase mb-1.5">
                  {point.label}
                </p>
                <p className="text-white/80 text-xs leading-relaxed">{point.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* メトリクス — 大きな数字で訴求 */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
          {METRICS.map((item, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/8 border border-white/10 rounded-2xl p-4 overflow-hidden group hover:border-[#C9A96E]/40 transition-colors duration-300"
            >
              {/* ゴールドの上ボーダー */}
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />

              <p className="text-[#C9A96E] text-[10px] font-bold mb-3 tracking-widest uppercase">{item.label}</p>
              <p className="text-white/40 text-xs line-through mb-1">{item.before}</p>
              <p
                className="font-bold leading-none"
                style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                  background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {item.after}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
