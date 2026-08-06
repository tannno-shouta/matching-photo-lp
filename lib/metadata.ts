import type { Metadata } from 'next';
import { SERVICE_NAME, SITE_URL, FAQS, PRICING_PLANS, LOCATIONS } from './constants';

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    '天神 撮影',
    '大名 撮影',
    'カフェ プロフィール写真',
    'いいね 増やす',
    '男性 垢抜け サービス',
    'マッチ率 上げる',
    'プロフィール写真 男性',
    'プロフ写真 福岡',
    'マッチングアプリ 写真 男性',
  ],
  authors: [{ name: SERVICE_NAME }],
  openGraph: {
    title: '福岡で"垢抜け"プロフィール写真【男性専用】｜いいね数2.4倍の実績',
    description:
      '写真が9割。福岡で"垢抜け"→撮影までオールインワン型。好み女性から逆算したロケで撮影し、Pairs/with/Tinderで「いいね数平均2.4倍」「マッチ率63%向上」の実績。無料相談受付中。',
    url: SITE_URL,
    siteName: SERVICE_NAME,
    images: [
      {
        url: '/images/hero/hero-bg.jpg',
        width: 1201,
        height: 1362,
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
    images: ['/images/hero/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

const BUSINESS_ID = `${SITE_URL}/#business`;

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      name: SERVICE_NAME,
      description:
        '福岡の"垢抜け"→撮影オールインワン型プロフィール写真サービス。好み女性から逆算したロケ設計で、マッチングアプリのマッチ率を上げる男性専用サービス。',
      url: SITE_URL,
      image: `${SITE_URL}/images/hero/hero-bg.jpg`,
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
      areaServed: { '@type': 'City', name: '福岡市' },
      priceRange: '¥15,000〜¥30,000',
      openingHours: 'Mo-Su 09:00-21:00',
      knowsAbout: [
        'マッチングアプリ用プロフィール写真',
        'Pairs',
        'with',
        'Omiai',
        'Tinder',
        '男性の垢抜けサポート',
        'ポートレート撮影',
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#service`,
      name: 'マッチングアプリ用プロフィール写真撮影（男性専用）',
      serviceType: '出張ポートレート撮影・垢抜けサポート',
      provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'City', name: '福岡市' },
      audience: {
        '@type': 'PeopleAudience',
        suggestedGender: 'male',
        audienceType: 'マッチングアプリを利用する男性',
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        name: 'LINE無料相談',
        serviceUrl: SITE_URL,
      },
      offers: PRICING_PLANS.map((plan) => ({
        '@type': 'Offer',
        name: `${plan.name}プラン`,
        price: plan.price,
        priceCurrency: 'JPY',
        description: `${plan.duration}撮影・厳選${plan.photos}枚納品。${plan.features.join('、')}。`,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SERVICE_NAME,
      url: SITE_URL,
      inLanguage: 'ja',
      publisher: { '@id': BUSINESS_ID },
      about: `福岡市内（${LOCATIONS.map((l) => l.name).join('・')}）で撮影する男性専用マッチングアプリ写真サービス`,
    },
  ],
};
