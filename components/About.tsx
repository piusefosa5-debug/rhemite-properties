
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
             <div className="w-full h-80 md:h-96 bg-[#E5E5E5] rounded-lg shadow-lg flex items-center justify-center">
               <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path><path d="M12 7.5h1.5l.5 2.5.5-2.5h1.5v6h-1.5l-.5-2.5-.5 2.5h-1.5z"></path></svg>
               <span className="text-gray-500 ml-2">Office / CEO Photo</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
              About Rhemite Properties and Homes
            </h2>
            <div className="w-20 h-1 bg-[#0FA958] mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Based in Lagos, Nigeria, Rhemite Properties and Homes — led by CEO Olayinka Awokoya — simplifies the process of buying land in large quantities for estates and commercial development.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From hundreds to thousands of acres, we help clients acquire prime locations, handle documentation, and ensure safe, transparent transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
