'use client';

import { motion } from 'framer-motion';
import { REASONS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';

export function Reason() {
  return (
    <section className="py-20 px-4 bg-[#FAFAF8]" id="reason">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Why Us"
          title="選ばれる3つの理由"
          subtitle="「いいね数が増えた」「マッチして付き合った」── お客様の結果にコミットするための、3つのこだわり。"
        />

        <div className="space-y-8">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-6 bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]"
            >
              <div className="flex-shrink-0">
                <span
                  className="block text-5xl font-bold text-[#E5E7EB]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {reason.number}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1A2744] mb-2">{reason.title}</h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">{reason.description}</p>
              </div>
              <div className="flex-shrink-0 hidden sm:flex items-center">
                <div className="w-12 h-12 bg-[#1A2744]/5 rounded-full flex items-center justify-center text-2xl">
                  {i === 0 ? '💬' : i === 1 ? '📍' : '🎨'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
