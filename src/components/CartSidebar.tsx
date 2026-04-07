'use client';

import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/src/contexts/CartContext';

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, clearCart, total, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-bloom-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-bloom-pink" />
            <h2 className="font-fraunces text-xl text-bloom-ink">Tu Carrito</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-bloom-linen rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 mx-auto text-bloom-fog mb-4" />
              <p className="text-bloom-ink-muted">Tu carrito está vacío</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-bloom-pink font-medium hover:underline"
              >
                Ver catálogo
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 pb-6 border-b border-bloom-border">
                  <div className="w-20 h-24 rounded-sm overflow-hidden bg-bloom-linen shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-fraunces text-base text-bloom-ink">{item.name}</h3>
                    <p className="text-sm text-bloom-pink font-medium">${item.price}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="flex items-center border border-bloom-border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-bloom-linen"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-bloom-linen"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-bloom-fog hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-bloom-border bg-bloom-linen/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-bloom-ink-muted">Total</span>
              <span className="font-fraunces text-2xl text-bloom-ink">${total}</span>
            </div>
            <button
              onClick={() => {
                const message = items
                  .map((item) => `${item.quantity}x ${item.name} - $${item.price * item.quantity}`)
                  .join('\n');
                const whatsappMessage = encodeURIComponent(`Hola! Me interesa comprar:\n${message}\n\nTotal: $${total}`);
                window.open(`https://wa.me/5491140800700?text=${whatsappMessage}`, '_blank');
              }}
              className="w-full py-4 bg-bloom-pink text-white font-bold tracking-widest uppercase text-xs rounded-sm transition-all hover:bg-bloom-pink/90 active:scale-95"
            >
              Comprar por WhatsApp
            </button>
            <button
              onClick={clearCart}
              className="w-full mt-2 py-2 text-bloom-ink-muted text-xs hover:underline"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}