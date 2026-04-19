'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { LINE_URL, SERVICE_NAME } from '@/lib/constants';

const NAV_ITEMS = [
  { label: '写真が9割', href: '#why-photos' },
  { label: '選ばれる理由', href: '#reason' },
  { label: '撮影メンバー', href: '#photographer' },
  { label: '料金', href: '#pricing' },
  { label: 'よくある質問', href: '#faq' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* スクロール時のゴールドアクセントライン */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'linear-gradient(90deg, transparent, #C9A96E 30%, #E8C97A 50%, #C9A96E 70%, transparent)' }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className={`font-bold text-lg tracking-tight ${isScrolled ? 'text-[#1A2744]' : 'text-white'}`}
          style={{ fontFamily: 'var(--font-heading)' }}>
          {SERVICE_NAME}
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#C9A96E] ${
                isScrolled ? 'text-[#1A2744]' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button href={LINE_URL} external variant="cta" size="sm">
            無料で相談する
          </Button>
        </nav>

        {/* ハンバーガー（モバイル） */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-[#1A2744]' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          <svg aria-hidden="true" focusable="false" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* モバイルメニュー */}
      <motion.div
        id="mobile-nav"
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden bg-white border-t border-[#E5E7EB]"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <nav className="px-4 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#1A2744] font-medium py-2 border-b border-[#E5E7EB] last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button href={LINE_URL} external variant="cta" size="md" className="mt-2 w-full">
            無料で相談する
          </Button>
        </nav>
      </motion.div>
    </motion.header>
  );
}
