import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: '福岡で"垢抜け"プロフィール写真【男性専用】｜いいね数2.4倍の実績',
  description:
    '写真が9割。福岡で"垢抜け"→撮影までオールインワン型。服装・ヘア・眉まで整え、好み女性から逆算したロケで撮影。Pairs/with/Tinderで「いいね数平均2.4倍」「マッチ率63%向上」の実績を持つ男性専用サービス。無料相談受付中。',
  keywords: [
    '福岡 マッチングアプリ 写真',
    '垢抜け 男性 福岡',
    'プロフィール写真 撮影 福岡',
    'マッチングフォト',
    'Pairs 写真 男性',
    'with プロフ写真',
    'Tinder 写真 福岡',
    '大濠公園 撮影',
    '天神 撮影',
    'いいね 増やす',
    '男性 垢抜け サービス',
    'マッチ率 上げる',
    'プロフィール写真 男性',
    'プロフ写真 福岡',
    'マッチングアプリ 写真 男性',
  ],
  authors: [{ name: '福岡垢抜けマッチングフォト' }],
  openGraph: {
    title: '福岡で"垢抜け"プロフィール写真【男性専用】｜いいね数2.4倍の実績',
    description:
      '写真が9割。福岡で"垢抜け"→撮影までオールインワン型。好み女性から逆算したロケで撮影し、Pairs/with/Tinderで「いいね数平均2.4倍」「マッチ率63%向上」の実績。無料相談受付中。',
    url: 'https://your-domain.com',
    siteName: '福岡垢抜けマッチングフォト',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '福岡で"垢抜け"プロフィール写真撮影',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '福岡で"垢抜け"プロフィール写真【男性専用】｜いいね数2.4倍の実績',
    description:
      '写真が9割。福岡で"垢抜け"→撮影までオールインワン型。好み女性から逆算したロケで撮る、男性専用のマッチ率アップサービス。いいね数2.4倍・マッチ率63%向上の実績。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '福岡垢抜けマッチングフォト',
  description: '福岡の"垢抜け"→撮影オールインワン型プロフィール写真サービス。好み女性から逆算したロケ設計で、マッチングアプリのマッチ率を上げる男性専用サービス。',
  url: 'https://your-domain.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: '福岡市',
    addressRegion: '福岡県',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.5904,
    longitude: 130.4017,
  },
  areaServed: '福岡市',
  priceRange: '¥25,000〜¥40,000',
  openingHours: 'Mo-Su 09:00-21:00',
};
