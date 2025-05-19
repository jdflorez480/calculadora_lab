import React from 'react';

const InfoSection = () => {
  return (
    <section className="mt-16" aria-labelledby="informacion-adicional">
      <h2 id="informacion-adicional" className="sr-only">
        Información adicional
      </h2>
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          Calculadora laboral colombiana actualizada{" "}
          {new Date().getFullYear()}
        </h3>
        <div className="prose prose-blue max-w-none text-gray-600">
          <p>
            Nuestra calculadora laboral colombiana te permite gestionar
            todos los aspectos laborales según la legislación vigente. Desde
            el cálculo de nómina mensual, incluyendo los aportes a seguridad
            social (salud, pensión y ARL), hasta la estimación de
            prestaciones sociales como prima, cesantías, intereses y
            vacaciones.
          </p>
          <p className="mt-4">
            Con las herramientas de liquidación laboral, podrás conocer el
            valor exacto que corresponde a un trabajador al momento de
            terminar su contrato, teniendo en cuenta el tipo de contrato,
            tiempo trabajado y salario devengado.
          </p>
          <p className="mt-4">
            Nuestras calculadoras están actualizadas con la legislación
            colombiana de {new Date().getFullYear()}, incluyendo las últimas
            reformas laborales y tributarias, para garantizar que todos los
            cálculos sean precisos y conformes a la ley.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
