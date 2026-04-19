'use client';

import { motion } from 'framer-motion';
import { COMPETITOR_COMPARISON, REASONS } from '@/lib/constants';
import { SectionHeading } from '../ui/SectionHeading';

const ICONS: React.ReactNode[] = [
  // SparklesIcon — 垢抜けワンストップ
  <svg key="sparkles" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  // TargetIcon — 好み女性から逆算
  <svg key="target" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
  // ChatIcon — 会話型撮影 × アプリ特化
  <svg key="chat" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
];

export function Reason() {
  return (
    <section className="py-20 px-4 bg-[#FAFAF8]" id="reason">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Why Us"
          title="選ばれる3つの理由"
          subtitle="撮るだけのカメラマンとは違う。「垢抜け」から撮影までワンストップ、しかも「好み女性から逆算」するから、結果が変わる。"
        />

        <div className="space-y-6">
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex gap-0 bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden hover:shadow-md hover:border-[#C9A96E]/30 transition-all duration-300"
            >
              {/* ゴールドのアクセントライン */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A96E] via-[#E8C97A] to-[#C9A96E]" />

              {/* 大きな番号 */}
              <div className="flex-shrink-0 flex items-center pl-6 pr-2 sm:pr-4">
                <span
                  className="block font-bold leading-none select-none"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                    background: 'linear-gradient(135deg, #C9A96E 0%, #E8C97A 50%, #C9A96E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.35,
                  }}
                >
                  {reason.number}
                </span>
              </div>

              {/* テキスト */}
              <div className="flex-1 py-6 pr-4">
                <h3 className="text-lg font-bold text-[#1A2744] mb-2">{reason.title}</h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">{reason.description}</p>
              </div>

              {/* SVGアイコン */}
              <div className="flex-shrink-0 flex items-center pr-5 sm:pr-6">
                <div className="w-11 h-11 bg-[#1A2744]/5 rounded-full flex items-center justify-center">
                  {ICONS[i]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 他カメラマンとの違い 対比表 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3
            className="text-2xl font-bold text-[#1A2744] mb-2 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            他カメラマンとの違い
          </h3>
          <p className="text-[#6B7280] text-sm text-center mb-8">
            撮影技術の先まで、当サービスにしかない価値を。
          </p>

          {/* デスクトップ：テーブル型 */}
          <div className="hidden sm:block overflow-hidden rounded-2xl border border-[#E5E7EB] shadow-sm">
            <table className="w-full text-left">
              <caption className="sr-only">
                一般的な撮影サービスと福岡マッチングフォトのサービス内容比較表
              </caption>
              <thead className="bg-[#1A2744] text-white">
                <tr>
                  <th scope="col" className="py-4 px-6 text-sm font-bold">項目</th>
                  <th scope="col" className="py-4 px-6 text-sm font-bold text-center">一般的な撮影サービス</th>
                  <th scope="col" className="py-4 px-6 text-sm font-bold text-center text-[#C9A96E]">
                    福岡マッチングフォト
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {COMPETITOR_COMPARISON.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-[#E5E7EB] ${row.highlight ? 'bg-[#C9A96E]/8' : ''}`}
                  >
                    <th
                      scope="row"
                      className={`py-3 px-6 text-sm font-normal ${row.highlight ? 'font-bold text-[#1A2744]' : 'text-[#1A2744]'}`}
                    >
                      {row.criterion}
                    </th>
                    <td className="py-3 px-6 text-center text-[#6B7280] text-sm">{row.general}</td>
                    <td className="py-3 px-6 text-center text-[#1A2744] font-bold text-sm">
                      {row.ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* モバイル：カード型 */}
          <div className="sm:hidden space-y-3">
            {COMPETITOR_COMPARISON.map((row, i) => (
              <div
                key={i}
                className={`rounded-xl border p-4 ${
                  row.highlight ? 'border-[#C9A96E] bg-[#C9A96E]/8' : 'border-[#E5E7EB] bg-white'
                }`}
              >
                <p
                  className={`text-sm mb-2 ${row.highlight ? 'font-bold text-[#1A2744]' : 'font-semibold text-[#1A2744]'}`}
                >
                  {row.criterion}
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-[#6B7280] mb-1">一般撮影</p>
                    <p className="text-[#6B7280] font-bold">{row.general}</p>
                  </div>
                  <div>
                    <p className="text-[#C9A96E] mb-1">当サービス</p>
                    <p className="text-[#1A2744] font-bold">{row.ours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
