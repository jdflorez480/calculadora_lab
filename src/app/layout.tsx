import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from './components/GoogleAnalytics';

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculadoras Laborales Colombia - Herramientas Gratuitas",
  description: "Calcula fácilmente liquidaciones, primas, cesantías y más. Herramientas gratuitas para trabajadores en Colombia. Cálculos actualizados 2025.",
  keywords: "calculadora laboral, liquidación laboral colombia, prima servicios, cesantías, vacaciones, calculadora salario neto, horas extras, retención en la fuente",
  openGraph: {
    title: "Calculadoras Laborales Colombia",
    description: "Herramientas gratuitas para calcular prestaciones laborales en Colombia",
    locale: "es_CO",
    type: "website",
    siteName: "Calculadoras Laborales Colombia",
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
      <body className={`${geist.className} antialiased bg-gray-50`}>
        <GoogleAnalytics />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-white border-t py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Calculadora Laboral Colombia. Todos los derechos reservados.
            </p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
