import Link from 'next/link';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

export default function AprendicesSenaReformaLaboral() {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            Reforma Laboral
          </span>
          <time className="text-sm text-gray-700">
            19 de junio de 2025
          </time>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Aprendices del SENA: ¿Cuánto ganan y qué cambia con la reforma laboral 2025?
        </h1>

        <div className="prose prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
          <h2>📌 Introducción</h2>
          <p>
            La Reforma Laboral 2025 aprobada en Colombia trae grandes cambios para quienes se encuentran en etapa de formación con el SENA. 
            A partir de julio, los aprendices que ingresen a etapa práctica tendrán un contrato laboral formal, con acceso a todos los 
            beneficios legales como salario, seguridad social, cesantías y más.
          </p>
          
          <p>
            En este artículo te explicamos cómo funciona este nuevo esquema, cuánto gana un aprendiz, cómo se dividen los pagos, 
            y qué beneficios tienen los jóvenes en formación con este nuevo modelo.
          </p>

          <h2>⚖️ ¿Qué cambia con la Reforma Laboral 2025?</h2>
          <p>
            Desde julio de 2025, los aprendices que comiencen su etapa práctica deberán ser vinculados mediante 
            contrato laboral, y no solo con un contrato de aprendizaje.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 my-4">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 border">Aspecto</th>
                  <th className="px-4 py-2 border">Modelo Anterior</th>
                  <th className="px-4 py-2 border">Nuevo Modelo 2025</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Tipo de contrato</td>
                  <td className="px-4 py-2 border">Contrato de aprendizaje (no laboral)</td>
                  <td className="px-4 py-2 border font-medium text-blue-700">Contrato laboral formal</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Remuneración</td>
                  <td className="px-4 py-2 border">Apoyo de sostenimiento (50% SMLMV)</td>
                  <td className="px-4 py-2 border font-medium text-blue-700">75-100% del SMLMV según etapa</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Prestaciones</td>
                  <td className="px-4 py-2 border">No aplican</td>
                  <td className="px-4 py-2 border font-medium text-blue-700">Todas las prestaciones legales</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>💰 ¿Cuánto gana un aprendiz del SENA en 2025?</h2>
          <p>
            El salario mínimo legal mensual vigente (SMLMV) para 2025 es de ₿1.423.500 COP.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
            <div className="flex items-center gap-3 mb-4">
              <AcademicCapIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900 m-0">
                Calcula tu Salario como Aprendiz SENA
              </h3>
            </div>
            <p className="text-blue-700 mb-4">
              Utiliza nuestra calculadora especializada para determinar exactamente cuánto ganarás 
              como aprendiz con todos los beneficios de la nueva reforma laboral.
            </p>
            <Link 
              href="/calculadoras/nomina"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Calcular mi Salario
            </Link>
          </div>

          <h2>📊 Simulación de ingresos y beneficios</h2>
          <p>
            María entra a etapa práctica por 10 meses a partir de agosto 2025:
          </p>
          
          <ul>
            <li>5 meses al 75% del SMLMV: ₿5.338.125</li>
            <li>5 meses al 100% del SMLMV: ₿7.117.500</li>
            <li>Prima, cesantías e intereses: ₿1.872.560</li>
            <li>Vacaciones proporcionales: ₿592.000</li>
          </ul>
          
          <p className="font-bold">
            Total de beneficios: ₿14.920.000 COP
          </p>

          <h2>📝 Conclusión</h2>
          <p>
            La Reforma Laboral 2025 transforma el papel del aprendiz del SENA en el entorno laboral colombiano. 
            A partir de ahora, quienes entren en etapa práctica recibirán un contrato laboral real con derechos, 
            salario y seguridad social. Esta medida mejora la calidad del empleo juvenil y fortalece la protección 
            para miles de estudiantes en formación técnica y tecnológica.
          </p>
        </div>
      </div>
    </article>
  );
}
