
import React from 'react';

const Contact: React.FC = () => {
  const WHATSAPP_LINK = "https://wa.me/2348146361483?text=Hello%20Rhemite%20Properties%20and%20Homes!%20I%27m%20interested%20in%20acquiring%20land%20through%20your%20company.";

  return (
    <section id="contact" className="bg-[#E5E5E5] py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">Contact Us</h2>
        <div className="w-20 h-1 bg-[#0FA958] mx-auto mt-2 mb-8"></div>

        <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
          <p>
            <strong>📧 Email:</strong> <a href="mailto:Rhemiteproperties1@gmail.com" className="hover:text-[#0FA958]">Rhemiteproperties1@gmail.com</a>
          </p>
          <p>
            <strong>📞 Phone/WhatsApp:</strong> <a href="tel:+2348146361483" className="hover:text-[#0FA958]">0814 636 1483</a>
          </p>
          <p>
            <strong>🏢 Office Address:</strong> 7 Lanre Towobola Close, Off Awori Street, Ilepo Alahji Bus Stop, Egbeda, Lagos
          </p>
          <div className="flex justify-center space-x-4">
            <strong>🌐 Social Media:</strong>
            <span className="font-semibold text-[#0D1B2A]">Facebook | Instagram | YouTube — Rhemite Properties</span>
          </div>
        </div>

        <div className="mt-12">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0FA958] text-white font-bold py-4 px-10 rounded-lg text-lg shadow-lg hover:bg-emerald-700 transition-transform duration-300 hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
