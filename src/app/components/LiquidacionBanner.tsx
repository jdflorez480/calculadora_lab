'use client';

import React from 'react';
import Link from 'next/link';
import { BriefcaseIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const LiquidacionBanner = () => {
  const keywords = [
    "liquidación laboral",
    "prestaciones sociales",
    "cesantías",
    "vacaciones",
    "indemnización",
  ];

  const handleBannerClick = () => {
    // Registrar evento en Umami cuando se hace clic en el banner de liquidación
    /* trackUmamiEvent('banner_click', {
      element: 'liquidacion_banner',
      location: 'home_page',
      action: 'navigate_to_liquidacion_calculator'
    }); */
  };

  const handleButtonClick = () => {
    // Registrar evento en Umami cuando se hace clic en el botón del banner
    /* trackUmamiEvent('button_click_banner', {
      element: 'liquidacion_banner_button',
      location: 'home_page',
      action: 'navigate_to_liquidacion_calculator'
    }); */
  };

  return (
    <div className="my-16" onClick={handleBannerClick}>
      <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-300 to-transparent opacity-20"></div>
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-red-400 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-red-500 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-3xl">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg">
                <BriefcaseIcon className="h-10 w-10 text-red-500" />
              </div>
              
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  ¡Calcula tu Liquidación Laboral 2025!
                </h2>
                <p className="mt-2 text-red-100 text-lg">
                  Conoce cuánto te corresponde por liquidación según la ley colombiana
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <Link
              href="/calculadoras/liquidacion"
              className="bg-white text-red-500 px-6 py-4 rounded-xl font-bold hover:bg-red-50 transition-colors duration-300 flex items-center space-x-2 shadow-md"
              onClick={(e) => {
                e.stopPropagation(); // Evitar que se registre también el clic en el banner
                handleButtonClick();
              }}
            >
              <span>Calcular Liquidación</span>
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="h-1.5 bg-gradient-to-r from-white/40 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default LiquidacionBanner;
