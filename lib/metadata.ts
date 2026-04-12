import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: '福岡マッチングアプリ写真撮影【男性専用】｜いいね2.4倍の実績',
  description:
    '写真を変えるだけでいいねが変わる。福岡の男性500名以上が実証済み。Pairs・with・Tinder対応のプロフィール写真撮影。大濠公園など福岡全域でロケ撮影。無料相談受付中。',
  keywords: [
    '福岡',
    'マッチングアプリ',
    '写真撮影',
    'プロフィール写真',
    '男性',
    '大濠公園',
    '天神',
    'いいね増やす',
    'Pairs',
    'with',
    'Tinder',
    'マッチ率',
    'プロフィール写真 男性',
    '福岡 写真撮影 マッチングアプリ',
    'マッチングフォト',
  ],
  authors: [{ name: '福岡マッチングフォト' }],
  openGraph: {
    title: '福岡マッチングアプリ写真撮影【男性専用】｜いいね2.4倍の実績',
    description:
      '写真を変えるだけでいいねが変わる。福岡の男性500名以上が実証済み。Pairs・with・Tinder対応のプロフィール写真撮影。無料相談受付中。',
    url: 'https://your-domain.com',
    siteName: '福岡マッチングフォト',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '福岡マッチングアプリ写真撮影',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '福岡マッチングアプリ写真撮影【男性専用】｜いいね2.4倍の実績',
    description:
      '写真を変えるだけでいいねが変わる。福岡の男性500名以上が実証済み。Pairs・with・Tinder対応のプロフィール写真撮影。',
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
  name: '福岡マッチングフォト',
  description: 'マッチングアプリ特化のプロフィール写真撮影サービス',
  url: 'https://your-domain.com',
  telephone: '', // 実際の電話番号を入力
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
  priceRange: '¥5,000〜¥25,000',
  openingHours: 'Mo-Su 09:00-21:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
  },
};
