import React, { useState } from 'react';

const locations = [
  { id: 'union', name: 'Union Square', address: '14th St & Broadway', status: '14 disponible' },
  { id: 'chelsea', name: 'Chelsea Market', address: '9th Ave & 15th St', status: '8 disponible' },
  { id: 'flatiron', name: 'Flatiron', address: '23rd St & 5th Ave', status: '11 disponible' },
  { id: 'williamsburg', name: 'Williamsburg', address: 'Bedford Ave & N 7th', status: '6 disponible' },
];

export default function UnlockSection() {
  const [selectedLocation, setSelectedLocation] = useState('union');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="unlock" className="py-24 px-6 md:px-12 lg:px-20 bg-bloom-linen border-t border-bloom-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side: Info */}
          <div className="reveal">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-bloom-pink mb-4">LISTO CUANDO TÚ LO ESTÉS</p>
            <h2 className="font-fraunces text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-bloom-ink mb-8">
              Abre el <br />
              <span className="italic font-light opacity-80">enfriador.</span>
            </h2>
            <p className="text-lg text-bloom-ink-muted max-w-md leading-relaxed mb-10">
              Elige tu ubicación, ingresa tu número y te enviaremos un código de desbloqueo. Tu ramo te espera por 90 minutos — sin prisas, sin mostrador, sin charlas triviales.
            </p>

            <ul className="space-y-4">
              {[
                { icon: '📱', text: 'Código de desbloqueo enviado en segundos' },
                { icon: '⏱️', text: 'Reservado por 90 minutos' },
                { icon: '💳', text: 'Paga en el enfriador con tap-to-pay' },
                { icon: '🌿', text: 'Cada ramo cortado esta mañana' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[13px] font-medium text-bloom-ink">
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Form */}
          <div className="reveal reveal-delay-1 bg-white p-8 md:p-12 rounded-sm border border-bloom-border shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-bloom-ink-muted mb-4">ELIGE UNA UBICACIÓN</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {locations.map((loc) => (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => setSelectedLocation(loc.id)}
                        className={`text-left p-4 rounded-sm border transition-all duration-300 ${
                          selectedLocation === loc.id
                            ? 'border-bloom-green bg-bloom-green/5 ring-1 ring-bloom-green'
                            : 'border-bloom-border hover:border-bloom-ink/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-[13px] font-bold text-bloom-ink">{loc.name}</p>
                          {selectedLocation === loc.id && (
                            <div className="w-4 h-4 bg-bloom-green rounded-full flex items-center justify-center">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-[11px] text-bloom-ink-muted mb-2">{loc.address}</p>
                        <p className="text-[10px] font-bold text-bloom-ink-muted uppercase tracking-wider">{loc.status}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-bloom-ink-muted mb-4">TU NÚMERO MÓVIL</label>
                  <div className="flex gap-2">
                    <div className="px-4 py-4 bg-bloom-linen border border-bloom-border rounded-sm text-bloom-ink font-medium text-[14px]">
                      +1
                    </div>
                    <input
                      type="tel"
                      placeholder="(212) 555-0194"
                      className="flex-1 px-6 py-4 bg-bloom-linen border border-bloom-border rounded-sm text-bloom-ink placeholder-bloom-ink/30 focus:outline-none focus:ring-2 focus:ring-bloom-green transition-all"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <p className="text-[10px] text-bloom-ink-muted mt-2">Te enviaremos tu código de desbloqueo. Sin spam, nunca.</p>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-bloom-ink-muted mb-4">NOTA DE REGALO <span className="opacity-50">(OPCIONAL)</span></label>
                  <textarea
                    placeholder="Para ti, porque es martes."
                    rows={3}
                    className="w-full px-6 py-4 bg-bloom-linen border border-bloom-border rounded-sm text-bloom-ink placeholder-bloom-ink/30 focus:outline-none focus:ring-2 focus:ring-bloom-green transition-all resize-none"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-8 py-5 bg-bloom-green text-white text-[14px] font-bold tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-bloom-green-dark hover:-translate-y-1 active:scale-95 shadow-xl flex items-center justify-center gap-3"
                  >
                    Reservar Ahora
                  </button>
                  <button
                    type="button"
                    className="px-8 py-5 border border-bloom-pink text-bloom-pink text-[14px] font-bold tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-bloom-pink hover:text-white active:scale-95"
                  >
                    Sorpréndeme
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 animate-reveal">
                <div className="w-20 h-20 bg-bloom-green/10 text-bloom-green rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-fraunces text-3xl text-bloom-ink mb-4 italic">¡Código enviado!</h3>
                <p className="text-bloom-ink-muted leading-relaxed mb-8">
                  Revisa tus mensajes. Tu código de desbloqueo para {locations.find(l => l.id === selectedLocation)?.name} está en camino.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[12px] font-bold tracking-widest uppercase text-bloom-pink hover:text-bloom-pink-dark transition-colors"
                >
                  Regresar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
