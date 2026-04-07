'use client';

import React, { useState } from 'react';
import AppImage from '@/src/components/ui/AppImage';
import { useCart, Product } from '@/src/contexts/CartContext';
import { get } from 'http';

const images = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: { preset: 'url' }
});

const getImageUrl = (filename: string) => {
  const key = Object.keys(images).find((k) => k.includes(filename));
  return key ? (images[key] as any).default : '';
};

const products: Product[] = [
  // Ramos de Rosas
  {
    id: 'r1',
    name: 'Pasión Escarlata',
    description: '12 rosas rojas de tallo largo con follaje premium.',
    price: 45,
    image: getImageUrl('valentines-day-womens-mothers-day-red-rose-with-ribbon-heart-gift-surprise'),
    category: 'Ramos de Rosas'
  },
  {
    id: 'r2',
    name: 'Despertar Escarlata',
    description: 'Mezcla de rosas en tonos elegantes y cálidos.',
    price: 38,
    image: getImageUrl('composition-red-flowers-near-ribbon'),
    category: 'Ramos de Rosas'
  },
  {
    id: 'r3',
    name: 'Elegancia Blanca',
    description: 'Rosas blancas puras simbolizando paz y pureza.',
    price: 42,
    image: getImageUrl('beautiful-spring-flowers'),
    category: 'Ramos de Rosas'
  },
  // Arreglos Exóticos
  {
    id: 'e1',
    name: 'Paraíso Tropical',
    description: 'orquídeas y flores exóticas.',
    price: 65,
    image: getImageUrl('burgundy-orange-lillian-bouquet-with-roses-dark-background'),
    category: 'Arreglos Exóticos'
  },
  {
    id: 'e2',
    name: 'Orquídea Zen',
    description: 'Orquídea Phalaenopsis en base de cerámica minimalista.',
    price: 55,
    image:getImageUrl('vertical-selective-focus-shot-red-anthurium-flowers'),
    category: 'Arreglos Exóticos'
  },
  {
    id: 'e3',
    name: 'Amanecer Rosa',
    description: 'Composición de flores tropicales de colores intensos.',
    price: 70,
    image: getImageUrl('bouquet-standing-books'),
    category: 'Arreglos Exóticos'
  },
  // Plantas de Interior
  {
    id: 'p1',
    name: 'Monstera Deliciosa',
    description: 'Planta de hojas grandes y verdes, ideal para interiores.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b',
    category: 'Plantas de Interior'
  },
  {
    id: 'p2',
    name: 'Ficus Lyrata',
    description: 'Árbol de interior con hojas en forma de violín.',
    price: 48,
    image: getImageUrl('vertical-shot-indoor-fiddle-leaf-fig-plant-white-pot'),
    category: 'Plantas de Interior'
  }

];


export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const { addItem } = useCart();

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-16 text-center">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-bloom-pink mb-4">NUESTRA COLECCIÓN</p>
          <h2 className="font-fraunces text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-bloom-ink italic">
            Catálogo <span className="not-italic">Completo</span>
          </h2>
        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`reveal reveal-delay-${(index % 4) + 1} group flex flex-col`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-4 bg-bloom-linen">
                <AppImage
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bloom-ink/0 group-hover:bg-bloom-ink/10 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-sm border border-bloom-border shadow-lg">
                  <p className="text-[14px] font-fraunces font-medium text-bloom-pink">${product.price}</p>
                </div>
              </div>
              <h3 className="font-fraunces text-xl text-bloom-ink mb-1 italic">{product.name}</h3>
              <p className="text-[12px] text-bloom-ink-muted leading-relaxed mb-4 flex-grow">{product.description}</p>
              <button 
                onClick={() => addItem(product)}
                className="w-full py-3 border border-bloom-ink text-bloom-ink text-[11px] font-bold tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-bloom-ink hover:text-white active:scale-95"
              >
                Añadir al Carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
