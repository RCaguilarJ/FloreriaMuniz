'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/src/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bloom-linen/90 backdrop-blur-md border-b border-bloom-border' :'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <AppLogo
          text="Florería Muñiz"
          size={28}
          className="text-bloom-ink"
          src=""
        />

        <nav className="hidden md:flex items-center gap-8">
          <a href="#catalog" className="text-[13px] font-medium text-bloom-ink-muted hover:text-bloom-ink transition-colors">
            Catálogo
          </a>
          <a href="#how-it-works" className="text-[13px] font-medium text-bloom-ink-muted hover:text-bloom-ink transition-colors">
            Cómo Funciona
          </a>
          <a href="#delivery" className="text-[13px] font-medium text-bloom-ink-muted hover:text-bloom-ink transition-colors">
            Envíos
          </a>
          <a href="#story" className="text-[13px] font-medium text-bloom-ink-muted hover:text-bloom-ink transition-colors">
            Historia
          </a>
        </nav>
      </div>
    </header>
  );
}
