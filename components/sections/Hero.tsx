'use client';

import { motion, type Variants } from 'framer-motion';
import { Button } from '../ui/Button';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { LINE_URL, STATS } from '@/lib/constants';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景グラデーション（パレット統一版） */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c] via-[#1A2744] to-[#1e2d50]" />

      {/* 背景画像オーバーレイ */}
      <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover opacity-25" style={{ backgroundPosition: 'center 30%' }} />

      {/* ノイズテクスチャ */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* 幾何学的装飾 — 右上の大きな円 */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-[#C9A96E]/10 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full border border-[#C9A96E]/15 pointer-events-none" />

      {/* 幾何学的装飾 — 左下のライン */}
      <div className="absolute bottom-24 left-8 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A96E]/40 to-transparent pointer-events-none hidden lg:block" />
      <div className="absolute bottom-24 left-14 w-px h-20 bg-gradient-to-b from-transparent via-[#C9A96E]/25 to-transparent pointer-events-none hidden lg:block" />

      {/* diagonal ライン装飾 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(201,169,110,0.03) 40px, rgba(201,169,110,0.03) 41px)',
        }}
      />

      {/* コンテンツ */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white pt-20 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* バッジ */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 bg-[#C9A96E]/15 border border-[#C9A96E]/50 text-[#C9A96E] text-sm font-bold px-5 py-2.5 rounded-full tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full animate-pulse inline-block" />
            福岡No.1 マッチングアプリ写真撮影
          </span>
        </motion.div>

        {/* メインコピー */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          福岡で、<br className="sm:hidden" />
          マッチングアプリの<br />
          <span
            className="text-gold-gradient"
            style={{
              background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 50%, #C9A96E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            顔を変える。
          </span>
        </motion.h1>

        {/* サブコピー */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          緊張しても大丈夫。会話しながら撮るから、<br className="hidden sm:block" />
          あなたの<strong className="text-white">自然な笑顔</strong>が引き出される。
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-base text-white/50 mb-10 tracking-wide"
        >
          大濠公園・天神・警固公園など福岡の人気スポットでロケーション撮影
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button href={LINE_URL} external variant="cta" size="lg" pulse>
            <span className="text-xl">💬</span> LINEで無料相談する
          </Button>
          <Button href="#pricing" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-[#1A2744] backdrop-blur-sm">
            料金を見る
          </Button>
        </motion.div>

        {/* 実績バッジ */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 hover:border-[#C9A96E]/40 transition-colors duration-300"
            >
              <p className="text-2xl font-bold" style={{
                background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.suffix.includes('倍') ? 1 : 0}
                />
              </p>
              <p className="text-xs text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#C9A96E]/70 rounded-full" />
        </div>
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">scroll</span>
      </motion.div>
    </section>
  );
}
