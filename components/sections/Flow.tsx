'use client';

import { motion } from 'framer-motion';
import { FLOW_STEPS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { LINE_URL } from '@/lib/constants';

const STEP_ICON_MAP: Record<string, React.ReactNode> = {
  '💬': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  '📅': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  '📸': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  '🎉': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  ),
};

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
          {/* ゴールドの縦線 */}
          <div className="absolute left-6 sm:left-8 top-6 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A96E]/60 via-[#C9A96E]/40 to-transparent" />

          <div className="space-y-6">
            {FLOW_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5 sm:gap-6 relative"
              >
                {/* ステップバッジ */}
                <div className="relative flex-shrink-0 z-10">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #1A2744 0%, #243560 100%)',
                      boxShadow: '0 0 0 3px rgba(201,169,110,0.3), 0 4px 16px rgba(26,39,68,0.3)',
                    }}
                  >
                    {STEP_ICON_MAP[step.icon] ?? step.icon}
                  </div>
                  {/* ステップ番号 */}
                  <div
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 100%)' }}
                  >
                    {step.step}
                  </div>
                </div>

                <div className="bg-[#FAFAF8] rounded-2xl p-5 flex-1 border border-[#E5E7EB] hover:border-[#C9A96E]/30 hover:shadow-sm transition-all duration-300">
                  <span className="text-[#C9A96E] font-bold text-xs tracking-widest uppercase block mb-2">
                    Step {step.step}
                  </span>
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
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            LINEで無料相談する
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
