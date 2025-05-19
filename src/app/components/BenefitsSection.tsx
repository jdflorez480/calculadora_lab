import React from 'react';
import { DocumentTextIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

type Beneficio = {
  titulo: string;
  descripcion: string;
  icono: React.ElementType;
};

interface BenefitsSectionProps {
  beneficios: Beneficio[];
}

// Array de colores para los beneficios alternando
const beneficiosColores = [
  'from-blue-500 to-blue-600',
  'from-green-500 to-green-600',
  'from-purple-500 to-purple-600',
];

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ beneficios }) => {
  return (
    <section 
      className="py-16 bg-gray-50 rounded-3xl my-16" 
      aria-labelledby="beneficios-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="beneficios-section"
            className="text-2xl sm:text-3xl font-bold text-blue-900 inline-block relative"
          >
            ¿Por qué usar nuestra calculadora laboral?
            <div className="h-1 w-24 bg-blue-500 absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-2"></div>
          </h2>
          <p className="mt-4 text-gray-600">
            Optimiza tu gestión laboral con nuestras herramientas
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {beneficios.map((beneficio, index) => {
            const colorClase = beneficiosColores[index % beneficiosColores.length];
            return (
              <div key={beneficio.titulo} className="relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden border border-gray-100 h-full">
                  <div className="p-6 relative">
                    <div
                      className={`absolute top-0 right-0 h-24 w-24 bg-gradient-to-br ${colorClase} opacity-10 rounded-full transform translate-x-8 -translate-y-8`}
                    ></div>
                    <div className="mb-6">
                      <div
                        className={`rounded-xl inline-flex p-3 bg-gradient-to-r ${colorClase} bg-opacity-20 text-white ring-4 ring-opacity-30 ring-${colorClase.split('-')[1]}-100`}
                      >
                        <beneficio.icono className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {beneficio.titulo}
                    </h3>
                    <p className="mt-4 text-gray-600">
                      {beneficio.descripcion}
                    </p>
                    <div
                      className={`h-1 w-12 bg-gradient-to-r ${colorClase} mt-6 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
