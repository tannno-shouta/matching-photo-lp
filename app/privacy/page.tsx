import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { SERVICE_NAME, LINE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `プライバシーポリシー｜${SERVICE_NAME}`,
  description: `${SERVICE_NAME}における個人情報・撮影データの取り扱い、およびアクセス解析ツールの利用についてご説明します。`,
  alternates: { canonical: '/privacy' },
};

/** 最終改定日。内容を更新したらここも更新する。 */
const LAST_UPDATED = '2026年9月10日';

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold text-[#1A2744] pb-2 mb-4 border-b border-[#C9A96E]/30">
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-[#4B5563]">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="bg-[#1A2744] px-4 py-5">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-white font-bold tracking-wide hover:text-[#E8C97A] transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {SERVICE_NAME}
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-[#FAFAF8] px-4 py-14">
        <article className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] text-[#C9A96E] mb-2">PRIVACY POLICY</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1A2744] leading-snug">
            プライバシーポリシー
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-[#4B5563]">
            {SERVICE_NAME}（以下「当サービス」）は、お客様の個人情報および撮影データを、
            お客様との信頼関係の基盤となる大切なものと考えています。本ポリシーでは、
            当サービスが取得する情報とその取り扱いについてご説明します。
          </p>

          <Section title="1. 事業者情報">
            <ul className="space-y-1">
              <li>サービス名：{SERVICE_NAME}</li>
              <li>運営者：丹野 勝太</li>
              <li>活動エリア：福岡市内（天神・大名・薬院エリア中心）</li>
              <li>お問い合わせ窓口：LINE公式アカウント</li>
            </ul>
            <p className="text-xs text-[#6B7280]">
              ※ 所在地その他の詳細は、法令に基づくご請求があった場合に遅滞なく開示いたします。
            </p>
          </Section>

          <Section title="2. 取得する情報">
            <p>当サービスは、以下の情報を取得します。</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-[#1A2744]">ご相談・お申し込み時</strong>：
                お名前（ニックネーム可）、ご連絡先（LINEアカウント情報等）、ご相談内容、
                ご利用中のマッチングアプリ等、撮影の設計に必要な範囲の情報
              </li>
              <li>
                <strong className="text-[#1A2744]">撮影時</strong>：撮影した写真・動画データ
              </li>
              <li>
                <strong className="text-[#1A2744]">サイト閲覧時（自動取得）</strong>：
                IPアドレス、ブラウザおよび端末の種別、閲覧ページ、滞在時間、参照元、
                ならびにページ内でのクリック・スクロール等の操作情報
              </li>
            </ul>
          </Section>

          <Section title="3. 利用目的">
            <ul className="list-disc pl-5 space-y-1">
              <li>撮影サービスの提供、ご相談への回答、日程調整等のご連絡</li>
              <li>お客様に合わせた撮影プラン・スタイリングの設計</li>
              <li>撮影データの納品および納品後のアフターフォロー</li>
              <li>本サイトの利用状況の分析と、サイト内容の改善</li>
            </ul>
            <p>
              取得した情報を、上記の目的の範囲を超えて利用することはありません。
            </p>
          </Section>

          <Section title="4. アクセス解析ツールの利用について">
            <p>
              当サービスは、サイトの改善を目的として、以下のアクセス解析ツールを利用しています。
              これらのツールにより、前項の「サイト閲覧時（自動取得）」の情報が各提供事業者へ送信されます。
              いずれも個人を特定する情報は含まれず、お客様のお名前やご連絡先が送信されることはありません。
            </p>

            <div className="mt-4 space-y-4">
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
                <p className="font-bold text-[#1A2744] text-sm mb-1">Vercel Web Analytics</p>
                <p className="text-xs leading-relaxed">
                  提供元：Vercel Inc.（米国）／ページの閲覧数や参照元などの統計情報を取得します。
                  Cookieは使用せず、個々の訪問者を識別しません。
                </p>
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#1A2744] underline underline-offset-2 hover:text-[#C9A96E] transition-colors mt-1 inline-block"
                >
                  Vercel プライバシーポリシー ▷
                </a>
              </div>

              <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
                <p className="font-bold text-[#1A2744] text-sm mb-1">Microsoft Clarity</p>
                <p className="text-xs leading-relaxed">
                  提供元：Microsoft Corporation（米国）／Cookieを使用し、ページ内のクリック、
                  スクロール、マウスの動き等の操作情報を取得します。これらは、どのページのどの部分が
                  読まれているかを可視化（ヒートマップ）し、閲覧の流れを再生して確認するために利用します。
                  入力フォーム内の文字列は自動的にマスキングされ、記録されません。
                </p>
                <a
                  href="https://privacy.microsoft.com/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#1A2744] underline underline-offset-2 hover:text-[#C9A96E] transition-colors mt-1 inline-block"
                >
                  Microsoft プライバシーステートメント ▷
                </a>
              </div>
            </div>
          </Section>

          <Section title="5. 撮影データの取り扱い">
            <p>
              お客様の撮影データは、当サービスにとって最も慎重に扱うべき情報です。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                お客様のお写真を、許可なくWebサイト・SNS・広告等へ二次使用することは一切ありません。
              </li>
              <li>
                制作実績として掲載を希望する場合は、必ず撮影当日にご本人の許諾を得たうえで、
                許諾いただいた範囲・媒体でのみ使用します。
              </li>
              <li>
                一度許諾いただいた掲載についても、後日お申し出いただければ速やかに取り下げます。
              </li>
            </ul>
          </Section>

          <Section title="6. 第三者への提供">
            <p>
              取得した個人情報は、次の場合を除き、第三者に提供することはありません。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>お客様ご本人の同意がある場合</li>
              <li>法令に基づく開示請求を受けた場合</li>
              <li>人の生命・身体・財産の保護のために必要で、本人の同意を得ることが困難な場合</li>
            </ul>
          </Section>

          <Section title="7. 安全管理措置">
            <p>
              取得した情報および撮影データは、アクセス権限を運営者に限定したうえで管理し、
              漏えい・滅失・毀損の防止に努めます。撮影データの受け渡しには、
              期限付きの共有リンク等、第三者が閲覧できない方法を用います。
            </p>
          </Section>

          <Section title="8. 開示・訂正・利用停止のご請求">
            <p>
              ご自身の個人情報について、開示・訂正・利用停止・削除をご希望の場合は、
              LINE公式アカウントよりご連絡ください。ご本人であることを確認のうえ、
              法令に従い速やかに対応いたします。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-2.5 rounded-full bg-[#1A2744] text-white text-sm font-bold hover:bg-[#243354] transition-colors"
            >
              LINEで問い合わせる
            </a>
          </Section>

          <Section title="9. Cookieの無効化について">
            <p>
              お使いのブラウザの設定により、Cookieの受け取りを拒否することができます。
              その場合も本サイトの閲覧に支障はありませんが、一部の機能が正しく動作しない可能性があります。
              設定方法は、ご利用のブラウザのヘルプをご確認ください。
            </p>
          </Section>

          <Section title="10. 本ポリシーの改定">
            <p>
              法令の変更や取り扱う情報の変化に応じて、本ポリシーを改定する場合があります。
              重要な変更を行う場合は、本ページにてお知らせします。
            </p>
          </Section>

          <p className="mt-10 text-xs text-[#6B7280] text-right">
            最終改定日：{LAST_UPDATED}
          </p>

          <div className="mt-10 pt-6 border-t border-[#E5E7EB]">
            <Link
              href="/"
              className="text-sm text-[#1A2744] underline underline-offset-2 hover:text-[#C9A96E] transition-colors"
            >
              ◁ トップページに戻る
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
