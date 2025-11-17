
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CeoQuote from './components/CeoQuote';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="bg-white text-[#0D1B2A]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CeoQuote />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;
