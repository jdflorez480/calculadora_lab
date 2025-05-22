'use client';

import dynamic from 'next/dynamic';

const AdSense = dynamic(() => import('./AdSense'), {
  ssr: false,
});

interface AdBannerProps {
  adSlot: string;
  className?: string;
}

export default function AdBanner({ adSlot, className = '' }: AdBannerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 ${className}`}>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-1 text-xs text-gray-500 text-center">Publicidad</div>
        <AdSense
          adSlot={adSlot}
          style={{ display: 'block', textAlign: 'center' }}
        />
      </div>
    </div>
  );
}
