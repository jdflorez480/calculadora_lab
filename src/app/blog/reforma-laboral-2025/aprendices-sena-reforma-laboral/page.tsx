'use client';

import Link from 'next/link';
import { ArrowLeftIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function AprendicesSenaPage() {
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
              Aprendices del SENA: ¿Cuánto ganan y qué cambia con la reforma laboral 2025?
            </h1>

            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">📌 Introducción</h2>
              <p className="text-base text-gray-700 my-4 leading-7">
                La Reforma Laboral 2025 aprobada en Colombia trae grandes cambios para quienes se encuentran en etapa de formación con el SENA. 
                A partir de julio, los aprendices que ingresen a etapa práctica tendrán un contrato laboral formal, con acceso a todos los 
                beneficios legales como salario, seguridad social, cesantías y más.
              </p>
              
              <p className="text-base text-gray-700 my-4 leading-7">
                En este artículo te explicamos cómo funciona este nuevo esquema, cuánto gana un aprendiz, cómo se dividen los pagos, 
                y qué beneficios tienen los jóvenes en formación con este nuevo modelo.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">📚 ¿Qué es un aprendiz del SENA?</h2>
              <p className="text-base text-gray-700 my-4 leading-7">
                Los aprendices del SENA son personas que cursan programas de formación técnica, tecnológica o complementaria, que incluyen:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li><strong>Una etapa lectiva:</strong> de estudio en el centro de formación.</li>
                <li><strong>Una etapa práctica:</strong> que se realiza en una empresa como requisito para terminar el programa.</li>
              </ul>
              
              <p className="text-base text-gray-700 my-4 leading-7">
                Tradicionalmente, el vínculo con la empresa durante la etapa práctica era un contrato de aprendizaje, 
                sin relación laboral ni prestaciones completas.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">⚖️ ¿Qué cambia con la Reforma Laboral 2025?</h2>
              <p className="text-base text-gray-700 my-4 leading-7">
                Desde julio de 2025, los aprendices que comiencen su etapa práctica deberán ser vinculados mediante 
                contrato laboral, y no solo con un contrato de aprendizaje.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">¿Qué implica este cambio?</h3>
              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li>Relación laboral formal con la empresa.</li>
                <li>Pago mensual en dos tramos:
                  <ul className="list-circle pl-6 mt-2 space-y-1">
                    <li><strong>Primera mitad de la etapa práctica:</strong> 75% del salario mínimo.</li>
                    <li><strong>Segunda mitad de la etapa práctica:</strong> 100% del salario mínimo.</li>
                  </ul>
                </li>
                <li>Derecho a todas las prestaciones sociales: prima, cesantías, salud, pensión, ARL, vacaciones.</li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-sm text-yellow-800 font-medium">
                  <strong>Importante:</strong> no significa que cada tramo dure un año. La duración depende del programa. 
                  Algunos pueden tener prácticas de 6, 9 o 12 meses. Lo clave es que el salario se ajusta a la mitad 
                  del tiempo real de la etapa práctica.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">💰 ¿Cuánto gana un aprendiz del SENA en 2025?</h2>
              <p className="text-base text-gray-700 my-4 leading-7">
                El salario mínimo legal mensual vigente (SMLMV) para 2025 es de $1.423.500 COP.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Ejemplo 1: Práctica de 6 meses</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 my-4">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 border">Periodo</th>
                      <th className="px-4 py-2 border">Pago mensual</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Meses 1 a 3 (75%)</td>
                      <td className="px-4 py-2 border">$1.067.625</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Meses 4 a 6 (100%)</td>
                      <td className="px-4 py-2 border">$1.423.500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-base text-gray-700 my-4 leading-7 font-medium">
                Total recibido por los 6 meses: $7.473.375 COP
                <br/>
                <span className="text-sm text-gray-600 font-normal">(Antes solo se recibía &ldquo;apoyo de sostenimiento&rdquo;, sin prestaciones ni estabilidad).</span>
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🎁 Beneficios del contrato laboral para aprendices</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 my-4">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 border">Beneficio</th>
                      <th className="px-4 py-2 border">Antes (contrato aprendizaje)</th>
                      <th className="px-4 py-2 border">Ahora (contrato laboral)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Seguridad social completa</td>
                      <td className="px-4 py-2 border">No</td>
                      <td className="px-4 py-2 border bg-green-50 font-semibold">Sí</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">EPS y pensión</td>
                      <td className="px-4 py-2 border">Parcial o no aplicaba</td>
                      <td className="px-4 py-2 border bg-green-50 font-semibold">Sí (cotización obligatoria)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">ARL</td>
                      <td className="px-4 py-2 border">Limitada</td>
                      <td className="px-4 py-2 border bg-green-50 font-semibold">Sí</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Prima de servicios</td>
                      <td className="px-4 py-2 border">No</td>
                      <td className="px-4 py-2 border bg-green-50 font-semibold">Sí (proporcional)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Cesantías e intereses</td>
                      <td className="px-4 py-2 border">No</td>
                      <td className="px-4 py-2 border bg-green-50 font-semibold">Sí</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Vacaciones</td>
                      <td className="px-4 py-2 border">No</td>
                      <td className="px-4 py-2 border bg-green-50 font-semibold">Sí (proporcional)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border font-medium">Indemnización por despido</td>
                      <td className="px-4 py-2 border">No</td>
                      <td className="px-4 py-2 border bg-green-50 font-semibold">Sí (según tipo de contrato)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-base text-gray-700 my-4 leading-7">
                Esto significa que el aprendiz pasa de ser un &ldquo;formando&rdquo; sin derechos completos a un trabajador 
                con acceso a la seguridad social y beneficios integrales.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">📊 Simulación completa</h2>
              <p className="text-base text-gray-700 my-4 leading-7">
                María entra a etapa práctica el 1 de agosto de 2025, con duración de 10 meses.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg my-4 space-y-2">
                <p className="font-medium">5 meses al 75% del salario mínimo:</p>
                <p className="font-mono">$1.067.625 × 5 = $5.338.125</p>
                
                <p className="font-medium mt-3">5 meses al 100% del salario mínimo:</p>
                <p className="font-mono">$1.423.500 × 5 = $7.117.500</p>
                
                <p className="font-medium mt-3">Total salario base en 10 meses:</p>
                <p className="font-mono font-bold">$12.455.625</p>
              </div>
              
              <p className="text-base text-gray-700 my-4 leading-7">
                Además, tiene derecho a:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li>Prima proporcional: ≈ $710.000</li>
                <li>Cesantías: ≈ $1.038.000</li>
                <li>Intereses a cesantías (12%): ≈ $124.560</li>
                <li>Vacaciones proporcional: ≈ $592.000</li>
              </ul>
              
              <p className="text-base text-gray-700 my-4 leading-7 font-bold">
                Total de beneficios estimados: $14.920.000 COP (¡muy superior al modelo anterior!).
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <AcademicCapIcon className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-900 m-0">
                    Calcula tu Salario como Aprendiz
                  </h3>
                </div>
                <p className="text-blue-700 mb-4">
                  Utiliza nuestra calculadora especializada para determinar exactamente cuánto ganarás 
                  como aprendiz SENA con todos los beneficios de la nueva reforma laboral.
                </p>
                <Link 
                  href="/calculadoras/nomina"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Calcular Salario y Beneficios
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🔎 Preguntas frecuentes (FAQ)</h2>
              
              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">¿Todos los aprendices del SENA tendrán contrato laboral?</h3>
              <p className="text-base text-gray-700 my-4 leading-7">
                Solo aquellos que inicien etapa práctica desde julio de 2025.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">¿Cuánto dura la etapa práctica?</h3>
              <p className="text-base text-gray-700 my-4 leading-7">
                Depende del programa del SENA. Puede ser de 6 a 12 meses, o más.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">¿La empresa puede pagar menos del 75%?</h3>
              <p className="text-base text-gray-700 my-4 leading-7">
                No. El 75% del salario mínimo es el mínimo legal durante la primera mitad de la práctica.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">¿El contrato incluye vacaciones, prima y cesantías?</h3>
              <p className="text-base text-gray-700 my-4 leading-7">
                Sí. Son derechos laborales obligatorios desde el primer día.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">¿El aprendiz puede ser despedido?</h3>
              <p className="text-base text-gray-700 my-4 leading-7">
                Sí, pero bajo las normas laborales vigentes. Si se despide sin justa causa, podría haber indemnización.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">🧮 ¿Dónde puedo calcular el salario y beneficios como aprendiz?</h2>
              <p className="text-base text-gray-700 my-4 leading-7">
                En calculalaboral.com estamos desarrollando una calculadora especial para aprendices del SENA, donde podrás:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li>Simular cuánto ganarás mes a mes.</li>
                <li>Ver el total de tus prestaciones (prima, cesantías, intereses).</li>
                <li>Calcular tu liquidación si termina el contrato anticipadamente.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">📝 Conclusión</h2>
              <p className="text-base text-gray-700 my-4 leading-7">
                La Reforma Laboral 2025 transforma el papel del aprendiz del SENA en el entorno laboral colombiano. 
                A partir de ahora, quienes entren en etapa práctica recibirán un contrato laboral real con derechos, 
                salario y seguridad social. Esta medida mejora la calidad del empleo juvenil y fortalece la protección 
                para miles de estudiantes en formación técnica y tecnológica.
              </p>
              
              <p className="text-base text-gray-700 my-4 leading-7 font-medium">
                ¿Eres aprendiz o empresa formadora? ¡Calcula fácilmente lo que corresponde en calculalaboral.com!
              </p>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Marco Legal</h2>
                <p className="text-base text-gray-700 my-4 leading-7">
                  Las nuevas disposiciones para aprendices del SENA están reguladas principalmente por:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                  <li>Reforma Laboral 2025: Capítulo sobre Vinculación de Aprendices</li>
                  <li>Código Sustantivo del Trabajo: Artículos sobre contrato de trabajo</li>
                  <li>Ley 789 de 2002 (modificada): Regula el contrato de aprendizaje</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
