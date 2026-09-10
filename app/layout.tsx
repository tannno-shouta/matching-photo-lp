import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP, Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { siteMetadata, structuredData } from '@/lib/metadata';

// Microsoft Clarity（ヒートマップ / セッション再生）。
// 環境変数が未設定の間はタグ自体を出さないため、ID 取得前でも安全にデプロイできる。
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_ID;

const notoSans = Noto_Sans_JP({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const notoSerif = Noto_Serif_JP({
  variable: '--font-noto-serif',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} ${cormorant.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        {clarityProjectId && (
          <Script
            id="ms-clarity"
            strategy="afterInteractive"
            src={`https://www.clarity.ms/tag/${clarityProjectId}`}
          />
        )}
      </body>
    </html>
  );
}
