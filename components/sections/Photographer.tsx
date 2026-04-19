'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { PHOTOGRAPHERS, type Photographer as PhotographerType } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';

export function Photographer() {
  return (
    <section id="photographer" className="py-20 px-4 bg-[#FAFAF8]">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Photographer"
          title="撮影を担当するメンバー"
          subtitle="「垢抜け」から撮影まで、責任を持ってプロデュース。顔と経歴の見えるサービスを。"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PHOTOGRAPHERS.map((p, i) => (
            <PhotographerCard key={p.name} photographer={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotographerCard({
  photographer,
  index,
}: {
  photographer: PhotographerType;
  index: number;
}) {
  const { name, role, badge, imageSrc, careers, strengths, message, social } = photographer;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden hover:shadow-md hover:border-[#C9A96E]/30 transition-all duration-300 flex flex-col"
    >
      {/* 上部ゴールドライン */}
      <div className="h-1 bg-gradient-to-r from-[#C9A96E] via-[#E8C97A] to-[#C9A96E]" />

      {/* 顔写真エリア */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#1A2744] via-[#243359] to-[#1e2d50] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${name}の顔写真`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <PlaceholderPortrait />
        )}

        {/* バッジ */}
        <div
          className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[#1A2744] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm"
          style={{
            background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 50%, #C9A96E 100%)',
          }}
        >
          <span className="w-1.5 h-1.5 bg-[#1A2744] rounded-full" aria-hidden="true" />
          {badge}
        </div>
      </div>

      {/* 情報エリア */}
      <div className="flex-1 p-6 sm:p-7 flex flex-col">
        <div className="mb-4">
          <h3
            className="text-2xl font-bold text-[#1A2744] leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {name}
          </h3>
          <p className="text-sm text-[#6B7280] mt-1">{role}</p>
        </div>

        {/* 経歴リスト */}
        <ul className="space-y-2 mb-5">
          {careers.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-[#1A2744]">
              <svg
                aria-hidden="true"
                focusable="false"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                className="flex-shrink-0 mt-0.5"
              >
                <path
                  d="M4 10l4 4 8-8"
                  stroke="#C9A96E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{c}</span>
            </li>
          ))}
        </ul>

        {/* 強み */}
        <div className="bg-[#C9A96E]/8 border-l-4 border-[#C9A96E] rounded-r-lg px-4 py-3 mb-4">
          <p className="text-[13px] text-[#1A2744] leading-relaxed">{strengths}</p>
        </div>

        {/* メッセージ（任意） */}
        {message && (
          <blockquote className="relative pl-5 mb-4">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 text-4xl leading-none text-[#C9A96E]/30 select-none"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              &ldquo;
            </span>
            <p className="text-sm text-[#6B7280] italic leading-relaxed">{message}</p>
          </blockquote>
        )}

        {/* SNS（任意） */}
        {social && (
          <div className="mt-auto pt-2">
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#1A2744] hover:text-[#C9A96E] transition-colors"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="underline underline-offset-2">{social.label}</span>
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

function PlaceholderPortrait() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* diagonal ストライプ（既存サイトと同じパターン） */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(201,169,110,0.12) 20px, rgba(201,169,110,0.12) 21px)',
        }}
      />
      <svg
        aria-hidden="true"
        focusable="false"
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        className="relative"
      >
        <circle cx="48" cy="36" r="16" stroke="#C9A96E" strokeWidth="2" opacity="0.6" />
        <path
          d="M20 80c0-15 12.5-24 28-24s28 9 28 24"
          stroke="#C9A96E"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      <p className="absolute bottom-4 text-[#C9A96E]/70 text-xs tracking-wide">Coming Soon</p>
    </div>
  );
}
