'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function RecargoDominicalPage() {
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
              ¿Cuánto es el recargo dominical y festivo en Colombia según la reforma laboral?
            </h1>

            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-4">
             
              <p className="text-base text-gray-700 my-4 leading-7">
                Con la reforma laboral aprobada en 2025, el recargo por trabajar domingos y festivos en Colombia cambió de forma significativa. 
                Si trabajas en días festivos o domingos, esto te interesa. En este artículo te contamos cuánto te deben pagar, 
                cómo cambia cada año hasta 2027, y cómo calcular el valor exacto de tus horas.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">📈 ¿Qué dice la nueva ley sobre el recargo dominical?</h2>
              <p className="text-base text-gray-700 my-4 leading-7">
                Antes, los trabajadores que laboraban en domingos y festivos recibían un recargo del 75% sobre la hora ordinaria.
                Con la nueva ley, el recargo aumentará de forma progresiva hasta llegar al 100%.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">📅 Tabla de incremento del recargo dominical</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 my-4">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 border">Año</th>
                      <th className="px-4 py-2 border">% de Recargo Dominical/Festivo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Desde julio 2025</td>
                      <td className="px-4 py-2 border bg-blue-50 font-semibold">80%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Desde julio 2026</td>
                      <td className="px-4 py-2 border bg-blue-50 font-semibold">90%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Desde julio 2027</td>
                      <td className="px-4 py-2 border bg-blue-50 font-semibold">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-base text-gray-700 my-4 leading-7 italic">
                <strong>Dato:</strong> Algunas empresas pueden aplicar el 100% desde 2025 si lo desean.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">💰 Ejemplo con salario mínimo 2025</h2>
              <p className="text-base text-gray-700 my-4 leading-7 font-medium">
                <strong>Datos base:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li>Salario mínimo: $1.423.500</li>
                <li>Horas mensuales estimadas: 190</li>
                <li>Valor hora ordinaria: ≈ $7.494</li>
              </ul>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 my-4">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 border">Año</th>
                      <th className="px-4 py-2 border">Valor por hora con recargo dominical</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border font-medium">2025</td>
                      <td className="px-4 py-2 border">$7.494 × 1.80 = $13.489 COP</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">2026</td>
                      <td className="px-4 py-2 border">$7.494 × 1.90 = $14.239 COP</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">2027</td>
                      <td className="px-4 py-2 border">$7.494 × 2.00 = $14.988 COP</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🔀 ¿Qué pasa si trabajo en domingo y de noche?</h2>
              <p className="text-base text-gray-700 my-4 leading-7">
                Debes sumar ambos recargos:
              </p>
              <p className="text-base bg-blue-50 p-3 rounded-md font-medium">
                2025: 80% (domingo) + 35% (noche) = 115% adicional
              </p>
              <p className="text-base text-gray-700 my-4 leading-7">
                Cálculo: $7.494 × 2.15 = $16.112 COP por hora
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <ClockIcon className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-900 m-0">
                    Calcula tus Recargos Dominicales
                  </h3>
                </div>
                <p className="text-blue-700 mb-4">
                  Utiliza nuestra calculadora actualizada para determinar el valor exacto de tus recargos dominicales
                  y festivos con los nuevos porcentajes de la reforma laboral.
                </p>
                <Link 
                  href="/calculadoras/horas-extras"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Calcular Horas Extras y Recargos
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🧮 ¿Dónde puedo calcular esto fácilmente?</h2>
              <p className="text-base text-gray-700 my-4 leading-7">
                Puedes ingresar a calculalaboral.com y usar la calculadora de recargos dominicales y festivos, 
                donde ya están configuradas las tasas del 80%, 90% y 100% según el año.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🔎 Preguntas frecuentes (FAQ)</h2>
              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">¿Cuántas horas debo trabajar para tener derecho al recargo dominical?</h3>
              <p className="text-base text-gray-700 my-4 leading-7">
                No hay mínimo. Si trabajas 1 sola hora en domingo, ya debes recibir el recargo.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">¿Aplica a contratos por prestación de servicios?</h3>
              <p className="text-base text-gray-700 my-4 leading-7">
                No. Solo aplica a contratos laborales (fijo, indefinido, etc.).
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">¿Puedo exigir el recargo si mi empresa no lo paga?</h3>
              <p className="text-base text-gray-700 my-4 leading-7">
                Sí. Puedes acudir al Ministerio de Trabajo o usar nuestra herramienta para demostrarlo.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">📝 Conclusión</h2>
              <p className="text-base text-gray-700 my-4 leading-7">
                El recargo dominical sube del 75% al 100% entre 2025 y 2027. Esto mejora tu salario si trabajas esos días. 
                En calculalaboral.com puedes simular todos estos cálculos gratis y con precisión. ¡Revisa tu nómina y exige lo justo!
              </p>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Marco Legal</h2>
                <p className="text-base text-gray-700 my-4 leading-7">
                  El recargo dominical y festivo está regulado principalmente por:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                  <li>Código Sustantivo del Trabajo: Artículos 179 y 180</li>
                  <li>Reforma Laboral 2025: Artículo sobre incremento progresivo de recargos</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
