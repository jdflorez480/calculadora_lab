import Link from 'next/link';
import { BanknotesIcon } from '@heroicons/react/24/outline';

export default function ReformaPensional2025() {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            Legislación
          </span>
          <time className="text-sm text-gray-700">
            20 de marzo de 2025
          </time>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Reforma Pensional 2025: Impacto y Cambios
        </h1>

        <div className="prose prose-blue max-w-none text-gray-600 prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-700">
              <strong>Importante:</strong> Esta reforma aplica a partir del 1 de julio de 2025. 
              Verifica cómo te afectan estos cambios según tu situación particular.
            </p>
          </div>

          <h2>Pilares del Nuevo Sistema</h2>
          <p>
            La reforma establece un sistema de tres pilares:
          </p>
          <ul>
            <li>Pilar Solidario: Renta básica para adultos mayores en pobreza</li>
            <li>Pilar Contributivo Obligatorio: Hasta 3 salarios mínimos</li>
            <li>Pilar Complementario: Aportes voluntarios adicionales</li>
          </ul>

          <h2>Cambios en los Aportes</h2>
          <p>
            Principales modificaciones en el esquema de aportes:
          </p>
          <ul>
            <li>Contribución obligatoria: 16% del salario base</li>
            <li>Distribución entre pilares según nivel de ingreso</li>
            <li>Nuevos beneficios tributarios para aportes voluntarios</li>
            <li>Ajustes en el Fondo de Garantía de Pensión Mínima</li>
          </ul>

          <h2>Requisitos de Pensión</h2>
          <p>
            Nuevos requisitos para acceder a la pensión:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold text-blue-900">Condiciones Básicas:</h3>
            <ul className="space-y-3">
              <li>Edad: 62 años hombres, 57 años mujeres</li>
              <li>Semanas cotizadas: 1.300 semanas</li>
              <li>Implementación gradual hasta 2030</li>
            </ul>
          </div>

          <h2>Beneficios para Grupos Especiales</h2>
          <p>
            La reforma incluye consideraciones especiales para:
          </p>
          <ul>
            <li>Madres cabeza de familia</li>
            <li>Trabajadores rurales</li>
            <li>Personas con discapacidad</li>
            <li>Trabajadores informales</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <BanknotesIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900 m-0">
                Planifica tu Pensión
              </h3>
            </div>
            <p className="text-blue-800 mb-4">
              Utiliza nuestra calculadora para proyectar tus aportes y beneficios pensionales 
              bajo el nuevo sistema.
            </p>
            <Link 
              href="/calculadoras/nomina"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Calcular Aportes
            </Link>
          </div>

          <h2>Régimen de Transición</h2>
          <p>
            El régimen de transición contempla:
          </p>
          <ul>
            <li>Respeto por derechos adquiridos</li>
            <li>Implementación gradual de nuevos requisitos</li>
            <li>Opciones de traslado entre regímenes</li>
            <li>Garantías para cotizantes próximos a pensionarse</li>
          </ul>

          <h2>Pensión Familiar</h2>
          <p>
            Novedades en la pensión familiar:
          </p>
          <ul>
            <li>Suma de semanas entre cónyuges</li>
            <li>Requisitos más flexibles</li>
            <li>Cobertura para uniones de hecho</li>
            <li>Beneficios para parejas de bajos ingresos</li>
          </ul>

          <h2>Impacto Fiscal</h2>
          <p>
            Efectos esperados de la reforma:
          </p>
          <ul>
            <li>Reducción del déficit pensional</li>
            <li>Mayor cobertura del sistema</li>
            <li>Sostenibilidad a largo plazo</li>
            <li>Equidad en la distribución de subsidios</li>
          </ul>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2>Próximos Pasos</h2>
            <p>
              Acciones recomendadas:
            </p>
            <ul>
              <li>Revisar tu situación actual en el sistema</li>
              <li>Actualizar datos en tu fondo de pensiones</li>
              <li>Considerar aportes voluntarios adicionales</li>
              <li>Consultar con un asesor financiero</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}