'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { LOCATIONS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';

export function Location() {
  return (
    <section className="py-20 px-4 bg-[#FAFAF8]" id="location">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Location"
          title="好み女性から逆算した撮影スポット"
          subtitle="あなたの「好みの女性のタイプ」を事前ヒアリング。そのタイプの女性に刺さる場所・お店を撮影地に選ぶから、好みの女性に届く写真が撮れる。"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E5E7EB] group"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#1A2744] to-[#243560]">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2744]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#C9A96E] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {loc.mood}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1A2744] text-lg mb-1">{loc.name}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{loc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[#6B7280] text-sm mt-8"
        >
          上記以外のスポットもご相談ください。あなたの「好み女性像」に合わせた最適な場所を一緒に設計します。
        </motion.p>
      </div>
    </section>
  );
}
