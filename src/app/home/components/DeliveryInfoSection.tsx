'use client';

import React from 'react';
import AppIcon from '@/src/components/ui/AppIcon';

const deliveryOptions = [
  {
    icon: 'TruckIcon',
    title: 'Entrega el Mismo Día',
    description: 'Haz tu pedido antes de las 12:00 PM y recíbelo hoy mismo. Ideal para sorpresas de último minuto.',
    fee: 'Desde $15.00'
  },
  {
    icon: 'CalendarDaysIcon',
    title: 'Entrega Programada',
    description: 'Elige la fecha y el bloque horario que prefieras. Perfecto para aniversarios y cumpleaños.',
    fee: 'Desde $8.00'
  },
  {
    icon: 'BuildingStorefrontIcon',
    title: 'Recogida en Tienda',
    description: 'Reserva en línea y recoge en cualquiera de nuestras 6 ubicaciones sin costo adicional.',
    fee: 'Gratis'
  },
  {
    icon: 'GlobeAmericasIcon',
    title: 'Envío Nacional',
    description: 'Enviamos ramos seleccionados y plantas a todo el país. Entrega en 24-48 horas.',
    fee: 'Desde $25.00'
  }
];

export default function DeliveryInfoSection() {
  return (
    <section id="delivery" className="py-24 px-6 md:px-12 lg:px-20 bg-bloom-linen border-t border-bloom-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side: Info */}
          <div className="reveal">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-bloom-pink mb-4">LOGÍSTICA DE FRESCURA</p>
            <h2 className="font-fraunces text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-bloom-ink mb-8">
              Envíos y <br />
              <span className="italic font-light opacity-80">entregas.</span>
            </h2>
            <p className="text-lg text-bloom-ink-muted max-w-md leading-relaxed mb-10">
              Nos tomamos en serio la entrega de tus flores. Cada ramo se transporta en vehículos climatizados para garantizar que lleguen tan frescos como cuando salieron del enfriador.
            </p>

            <div className="space-y-8">
              <div className="p-6 bg-white rounded-sm border border-bloom-border shadow-sm">
                <h3 className="font-fraunces text-xl text-bloom-ink mb-3 italic">Cálculo de Tarifas</h3>
                <p className="text-[14px] text-bloom-ink-muted leading-relaxed">
                  Nuestras tarifas de envío se calculan automáticamente en el checkout basándose en:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-3 text-[13px] text-bloom-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-bloom-green" />
                    <strong>Distancia:</strong> Radio desde nuestra tienda más cercana.
                  </li>
                  <li className="flex items-center gap-3 text-[13px] text-bloom-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-bloom-green" />
                    <strong>Urgencia:</strong> Recargos para entregas en menos de 4 horas.
                  </li>
                  <li className="flex items-center gap-3 text-[13px] text-bloom-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-bloom-green" />
                    <strong>Horario:</strong> Entregas en días festivos o fuera de horario comercial.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right side: Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {deliveryOptions.map((option, index) => (
              <div 
                key={index} 
                className={`reveal reveal-delay-${index + 1} bg-white p-8 rounded-sm border border-bloom-border shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-12 h-12 bg-bloom-linen flex items-center justify-center rounded-full mb-6">
                  <AppIcon name={option.icon} size={24} className="text-bloom-ink" />
                </div>
                <h3 className="font-fraunces text-xl text-bloom-ink mb-3 italic">{option.title}</h3>
                <p className="text-[13px] text-bloom-ink-muted leading-relaxed mb-6">
                  {option.description}
                </p>
                <div className="pt-4 border-t border-bloom-border">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-bloom-pink">{option.fee}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
