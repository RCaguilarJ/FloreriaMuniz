'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import AppLogo from '@/src/components/ui/AppLogo';
import { useCart } from '@/src/contexts/CartContext';

const navItems = [
  { href: '#catalog', label: 'Catálogo' },
  { href: '#how-it-works', label: 'Cómo Funciona' },
  { href: '#delivery', label: 'Envíos' },
  { href: '#story', label: 'Historia' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleViewportChange);
    return () => mediaQuery.removeEventListener('change', handleViewportChange);
  }, []);

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bloom-linen/90 backdrop-blur-md border-b border-bloom-border'
          : 'bg-transparent'
      }`}
    >
      <div className="site-header__inner max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a href="#hero" className="site-header__brand shrink-0">
          <AppLogo
            text="Florería Muñiz"
            size={28}
            className="text-bloom-ink"
            src=""
          />
        </a>

        <nav className="site-nav" aria-label="Principal">
          <button
            type="button"
            className={`site-nav__toggle ${isMenuOpen ? 'is-open' : ''}`}
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation-panel"
            aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="site-nav__toggle-line" />
            <span className="site-nav__toggle-line" />
            <span className="site-nav__toggle-line" />
          </button>

          <div
            id="site-navigation-panel"
            className={`site-nav__panel ${isMenuOpen ? 'is-open' : ''}`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="site-nav__link text-[13px] font-medium text-black hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsOpen(true)}
              className="site-nav__link text-[13px] font-medium text-black hover:text-black transition-colors flex items-center gap-2"
              >
              <ShoppingBag className="w-4 h-4" />
              {itemCount > 0 && (
                <span className="bg-bloom-pink text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
