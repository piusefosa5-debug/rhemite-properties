
import React from 'react';
import { LandAcquisitionIcon, ConsultingIcon, CommercialLandsIcon, InvestmentIcon } from './icons/IconComponents';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="bg-[#0FA958] text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <LandAcquisitionIcon className="w-8 h-8" />,
      title: "Land Acquisition in Acres",
      description: "Verified large-scale properties."
    },
    {
      icon: <ConsultingIcon className="w-8 h-8" />,
      title: "Estate Project Consulting",
      description: "Strategic guidance for developers."
    },
    {
      icon: <CommercialLandsIcon className="w-8 h-8" />,
      title: "Commercial & Agricultural Lands",
      description: "For farms, factories, and estates."
    },
    {
      icon: <InvestmentIcon className="w-8 h-8" />,
      title: "Investment Advisory",
      description: "Expert insight for property growth."
    }
  ];

  return (
    <section id="services" className="bg-[#E5E5E5] py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A]">Our Core Services</h2>
          <div className="w-20 h-1 bg-[#0FA958] mx-auto mt-4"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
