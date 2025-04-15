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
  description: "Calcula fácilmente liquidaciones, primas, cesantías y más. Herramientas gratuitas para trabajadores en Colombia.",
  keywords: "calculadora laboral, liquidación laboral colombia, prima servicios, cesantías, vacaciones, calculadora salario neto",
  openGraph: {
    title: "Calculadoras Laborales Colombia",
    description: "Herramientas gratuitas para calcular prestaciones laborales en Colombia",
    locale: "es_CO",
    type: "website",
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
