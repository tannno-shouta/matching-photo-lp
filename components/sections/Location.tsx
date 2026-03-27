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
          title="福岡の人気撮影スポット"
          subtitle="福岡の地に精通したカメラマンが、あなたのイメージに合ったベストな場所を提案します。"
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
          上記以外のスポットもご相談ください。あなたの希望に合わせて最適な場所をご提案します。
        </motion.p>
      </div>
    </section>
  );
}
