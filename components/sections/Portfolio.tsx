'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PORTFOLIO_IMAGES } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';

export function Portfolio() {
  return (
    <section className="py-20 px-4 bg-white" id="portfolio">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="撮影実績・ポートフォリオ"
          subtitle="マッチングアプリでいいねされる自然体の写真を、福岡の人気スポットで撮影しています。"
        />

        {/* Masonryっぽいグリッド */}
        <div className="columns-2 sm:columns-3 gap-4 space-y-4">
          {PORTFOLIO_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-md group relative"
            >
              <div
                className={`relative w-full ${
                  img.aspect === 'tall'
                    ? 'aspect-[3/4]'
                    : img.aspect === 'wide'
                    ? 'aspect-[4/3]'
                    : 'aspect-square'
                } bg-[#E5E7EB]`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* ホバーオーバーレイ */}
                <div className="absolute inset-0 bg-[#1A2744]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[#6B7280] text-sm mt-8"
        >
          ※ 掲載写真はすべてお客様の許可を得た実績例です（顔部分は加工しています）
        </motion.p>
      </div>
    </section>
  );
}
