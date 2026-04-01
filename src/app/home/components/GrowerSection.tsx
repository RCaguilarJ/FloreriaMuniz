import React, { useEffect, useRef } from 'react';
import AppImage from '../../../components/ui/AppImage';

export default function GrowerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="py-24 px-6 md:px-12 lg:px-20 bg-bloom-linen border-t border-bloom-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="reveal relative aspect-[4/5] lg:aspect-auto lg:h-[700px] rounded-sm overflow-hidden group">
            <AppImage
              src="https://images.unsplash.com/photo-1591886960571-74d43a9d4166"
              alt="Florista trabajando al amanecer"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bloom-ink/40 to-transparent" />
            
            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-sm border border-bloom-border shadow-2xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-bloom-pink animate-pulse" />
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-bloom-ink">CONSTRUCCIÓN DE HOY</p>
              </div>
              <div className="space-y-1 mb-4">
                <div className="h-1 w-full bg-bloom-green rounded-full" />
                <div className="h-1 w-3/4 bg-bloom-green rounded-full" />
                <div className="h-1 w-1/2 bg-bloom-green rounded-full" />
              </div>
              <p className="text-[11px] text-bloom-ink-muted leading-tight">14 arreglos construidos en 90 minutos</p>
            </div>
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-8">
            <div className="reveal reveal-delay-1">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-bloom-pink mb-4">LA HISTORIA DEL CULTIVADOR</p>
              <h2 className="font-fraunces text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-bloom-ink mb-8">
                Creado al amanecer, <br />
                <span className="italic font-light opacity-80">esperando por ti.</span>
              </h2>
              <div className="space-y-6 text-bloom-ink-muted text-lg leading-relaxed max-w-xl">
                <p>
                  Cada arreglo comienza a las 4:30 AM en nuestro taller de Sunset Park. Los tallos llegan durante la noche desde granjas en el Valle del Hudson y Colombia — los clasificamos por color, los cortamos a mano y construimos cada ramo para que dure 48 horas en el enfriador.
                </p>
                <p>
                  Diseñamos Bloom para los momentos en que necesitas algo hermoso y la floristería está cerrada. Un aniversario a las 4 AM. Un vecino que acaba de recibir malas noticias. Un martes que necesitaba una razón.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-2 flex flex-wrap gap-12 mt-4">
              <div>
                <p className="text-3xl font-fraunces text-bloom-ink mb-1">80km</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-bloom-ink-muted">Radio Máximo</p>
              </div>
              <div>
                <p className="text-3xl font-fraunces text-bloom-ink mb-1">6hrs</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-bloom-ink-muted">Del Corte al Enfriador</p>
              </div>
              <div>
                <p className="text-3xl font-fraunces text-bloom-ink mb-1">100%</p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-bloom-ink-muted">Libre de Pesticidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
