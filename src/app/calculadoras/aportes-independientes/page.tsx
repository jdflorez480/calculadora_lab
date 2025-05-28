// Este componente calcula los aportes e impuestos para trabajadores independientes
'use client';

import { useState } from 'react';
import BotonVolver from '../../components/BotonVolver';
import ResultadoCalculo from '../../components/ResultadoCalculo';

interface FormData {
  ingresosMensuales: string;
  porcentajePension: number;
  porcentajeSalud: number;
  otrosGastos: string;
}

interface ResultadoCalculo {
  pension: number;
  salud: number;
  totalAportes: number;
  totalImpuestos: number;
}

function AportesIndependientesContent() {
  const [formData, setFormData] = useState<FormData>({
    ingresosMensuales: '',
    porcentajePension: 16,
    porcentajeSalud: 12.5,
    otrosGastos: '',
  });

  const [resultado, setResultado] = useState<ResultadoCalculo | null>(null);

  const formatNumber = (value: string) => {
    const number = value.replace(/\D/g, '');
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'ingresosMensuales' || name === 'otrosGastos' ? formatNumber(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const ingresos = parseFloat(formData.ingresosMensuales.replace(/\./g, '')) || 0;
    const gastos = parseFloat(formData.otrosGastos.replace(/\./g, '')) || 0;
    const pension = (ingresos * formData.porcentajePension) / 100;
    const salud = (ingresos * formData.porcentajeSalud) / 100;
    const totalAportes = pension + salud;
    const totalImpuestos = ingresos - totalAportes - gastos;

    setResultado({ pension, salud, totalAportes, totalImpuestos });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <BotonVolver />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Calculadora de Aportes para Independientes
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Calcula tus aportes a pensión, salud y otros gastos como trabajador independiente
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg inline-block">
            <p className="text-sm text-blue-700">
              Conoce cuánto debes aportar según tus ingresos y la normativa vigente
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Ingresos Mensuales</label>
              <input
                type="text"
                name="ingresosMensuales"
                className="block w-full pl-4 pr-4 py-2 border text-gray-500 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="ejm: 1.423.500"
                value={formData.ingresosMensuales}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Porcentaje Pensión (%)</label>
              <input
                type="number"
                name="porcentajePension"
                className="block w-full pl-4 pr-4 py-2 border text-gray-500 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={formData.porcentajePension}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium  text-gray-700">Porcentaje Salud (%)</label>
              <input
                type="number"
                name="porcentajeSalud"
                className="block w-full pl-4 pr-4 py-2 border text-gray-500 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={formData.porcentajeSalud}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Otros Gastos</label>
              <input
                type="text"
                name="otrosGastos"
                className="block w-full pl-4 pr-4 py-2 border text-gray-500 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="ejm: 500.000"
                value={formData.otrosGastos}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-lg cursor-pointer"
            >
              Calcular Aportes
            </button>
          </div>
        </form>

        {resultado && (
          <div className="mt-8 animate-fade-in">
            <ResultadoCalculo
              resultados={[
                { concepto: 'Pensión', valor: resultado.pension, descripcion: 'Aporte obligatorio a pensión' },
                { concepto: 'Salud', valor: resultado.salud, descripcion: 'Aporte obligatorio a salud' },
                { concepto: 'Total Aportes', valor: resultado.totalAportes, descripcion: 'Suma de aportes a pensión y salud' },
                { concepto: 'Total Impuestos', valor: resultado.totalImpuestos, descripcion: 'Ingresos menos aportes y gastos' },
              ]}
              total={resultado.totalImpuestos}
              titulo="Resultados de Aportes"
              subtitulo="Cálculo basado en tus ingresos y porcentajes seleccionados"
            />
          </div>
        )}

        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué son los Aportes para Independientes?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Los aportes para independientes son contribuciones obligatorias que deben realizar los trabajadores independientes en Colombia para garantizar su acceso a la seguridad social, incluyendo pensión y salud.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Según la normativa vigente, los trabajadores independientes deben aportar un porcentaje de sus ingresos mensuales a pensión y salud. Estos aportes son fundamentales para garantizar su bienestar y protección social.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Cómo se calculan?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            El cálculo de los aportes se realiza aplicando los porcentajes establecidos por la ley sobre el ingreso mensual del trabajador. Adicionalmente, se pueden considerar otros gastos deducibles para determinar el ingreso neto.
          </p>
          <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg mb-4">
            Aportes = (Ingresos Mensuales × Porcentaje Pensión) + (Ingresos Mensuales × Porcentaje Salud)
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Es importante realizar estos aportes de manera oportuna para evitar sanciones y garantizar el acceso a los beneficios de la seguridad social.
          </p>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas Frecuentes sobre Aportes para Independientes</h2>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">¿Cuánto se debe pagar de salud y pensión como independiente en 2025?</h3>
              <p className="text-gray-700 mt-2">
                En 2025, los trabajadores independientes deben aportar el 16% de sus ingresos mensuales a pensión y el 12.5% a salud, calculados sobre el 40% de sus ingresos brutos como base de cotización.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">¿Cómo calcular el 40% para seguridad social?</h3>
              <p className="text-gray-700 mt-2">
                Para calcular el 40% de tus ingresos brutos, simplemente multiplica tus ingresos mensuales por 0.4. Este valor será la base para calcular tus aportes a pensión y salud.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">¿Qué es el IBC y cómo se calcula?</h3>
              <p className="text-gray-700 mt-2">
                El IBC (Ingreso Base de Cotización) es el monto sobre el cual se calculan los aportes a seguridad social. Para independientes, corresponde al 40% de los ingresos brutos mensuales.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">¿Cuál es la base de cotización para los trabajadores independientes?</h3>
              <p className="text-gray-700 mt-2">
                La base de cotización para trabajadores independientes es el 40% de sus ingresos brutos mensuales. Sobre este valor se aplican los porcentajes de pensión y salud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AportesIndependientesPage() {
  return <AportesIndependientesContent />;
}