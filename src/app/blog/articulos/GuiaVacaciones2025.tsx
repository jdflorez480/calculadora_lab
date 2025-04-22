import Link from 'next/link';
import { SunIcon } from '@heroicons/react/24/outline';

export default function GuiaVacaciones2025() {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            Guías
          </span>
          <time className="text-sm text-gray-700">
            15 de marzo de 2025
          </time>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Vacaciones: Derechos y Cálculos 2025
        </h1>

        <div className="prose prose-blue max-w-none text-gray-600 prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
          <h2>Derecho a Vacaciones</h2>
          <p>
            Todo trabajador tiene derecho a disfrutar de un período de vacaciones remuneradas por cada 
            año de servicios. Conoce los detalles principales:
          </p>
          <ul>
            <li>15 días hábiles consecutivos de vacaciones remuneradas por año</li>
            <li>Se causan después de un año completo de servicios</li>
            <li>Pueden acumularse hasta por 2 años (sector privado)</li>
            <li>Hasta 4 años para trabajadores del exterior</li>
          </ul>

          <h2>Cálculo de las Vacaciones</h2>
          <p>
            La liquidación de vacaciones se realiza así:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold text-blue-900">Fórmula básica:</h3>
            <ul className="space-y-3">
              <li>Salario mensual ÷ 30 × número de días de vacaciones</li>
              <li>Se incluye el auxilio de transporte si es aplicable</li>
              <li>Se consideran los pagos variables del último año</li>
            </ul>
          </div>

          <h2>Programación de Vacaciones</h2>
          <p>
            Aspectos a considerar para la programación:
          </p>
          <ul>
            <li>El empleador fija la fecha de vacaciones</li>
            <li>Debe notificar con 15 días de anticipación</li>
            <li>Pueden fraccionarse por acuerdo entre las partes</li>
            <li>Mínimo 6 días hábiles continuos</li>
          </ul>

          <h2>Compensación en Dinero</h2>
          <p>
            Las vacaciones pueden compensarse en dinero en los siguientes casos:
          </p>
          <ul>
            <li>Por terminación del contrato laboral</li>
            <li>Hasta la mitad de las vacaciones anuales</li>
            <li>Por necesidades del servicio (casos especiales)</li>
            <li>Acuerdo entre empleador y trabajador</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <SunIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900 m-0">
                Calcula tus Vacaciones
              </h3>
            </div>
            <p className="text-blue-800 mb-4">
              Utiliza nuestra calculadora para determinar el valor de tus vacaciones y planificar 
              mejor tus descansos remunerados.
            </p>
            <Link 
              href="/calculadoras/liquidacion"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Calcular Vacaciones
            </Link>
          </div>

          <h2>Vacaciones Proporcionales</h2>
          <p>
            En caso de terminación del contrato sin haber disfrutado de vacaciones:
          </p>
          <ul>
            <li>Se pagan proporcionalmente al tiempo trabajado</li>
            <li>Se calculan por días calendario</li>
            <li>Se incluyen en la liquidación final</li>
            <li>No requieren año completo de servicios</li>
          </ul>

          <h2>Interrupciones Justificadas</h2>
          <p>
            Las vacaciones pueden interrumpirse por:
          </p>
          <ul>
            <li>Incapacidad por enfermedad o accidente</li>
            <li>Licencia de maternidad o paternidad</li>
            <li>Calamidad doméstica comprobada</li>
            <li>Llamamiento a servicio militar</li>
          </ul>

          <h2>Casos Especiales</h2>
          <p>
            Situaciones particulares a considerar:
          </p>
          <ul>
            <li>Trabajadores de tiempo parcial</li>
            <li>Empleados en período de prueba</li>
            <li>Contratos de obra o labor</li>
            <li>Trabajadores en misión</li>
          </ul>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2>Recomendaciones Finales</h2>
            <ul>
              <li>Planifica tus vacaciones con anticipación</li>
              <li>Mantén registro de los períodos causados</li>
              <li>Verifica el cálculo de la liquidación</li>
              <li>Conserva los comprobantes de pago</li>
            </ul>
            <p>
              Recuerda que las vacaciones son un derecho irrenunciable que contribuye a tu bienestar 
              físico y mental. Planifícalas adecuadamente para aprovecharlas al máximo.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}