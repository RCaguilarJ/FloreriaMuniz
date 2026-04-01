'use client';

import React, { useState } from 'react';
import AppImage from '@/src/components/ui/AppImage';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  // Ramos de Rosas
  {
    id: 'r1',
    name: 'Pasión Escarlata',
    description: '12 rosas rojas de tallo largo con follaje premium.',
    price: 45,
    image: 'https://images.unsplash.com/photo-1548610762-7c6abc94c031',
    category: 'Ramos de Rosas'
  },
  {
    id: 'r2',
    name: 'Amanecer Rosa',
    description: 'Mezcla de rosas en tonos pastel y eucalipto.',
    price: 38,
    image: 'https://images.unsplash.com/photo-1596073413225-307ddbd35945',
    category: 'Ramos de Rosas'
  },
  {
    id: 'r3',
    name: 'Elegancia Blanca',
    description: 'Rosas blancas puras simbolizando paz y pureza.',
    price: 42,
    image: 'https://images.unsplash.com/photo-1525310238806-e156c2702b00',
    category: 'Ramos de Rosas'
  },
  // Arreglos Exóticos
  {
    id: 'e1',
    name: 'Paraíso Tropical',
    description: 'Aves del paraíso, anturios y orquídeas exóticas.',
    price: 65,
    image: 'https://images.unsplash.com/photo-1567606117528-5ffe2d961634',
    category: 'Arreglos Exóticos'
  },
  {
    id: 'e2',
    name: 'Orquídea Zen',
    description: 'Orquídea Phalaenopsis en base de cerámica minimalista.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1534885322321-4feb4a782fc2',
    category: 'Arreglos Exóticos'
  },
  {
    id: 'e3',
    name: 'Selva Vibrante',
    description: 'Composición de flores tropicales de colores intensos.',
    price: 70,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
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
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a207518',
    category: 'Plantas de Interior'
  },
  {
    id: 'p3',
    name: 'Sansevieria',
    description: 'Planta resistente que purifica el aire, fácil cuidado.',
    price: 25,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bac',
    category: 'Plantas de Interior'
  },
  // Ocasiones Especiales
  {
    id: 's1',
    name: 'Caja de Amor',
    description: 'Rosas y chocolates en una caja de lujo.',
    price: 85,
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7',
    category: 'Ocasiones Especiales'
  },
  {
    id: 's2',
    name: 'Celebración Dorada',
    description: 'Arreglo festivo con toques dorados y champán.',
    price: 95,
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176',
    category: 'Ocasiones Especiales'
  },
  {
    id: 's3',
    name: 'Nacimiento Dulce',
    description: 'Flores suaves acompañadas de un peluche premium.',
    price: 60,
    image: 'https://images.unsplash.com/photo-1522673607200-1648482ce486',
    category: 'Ocasiones Especiales'
  }
];

const categories = ['Todos', 'Ramos de Rosas', 'Arreglos Exóticos', 'Plantas de Interior', 'Ocasiones Especiales'];

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');

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

        {/* Category Filter */}
        <div className="reveal flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-bloom-ink text-white' 
                  : 'bg-bloom-linen text-bloom-ink-muted hover:bg-bloom-fog'
              }`}
            >
              {cat}
            </button>
          ))}
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
              <button className="w-full py-3 border border-bloom-ink text-bloom-ink text-[11px] font-bold tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-bloom-ink hover:text-white active:scale-95">
                Añadir al Carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
