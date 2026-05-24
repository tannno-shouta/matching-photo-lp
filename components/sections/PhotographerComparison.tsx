'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

const PRO_POINTS = [
  '主な被写体は女性中心。男性ポートレートは経験値頼みになりがち',
  '作品撮りのような"気合いの入った"画になり、アプリで浮いてしまう',
  'アプリの女性に"いいね"をもらえる写真のノウハウを知らない',
  'どうしても不自然さ・宣材っぽさが残ってしまう',
];

const APP_POINTS = [
  '男性専門カメラマンだから、男性がカッコよく映る角度・表情・構図を熟知',
  '「撮られ慣れてない」前提で、会話で緊張をほぐしてから撮る',
  'アプリで"良いね"される写真を理解した上で撮影・選定',
  'カメラがうまい友達に撮ってもらったような、自然な空気感',
];

export function PhotographerComparison() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 px-4 bg-[#F5F1EA] overflow-hidden" id="photographer-comparison">
      {/* 装飾：右下のゴールドの円 */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C9A96E]/8 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Pro vs App-Specialized"
          title="プロカメラマンと、アプリ専門カメラマンの違い"
          subtitle={'同じ"プロ撮影"でも、アプリで結果が出るかは別の話。'}
        />

        {/* 2カラム対比 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12">
          {/* 左：プロカメラマン */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 opacity-[0.92]"
          >
            {/* バツのバッジ */}
            <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 bg-[#9CA3AF] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              アプリでは惜しい
            </div>

            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#9CA3AF] mb-2 mt-1">
              一般的なプロカメラマン
            </p>
            <h3
              className="text-xl sm:text-2xl font-bold text-[#1A2744] mb-4 leading-snug"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              プロの写真を<br />アプリに登録した場合
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
              撮影技術は確かに高い。けれど、彼らの土俵は"女性ポートレート"が中心。
              男性をマッチングアプリ用に撮るのは、実は専門外です。
            </p>
            <ul className="space-y-2.5">
              {PRO_POINTS.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-[#4B5563] leading-relaxed">
                  <svg
                    className="flex-shrink-0 mt-1"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 右：アプリ専門カメラマン */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white border-2 border-[#C9A96E] rounded-2xl p-6 sm:p-7 shadow-lg shadow-[#C9A96E]/10"
          >
            {/* ゴールドの上ボーダー */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

            {/* チェックのバッジ */}
            <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#C9A96E] to-[#E8C97A] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              アプリで結果が出る
            </div>

            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9A96E] mb-2 mt-1">
              アプリ専門カメラマン
            </p>
            <h3
              className="text-xl sm:text-2xl font-bold text-[#1A2744] mb-4 leading-snug"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              当サービスが撮る<br />マッチングアプリ用の写真
            </h3>
            <p className="text-[#4B5563] text-sm leading-relaxed mb-5">
              <span className="font-bold text-[#1A2744]">"男性を"</span>"アプリで選ばれるように"撮る専門家。
              被写体もゴールも違うから、撮り方も、選び方も、まるで違います。
            </p>
            <ul className="space-y-2.5">
              {APP_POINTS.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-[#1A2744] leading-relaxed">
                  <svg
                    className="flex-shrink-0 mt-1"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A96E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 理由ハイライト：なぜ"友達感"が効くのか */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="relative bg-[#1A2744] rounded-2xl p-7 sm:p-9 overflow-hidden">
            {/* 装飾：左上のゴールドアクセント */}
            <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-[#C9A96E] to-transparent" />
            <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-[#C9A96E] to-transparent" />

            <p className="text-[#C9A96E] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
              Why it works — なぜ"友達感"が効くのか
            </p>
            <p
              className="text-white text-lg sm:text-xl font-bold leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="relative inline-block">
                <span
                  className="absolute inset-x-0 bottom-0.5 h-2 bg-[#C9A96E]/30 -z-0"
                  aria-hidden="true"
                />
                <span className="relative">"カメラがうまい友達"に撮ってもらった写真</span>
              </span>
              <br />
              <span className="text-white/90">— だから、女性はこう感じます。</span>
            </p>
            <blockquote className="relative pl-5 border-l-2 border-[#C9A96E]">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                「この人、こういう写真を撮ってくれる<span className="text-[#E8C97A] font-bold">仲のいい友達</span>がいるんだ」
              </p>
            </blockquote>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-4">
              プロ感のない自然な空気感は、それだけで"人間関係の豊かさ"を匂わせます。
              スペックでも顔でもなく、<span className="text-white/90 font-bold">写真から漏れ出る生活感</span>こそが、女性に安心と興味を与える最大の武器です。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
