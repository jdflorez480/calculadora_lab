import Link from 'next/link';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export default function OptimizarDeclaracionRenta2025() {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            Impuestos
          </span>
          <time className="text-sm text-gray-700">
            10 de abril de 2025
          </time>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Cómo Optimizar tu Declaración de Renta 2025
        </h1>

        <div className="prose prose-blue max-w-none text-gray-600 prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-700">
              <strong>¡Importante!</strong> Las estrategias mencionadas en este artículo deben aplicarse dentro del marco legal y con el debido soporte documental.
            </p>
          </div>

          <h2>Deducciones Permitidas para 2025</h2>
          <p>
            La DIAN ha establecido una serie de deducciones que pueden ayudarte a reducir tu base gravable:
          </p>
          <ul>
            <li>Intereses de vivienda o leasing habitacional (hasta 1200 UVT anuales)</li>
            <li>Pagos por salud y medicina prepagada (hasta 16 UVT mensuales)</li>
            <li>Dependientes (hasta 10% del ingreso bruto, máximo 32 UVT mensuales)</li>
            <li>Aportes voluntarios a pensión y AFC (hasta 30% del ingreso, máximo 3800 UVT)</li>
          </ul>

          <h2>Beneficios Tributarios</h2>
          <p>
            Algunos beneficios tributarios que puedes aprovechar:
          </p>
          <ul>
            <li>Donaciones a entidades sin ánimo de lucro</li>
            <li>Inversiones en proyectos de economía naranja</li>
            <li>Aportes al Régimen Voluntario de Pensiones</li>
            <li>Inversiones en proyectos de ciencia, tecnología e innovación</li>
          </ul>

          <h2>Documentación Necesaria</h2>
          <p>
            Es fundamental tener todos los soportes organizados:
          </p>
          <ul>
            <li>Certificados de ingresos y retenciones</li>
            <li>Certificados bancarios de intereses</li>
            <li>Facturas de gastos deducibles</li>
            <li>Certificados de medicina prepagada</li>
            <li>Soportes de aportes a pensión y AFC</li>
          </ul>

          <h2>Planeación Tributaria</h2>
          <p>
            La planeación tributaria debe realizarse durante todo el año. Algunas estrategias incluyen:
          </p>
          <ul>
            <li>Distribuir las inversiones estratégicamente</li>
            <li>Mantener un registro detallado de gastos deducibles</li>
            <li>Aprovechar los beneficios de las cuentas AFC</li>
            <li>Optimizar los aportes voluntarios a pensión</li>
          </ul>

          <h2>Rentas Exentas</h2>
          <p>
            Las principales rentas exentas para 2025 incluyen:
          </p>
          <ul>
            <li>25% de los ingresos laborales (limitado a 240 UVT mensuales)</li>
            <li>Aportes obligatorios a pensión</li>
            <li>Aportes obligatorios a salud</li>
            <li>Prima especial y de costo de vida (servidores públicos diplomáticos)</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <DocumentTextIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900 m-0">
                ¿Necesitas ayuda con tus cálculos?
              </h3>
            </div>
            <p className="text-blue-800 mb-4">
              Utiliza nuestra calculadora de retención en la fuente para estimar tus obligaciones tributarias mensuales.
            </p>
            <Link 
              href="/calculadoras/retencion"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Calcular Retención
            </Link>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2>Fechas Importantes</h2>
            <p>
              Ten en cuenta el siguiente calendario para 2025:
            </p>
            <ul>
              <li>Febrero: Emisión de certificados de ingresos y retenciones</li>
              <li>Marzo: Inicio del período de declaración para personas naturales</li>
              <li>Agosto: Vencimientos según el último dígito del NIT/Cédula</li>
              <li>Octubre: Fecha límite para declaraciones extemporáneas sin sanción</li>
            </ul>
            <p>
              Consulta las fechas exactas según tu número de identificación en el calendario tributario oficial de la DIAN.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}