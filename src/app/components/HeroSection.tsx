'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, GiftIcon } from '@heroicons/react/24/outline';
import { trackUmamiEvent } from './UmamiAnalytics';

const HeroSection = () => {
  // Función para registrar el clic en el botón de prima del hero section
  const handlePrimaButtonClick = () => {
    trackUmamiEvent('button_click_hero', {
      element: 'hero_prima_button',
      location: 'hero_section',
      action: 'navigate_to_prima_calculator'
    });
  };

  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 pb-1">
        Calculadoras Laborales de Colombia
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full my-3"></div>
      <p className="mt-4 text-xl text-gray-700">
        Herramientas gratuitas para calcular tus prestaciones laborales
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Última actualización:{" "}
        {new Date().toLocaleDateString("es-ES", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        | Conforme a la legislación laboral vigente
      </p>
      
      {/* Botón destacado para la calculadora de prima */}
      <div className="mt-8">
        <Link 
          href="/calculadoras/prima"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handlePrimaButtonClick}
        >
          <GiftIcon className="mr-2 h-5 w-5" />
          Calcular Prima de Junio 2025
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
