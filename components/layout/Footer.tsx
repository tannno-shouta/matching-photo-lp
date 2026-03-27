import { LINE_URL, SERVICE_NAME } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-[#1A2744] text-white/70 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="font-bold text-white text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
          {SERVICE_NAME}
        </p>
        <p className="text-sm">福岡市内 / 大濠公園・天神・警固公園エリア</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LINEで相談
          </a>
          <a href="#faq" className="hover:text-white transition-colors">よくある質問</a>
          <a href="#pricing" className="hover:text-white transition-colors">料金プラン</a>
        </div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} {SERVICE_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
