import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type Calculadora = {
  titulo: string;
  descripcion: string;
  icono: React.ElementType;
  href: string;
  keywords: string[];
  color: string;
};

interface CalculatorsSectionProps {
  calculadoras: Calculadora[];
}

const CalculatorsSection: React.FC<CalculatorsSectionProps> = ({ calculadoras }) => {
  return (
    <section
      className="py-16 bg-gray-50 rounded-3xl my-16"
      aria-labelledby="calculadoras-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="calculadoras-section"
            className="text-2xl sm:text-3xl font-bold text-blue-900 inline-block relative"
          >
            Nuestras Calculadoras Laborales
            <div className="h-1 w-24 bg-blue-500 absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-2"></div>
          </h2>
          <p className="mt-4 text-gray-600">
            Herramientas precisas para todos tus cálculos laborales
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {calculadoras.map((calc) => (
            <div key={calc.titulo} className="group">
              <a href={calc.href} className="block h-full">
                <div className="h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div
                          className={`rounded-xl inline-flex p-3 ${calc.color} ring-4 group-hover:bg-opacity-20 transition-colors duration-300`}
                        >
                          <calc.icono className="h-6 w-6" />
                        </div>
                      </div>
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                        Colombia 2025
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {calc.titulo}
                      </h3>
                      <p className="mt-3 text-base text-gray-600">
                        {calc.descripcion}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {calc.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center text-blue-600 font-medium text-sm">
                        <span>Ir a la calculadora</span>
                        <ArrowRightIcon className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalculatorsSection;
