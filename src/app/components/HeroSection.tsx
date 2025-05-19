import React from 'react';

const HeroSection = () => {
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
    </div>
  );
};

export default HeroSection;
