import Link from 'next/link';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default function CesantiasFechas2025() {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            Prestaciones
          </span>
          <time className="text-sm text-gray-700">
            1 de abril de 2025
          </time>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Cesantías e Intereses: Fechas Clave para 2025
        </h1>

        <div className="prose prose-blue max-w-none text-gray-600 prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
          <h2>Calendario de Fechas Importantes</h2>
          <p>
            Para el año 2025, estas son las fechas que debes tener presentes en relación con las cesantías 
            y sus intereses:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold text-blue-900">Fechas Límite</h3>
            <ul className="space-y-3">
              <li><strong>14 de febrero 2025:</strong> Consignación de cesantías al fondo</li>
              <li><strong>31 de enero 2025:</strong> Pago de intereses sobre cesantías</li>
              <li><strong>31 de diciembre 2025:</strong> Período de corte para el cálculo</li>
            </ul>
          </div>

          <h2>¿Qué son las Cesantías?</h2>
          <p>
            Las cesantías son una prestación social que equivale a un mes de salario por cada año trabajado, 
            o proporcional al tiempo laborado. Este ahorro está destinado a cubrir eventualidades como el 
            desempleo o necesidades específicas de vivienda y educación.
          </p>

          <h2>Retiro de Cesantías</h2>
          <p>
            Los trabajadores pueden retirar sus cesantías en los siguientes casos:
          </p>
          <ul>
            <li>Terminación del contrato laboral</li>
            <li>Financiación de estudios superiores</li>
            <li>Compra, construcción o mejora de vivienda</li>
            <li>Pago de impuesto predial o cuotas hipotecarias</li>
          </ul>

          <h2>Proceso de Retiro Parcial</h2>
          <p>
            Para realizar un retiro parcial de cesantías, debes seguir estos pasos:
          </p>
          <ol>
            <li>Reunir la documentación requerida según el tipo de retiro</li>
            <li>Solicitar autorización del empleador</li>
            <li>Presentar la solicitud ante el fondo de cesantías</li>
            <li>Esperar la aprobación y desembolso</li>
          </ol>

          <h2>Documentación Necesaria</h2>
          <p>
            Los documentos varían según el tipo de retiro:
          </p>
          <ul>
            <li>Para vivienda: Promesa de compraventa o cotización de materiales</li>
            <li>Para educación: Recibo de matrícula o certificado de admisión</li>
            <li>Para desempleo: Carta de terminación del contrato</li>
          </ul>

          <h2>Intereses sobre Cesantías</h2>
          <p>
            Los intereses sobre cesantías corresponden al 12% anual sobre el saldo acumulado. 
            Se calculan al 31 de diciembre y deben pagarse a más tardar el 31 de enero del año siguiente.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <CalendarIcon className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-900 m-0">
                Calcula tus Cesantías
              </h3>
            </div>
            <p className="text-blue-800 mb-4">
              Utiliza nuestra calculadora para determinar el valor de tus cesantías e intereses.
            </p>
            <Link 
              href="/calculadoras/liquidacion"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Calcular Cesantías
            </Link>
          </div>

          <h2>Sanciones por Incumplimiento</h2>
          <p>
            El no pago oportuno de las cesantías genera las siguientes sanciones:
          </p>
          <ul>
            <li>Un día de salario por cada día de retraso en la consignación</li>
            <li>Intereses moratorios sobre las cesantías no consignadas</li>
            <li>Multas por parte del Ministerio del Trabajo</li>
          </ul>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2>Recomendaciones Finales</h2>
            <ul>
              <li>Verifica regularmente el saldo de tus cesantías</li>
              <li>Guarda todos los soportes de las consignaciones</li>
              <li>Planea con anticipación los retiros parciales</li>
              <li>Mantén actualizados tus datos en el fondo de cesantías</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}