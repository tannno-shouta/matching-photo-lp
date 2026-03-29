'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { LINE_URL } from '@/lib/constants';

const TRUST_ITEMS = [
  '✓ 相談・見積もり無料',
  '✓ キャンセル料なし',
  '✓ 24時間以内返信',
  '✓ 写真が苦手でも大丈夫',
];

export function BottomCTA() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-[#0d1f3c] via-[#1A2744] to-[#1e2d50] overflow-hidden" id="contact">
      {/* 背景画像 */}
      <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-10" />

      {/* 幾何学パターン — radial gradient dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,169,110,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* 装飾円 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9A96E]/6 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#C9A96E]/8 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 1.02, y: 16 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          {/* 緊急性バッジ — パルスアニメーション */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-8"
          >
            <span className="bg-red-500/90 text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              今月残り3枠のみ
            </span>
          </motion.div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            まずは
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 50%, #C9A96E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              無料相談
            </span>
            から<br />
            始めてみませんか？
          </h2>

          <p className="text-white/80 text-lg mb-4 leading-relaxed">
            写真が苦手でも、カメラが初めてでも大丈夫。<br />
            会話しながら撮影するから、<strong className="text-white">緊張せずに自然な笑顔</strong>が引き出せます。
          </p>

          <p className="text-white/40 text-sm mb-10 tracking-wide">
            ご返信は<strong className="text-white/60">24時間以内</strong>にお送りします
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={LINE_URL} external variant="cta" size="lg" pulse className="text-lg">
              <span className="text-2xl">💬</span> LINEで無料相談する
            </Button>
          </div>

          {/* 安心感 */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10 text-sm text-white/50">
            {TRUST_ITEMS.map((item, i) => (
              <span key={i} className="hover:text-white/70 transition-colors duration-200">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
