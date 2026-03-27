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
      {/* 背景グラデーション（実際の画像に差し替え） */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A2744] via-[#243560] to-[#1a3a2a]" />

      {/* 背景画像オーバーレイ */}
      <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center opacity-30" />

      {/* コンテンツ */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white pt-20 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* バッジ */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block bg-[#C9A96E]/20 border border-[#C9A96E]/50 text-[#C9A96E] text-sm font-bold px-4 py-2 rounded-full">
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
          <span className="text-[#C9A96E]">顔を変える。</span>
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
          className="text-base text-white/60 mb-10"
        >
          大濠公園・天神・警固公園など福岡の人気スポットでロケーション撮影
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button href={LINE_URL} external variant="cta" size="lg" pulse>
            <span className="text-xl">💬</span> LINEで無料相談する
          </Button>
          <Button href="#pricing" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1A2744]">
            料金を見る
          </Button>
        </motion.div>

        {/* 実績バッジ */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3"
            >
              <p className="text-2xl font-bold text-[#C9A96E]">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.suffix.includes('倍') ? 1 : 0}
                />
              </p>
              <p className="text-xs text-white/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
