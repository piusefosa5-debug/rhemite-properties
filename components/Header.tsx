
import React from 'react';
import { LogoPlaceholder } from './icons/IconComponents';

const Header: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/2348146361483?text=Hello%20Rhemite%20Properties%20and%20Homes!%20I%27m%20interested%20in%20learning%20more%20about%20your%20real%20estate%20offers.";

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <LogoPlaceholder className="h-12" />
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0FA958] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-emerald-700 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
};

export default Header;
