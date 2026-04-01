import React from 'react';

const flowers = [
  'GARDEN PEONY', 'RANUNCULUS', 'TUBEROSE', 'SWEET WILLIAM', 'EUCALYPTUS', 'LISIANTHUS', 'ANEMONE', 'HELLEBORE', 'SCABIOSA', 'SWEETPEA', 'FRITILLARIA', 'MUSCARI'
];

export default function MarqueeSection() {
  return (
    <section className="py-6 bg-white overflow-hidden border-y border-bloom-border">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set of flowers */}
        <div className="flex items-center gap-8 px-4">
          {flowers.map((flower, index) => (
            <div key={`flower-1-${index}`} className="flex items-center gap-8">
              <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-bloom-ink/40 hover:text-bloom-ink transition-colors duration-500 cursor-default uppercase">
                {flower}
              </span>
              <div className="w-1 h-1 rounded-full bg-bloom-ink/20" />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless looping */}
        <div className="flex items-center gap-8 px-4">
          {flowers.map((flower, index) => (
            <div key={`flower-2-${index}`} className="flex items-center gap-8">
              <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-bloom-ink/40 hover:text-bloom-ink transition-colors duration-500 cursor-default uppercase">
                {flower}
              </span>
              <div className="w-1 h-1 rounded-full bg-bloom-ink/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
