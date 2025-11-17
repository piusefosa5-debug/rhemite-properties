
import React from 'react';
import { WhatsAppIcon } from './icons/IconComponents';

const FloatingWhatsAppButton: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/2348146361483?text=Hello%20Rhemite%20Properties%20and%20Homes!%20I%27m%20interested%20in%20acquiring%20land%20through%20your%20company.";

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#0FA958] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-700 transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsAppButton;
