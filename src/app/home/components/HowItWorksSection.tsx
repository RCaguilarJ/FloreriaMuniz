import React, { useEffect, useRef } from 'react';
import AppIcon from '../../../components/ui/AppIcon';

const steps = [
  {
    number: '01',
    title: 'Explora y Reserva',
    description: 'Mira exactamente qué hay en el enfriador ahora mismo — fotos reales, tallos reales, precios reales. Toca "Reservar" y tu ramo se guardará por 90 minutos.',
    subtext: 'Sin necesidad de cuenta. Solo tu número de teléfono.',
    icon: 'DevicePhoneMobileIcon'
  },
  {
    number: '02',
    title: 'Obtén tu Código',
    description: 'Te enviaremos un código de desbloqueo de 6 dígitos y un pin que muestra exactamente qué unidad contiene tu ramo.',
    subtext: 'Funciona en cualquier teléfono. No requiere aplicación.',
    icon: 'ChatBubbleLeftRightIcon'
  },
  {
    number: '03',
    title: 'Abre y Llévate',
    description: 'Camina hacia el enfriador, ingresa tu código, abre la puerta. Tu ramo te espera — envuelto, fresco, listo para llevar.',
    subtext: '24 horas al día. Sin florista. Sin esperas.',
    icon: 'LockClosedIcon'
  }
];

const stats = [
  { icon: 'ScissorsIcon', label: 'Cortado esta mañana', sub: '5:40 AM cosecha' },
  { icon: 'SnowflakeIcon', label: 'Frescura de enfriador', sub: '34°F almacenamiento' },
  { icon: 'MapPinIcon', label: '6 ubicaciones', sub: 'Manhattan y Brooklyn' },
  { icon: 'ClockIcon', label: '90 min de reserva', sub: 'Por reserva' }
];

export default function HowItWorksSection() {
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
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 lg:px-20 bg-white border-t border-bloom-border">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="reveal mb-20">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-bloom-pink mb-4">SIN NECESIDAD DE FLORISTA</p>
          <h2 className="font-fraunces text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-bloom-ink italic">
            Cómo <span className="not-italic">funciona</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-bloom-border -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <div key={index} className="reveal relative z-10 bg-white pr-8">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 bg-bloom-linen flex items-center justify-center rounded-sm border border-bloom-border">
                  <AppIcon name={step.icon} size={28} className="text-bloom-ink" />
                </div>
                <span className="text-6xl font-fraunces text-bloom-ink/5 leading-none">{step.number}</span>
              </div>
              <h3 className="font-fraunces text-2xl text-bloom-ink mb-4 italic">{step.title}</h3>
              <p className="text-bloom-ink-muted text-[15px] leading-relaxed mb-4">
                {step.description}
              </p>
              <p className="text-[11px] font-bold tracking-wider uppercase text-bloom-ink/40">
                {step.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div className="reveal bg-bloom-linen/50 border border-bloom-border rounded-sm p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-bloom-ink text-white flex items-center justify-center rounded-full flex-shrink-0">
                  <AppIcon name={stat.icon} size={18} />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-bloom-ink leading-tight">{stat.label}</p>
                  <p className="text-[10px] text-bloom-ink-muted uppercase tracking-widest mt-0.5">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
