import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from './components/GoogleAnalytics';
import UmamiAnalytics from './components/UmamiAnalytics';
import FooterShareButton from './components/FooterShareButton';

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculadora de liquidacion y Prestaciones Laborales Colombia - Herramientas Gratuitas",
  description: "Calcula fácilmente liquidaciones, primas, cesantías y más. Herramientas gratuitas para trabajadores en Colombia. Cálculos actualizados 2025.",
  keywords: "www.calculalaboral.com, calculadora de liquidación laboral gratis, calculadora de liquidación laboral gratis excel, calculadora ministerio de trabajo,como se calcula la liquidación, cálculo liquidación laboral, calcular prima, calcular prima junio, prima de junio, calcular de prima junio 2025, calculadora laboral,calculo prima, calculo prima online, calculadora de liquidacion, calculadora de prima servicios, calculadora de cesantías, calculadora de vacaciones, calculadora de salario neto, calculadora de horas extras, calculadora de retención en la fuente, calculo de prestaciones sociales, calculadora de nómina, calculadora de recargos nocturnos, calculadora de dominicales y festivos, calculadora de deducciones salariales, calculadora de auxilio transporte, calculadora de sueldo, Cuanto me deben de dar de liquidación, Cuanto me deben de dar de prima, Cuanto me deben de dar de cesantías",
  openGraph: {
    title: "Calculadoras Laborales de Colombia",
    description: "Herramientas gratuitas para calcular prestaciones laborales en Colombia",
    locale: "es_CO",
    type: "website",
    siteName: "Calculadoras Laborales de Colombia",
    url: "https://www.calculalaboral.com",
  },
  verification: {
    google: "U7lnbTDrxXZL65oWpVRGuxhoOeyFO6IP9965o-Ezw0o",
  },
  alternates: {
    canonical: "https://www.calculalaboral.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link 
          rel="alternate" 
          type="application/rss+xml" 
          title="Blog Laboral Colombia RSS Feed" 
          href="/feed.xml"
        />
      </head>
      <body className={`${geist.className} antialiased bg-gray-50`}>
        <GoogleAnalytics />
        <UmamiAnalytics />
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <footer className="bg-white border-t py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-center items-center text-xs text-gray-500 space-y-2 sm:space-y-0 sm:space-x-4">
                <div>
                  <a 
                    target="_blank" 
                    href="https://icons8.com/icon/N8GN5w7Vt8qp/colombia" 
                    className="hover:text-blue-600"
                    rel="noopener noreferrer"
                  >
                    Colombia-emoji
                  </a>{' '}
                  icono de{' '}
                  <a 
                    target="_blank" 
                    href="https://icons8.com" 
                    className="hover:text-blue-600"
                    rel="noopener noreferrer"
                  >
                    Icons8
                  </a>
                </div>
                <div className="hidden sm:block">|</div>
                <div>
                  <a 
                    target="_blank" 
                    href="https://icons8.com/icon/oTyxAxj0tuPz/calculator" 
                    className="hover:text-blue-600"
                    rel="noopener noreferrer"
                  >
                    Calculadora-de-manzana
                  </a>{' '}
                  icono de{' '}
                  <a 
                    target="_blank" 
                    href="https://icons8.com" 
                    className="hover:text-blue-600"
                    rel="noopener noreferrer"
                  >
                    Icons8
                  </a>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500">
                Nota: Los cálculos proporcionados son de carácter informativo y están sujetos a revisión. Se recomienda consultar con un profesional para validar los resultados.
              </p>
              <p className="text-center text-sm text-gray-500 mb-4">
                <a className="p-1" href="https://www.calculalaboral.com/"> www.calculalaboral.com</a>
                © {new Date().getFullYear()} Calculadora Laboral Colombia. Todos los derechos reservados.
              </p>
              <div className="flex justify-center gap-4">
                <span className="text-sm text-gray-500">¿Te ha resultado útil? Compártelo:</span>
                <div id="footer-share-button" className="inline-block"></div>
              </div>
            </div>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
        <FooterShareButton />
      </body>
    </html>
  );
}
