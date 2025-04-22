import Link from 'next/link';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function NovedadesSeguridadSocial2025() {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            Seguridad Social
          </span>
          <time className="text-sm text-gray-700">
            28 de marzo de 2025
          </time>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Novedades en Seguridad Social para 2025
        </h1>

        <div className="prose prose-blue max-w-none text-gray-600 prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-700">
              <strong>Importante:</strong> Los cambios mencionados en este artículo entran en vigencia 
              a partir del 1 de enero de 2025. Asegúrate de actualizar tus aportes según corresponda.
            </p>
          </div>

          <h2>Actualización de Bases de Cotización</h2>
          <p>
            Las principales modificaciones en las bases de cotización para 2025 son:
          </p>
          <ul>
            <li>IBC mínimo: 1 SMMLV ($1.423.500)</li>
            <li>IBC máximo: 25 SMMLV ($35.587.500)</li>
            <li>Nuevos porcentajes para trabajadores independientes</li>
            <li>Ajustes en la base de cotización para contratos de prestación de servicios</li>
          </ul>

          <h2>Cambios en los Aportes</h2>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold text-blue-900">Distribución de Aportes:</h3>
            <ul className="space-y-3">
              <li>Salud: 12.5% (empleador 8.5%, trabajador 4%)</li>
              <li>Pensión: 16% (empleador 12%, trabajador 4%)</li>
              <li>ARL: Según clase de riesgo (0.522% - 6.960%)</li>
            </ul>
          </div>

          <h2>Beneficios Ampliados</h2>
          <p>
            Nuevos beneficios implementados este año:
          </p>
          <ul>
            <li>Cobertura extendida para el grupo familiar</li>
            <li>Mejoras en el sistema de incapacidades</li>
            <li>Ampliación de servicios de telemedicina</li>
            <li>Nuevos programas de prevención</li>
          </ul>

          <h2>Sistema de Riesgos Laborales</h2>
          <p>
            Actualizaciones en el sistema de riesgos laborales:
          </p>
          <ul>
            <li>Nuevas tablas de clasificación de riesgos</li>
            <li>Mayor cobertura para teletrabajadores</li>
            <li>Actualización de protocolos de bioseguridad</li>
            <li>Inclusión de nuevas enfermedades laborales</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900 m-0">
                Calcula tus Aportes
              </h3>
            </div>
            <p className="text-blue-800 mb-4">
              Utiliza nuestra calculadora para determinar el valor exacto de tus aportes 
              a la seguridad social según las nuevas tarifas.
            </p>
            <Link 
              href="/calculadoras/nomina"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Calcular Aportes
            </Link>
          </div>

          
          
        </div>
      </div>
    </article>
  );
}