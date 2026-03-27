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
          subtitle="松竹梅の3プラン。迷ったら圧倒的コスパの「スタンダード」が最人気です。"
        />

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
