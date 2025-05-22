'use client';

import { useEffect, useState } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function AdSense({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' },
  className = '',
}: AdSenseProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (isClient) {
      try {
        // Aplicar el código de AdSense con declaración de tipos segura
        // Habilitando el tipo 'any' solo en esta sección específica para permitir la integración con AdSense
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
      } catch (error) {
        console.error('Error al cargar el anuncio de AdSense:', error);
      }
    }
  }, [isClient]);
  return (
    <div className={`adsense-container my-6 ${className}`}>
      {isClient && (
        <ins
          className="adsbygoogle"
          style={style}
          data-ad-client="ca-pub-7334386825129170"
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
        />
      )}
    </div>
  );
}
