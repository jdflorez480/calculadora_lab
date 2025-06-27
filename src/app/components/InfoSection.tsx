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
          {new Date().getFullYear()} - Gratis y Precisa
        </h3>
        <div className="prose prose-blue max-w-none text-gray-600">
          <p>
            Nuestra <strong>calculadora laboral</strong> te permite gestionar
            todos los aspectos laborales según la legislación vigente. Utiliza nuestra <strong>calculadora de liquidación laboral gratis</strong> para calcular nómina mensual, incluyendo los aportes a seguridad
            social (salud, pensión y ARL), y la <strong>calculadora de prima</strong> para estimar
            prestaciones sociales como prima de servicios, cesantías, intereses y
            vacaciones.
          </p>
          <p className="mt-4">
            Con nuestra <strong>calculadora de liquidación</strong>, podrás conocer el
            valor exacto que corresponde a un trabajador al momento de
            terminar su contrato. Nuestra <strong>calculadora liquidación laboral</strong> tiene en cuenta el tipo de contrato,
            tiempo trabajado y salario devengado para brindarte resultados precisos.
          </p>
          <p className="mt-4">
            Todas nuestras calculadoras laborales están actualizadas con la legislación
            colombiana de {new Date().getFullYear()}, incluyendo las últimas
            reformas laborales y tributarias. Usa nuestra <strong>calculadora prima servicios</strong> y <strong>calculadora salarial</strong> para garantizar que todos los
            cálculos sean precisos y conformes a la ley colombiana vigente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
