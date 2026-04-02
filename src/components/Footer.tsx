import React from 'react';
import AppLogo from '@/src/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="site-footer border-t border-bloom-border bg-bloom-linen py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo + links */}
          <div className="site-footer__brand flex items-center gap-8">
            <AppLogo text="Florería Muñiz" size={22} className="text-bloom-ink" src="" />
            <nav className="site-footer__nav flex items-center gap-6">
              <a href="#catalog" className="text-[14px] font-medium text-bloom-ink-muted hover:text-bloom-ink transition-colors">Catálogo</a>
              <a href="#how-it-works" className="text-[14px] font-medium text-bloom-ink-muted hover:text-bloom-ink transition-colors">Cómo Funciona</a>
              <a href="#delivery" className="text-[14px] font-medium text-bloom-ink-muted hover:text-bloom-ink transition-colors">Envíos</a>
              <a href="#story" className="text-[14px] font-medium text-bloom-ink-muted hover:text-bloom-ink transition-colors">Historia</a>
            </nav>
          </div>

          {/* Right: Social + legal */}
          <div className="site-footer__meta flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-bloom-ink-muted hover:text-bloom-green transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="text-bloom-ink-muted hover:text-bloom-green transition-colors">
                <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.77 1.52V7.08a4.85 4.85 0 0 1-1-.39z"/>
                </svg>
              </a>
            </div>
            <span className="text-[13px] text-bloom-ink-muted">© 2026 Bloom</span>
            <a href="#" className="text-[13px] text-bloom-ink-muted hover:text-bloom-ink transition-colors">Privacidad</a>
            <a href="#" className="text-[13px] text-bloom-ink-muted hover:text-bloom-ink transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
