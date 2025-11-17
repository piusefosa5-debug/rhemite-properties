
import React from 'react';

const Hero: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/2348146361483?text=Hello%20Rhemite%20Properties%20and%20Homes!%20I%27m%20interested%20in%20learning%20more%20about%20your%20real%20estate%20offers.";
  
  return (
    <section 
      className="relative bg-cover bg-center text-white py-32 md:py-48"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-[#0D1B2A] opacity-70"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Making Large-Scale Real Estate Investment Effortless.
        </h1>
        <p className="text-lg md:text-xl text-[#E5E5E5] max-w-3xl mx-auto mb-8">
          We help developers and investors acquire verified lands in acres — for estates, commercial farms, and industrial projects.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0FA958] text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg hover:bg-emerald-700 transition-transform duration-300 hover:scale-105"
        >
          Get in Touch &rarr;
        </a>
      </div>
    </section>
  );
};

export default Hero;
