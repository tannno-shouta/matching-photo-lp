'use client';

import { motion } from 'framer-motion';
import { PRICING_PLANS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { PricingCard } from '../ui/PricingCard';

export function Pricing() {
  return (
    <section className="py-20 px-4 bg-white" id="pricing">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Pricing"
          title="料金プラン"
          subtitle="全プラン「垢抜け」サポート標準装備。初めての方はスタンダード（60分・10枚・25,000円、今月残り3枠）が断然おすすめ。"
        />

        {/* 標準装備バナー */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-10 -mt-2"
        >
          <span
            className="inline-flex items-center gap-2 text-[#1A2744] text-xs sm:text-sm font-bold px-5 py-2 rounded-full shadow-sm"
            style={{
              background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 50%, #C9A96E 100%)',
            }}
          >
            <span className="text-sm">✨</span>
            全プラン「垢抜け」サポート標準装備
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          {PRICING_PLANS.map((plan, i) => (
            <PricingCard key={i} {...plan} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 space-y-2"
        >
          <p className="text-[#6B7280] text-sm">
            ※ 価格はすべて税込みです。交通費は別途ご相談。
          </p>
          <p className="text-[#6B7280] text-sm">
            ※ 学割・リピーター割引あり。LINEでご相談ください。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
