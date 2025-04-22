'use client';

import Link from 'next/link';
import { ArrowLeftIcon, CalculatorIcon } from '@heroicons/react/24/outline';

export default function BlogPostPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Volver al blog
        </Link>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                Guías
              </span>
              <time className="text-sm text-gray-500">
                20 de abril de 2025
              </time>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Guía Completa de Prima de Servicios Junio 2025
            </h1>

            <div className="prose prose-blue max-w-none text-gray-600">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-yellow-700">
                  <strong>¡Importante!</strong> La fecha límite para el pago de la prima de servicios del primer semestre es el 30 de junio de 2025.
                </p>
              </div>

              <h2>¿Qué es la Prima de Servicios?</h2>
              <p>
                La prima de servicios es una prestación social obligatoria que equivale a un mes de salario dividido en dos pagos semestrales. 
                Es un derecho de todos los trabajadores vinculados mediante contrato de trabajo y hace parte del conjunto de beneficios conocidos 
                como prestaciones sociales.
              </p>

              <h2>¿Cuándo se Paga?</h2>
              <p>
                La prima se paga en dos momentos del año:
              </p>
              <ul>
                <li>Primera mitad: Máximo el 30 de junio</li>
                <li>Segunda mitad: Máximo el 20 de diciembre</li>
              </ul>

              <h2>¿Cómo se Calcula?</h2>
              <p>
                La fórmula para calcular la prima de servicios es:
              </p>
              <pre className="bg-gray-50 p-4 rounded-lg">
                Prima = (Salario mensual + Auxilio de transporte) × Días trabajados ÷ 360
              </pre>
              <p>
                Para 2025, se deben tener en cuenta los siguientes valores:
              </p>
              <ul>
                <li>Salario Mínimo: $1.423.500</li>
                <li>Auxilio de Transporte: $200.000 (para quienes ganan hasta $2.847.000)</li>
              </ul>

              <h2>¿Qué se Incluye en el Cálculo?</h2>
              <p>
                Para el cálculo de la prima se debe incluir:
              </p>
              <ul>
                <li>Salario básico mensual</li>
                <li>Auxilio de transporte (si aplica)</li>
                <li>Comisiones</li>
                <li>Horas extras</li>
                <li>Recargos nocturnos</li>
                <li>Dominicales y festivos</li>
                <li>Bonificaciones habituales</li>
              </ul>

              <h2>Casos Especiales</h2>
              <h3>Trabajadores con Salario Variable</h3>
              <p>
                Para los trabajadores que reciben salario variable (por comisiones o porcentajes), se toma como base el promedio 
                de lo devengado en el semestre correspondiente.
              </p>

              <h3>Trabajo por Días</h3>
              <p>
                Los trabajadores que no laboran todos los días del mes también tienen derecho a la prima, calculada proporcionalmente 
                a los días trabajados.
              </p>

              <h2>Preguntas Frecuentes</h2>
              <h3>¿Los trabajadores domésticos tienen derecho a prima?</h3>
              <p>
                Sí, los trabajadores domésticos tienen derecho a prima de servicios en las mismas condiciones que cualquier otro trabajador.
              </p>

              <h3>¿Se paga prima durante la licencia de maternidad?</h3>
              <p>
                Sí, el tiempo de licencia de maternidad se considera como tiempo trabajado para el cálculo de la prima.
              </p>

              <h3>¿Se puede pagar la prima antes de la fecha límite?</h3>
              <p>
                Sí, el empleador puede pagar la prima antes de la fecha límite, pero nunca después.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <CalculatorIcon className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-900 m-0">
                    Calcula tu Prima de Servicios
                  </h3>
                </div>
                <p className="text-blue-700 mb-4">
                  Utiliza nuestra calculadora actualizada con los valores de 2025 para conocer exactamente 
                  cuánto deberías recibir de prima este semestre.
                </p>
                <Link 
                  href="/calculadoras/prima"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Calcular Prima de Servicios
                </Link>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2>Marco Legal</h2>
                <p>
                  La prima de servicios está regulada por:
                </p>
                <ul>
                  <li>Artículo 306 del Código Sustantivo del Trabajo</li>
                  <li>Ley 1788 de 2016 (incluyó a los trabajadores domésticos)</li>
                </ul>
                <p>
                  El incumplimiento en el pago de la prima puede generar sanciones para el empleador, incluyendo el pago 
                  de indemnizaciones por mora.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}