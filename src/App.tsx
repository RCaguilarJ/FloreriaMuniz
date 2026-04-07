import React from 'react';
import { CartProvider } from './contexts/CartContext';
import Page from './app/page';
import CartSidebar from './components/CartSidebar';

function App() {
  return (
    <CartProvider>
      <Page />
      <CartSidebar />
    </CartProvider>
  );
}

export default App;
