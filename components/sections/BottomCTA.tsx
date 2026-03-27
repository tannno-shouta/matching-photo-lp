'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { LINE_URL } from '@/lib/constants';

export function BottomCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#1A2744] to-[#243560] relative overflow-hidden" id="contact">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          {/* 緊急性バッジ */}
          <div className="inline-block bg-red-500/90 text-white text-sm font-bold px-5 py-2 rounded-full mb-8 shadow">
            🔥 今月残り3枠のみ
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            まずは<span className="text-[#C9A96E]">無料相談</span>から<br />
            始めてみませんか？
          </h2>

          <p className="text-white/80 text-lg mb-4 leading-relaxed">
            写真が苦手でも、カメラが初めてでも大丈夫。<br />
            会話しながら撮影するから、<strong className="text-white">緊張せずに自然な笑顔</strong>が引き出せます。
          </p>

          <p className="text-white/50 text-sm mb-10">
            ご返信は<strong className="text-white/80">24時間以内</strong>にお送りします
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={LINE_URL} external variant="cta" size="lg" pulse className="text-lg">
              <span className="text-2xl">💬</span> LINEで無料相談する
            </Button>
          </div>

          {/* 安心感 */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-white/60">
            {[
              '✓ 相談・見積もり無料',
              '✓ キャンセル料なし',
              '✓ 24時間以内返信',
              '✓ 写真が苦手でも大丈夫',
            ].map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
