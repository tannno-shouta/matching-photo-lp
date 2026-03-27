'use client';

import { motion } from 'framer-motion';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { SectionHeading } from '../ui/SectionHeading';

export function BeforeAfter() {
  return (
    <section className="py-20 px-4 bg-[#1A2744]" id="before-after">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Before / After"
          title="こんなに変わります"
          subtitle="スマホ自撮りとプロ撮影の差を、スライダーで比べてみてください。"
          light
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <BeforeAfterSlider
            beforeSrc="/images/before-after/before.jpg"
            afterSrc="/images/before-after/after.jpg"
            beforeAlt="撮影前：スマホ自撮り"
            afterAlt="撮影後：プロロケーション撮影"
          />
          <p className="text-center text-white/50 text-sm mt-4">
            ← スライダーを左右に動かして比較してください →
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
          {[
            { label: 'いいね数', before: '3件/日', after: '11件/日' },
            { label: 'マッチ率', before: '5%', after: '28%' },
            { label: '返信率', before: '20%', after: '65%' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/10 rounded-xl p-4"
            >
              <p className="text-[#C9A96E] text-xs font-bold mb-2">{item.label}</p>
              <p className="text-white/60 text-sm line-through">{item.before}</p>
              <p className="text-white text-lg font-bold">→ {item.after}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
