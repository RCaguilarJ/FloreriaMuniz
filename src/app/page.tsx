import React from 'react';
import HeroSection from './home/components/HeroSection';
import MarqueeSection from './home/components/MarqueeSection';
import GallerySection from './home/components/GallerySection';
import CatalogSection from './home/components/CatalogSection';
import HowItWorksSection from './home/components/HowItWorksSection';
import GrowerSection from './home/components/GrowerSection';
import DeliveryInfoSection from './home/components/DeliveryInfoSection';
import UnlockSection from './home/components/UnlockSection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';

export default function Page() {
  return (
    <main className="min-h-screen bg-bloom-linen selection:bg-bloom-pink selection:text-white">
      <Header />
      <HeroSection />
      <MarqueeSection />
      <GallerySection />
      <CatalogSection />
      <HowItWorksSection />
      <GrowerSection />
      <DeliveryInfoSection />
      <UnlockSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
