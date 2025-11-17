
import React from 'react';

const CeoQuote: React.FC = () => {
  return (
    <section className="bg-[#0D1B2A] text-white py-20 md:py-24 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <svg className="w-64 h-64 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6"></path>
            </svg>
        </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <blockquote className="text-2xl md:text-4xl italic font-medium max-w-4xl mx-auto">
          “We help turn ambitious property and business ideas into reality — quickly, efficiently, and with absolute trust.”
        </blockquote>
        <cite className="block text-lg text-[#E5E5E5] mt-6 not-italic">
          — Olayinka Awokoya, CEO
        </cite>
      </div>
    </section>
  );
};

export default CeoQuote;
