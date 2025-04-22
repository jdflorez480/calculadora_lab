import Link from 'next/link';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function GuiaHorasExtras2025() {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            Guías
          </span>
          <time className="text-sm text-gray-700">
            5 de abril de 2025
          </time>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Horas Extras y Recargos: Lo Que Debes Saber en 2025
        </h1>

        <div className="prose prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
          <h2>Tipos de Horas Extras y Recargos</h2>
          <p>
            En Colombia existen diferentes tipos de horas extras y recargos, cada uno con su porcentaje específico de recargo:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 my-4">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 border">Tipo</th>
                  <th className="px-4 py-2 border">Recargo</th>
                  <th className="px-4 py-2 border">Horario</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Hora Extra Diurna</td>
                  <td className="px-4 py-2 border">25%</td>
                  <td className="px-4 py-2 border">6:00 AM - 9:00 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Hora Extra Nocturna</td>
                  <td className="px-4 py-2 border">75%</td>
                  <td className="px-4 py-2 border">9:00 PM - 6:00 AM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Recargo Nocturno</td>
                  <td className="px-4 py-2 border">35%</td>
                  <td className="px-4 py-2 border">9:00 PM - 6:00 AM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Dominical/Festivo</td>
                  <td className="px-4 py-2 border">75%</td>
                  <td className="px-4 py-2 border">Todo el día</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Extra Dominical/Festivo</td>
                  <td className="px-4 py-2 border">100%</td>
                  <td className="px-4 py-2 border">Todo el día</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>¿Cómo se Calculan las Horas Extras?</h2>
          <p>
            El cálculo de las horas extras se realiza siguiendo estos pasos:
          </p>
          <ol>
            <li>Calcular el valor de la hora ordinaria (Salario mensual ÷ 240 horas)</li>
            <li>Multiplicar por el recargo correspondiente según el tipo de hora extra</li>
            <li>Multiplicar por el número de horas trabajadas</li>
          </ol>

          <div className="bg-gray-50 p-4 rounded-lg my-4">
            <p className="font-mono text-sm">
              Valor Hora Extra = (Salario mensual ÷ 240) × (1 + % recargo) × número de horas
            </p>
          </div>

          <h2>Límites Legales</h2>
          <p>
            Es importante conocer los límites establecidos por la ley:
          </p>
          <ul>
            <li>Máximo 2 horas extras diarias</li>
            <li>Máximo 12 horas extras semanales</li>
            <li>Máximo 48 horas ordinarias semanales</li>
            <li>La jornada total no puede exceder 10 horas diarias</li>
          </ul>

          <h2>Ejemplos Prácticos</h2>
          <h3>Ejemplo 1: Hora Extra Diurna</h3>
          <p>
            Para un trabajador con salario de $2.000.000:
          </p>
          <ul>
            <li>Valor hora ordinaria: $2.000.000 ÷ 240 = $8.333</li>
            <li>Recargo del 25%: $8.333 × 1.25 = $10.416</li>
            <li>Por 2 horas extras: $10.416 × 2 = $20.832</li>
          </ul>

          <h2>Consideraciones Importantes</h2>
          <ul>
            <li>Las horas extras deben ser autorizadas previamente por el empleador</li>
            <li>Deben registrarse y pagarse en el período correspondiente</li>
            <li>Se deben incluir en el cálculo de prestaciones sociales</li>
            <li>El empleador debe llevar un registro detallado</li>
          </ul>

          <h2>Casos Especiales</h2>
          <h3>Trabajo por Turnos</h3>
          <p>
            Los trabajadores que laboran por turnos rotativos tienen consideraciones especiales para el cálculo 
            de sus recargos nocturnos y horas extras.
          </p>

          <h3>Cargos de Dirección</h3>
          <p>
            Los trabajadores de dirección, confianza y manejo no tienen derecho al pago de horas extras, 
            según el artículo 162 del Código Sustantivo del Trabajo.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <ClockIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900 m-0">
                Calcula tus Horas Extras
              </h3>
            </div>
            <p className="text-blue-700 mb-4">
              Utiliza nuestra calculadora actualizada para determinar el valor exacto de tus horas extras, 
              recargos nocturnos y trabajo en dominicales y festivos.
            </p>
            <Link 
              href="/calculadoras/horas-extras"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Calcular Horas Extras
            </Link>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2>Marco Legal</h2>
            <p>
              Las horas extras están reguladas principalmente por:
            </p>
            <ul>
              <li>Código Sustantivo del Trabajo: Artículos 159, 160, 161, 162, 168 y 179</li>
              <li>Ley 50 de 1990</li>
              <li>Decreto 1072 de 2015</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}