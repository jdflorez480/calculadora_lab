export default function SalarioMinimo2025() {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            Actualidad Laboral
          </span>
          <time className="text-sm text-gray-700">
            22 de abril de 2025
          </time>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Cambios en el Salario Mínimo y Subsidio de Transporte 2025
        </h1>

        <div className="prose prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800">
          <h2>Resumen de los Cambios</h2>
          <p>
            Para el año 2025, el salario mínimo mensual legal vigente (SMMLV) en Colombia se ha establecido en $1.423.500, 
            representando un incremento significativo respecto al año anterior. El auxilio de transporte se fijó en $200.000 
            para trabajadores que devenguen hasta dos salarios mínimos.
          </p>

          <h2>Impacto en las Prestaciones Sociales</h2>
          <p>
            Este incremento tiene un efecto directo en el cálculo de diversas prestaciones sociales y beneficios laborales:
          </p>
          <ul>
            <li>Prima de servicios: Aumenta proporcionalmente al nuevo salario mínimo</li>
            <li>Cesantías: Se calculan sobre el nuevo valor base</li>
            <li>Vacaciones: El pago se ajusta al nuevo salario mínimo</li>
            <li>Cotizaciones a seguridad social: Se modifican las bases de cotización</li>
          </ul>

          <h2>Recomendaciones para Empleadores</h2>
          <p>
            Los empleadores deben tener en cuenta varios aspectos importantes:
          </p>
          <ul>
            <li>Actualizar los sistemas de nómina con los nuevos valores</li>
            <li>Revisar y ajustar los contratos laborales que estén referenciados al SMMLV</li>
            <li>Verificar las bases de cotización para seguridad social</li>
            <li>Actualizar el cálculo de prestaciones sociales</li>
          </ul>

          <h2>Implicaciones para los Trabajadores</h2>
          <p>
            Los trabajadores deben estar atentos a los siguientes aspectos:
          </p>
          <ul>
            <li>Verificar que su salario se haya actualizado correctamente</li>
            <li>Revisar los descuentos de nómina y aportes a seguridad social</li>
            <li>Confirmar el pago correcto del auxilio de transporte si aplica</li>
            <li>Entender cómo afecta el nuevo SMMLV a sus prestaciones sociales</li>
          </ul>

          <h2>Bases de Cotización para 2025</h2>
          <p>
            Las bases de cotización para la seguridad social se ajustan de la siguiente manera:
          </p>
          <ul>
            <li>Salud: 4% del salario a cargo del trabajador</li>
            <li>Pensión: 4% del salario a cargo del trabajador</li>
            <li>Base mínima de cotización: 1 SMMLV ($1.423.500)</li>
            <li>Tope máximo de cotización: 25 SMMLV ($35.587.500)</li>
          </ul>

          <h2>Consideraciones Adicionales</h2>
          <p>
            Es importante tener en cuenta que:
          </p>
          <ul>
            <li>El auxilio de transporte es obligatorio para quienes ganan hasta 2 SMMLV ($2.847.000)</li>
            <li>Las horas extras se calculan con base en el nuevo valor del salario mínimo</li>
            <li>Los contratos de aprendizaje también se ven afectados por el incremento</li>
            <li>Las multas y sanciones laborales indexadas al SMMLV se actualizan automáticamente</li>
          </ul>
        </div>
      </div>
    </article>
  );
}