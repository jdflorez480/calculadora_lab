import React from 'react';
import { ArrowRightIcon, BuildingOfficeIcon, CheckCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const BusinessBanner = () => {
  return (
    <div className="my-16">
      <div className="relative overflow-hidden group">
        {/* Etiqueta empresarial */}
        <div className="absolute -top-3 right-10 z-20">
          <div className="bg-yellow-400 text-yellow-900 font-bold px-6 py-1.5 rounded-md transform rotate-2 shadow-lg group-hover:rotate-1 group-hover:scale-105 transition-transform duration-300">
            <span className="relative inline-flex">
              ¡Para empresas!
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-500 opacity-75 -right-4 top-1/2 transform -translate-y-1/2"></span>
              <span className="absolute inline-flex rounded-full h-2 w-2 bg-red-600 -right-4 top-1/2 transform -translate-y-1/2"></span>
            </span>
          </div>
          <div className="w-3 h-3 bg-yellow-600 transform rotate-45 absolute -top-1 right-1.5"></div>
        </div>
          <div className="bg-gradient-to-br from-green-500 via-green-600 to-green-800 rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.01]">
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute top-10 right-20 w-20 h-20 bg-green-300 opacity-20 rounded-full blur-xl"></div>
          
          <div className="relative z-10 p-8 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icono con animación */}
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0 group-hover:shadow-green-200/50 group-hover:-translate-y-1 transition-all duration-300">
                  <div className="relative">
                    <BuildingOfficeIcon className="h-10 w-10 md:h-12 md:w-12 text-green-600 transition-opacity duration-300" />
                    <UserGroupIcon className="h-5 w-5 text-green-500 absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm" />
                  </div>
                </div>
                
                {/* Contenido principal */}
                <div className="max-w-lg">
                  <div className="flex items-center flex-wrap gap-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      ¿Eres empresario o administras personal?
                    </h2>
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
                      Nuevo
                    </span>
                  </div>
                  
                  <p className="mt-3 text-green-50 text-lg">
                    Optimiza tu gestión de recursos humanos con nuestra plataforma especializada para empresas
                  </p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-0.5 group">
                      <CheckCircleIcon className="h-5 w-5 text-green-100 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                      <span className="text-white text-sm group-hover:font-medium transition-all duration-300">
                        Cálculo automático de nómina para múltiples empleados
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-0.5 group">
                      <CheckCircleIcon className="h-5 w-5 text-green-100 flex-shrink-0 group-hover:text-white transition-colors duration-300" />
                      <span className="text-white text-sm group-hover:font-medium transition-all duration-300">
                        Gestión de liquidaciones, vacaciones y prestaciones
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Botón CTA */}              <div className="flex flex-col items-center lg:items-end space-y-3">
                <span className="bg-green-700/50 text-green-50 px-4 py-1 rounded-full font-medium text-sm backdrop-blur-sm border border-green-400/20">
                  Soluciones empresariales
                </span>
                <a
                  href="https://www.calculadoraempresarial.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-green-50 text-green-700 px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-green-300/30 hover:-translate-y-1 group"
                >
                  <span>Visitar Calculadora Empresarial</span>
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Línea decorativa */}
          <div className="h-1.5 bg-gradient-to-r from-white/30 via-white/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default BusinessBanner;
