
import React from 'react';

interface IconProps {
  className?: string;
}

export const LogoPlaceholder: React.FC<IconProps> = ({ className }) => (
  <div className={`flex items-center justify-center bg-white border border-gray-200 rounded-md p-2 ${className}`}>
    <svg className="w-8 h-8 text-[#0D1B2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6"></path>
    </svg>
    <span className="ml-2 font-bold text-lg text-[#0D1B2A]">Rhemite</span>
  </div>
);

export const LandAcquisitionIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
    </svg>
);

export const ConsultingIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
);

export const CommercialLandsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6M9 15.75h6" />
    </svg>
);

export const InvestmentIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.39-3.429 3.575c-.645.672-.299 1.858.536 2.054l4.636.82-2.106 4.535c-.488.99.71 1.952 1.548 1.42l4.136-2.422 4.136 2.422c.838.532 2.036-.43 1.548-1.42l-2.106-4.535 4.636-.82c.835-.196 1.181-1.382.536-2.054l-3.429-3.575-4.753-.39-1.83-4.401z" />
    </svg>
);

export const FilledStarIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.98 2.7 15.94 3.73 17.61L2 22L6.54 20.31C8.14 21.23 10.03 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 20.13C10.23 20.13 8.5 19.59 7.04 18.6L6.64 18.36L4.22 18.96L4.83 16.6L4.56 16.2C3.54 14.69 3 12.87 3 11.91C3 7.33 7.07 3.69 12.04 3.69C17.01 3.69 21.08 7.33 21.08 11.91C21.08 16.5 17.01 20.13 12.04 20.13M17.84 14.59C17.58 14.46 16.12 13.78 15.89 13.69C15.66 13.6 15.5 13.56 15.33 13.82C15.17 14.08 14.61 14.72 14.44 14.91C14.28 15.09 14.12 15.11 13.86 14.98C13.6 14.85 12.51 14.48 11.23 13.36C10.21 12.48 9.53 11.45 9.34 11.19C9.16 10.93 9.29 10.81 9.42 10.68C9.53 10.57 9.68 10.37 9.81 10.21C9.94 10.05 10 9.93 10.13 9.67C10.26 9.41 10.18 9.22 10.1 9.09C10.02 8.96 9.42 7.52 9.19 6.96C8.97 6.4 8.74 6.47 8.58 6.46H8.19C8.02 6.46 7.73 6.54 7.5 6.77C7.27 7 6.71 7.55 6.71 8.75C6.71 9.95 7.53 11.1 7.66 11.26C7.79 11.42 9.21 13.71 11.41 14.59C11.93 14.82 12.31 14.94 12.62 15.03C13.16 15.18 13.67 15.13 14.08 14.9C14.54 14.65 15.89 13.78 16.12 13.2C16.35 12.62 16.35 12.14 16.27 12.01C16.19 11.88 16.03 11.8 15.86 11.74C15.69 11.68 15.5 11.64 15.33 11.7C15.19 11.77 15.03 11.9 14.88 12.07C14.73 12.24 14.59 12.43 14.43 12.58C14.27 12.73 14.02 12.98 13.72 12.69C13.42 12.4 12.89 11.82 12.8 11.72C12.71 11.62 12.38 11.2 12.38 10.74C12.38 10.28 12.8 9.87 12.96 9.71C13.12 9.55 13.43 9.53 13.65 9.53H13.88C14.06 9.53 14.33 9.49 14.58 9.97C14.83 10.45 15.39 11.6 15.39 11.6S15.47 11.76 15.69 11.88C15.91 12 16.03 11.96 16.11 11.86C16.43 11.47 16.63 11.13 16.82 10.74C16.96 10.45 17.22 10.45 17.47 10.53C17.72 10.61 18.29 10.89 18.29 10.89S18.52 10.95 18.52 11.14C18.52 11.33 18.52 13.21 17.84 14.59Z"/>
  </svg>
);
