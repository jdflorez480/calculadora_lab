'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Definir una interfaz para la ventana con imami
interface WindowWithImami extends Window {
  imami?: {
    track: (eventName: string, properties?: Record<string, unknown>) => void;
    [key: string]: unknown;
  };
}

// Función global para seguimiento de eventos
export const trackImamiEvent = (eventName: string, properties?: Record<string, unknown>) => {
  // Asegurarse de que imami existe
  if (typeof window !== 'undefined') {
    const windowWithImami = window as WindowWithImami;
    if (windowWithImami.imami) {
      windowWithImami.imami.track(eventName, properties);
      console.log(`Evento Imami registrado: ${eventName}`, properties);
    } else {
      console.warn('Imami no está disponible para seguimiento de eventos');
    }
  }
};

export default function ImamiAnalytics() {
  const IMAMI_ID = '8e785457-af04-4fe8-9bc8-878b05e404b3';

  useEffect(() => {
    // Si imami ya está cargado, no hacemos nada
    const windowWithImami = window as WindowWithImami;
    if (windowWithImami.imami) return;
  }, []);

  return (
    <>
      <Script
        id="imami-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(i,m,a,m,i){window.imami||(window.imami={},window.imami.q=[],window.imami.i=m);var queue=window.imami.q;function factory(e){return function(){var i=Array.prototype.slice.call(arguments);i.unshift(e);queue.push(i);return window.imami}}var methods=['init','config','pageview','track','alias','group','ready','on','once','off','emit','user'];for(var i=0;i<methods.length;i++){var key=methods[i];window.imami[key]=factory(key)}})();
            imami.init('${IMAMI_ID}');
            imami.pageview();
          `,
        }}
      />
    </>
  );
}
