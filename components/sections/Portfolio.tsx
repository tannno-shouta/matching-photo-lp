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

        {/* サイズ統一グリッド */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {PORTFOLIO_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md group relative"
            >
              <div className="relative w-full aspect-[3/4] bg-[#E5E7EB]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
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
          ※ 掲載写真はすべてお客様の許可を得た実績例です
        </motion.p>
      </div>
    </section>
  );
}
