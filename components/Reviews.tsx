
import React from 'react';
import { FilledStarIcon } from './icons/IconComponents';

interface ReviewCardProps {
  quote: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ quote }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-gray-100">
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 rounded-full bg-[#E5E5E5] flex items-center justify-center">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
      </div>
    </div>
     <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <FilledStarIcon key={i} className="w-5 h-5 text-[#0FA958]" />
      ))}
    </div>
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="font-semibold text-[#0D1B2A]">Valued Client</p>
  </div>
);


const Reviews: React.FC = () => {
  const reviews = [
    "Seamless process from start to finish. Rhemite Properties is professional and reliable.",
    "Their team helped us secure over 50 acres with full documentation — stress-free.",
    "Highly trustworthy company for large-scale real estate deals."
  ];

  return (
    <section id="reviews" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A]">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-[#0FA958] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} quote={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
