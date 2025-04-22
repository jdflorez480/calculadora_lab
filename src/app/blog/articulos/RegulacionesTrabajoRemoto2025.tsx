import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function RegulacionesTrabajoRemoto2025() {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            Legislación
          </span>
          <time className="text-sm text-gray-700">
            15 de abril de 2025
          </time>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Nuevas Regulaciones en el Trabajo Remoto 2025
        </h1>

        <div className="prose prose-blue max-w-none text-gray-600 prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
          <h2>Principales Cambios en la Normativa</h2>
          <p>
            Las nuevas regulaciones del trabajo remoto en Colombia para 2025 establecen un marco más 
            claro y definido para esta modalidad de trabajo, contemplando aspectos fundamentales como 
            jornada laboral, desconexión digital y compensación de gastos.
          </p>

          <h2>Derechos y Obligaciones del Empleador</h2>
          <ul>
            <li>Provisión de herramientas tecnológicas necesarias</li>
            <li>Garantizar la seguridad y salud en el trabajo</li>
            <li>Respetar el derecho a la desconexión digital</li>
            <li>Mantener la comunicación efectiva con los trabajadores</li>
          </ul>

          <h2>Derechos y Obligaciones del Trabajador</h2>
          <ul>
            <li>Cumplimiento de objetivos y metas establecidas</li>
            <li>Disponibilidad en el horario acordado</li>
            <li>Mantener la confidencialidad de la información</li>
            <li>Cuidado de los equipos proporcionados</li>
          </ul>

          <h2>Jornada Laboral y Desconexión Digital</h2>
          <p>
            La nueva normativa establece claramente el derecho a la desconexión digital, garantizando 
            un mínimo de 12 horas continuas de descanso en un período de 24 horas. Los trabajadores 
            remotos tienen los mismos derechos en cuanto a jornada máxima y horas extras que los 
            trabajadores presenciales.
          </p>

          <h2>Compensación de Gastos</h2>
          <p>
            Los empleadores deben compensar los gastos adicionales en que incurra el trabajador por 
            concepto de energía eléctrica, internet y demás servicios públicos necesarios para el 
            desarrollo del trabajo remoto.
          </p>

          <h2>Seguridad y Salud en el Trabajo</h2>
          <p>
            Se establecen nuevos lineamientos para garantizar condiciones adecuadas de trabajo en casa:
          </p>
          <ul>
            <li>Evaluación del puesto de trabajo virtual</li>
            <li>Programas de prevención de riesgos laborales</li>
            <li>Pausas activas y ejercicios de estiramiento</li>
            <li>Monitoreo de la salud mental</li>
          </ul>

          <h2>Aspectos Tecnológicos y de Seguridad</h2>
          <p>
            La normativa incluye requisitos específicos sobre:
          </p>
          <ul>
            <li>Protección de datos y confidencialidad</li>
            <li>Uso de VPN y conexiones seguras</li>
            <li>Respaldo de información</li>
            <li>Protocolos de ciberseguridad</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <HomeIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900 m-0">
                ¿Necesitas ayuda con tus cálculos laborales?
              </h3>
            </div>
            <p className="text-blue-800 mb-4">
              Utiliza nuestras calculadoras para determinar tus prestaciones y derechos laborales 
              bajo la modalidad de trabajo remoto.
            </p>
            <Link 
              href="/calculadoras/nomina"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Calcular Nómina
            </Link>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2>Marco Legal</h2>
            <p>
              Estas regulaciones están amparadas por:
            </p>
            <ul>
              <li>Ley 2088 de 2021</li>
              <li>Decreto 1227 de 2022</li>
              <li>Resolución 4886 de 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}