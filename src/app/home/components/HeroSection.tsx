import React, { useEffect, useRef, useState } from 'react';
import AppImage from '../../../components/ui/AppImage';

const images = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: { preset: 'url' }
});

const getImageUrl = (filename: string) => {
  const key = Object.keys(images).find((k) => k.includes(filename));
  return key ? (images[key] as any).default : '';
};

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const nextCut = new Date();
      nextCut.setHours(24, 0, 0, 0);
      const diff = nextCut.getTime() - now.getTime();
      
      setTimeLeft({
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={heroRef} id="hero" className="hero-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-bloom-linen">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage 
          src={getImageUrl('beautiful-bouquet-roses')} 
          alt="Flores frescas en el enfriador"
          fill
          className="object-cover animate-dolly scale-[1.03] brightness-[0.3] contrast-[0.9] saturate-[0.72]"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,20,17,0.6)_0%,rgba(39,27,23,0.22)_35%,rgba(21,15,12,0.68)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,248,244,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(0,0,0,0.42),transparent_58%),radial-gradient(circle_at_0%_50%,rgba(255,244,239,0.24),transparent_26%),radial-gradient(circle_at_100%_50%,rgba(255,244,239,0.24),transparent_26%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px] bg-[linear-gradient(90deg,rgba(255,250,247,0.14)_0%,rgba(255,250,247,0.04)_18%,rgba(255,250,247,0)_50%,rgba(255,250,247,0.04)_82%,rgba(255,250,247,0.14)_100%)]" />
      </div>

      {/* Condensation effect */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-40">
        <div className="condensation-drop w-1 h-1 bg-white/30 rounded-full absolute top-[10%] left-[20%]" />
        <div className="condensation-drop w-2 h-2 bg-white/20 rounded-full absolute top-[30%] left-[80%]" />
        <div className="condensation-drop w-1 h-1 bg-white/40 rounded-full absolute top-[60%] left-[15%]" />
        <div className="condensation-drop w-3 h-3 bg-white/10 rounded-full absolute top-[80%] left-[70%]" />
      </div>

      {/* Beams of light */}
      <div className="absolute inset-0 z-2 pointer-events-none overflow-hidden">
        <div className="beam w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent absolute left-[30%] -rotate-12" />
        <div className="beam w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent absolute left-[60%] -rotate-12" />
      </div>

      {/* Content */}
      <div className="hero-section__content relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="reveal mb-8">
          <div className="hero-section__badge inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-10">
            <span className="w-2 h-2 rounded-full bg-bloom-green animate-pulse" />
            <span className="hero-section__badge-copy text-[11px] font-semibold tracking-[0.2em] uppercase text-white">14 ARREGLOS FRESCOS - ENFRIADOR #3, UNION SQUARE</span>
          </div>
          
          <h1 className="font-fraunces text-[clamp(3.5rem,8vw,7rem)] leading-[1] text-white tracking-tight mb-8">
            Las flores no tienen <br />
            <span className="italic font-light opacity-90">horario de oficina.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12 font-sans">
            Mucho menos límites de distancia. Reserva el tuyo de cualquier lugar del mundo. Obtén el código, recógelo en cualquier momento.
          </p>

          {/* Countdown */}
          <div className="hero-section__countdown mb-12 flex flex-col items-center gap-4">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/60">PRÓXIMA ENTREGA EN</p>
            <div className="hero-section__countdown-values">
              <div className="text-center">
                <p className="hero-section__countdown-number text-5xl font-fraunces text-white mb-1">{String(timeLeft.hours).padStart(2, '0')}</p>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40">Hrs</p>
              </div>
              <span className="hero-section__countdown-divider text-3xl font-fraunces text-white/20">:</span>
              <div className="text-center">
                <p className="hero-section__countdown-number text-5xl font-fraunces text-white mb-1">{String(timeLeft.minutes).padStart(2, '0')}</p>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40">Min</p>
              </div>
              <span className="hero-section__countdown-divider text-3xl font-fraunces text-white/20">:</span>
              <div className="text-center">
                <p className="hero-section__countdown-number text-5xl font-fraunces text-white mb-1">{String(timeLeft.seconds).padStart(2, '0')}</p>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-white/40">Seg</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white text-[15px] font-semibold rounded-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 active:scale-95 flex items-center gap-3">
              Ver los Ramos de Hoy
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-section__scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white">DESLIZAR PARA ABRIR</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
