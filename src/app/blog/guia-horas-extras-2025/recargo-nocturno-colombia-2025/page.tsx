'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function RecargosNocturnosPage() {
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
                Reforma Laboral
              </span>
              <time className="text-sm text-gray-500">
                19 de junio de 2025
              </time>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              ¿A qué hora inicia el recargo nocturno en Colombia con la nueva reforma laboral?
            </h1>

            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-4">              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">📌 Introducción</h2>              <p className="text-base text-gray-700 my-4 leading-7">
                Con la entrada en vigor de la Reforma Laboral 2025 en Colombia, uno de los cambios más relevantes es el nuevo horario del recargo nocturno. 
                Si trabajas en turnos después de las 6 o 7 de la noche, o si eres empleador, esta información te afecta directamente. 
                En este artículo te explicamos qué es el recargo nocturno, a qué hora inicia ahora, cuánto se paga y cómo calcularlo correctamente según el nuevo salario mínimo.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">❓ ¿Qué es el recargo nocturno en Colombia?</h2>              <p className="text-base text-gray-700 my-4 leading-7">
                El recargo nocturno es un valor adicional que se paga a los empleados que laboran durante la jornada nocturna, 
                como compensación por trabajar en un horario que afecta el descanso. Este recargo es obligatorio según el Código Sustantivo del Trabajo.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">⚖️ ¿Qué cambió con la reforma laboral 2025?</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 my-4">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 border">Concepto</th>
                      <th className="px-4 py-2 border">Antes</th>
                      <th className="px-4 py-2 border">Ahora (2025)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Inicio jornada nocturna</td>
                      <td className="px-4 py-2 border">9:00 p.m.</td>
                      <td className="px-4 py-2 border bg-blue-50">7:00 p.m.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Fin jornada nocturna</td>
                      <td className="px-4 py-2 border">6:00 a.m.</td>
                      <td className="px-4 py-2 border">6:00 a.m.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Porcentaje de recargo</td>
                      <td className="px-4 py-2 border">35%</td>
                      <td className="px-4 py-2 border">35%</td>
                    </tr>
                  </tbody>
                </table>
              </div>              <p className="text-base text-gray-700 my-4 leading-7 font-medium">
                <strong>Aplica a:</strong> Todos los trabajadores, incluyendo Mipymes, aprendices del SENA y personal del sector público o privado.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">📊 ¿Cómo calcular el recargo nocturno con el salario mínimo 2025?</h2>              <p className="text-base text-gray-700 my-4 leading-7 font-medium">
                <strong>Salario mínimo 2025 en Colombia:</strong>
              </p>              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li>Salario base: $1.423.500</li>
                <li>Auxilio de transporte: $200.000</li>
                <li>Total mensual: $1.623.500 (no todo es base salarial)</li>
              </ul><p className="text-base text-gray-700 my-4 leading-7 font-medium">
                <strong>Cálculo:</strong>
              </p>              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li>Horas mensuales: jornada de 44 h/semana ≈ 190 h/mes</li>
                <li>Valor hora ordinaria: $1.423.500 / 190 ≈ $7.494 COP</li>
                <li>Hora nocturna: $7.494 × 1.35 ≈ $10.117 COP</li>
              </ul>

              <div className="bg-gray-50 p-4 rounded-lg my-6">
                <p className="font-mono text-sm m-0">
                  Valor Hora con Recargo Nocturno = (Salario mensual ÷ 190) × 1.35
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">💼 ¿A quién beneficia el cambio?</h2>              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li><strong>A empleados nocturnos:</strong> Ganarán más por cada hora trabajada desde las 7:00 p.m.</li>
                <li><strong>A trabajadores de call centers, salud, vigilancia y transporte:</strong> Tendrán una mejora en su compensación.</li>
                <li><strong>A aprendices del SENA:</strong> También se benefician, ya que ahora sus contratos son laborales.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">✅ ¿Qué debe hacer el empleador?</h2>              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li>Actualizar el software de nómina.</li>
                <li>Ajustar turnos y registros de tiempo.</li>
                <li>Capacitar al equipo contable y de recursos humanos.</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <ClockIcon className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-900 m-0">
                    Calcula tus Recargos Nocturnos
                  </h3>
                </div>
                <p className="text-blue-700 mb-4">
                  Utiliza nuestra calculadora actualizada para determinar el valor exacto de tus recargos nocturnos
                  y otros conceptos laborales con la nueva reforma.
                </p>
                <Link 
                  href="/calculadoras/horas-extras"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Calcular Horas Extras y Recargos
                </Link>
              </div>
              <br />

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🧮 ¿Dónde puedo calcular mi recargo nocturno?</h2>              <p className="text-base text-gray-700 my-4 leading-7">
                En calculalaboral.com puedes usar nuestra herramienta gratuita para calcular tu salario con recargos nocturnos, 
                horas extra y más.
              </p>
    <br />              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🔎 Preguntas frecuentes (FAQ)</h2>
          
              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">¿El recargo nocturno es igual al recargo dominical?</h3>              <p className="text-base text-gray-700 my-4 leading-7">
                No, el recargo nocturno es del 35% y se aplica por horario; el dominical/festivo es diferente y tiene su propia tabla de porcentajes.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">¿El recargo nocturno aplica a todos los contratos?</h3>              <p className="text-base text-gray-700 my-4 leading-7">
                Sí, aplica a contratos a término fijo, indefinido, por obra o labor, y ahora también a aprendices del SENA con contrato laboral.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">📝 Conclusión</h2>              <p className="text-base text-gray-700 my-4 leading-7">
                Desde julio de 2025, trabajar desde las 7:00 p.m. te dará un pago adicional del 35% por hora. 
                Si eres trabajador nocturno o empleador, asegúrate de aplicar este cambio correctamente. 
                Revisa tus pagos y usa herramientas actualizadas como las de calculalaboral.com.
              </p>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Marco Legal</h2>                <p className="text-base text-gray-700 my-4 leading-7">
                  El recargo nocturno está regulado principalmente por:
                </p>                <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                  <li>Código Sustantivo del Trabajo: Artículos 160 y 168</li>
                  <li>Reforma Laboral 2025</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
