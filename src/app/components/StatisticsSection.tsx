import React from 'react';

type StatItem = {
  cifra: string;
  descripcion: string;
  colorClase: string;
};

interface StatisticsSectionProps {
  estadisticas: StatItem[];
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ estadisticas }) => {
  return (
    <section className="mt-16 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 inline-block relative">
            Datos Laborales Colombia 2025
            <div className="h-1 w-24 bg-blue-500 absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-2"></div>
          </h2>
          <p className="mt-4 text-gray-600">
            Información actualizada según la legislación vigente
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {estadisticas.map((stat, index) => (
            <div key={index} className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="p-6 relative">
                  <div
                    className={`absolute top-0 right-0 h-24 w-24 bg-gradient-to-br ${stat.colorClase} opacity-10 rounded-full transform translate-x-8 -translate-y-8`}
                  ></div>
                  <p
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.colorClase} bg-clip-text text-transparent`}
                  >
                    {stat.cifra}
                  </p>
                  <p className="mt-3 text-sm md:text-base text-gray-700">
                    {stat.descripcion}
                  </p>
                  <div
                    className={`h-1 w-12 bg-gradient-to-r ${stat.colorClase} mt-4 rounded-full`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
