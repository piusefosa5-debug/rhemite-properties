
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-semibold text-lg mb-2">
          Rhemite Properties and Homes – Building Trust, Creating Value.
        </p>
        <p className="text-[#E5E5E5] text-sm">
          © {new Date().getFullYear()} Rhemite Properties and Homes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
