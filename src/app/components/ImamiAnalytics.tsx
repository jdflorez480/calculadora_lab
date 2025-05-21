'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Definir una interfaz para la ventana con umami
interface WindowWithUmami extends Window {
  umami?: {
    track: (eventName: string, properties?: Record<string, unknown>) => void;
    [key: string]: unknown;
  };
}

// Función global para seguimiento de eventos
export const trackUmamiEvent = (eventName: string, properties?: Record<string, unknown>) => {
  // Asegurarse de que umami existe
  if (typeof window !== 'undefined') {
    const windowWithUmami = window as WindowWithUmami;
    if (windowWithUmami.umami) {
      windowWithUmami.umami.track(eventName, properties);
      console.log(`Evento Umami registrado: ${eventName}`, properties);
    } else {
      console.warn('Umami no está disponible para seguimiento de eventos');
    }
  }
};

export default function UmamiAnalytics() {
  // Usa los datos oficiales de tu instancia de Umami desplegada en Vercel
  const UMAMI_WEBSITE_ID = '8e785457-af04-4fe8-9bc8-878b05e404b3';
  const UMAMI_SCRIPT_URL = 'https://umami-alpha-ten.vercel.app/script.js'; // URL actualizada de tu despliegue en Vercel

  useEffect(() => {
    // Si umami ya está cargado, no hacemos nada
    const windowWithUmami = window as WindowWithUmami;
    if (windowWithUmami.umami) return;
  }, []);

  return (
    <>
      <Script
        src={UMAMI_SCRIPT_URL}
        data-website-id={UMAMI_WEBSITE_ID}
        strategy="afterInteractive"
      />
    </>
  );
}
