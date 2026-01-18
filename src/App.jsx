import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import HighlightSection from './components/HighlightSection';
import CreativeSection from './components/CreativeSection';
import FarmVariety from './components/FarmVariety';
import BeverageSection from './components/BeverageSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-yellow selection:text-brown-dark overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Hero />
        <ProductGrid />
        <CreativeSection />
        <FarmVariety />
        <HighlightSection />
        <BeverageSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
