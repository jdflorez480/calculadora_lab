'use client';

import { useState, Suspense } from 'react';
import { CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';
import ResultadoCalculo from '../../components/ResultadoCalculo';
import { calcularHorasExtras } from '../../utils/calculosLaborales';
import BotonVolver from '../../components/BotonVolver';

interface ResultadoHorasExtras {
  resultados: Array<{
    concepto: string;
    valor: number;
    descripcion: string;
  }>;
  total: number;
}

interface FormData {
  salarioBase: string;
  horasExtrasDiurnas: string;
  horasExtrasNocturnas: string;
  horasDominicalesFestivas: string;
  horasExtrasDominicalesFestivas: string;
  horasNocturnas: string;
}

function HorasExtrasContent() {
  const [formData, setFormData] = useState<FormData>({
    salarioBase: '',
    horasExtrasDiurnas: '0',
    horasExtrasNocturnas: '0',
    horasDominicalesFestivas: '0',
    horasExtrasDominicalesFestivas: '0',
    horasNocturnas: '0'
  });
  const [resultado, setResultado] = useState<ResultadoHorasExtras | null>(null);

  const formatNumber = (value: string) => {
    const number = value.replace(/\D/g, '');
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleSalarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\./g, '');
    setFormData({
      ...formData,
      salarioBase: formatNumber(rawValue)
    });
  };

  const handleHorasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numeroHoras = Math.min(Math.max(parseInt(value) || 0, 0), 999);
    setFormData({
      ...formData,
      [name]: numeroHoras.toString()
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const datos = {
      salarioBase: parseFloat(formData.salarioBase.replace(/\./g, '')),
      horasExtrasDiurnas: parseInt(formData.horasExtrasDiurnas),
      horasExtrasNocturnas: parseInt(formData.horasExtrasNocturnas),
      horasDominicalesFestivas: parseInt(formData.horasDominicalesFestivas),
      horasExtrasDominicalesFestivas: parseInt(formData.horasExtrasDominicalesFestivas),
      horasNocturnas: parseInt(formData.horasNocturnas)
    };

    const resultadoCalculo = calcularHorasExtras(datos);
    
    const resultadosFormateados = [
      {
        concepto: 'Valor Hora Ordinaria',
        valor: resultadoCalculo.valorHoraOrdinaria,
        descripcion: 'Salario mensual dividido por 240 horas'
      },
      {
        concepto: 'Horas Extras Diurnas',
        valor: resultadoCalculo.totalHorasExtrasDiurnas,
        descripcion: `${datos.horasExtrasDiurnas} horas con recargo del 25%`
      },
      {
        concepto: 'Horas Extras Nocturnas',
        valor: resultadoCalculo.totalHorasExtrasNocturnas,
        descripcion: `${datos.horasExtrasNocturnas} horas con recargo del 75%`
      },
      {
        concepto: 'Recargo Dominical/Festivo',
        valor: resultadoCalculo.totalHorasDominicalesFestivas,
        descripcion: `${datos.horasDominicalesFestivas} horas con recargo del 80%`
      },
      {
        concepto: 'Horas Extras Dominicales/Festivas',
        valor: resultadoCalculo.totalHorasExtrasDominicalesFestivas,
        descripcion: `${datos.horasExtrasDominicalesFestivas} horas con recargo del 100%`
      },
      {
        concepto: 'Recargo Nocturno',
        valor: resultadoCalculo.totalRecargoNocturno,
        descripcion: `${datos.horasNocturnas} horas con recargo del 35%`
      }
    ];

    setResultado({
      resultados: resultadosFormateados,
      total: resultadoCalculo.totalGeneral
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <BotonVolver />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Calculadora de Horas Extras
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Calcula el valor de tus horas extras, recargos nocturnos y dominicales
          </p>
        </div>

        {/* Banner informativo sobre reforma laboral 2025 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <ClockIcon className="h-8 w-8 text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-900 m-0">
              ¡Actualización Reforma Laboral 2025!
            </h3>
          </div>
          <div className="text-blue-700 space-y-2">
            <p>
              <strong>✓ Recargo dominical/festivo:</strong> Aumentó del 75% al <strong>80%</strong> desde enero 2025
            </p>
            <p>
              <strong>✓ Horario nocturno:</strong> Cambia de 9:00 PM a <strong>7:00 PM</strong> desde julio 2025
            </p>
            <p className="text-sm">
              Esta calculadora ya incluye los nuevos porcentajes vigentes en 2025.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
          {/* Salario Base */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />
              <label className="ml-2 block text-sm font-medium text-gray-900">
                Salario Base Mensual
              </label>
            </div>
            <div className="relative rounded-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-900 sm:text-sm">$</span>
              </div>
              <input
                type="text"
                name="salarioBase"
                className="block w-full pl-8 pr-12 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm input-currency shadow-sm"
                placeholder="1.423.500"
                value={formData.salarioBase}
                onChange={handleSalarioChange}
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">COP</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Horas Extras Diurnas */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Horas Extras Diurnas
                </label>
              </div>
              <input
                type="number"
                name="horasExtrasDiurnas"
                className="block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                placeholder="0"
                value={formData.horasExtrasDiurnas}
                onChange={handleHorasChange}
                min="0"
                max="999"
              />
              <p className="mt-1 text-sm text-gray-500">Recargo del 25%</p>
            </div>

            {/* Horas Extras Nocturnas */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Horas Extras Nocturnas
                </label>
              </div>
              <input
                type="number"
                name="horasExtrasNocturnas"
                className="block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                placeholder="0"
                value={formData.horasExtrasNocturnas}
                onChange={handleHorasChange}
                min="0"
                max="999"
              />
              <p className="mt-1 text-sm text-gray-500">Recargo del 75%</p>
            </div>

            {/* Horas Dominicales/Festivos */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Horas Dominicales/Festivas
                </label>
              </div>
              <input
                type="number"
                name="horasDominicalesFestivas"
                className="block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                placeholder="0"
                value={formData.horasDominicalesFestivas}
                onChange={handleHorasChange}
                min="0"
                max="999"
              />
              <p className="mt-1 text-sm text-gray-500">Recargo del 80% (Reforma 2025)</p>
            </div>

            {/* Horas Extras Dominicales/Festivas */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Horas Extras Dominicales/Festivas
                </label>
              </div>
              <input
                type="number"
                name="horasExtrasDominicalesFestivas"
                className="block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                placeholder="0"
                value={formData.horasExtrasDominicalesFestivas}
                onChange={handleHorasChange}
                min="0"
                max="999"
              />
              <p className="mt-1 text-sm text-gray-500">Recargo del 100%</p>
            </div>

            {/* Horas Nocturnas Ordinarias */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Horas Nocturnas
                </label>
              </div>
              <input
                type="number"
                name="horasNocturnas"
                className="block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                placeholder="0"
                value={formData.horasNocturnas}
                onChange={handleHorasChange}
                min="0"
                max="999"
              />
              <p className="mt-1 text-sm text-gray-500">Recargo del 35% (7:00 PM - 6:00 AM desde julio 2025)</p>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-lg cursor-pointer"
            >
              Calcular Horas Extras
            </button>
          </div>
        </form>

        {resultado && (
          <div className="mt-8 animate-fade-in">
            <ResultadoCalculo
              resultados={resultado.resultados}
              total={resultado.total}
              titulo="Resumen de Horas Extras"
              subtitulo="Total a pagar por conceptos adicionales"
            />
          </div>
        )}

        {/* Texto explicativo sobre las horas extras */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué son las Horas Extras en Colombia?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las horas extras son aquellas horas de trabajo que se realizan fuera de la jornada laboral ordinaria establecida por la ley o el contrato. En Colombia, el pago de horas extras es un derecho de los trabajadores y está regulado por el Código Sustantivo del Trabajo. El empleador debe reconocer un recargo adicional sobre el valor de la hora ordinaria, dependiendo del tipo de hora extra realizada.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Cómo se calculan las horas extras?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            El cálculo de las horas extras depende del tipo de recargo:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li><b>Horas extras diurnas:</b> Recargo del 25% sobre la hora ordinaria.</li>
            <li><b>Horas extras nocturnas:</b> Recargo del 75% sobre la hora ordinaria.</li>
            <li><b>Recargo nocturno:</b> 35% adicional por laborar entre las 7:00 p.m. y las 6:00 a.m. (cambio desde julio 2025).</li>
            <li><b>Horas dominicales y festivas:</b> Recargo del 80% (aumento desde 2025).</li>
            <li><b>Horas extras dominicales/festivas:</b> Recargo del 100%.</li>
          </ul>
          <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg mb-4">
            Valor hora ordinaria = Salario mensual ÷ 240<br/>
            Valor hora extra diurna = Valor hora ordinaria × 1,25<br/>
            Valor hora extra nocturna = Valor hora ordinaria × 1,75<br/>
            Valor recargo nocturno = Valor hora ordinaria × 0,35<br/>
            Valor hora dominical/festiva = Valor hora ordinaria × 1,80 (2025)<br/>
            Valor hora extra dominical/festiva = Valor hora ordinaria × 2
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Preguntas frecuentes sobre horas extras</h3>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">¿Cuántas horas extras se pueden trabajar legalmente?</h4>
              <p className="text-gray-700 mt-2">
                La ley colombiana establece un máximo de 2 horas extras diarias y 12 horas semanales. Superar este límite requiere autorización especial del Ministerio de Trabajo.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">¿Cómo se pagan las horas extras nocturnas?</h4>
              <p className="text-gray-700 mt-2">
                Las horas extras nocturnas tienen un recargo del 75% sobre la hora ordinaria. Si además se laboran en domingo o festivo, el recargo puede llegar al 100%.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">¿Qué sucede si no me pagan las horas extras?</h4>
              <p className="text-gray-700 mt-2">
                El no pago de horas extras puede ser denunciado ante el Ministerio de Trabajo. El empleador puede ser sancionado y está obligado a pagar los valores adeudados con los recargos correspondientes.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">Ejemplo práctico de cálculo</h4>
              <p className="text-gray-700 mt-2">
                Si tu salario mensual es de $2.000.000 y trabajaste 5 horas extras diurnas y 2 nocturnas en el mes:
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg my-2">
                Valor hora ordinaria = $2.000.000 ÷ 240 = $8.333<br/>
                Valor hora extra diurna = $8.333 × 1,25 = $10.416<br/>
                Valor hora extra nocturna = $8.333 × 1,75 = $14.583<br/>
                Total horas extras diurnas = 5 × $10.416 = $52.080<br/>
                Total horas extras nocturnas = 2 × $14.583 = $29.166<br/>
                <b>Total a pagar por horas extras = $81.246</b>
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-medium text-blue-600">¡Utiliza nuestra calculadora para obtener el valor exacto de tus horas extras según tu salario y las horas laboradas!</span>
              </p>
            </div>
          </div>
          {/* Banner para destacar la calculadora */}
          <div className="mt-8 bg-blue-100 p-6 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-6">
                <h3 className="text-lg font-bold text-blue-800">Calcula tus horas extras fácilmente</h3>
                <p className="text-blue-700 mt-2">
                  Nuestra calculadora es gratuita, precisa y fácil de usar. Obtén el valor exacto de tus horas extras y recargos en segundos.
                </p>
              </div>
              <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="px-6 py-3 cursor-pointer bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center"
              >
                Usar la calculadora
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HorasExtrasPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HorasExtrasContent />
    </Suspense>
  );
}