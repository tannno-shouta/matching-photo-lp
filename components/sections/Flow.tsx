'use client';

import { motion } from 'framer-motion';
import { FLOW_STEPS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { LINE_URL } from '@/lib/constants';

export function Flow() {
  return (
    <section className="py-20 px-4 bg-white" id="flow">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Flow"
          title="撮影の流れ"
          subtitle="LINEで気軽に相談するだけ。最短3日で予約完了、当日は会話しながらリラックスして撮影できます。"
        />

        <div className="relative">
          {/* 縦線 */}
          <div className="absolute left-6 sm:left-8 top-6 bottom-6 w-0.5 bg-[#E5E7EB]" />

          <div className="space-y-6">
            {FLOW_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6 relative"
              >
                {/* アイコン */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#1A2744] rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-md z-10">
                  {step.icon}
                </div>

                <div className="bg-[#FAFAF8] rounded-2xl p-5 flex-1 border border-[#E5E7EB]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#C9A96E] font-bold text-sm tracking-widest">STEP {step.step}</span>
                  </div>
                  <h3 className="font-bold text-[#1A2744] mb-1">{step.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[#6B7280] text-sm mb-6">
            まずはお気軽にLINEでご相談ください。<br />
            <strong className="text-[#1A2744]">24時間以内</strong>に返信します。
          </p>
          <Button href={LINE_URL} external variant="cta" size="lg" pulse>
            <span className="text-xl">💬</span> LINEで無料相談する
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
