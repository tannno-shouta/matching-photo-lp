import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  app: string;
  before: string;
  after: string;
  comment: string;
  rating: number;
  index: number;
}

export function TestimonialCard({
  name,
  app,
  before,
  after,
  comment,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl p-6 shadow-md border border-[#E5E7EB] min-w-[300px] max-w-[360px] flex-shrink-0 overflow-hidden hover:border-[#C9A96E]/40 hover:shadow-lg transition-all duration-300"
    >
      {/* 装飾クォート */}
      <div
        className="absolute top-3 right-4 select-none pointer-events-none leading-none"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '5rem',
          color: '#C9A96E',
          opacity: 0.12,
          lineHeight: 1,
        }}
      >
        &ldquo;
      </div>

      {/* 上部ゴールドライン */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-[#C9A96E] text-base">★</span>
        ))}
      </div>

      <p className="relative text-[#1A1A1A] text-sm leading-relaxed mb-5 z-10">
        &ldquo;{comment}&rdquo;
      </p>

      <div className="border-t border-[#E5E7EB] pt-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-bold text-[#1A2744] text-sm">{name}</p>
            <p className="text-[#6B7280] text-xs">{app}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-[#6B7280] tracking-wide uppercase mb-1">Result</p>
            <p className="text-xs font-bold text-[#06C755]">{before} → {after}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
