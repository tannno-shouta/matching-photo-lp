'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden shadow-sm"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <div className="flex items-start gap-3">
              <span className="text-[#C9A96E] font-bold text-lg leading-none mt-0.5">Q</span>
              <span className="font-bold text-[#1A2744] text-base">{item.question}</span>
            </div>
            <motion.span
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-[#C9A96E] text-2xl font-light flex-shrink-0"
            >
              +
            </motion.span>
          </button>

          {/* 回答は常時DOMに置く（height:0で畳む）— JS非実行のAIクローラーにも本文を読ませるため */}
          <motion.div
            initial={false}
            animate={{
              height: openIndex === i ? 'auto' : 0,
              opacity: openIndex === i ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 flex gap-3">
              <span className="text-[#06C755] font-bold text-lg leading-none mt-0.5 flex-shrink-0">A</span>
              <p className="text-[#6B7280] leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
