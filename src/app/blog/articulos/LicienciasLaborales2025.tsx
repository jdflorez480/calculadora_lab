import Link from 'next/link';
import { UserGroupIcon } from '@heroicons/react/24/outline';

export default function LicenciasLaborales2025() {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            Guías
          </span>
          <time className="text-sm text-gray-700">
            25 de marzo de 2025
          </time>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Licencias Laborales: Guía Completa 2025
        </h1>

        <div className="prose prose-blue max-w-none text-gray-600 prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
          <h2>Tipos de Licencias Laborales</h2>
          
          <h3>Licencia de Maternidad</h3>
          <p>
            La licencia de maternidad en Colombia para 2025 contempla:
          </p>
          <ul>
            <li>18 semanas de licencia remunerada</li>
            <li>Aplicable desde 2 semanas antes del parto</li>
            <li>Extensible por parto múltiple (2 semanas adicionales)</li>
            <li>Protección especial contra despido</li>
          </ul>

          <h3>Licencia de Paternidad</h3>
          <p>
            Los padres tienen derecho a:
          </p>
          <ul>
            <li>2 semanas de licencia remunerada</li>
            <li>Debe tomarse dentro del primer mes del nacimiento</li>
            <li>Aplica también en casos de adopción</li>
          </ul>

          <h3>Licencia por Luto</h3>
          <p>
            Se otorgan 5 días hábiles por:
          </p>
          <ul>
            <li>Fallecimiento de cónyuge o compañero permanente</li>
            <li>Muerte de familiares hasta segundo grado de consanguinidad</li>
            <li>Fallecimiento de familiares en primer grado de afinidad</li>
          </ul>

          <h2>Procedimiento de Solicitud</h2>
          <p>
            Para solicitar una licencia laboral, sigue estos pasos:
          </p>
          <ol>
            <li>Notificar al empleador con anticipación (cuando sea posible)</li>
            <li>Presentar documentación requerida según el tipo de licencia</li>
            <li>Esperar la aprobación formal</li>
            <li>Coordinar la reincorporación al trabajo</li>
          </ol>

          <h2>Documentación Requerida</h2>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold text-blue-900">Por tipo de licencia:</h3>
            <ul className="space-y-3">
              <li><strong>Maternidad:</strong> Certificado médico con fecha probable de parto</li>
              <li><strong>Paternidad:</strong> Registro civil de nacimiento</li>
              <li><strong>Luto:</strong> Certificado de defunción y documento que acredite parentesco</li>
              <li><strong>Incapacidad:</strong> Certificado médico de la EPS</li>
            </ul>
          </div>

          <h2>Licencias Especiales</h2>
          <p>
            Otros tipos de licencias contempladas en la legislación:
          </p>
          <ul>
            <li>Licencia por matrimonio (negociable con el empleador)</li>
            <li>Licencia por estudios (según políticas empresariales)</li>
            <li>Licencia por calamidad doméstica</li>
            <li>Licencia por ejercicio del sufragio</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <UserGroupIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900 m-0">
                ¿Necesitas calcular tu liquidación?
              </h3>
            </div>
            <p className="text-blue-800 mb-4">
              Utiliza nuestra calculadora para determinar el valor de tus prestaciones 
              incluyendo el tiempo de licencias remuneradas.
            </p>
            <Link 
              href="/calculadoras/liquidacion"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Calcular Liquidación
            </Link>
          </div>

          <h2>Remuneración durante Licencias</h2>
          <p>
            Aspectos importantes sobre el pago durante las licencias:
          </p>
          <ul>
            <li>Licencia de maternidad: 100% del salario</li>
            <li>Licencia de paternidad: 100% del salario</li>
            <li>Licencia por luto: 100% del salario</li>
            <li>Incapacidad: Varía según el origen y duración</li>
          </ul>

          <h2>Derechos y Garantías</h2>
          <p>
            Durante el período de licencia:
          </p>
          <ul>
            <li>Se mantiene el contrato laboral vigente</li>
            <li>Se acumulan prestaciones sociales</li>
            <li>Se conserva el puesto de trabajo</li>
            <li>Se mantienen las cotizaciones a seguridad social</li>
          </ul>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2>Marco Legal</h2>
            <p>
              Las licencias laborales están reguladas por:
            </p>
            <ul>
              <li>Código Sustantivo del Trabajo</li>
              <li>Ley 1822 de 2017 (Licencia de maternidad)</li>
              <li>Ley 2114 de 2021 (Licencia de paternidad)</li>
              <li>Ley 1280 de 2009 (Licencia por luto)</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}