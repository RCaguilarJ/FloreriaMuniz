import React, { useEffect, useRef, useState } from 'react';
import AppImage from '../../../components/ui/AppImage';

interface Bouquet {
  id: number;
  name: string;
  price: number;
  stems: number;
  scent: string;
  freshness: string;
  tag: string;
  location: string;
  available: boolean;
  image: string;
  alt: string;
  size: 'tall' | 'wide' | 'normal';
}

const bouquets: Bouquet[] = [
{
  id: 1,
  name: 'Niebla Matinal',
  price: 38,
  stems: 12,
  scent: 'Nardos y hierba cortada',
  freshness: 'Cortado hoy a las 5:40 AM',
  tag: 'Recién llegado',
  location: 'Union Square · Enfriador #3',
  available: true,
  image: "https://images.unsplash.com/photo-1642017400232-edacc6d5282e",
  alt: 'Peonías blancas y rosadas con eucalipto en un ramo atado a mano',
  size: 'tall'
},
{
  id: 2,
  name: 'Tormenta de Pétalos',
  price: 52,
  stems: 18,
  scent: 'Rosa de jardín y lluvia',
  freshness: 'Cortado hoy a las 5:40 AM',
  tag: 'Quedan 3',
  location: 'Union Square · Enfriador #3',
  available: true,
  image: "https://images.unsplash.com/photo-1588350350703-fddbfc5cfaf6",
  alt: 'Vibrante ramo mixto de rosas de jardín en tonos rosa y coral',
  size: 'normal'
},
{
  id: 3,
  name: 'Tallo y Piedra',
  price: 44,
  stems: 14,
  scent: 'Ranúnculos y hierbas verdes',
  freshness: 'Cortado hoy a las 5:40 AM',
  tag: 'Más vendido',
  location: 'Chelsea · Enfriador #7',
  available: true,
  image: "https://images.unsplash.com/photo-1651709013317-5dffa0364506",
  alt: 'Ranúnculos melocotón y crema con follaje oscuro en envoltorio rústico',
  size: 'normal'
},
{
  id: 4,
  name: 'Lino y Encaje',
  price: 29,
  stems: 9,
  scent: 'Clavel del poeta y lino',
  freshness: 'Cortado hoy a las 5:40 AM',
  tag: 'Último disponible',
  location: 'Flatiron · Enfriador #1',
  available: true,
  image: "https://images.unsplash.com/photo-1628328296251-8e4bddb836e3",
  alt: 'Delicadas anémonas blancas y claveles del poeta envueltos en papel marrón',
  size: 'wide'
},
{
  id: 5,
  name: 'Hora Violeta',
  price: 47,
  stems: 15,
  scent: 'Lavanda y tierra húmeda',
  freshness: 'Cortado hoy a las 5:40 AM',
  tag: 'Nuevo',
  location: 'Union Square · Enfriador #3',
  available: true,
  image: "https://images.unsplash.com/photo-1724094819235-58a00705d049",
  alt: 'Ramo púrpura y malva con tallos de lavanda y bayas oscuras',
  size: 'normal'
},
{
  id: 6,
  name: 'Oro y Silvestre',
  price: 35,
  stems: 11,
  scent: 'Girasol y heno cálido',
  freshness: 'Cortado hoy a las 5:40 AM',
  tag: 'Quedan 5',
  location: 'Chelsea · Enfriador #7',
  available: true,
  image: "https://images.unsplash.com/photo-1696651484789-fa1bb3acf2f1",
  alt: 'Girasoles brillantes y flores silvestres doradas en un paquete casual atado a mano',
  size: 'normal'
}];


function BouquetCard({ bouquet, index }: { bouquet: Bouquet; index: number; key?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [reserved, setReserved] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (cardRef.current) {
      cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    }
  };

  const sizeClass =
  bouquet.size === 'tall' ? 'row-span-2' :
  bouquet.size === 'wide' ? 'md:col-span-2' : '';

  return (
    <div
      ref={cardRef}
      className={`reveal reveal-delay-${index % 4 + 1} ${sizeClass}`}
      style={{ transitionDelay: `${index * 0.08}s` }}>
      
      <div
        className="bouquet-card spotlight-card group relative overflow-hidden rounded-sm bg-bloom-card border border-bloom-border cursor-pointer h-full"
        style={{ minHeight: bouquet.size === 'tall' ? '520px' : '280px' }}
        onMouseMove={handleMouseMove}>
        
        {/* Image */}
        <div className="absolute inset-0 overflow-hidden">
          <AppImage
            src={bouquet.image}
            alt={bouquet.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105" />
          
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bloom-ink/80 via-bloom-ink/10 to-transparent" />

        {/* Tag badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-bloom-pink/90 text-white text-[9px] font-bold tracking-wider uppercase px-2 py-1 rounded-[2px] backdrop-blur-sm">
            {bouquet.tag}
          </span>
        </div>

        {/* Hover overlay info */}
        <div className="bouquet-overlay absolute inset-0 bg-bloom-ink/40 backdrop-blur-[2px] z-5 flex flex-col justify-center items-center gap-3 p-6">
          <p className="text-white/70 text-[12px] text-center italic font-fraunces">
            &ldquo;{bouquet.scent}&rdquo;
          </p>
          <p className="text-white/60 text-[11px] tracking-widest uppercase">{bouquet.freshness}</p>
          <div className="flex items-center gap-1 text-white/50 text-[11px]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            {bouquet.location}
          </div>
          <div className="mt-2 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/20">
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">{bouquet.stems} tallos</span>
            <span className="w-px h-3 bg-white/20" />
            <span className="text-[12px] font-fraunces font-medium text-white">${bouquet.price}</span>
          </div>
        </div>

        {/* Bottom info — always visible */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="font-fraunces text-white text-xl font-light italic leading-tight mb-1">{bouquet.name}</h3>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setReserved(!reserved);
              }}
              className={`flex-shrink-0 px-4 py-1.5 rounded-[2px] text-[10px] font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 ${
              reserved ?
              'bg-bloom-green text-white' : 'bg-bloom-pink text-white hover:bg-bloom-pink-dark'}`
              }>
              
              {reserved ? 'Reservado' : 'Reservar'}
            </button>
          </div>
        </div>
      </div>
    </div>);

}

export default function GallerySection() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 lg:px-20 bg-bloom-linen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headingRef} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-bloom-pink mb-4">
              EN EL ENFRIADOR AHORA MISMO
            </p>
            <h2 className="font-fraunces text-bloom-ink leading-none">
              <span className="block text-[clamp(2.5rem,5vw,4.5rem)] italic font-light">Arreglos</span>
              <span className="block text-[clamp(2.5rem,5vw,4.5rem)] font-medium">de Hoy</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bloom-green animate-pulse" />
              <span className="text-[12px] font-medium text-bloom-ink-muted">14 ramos disponibles</span>
            </div>
            <p className="text-[12px] text-bloom-ink-muted">Fotos tomadas esta mañana · {new Date().toLocaleDateString('es-ES', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {bouquets.map((bouquet, index) =>
          <BouquetCard key={bouquet.id} bouquet={bouquet} index={index} />
          )}
        </div>

        {/* Surprise Me */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm border border-bloom-ink text-bloom-ink text-[12px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-bloom-ink hover:text-white active:scale-95">
            
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="4" y1="4" x2="9" y2="9" />
            </svg>
            Sorpréndeme
          </button>
          <p className="text-[12px] text-bloom-ink-muted font-medium">
            Elegiremos lo más fresco y lo guardaremos para ti
          </p>
        </div>
      </div>
    </section>);

}
