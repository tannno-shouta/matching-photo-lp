'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { LINE_URL } from '@/lib/constants';

const TRUST_ITEMS = [
  '✓ 相談・見積もり完全無料',
  '✓ キャンセル料なし（前日まで）',
  '✓ 24時間以内に返信',
  '✓ 写真が苦手な男性も多数実績あり',
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
          {/* 残枠バッジ — ゴールド */}
          <div className="inline-block mb-8">
            <span
              className="text-[#1A2744] text-sm font-bold px-5 py-2 rounded-full shadow-lg inline-flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 100%)' }}
            >
              <span className="w-2 h-2 bg-[#1A2744]/40 rounded-full" />
              今月残り3枠 ── 次の枠は来月以降になります
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            写真を変えれば、
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 50%, #C9A96E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              いいねが変わる。
            </span><br />
            まず無料相談してみてください。
          </h2>

          <p className="text-white/80 text-lg mb-4 leading-relaxed">
            500名以上の男性が、写真1枚でいいね数を変えてきました。<br />
            あなたも、<strong className="text-white">今月中に動けば</strong>来月のいいね数が変わります。
          </p>

          <p className="text-white/40 text-sm mb-10 tracking-wide">
            ご返信は<strong className="text-white/60">24時間以内</strong>にお送りします
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={LINE_URL} external variant="cta" size="lg" pulse className="text-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              LINEで無料相談する
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
