import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-md p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white">
          ¿Necesitas calcular tus prestaciones laborales?
        </h2>
        <p className="mt-4 text-lg text-blue-100">
          Utiliza nuestras calculadoras y obtén resultados precisos en
          segundos
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/calculadoras/nomina"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            Comenzar ahora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
