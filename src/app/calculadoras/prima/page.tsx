"use client";

import { useState, Suspense } from "react";
import {
  CurrencyDollarIcon,
  CalendarIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import ResultadoCalculo from "../../components/ResultadoCalculo";
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import { calcularPrima } from "../../utils/calculosLaborales";
import BotonVolver from "../../components/BotonVolver";

// Constantes
const SALARIO_MINIMO_2025 = 1423500;
const TOPE_AUXILIO_TRANSPORTE = SALARIO_MINIMO_2025 * 2;

// Registrar el idioma español para el DatePicker
registerLocale("es", es);

interface FormData {
  salarioBase: string;
  otrosIngresos: string;
  auxilioTransporte: boolean;
  fechaInicioPeriodo: Date | null;
  fechaFinPeriodo: Date | null;
}

interface ResultadoPrimaFormateado {
  resultados: Array<{
    concepto: string;
    valor: number;
    descripcion: string;
  }>;
  total: number;
  titulo: string;
  subtitulo: string;
}

function PrimaContent() {
  const [formData, setFormData] = useState<FormData>({
    salarioBase: "",
    otrosIngresos: "",
    auxilioTransporte: true,
    fechaInicioPeriodo: new Date(2025, 0, 1), // 1 de enero 2025
    fechaFinPeriodo: new Date(2025, 5, 30), // 30 de junio 2025
  });

  const [resultado, setResultado] = useState<ResultadoPrimaFormateado | null>(
    null
  );

  const formatNumber = (value: string) => {
    const number = value.replace(/\D/g, "");
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleSalarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\./g, "");
    const salarioNumerico = parseInt(rawValue) || 0;

    setFormData({
      ...formData,
      salarioBase: formatNumber(rawValue),
      // Solo desmarcar automáticamente si supera el tope, pero permitir que se marque manualmente
      auxilioTransporte:
        salarioNumerico <= TOPE_AUXILIO_TRANSPORTE
          ? formData.auxilioTransporte
          : false,
    });
  };

  const handleOtrosIngresosChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const rawValue = e.target.value.replace(/\./g, "");
    setFormData({
      ...formData,
      otrosIngresos: formatNumber(rawValue),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const datos = {
      salarioBase: parseFloat(formData.salarioBase.replace(/\./g, "")),
      otrosIngresos: parseFloat(formData.otrosIngresos.replace(/\./g, "")) || 0,
      auxilioTransporte: formData.auxilioTransporte,
      fechaInicio: formData.fechaInicioPeriodo!,
      fechaFin: formData.fechaFinPeriodo!,
    };

    const resultadoCalculo = calcularPrima(datos);

    const resultadosFormateados = [
      {
        concepto: "Salario Base",
        valor: datos.salarioBase,
        descripcion: "Salario mensual actual",
      },
      {
        concepto: "Otros Ingresos",
        valor: datos.otrosIngresos,
        descripcion: "Comisiones, horas extras y otros pagos variables",
      },
      {
        concepto: "Auxilio de Transporte",
        valor: resultadoCalculo.auxilioTransporte,
        descripcion: "Proporcional al tiempo trabajado",
      },
    ];

    setResultado({
      resultados: resultadosFormateados,
      total: resultadoCalculo.totalPrima,
      titulo: "Prima de Servicios Junio 2025",
      subtitulo: `Período: ${formData.fechaInicioPeriodo?.toLocaleDateString(
        "es-CO"
      )} - ${formData.fechaFinPeriodo?.toLocaleDateString("es-CO")}`,
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <BotonVolver />
        </div>{" "}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Calcula Tu Prima de Junio 2025
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Conoce en{" "}
            <span className="font-semibold text-blue-600">
              menos de 30 segundos
            </span>{" "}
            exactamente cuánto dinero recibirás con nuestra calculadora de prima
            de servicios.
          </p>
          <div className="mt-4 p-4 bg-blue-100 border border-blue-200 rounded-lg inline-block shadow-sm">
            <p className="text-blue-800 font-medium">
              <span className="text-blue-600 font-bold">¡Importante!</span> La
              prima de junio debe pagarse antes del 30 de junio
            </p>
          </div>
          <div className="mt-4 flex justify-center items-center space-x-8 text-sm font-medium">
            <div className="flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                1
              </span>
              <span className="text-gray-900">Ingresa tu salario</span>
            </div>
            <div className="flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                2
              </span>
              <span className="text-gray-900">Verifica el período</span>
            </div>
            <div className="flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                3
              </span>
              <span className="text-gray-900">Obtén tu resultado</span>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <div className="bg-blue-50 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
            <p className="text-blue-800 text-sm">
              <span className="font-bold">Rápido y sencillo:</span> Completa
              solo los campos necesarios y haz clic en &ldquo;Calcular mi
              prima&rdquo; para obtener tu resultado personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {" "}
            {/* Salario Base */}
            <div className="form-group">
              <div className="flex items-center h-8">
                <CurrencyDollarIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Salario Base Mensual <span className="text-red-500">*</span>
                </label>
              </div>
              <p className="text-sm text-gray-600 mb-2 pl-7">
                Ingresa el valor de tu salario mensual actual
              </p>
              <div className="relative rounded-lg">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-900 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="salarioBase"
                  className="block w-full pl-8 pr-12 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm input-currency shadow-sm"
                  placeholder="1.423.500"
                  value={formData.salarioBase}
                  onChange={handleSalarioChange}
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">COP</span>
                </div>
              </div>
              <p className="text-xs text-blue-600 mt-1 pl-7">
                <span className="font-semibold">Recomendación:</span> Para
                salario mínimo, ingresa{" "}
                {formatNumber(SALARIO_MINIMO_2025.toString())}
              </p>
            </div>{" "}
            {/* Otros Ingresos */}
            <div className="form-group">
              <div className="flex items-center h-8">
                <CurrencyDollarIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Otros Ingresos{" "}
                  <span className="text-xs text-gray-500">(opcional)</span>
                </label>
              </div>
              <p className="text-sm text-gray-600 mb-2 pl-7">
                Comisiones, horas extras, bonificaciones habituales
              </p>
              <div className="relative rounded-lg">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-900 sm:text-sm">$</span>
                </div>
                <input
                  type="text"
                  name="otrosIngresos"
                  className="block w-full pl-8 pr-12 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm input-currency shadow-sm"
                  placeholder="0"
                  value={formData.otrosIngresos}
                  onChange={handleOtrosIngresosChange}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">COP</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-1 pl-7">
                Deja en blanco si no recibes ingresos adicionales
              </p>
            </div>{" "}
            {/* Auxilio de Transporte */}
            <div className="form-group lg:col-span-1">
              <div className="flex items-center h-8 mb-2">
                <TruckIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  ¿Recibes Auxilio de Transporte?
                </label>
              </div>
              <div className="flex items-start pl-7">
                <div className="flex h-5 items-center">
                  <input
                    type="checkbox"
                    checked={formData.auxilioTransporte}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        auxilioTransporte: e.target.checked,
                      })
                    }
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
                <div className="ml-3">
                  <span className="text-sm text-gray-700 font-medium">
                    Sí, incluir auxilio de transporte
                  </span>
                  <p className="text-xs text-gray-600 mt-1">
                    Se marca automáticamente si el salario es menor a $
                    {formatNumber(TOPE_AUXILIO_TRANSPORTE.toString())}
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* Período de Cálculo */}
            <div className="form-group lg:col-span-1">
              <div className="flex items-center h-8 mb-2">
                <CalendarIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Período de Cálculo
                </label>
              </div>
              <div className="pl-7">
                <p className="text-xs text-gray-700 mb-2 font-medium ">
                  Selecciona las fechas en las que iniciaste tu periodo de
                  trabajo o deja las que vienen configuradas
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Fecha inicio:</p>
                    <DatePicker
                      selected={formData.fechaInicioPeriodo}
                      onChange={(date) =>
                        setFormData({ ...formData, fechaInicioPeriodo: date })
                      }
                      dateFormat="dd/MM/yyyy"
                      locale="es"
                      className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Fecha fin:</p>
                    <DatePicker
                      selected={formData.fechaFinPeriodo}
                      onChange={(date) =>
                        setFormData({ ...formData, fechaFinPeriodo: date })
                      }
                      dateFormat="dd/MM/yyyy"
                      locale="es"
                      className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-lg cursor-pointer"
            >
              Calcular Prima de Servicios
            </button>
          </div>
        </form>
        {resultado && (
          <div className="mt-8 animate-fade-in">
            <ResultadoCalculo
              resultados={resultado.resultados}
              total={resultado.total}
              titulo={resultado.titulo}
              subtitulo={resultado.subtitulo}
            />
          </div>
        )}
        {/* Texto explicativo sobre la prima */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Qué es la Prima de Servicios?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La prima de servicios es una prestación social que tienen derecho a
            recibir todos los trabajadores en Colombia que estén vinculados
            mediante un contrato laboral. Esta prestación busca reconocer el
            esfuerzo y la dedicación del empleado durante un período de tiempo
            determinado.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Según la legislación laboral colombiana, la prima de servicios
            equivale a 15 días de salario por cada semestre trabajado. Es decir,
            los empleadores deben pagar esta prestación dos veces al año: una en
            el mes de junio y otra en el mes de diciembre. Si el trabajador no
            completa el semestre, tiene derecho a recibir una prima proporcional
            al tiempo laborado.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            ¿Cómo se calcula?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            El cálculo de la prima de servicios se realiza con base en el
            salario devengado por el trabajador, incluyendo el auxilio de
            transporte (si aplica). La fórmula general es la siguiente:
          </p>
          <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg mb-4">
            Prima = (Salario mensual + Auxilio de transporte) × Días trabajados
            ÷ 360
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Es importante tener en cuenta que el auxilio de transporte solo se
            incluye en el cálculo si el salario del trabajador no supera los dos
            salarios mínimos legales vigentes (2 SMMLV).
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            ¿Quiénes tienen derecho a la prima?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Todos los trabajadores vinculados mediante un contrato laboral
            tienen derecho a recibir la prima de servicios, sin importar si
            trabajan a tiempo completo o parcial. Sin embargo, no aplica para
            contratistas independientes o trabajadores que no estén bajo una
            relación laboral formal.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            La prima de servicios es un derecho irrenunciable y su pago oportuno
            es obligatorio para los empleadores. En caso de incumplimiento, el
            empleador puede enfrentar sanciones legales.
          </p>

          {/* Nueva sección de preguntas frecuentes */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Preguntas Frecuentes sobre la Prima 2025
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">
                ¿Cuánto sería la prima de junio de 2025?
              </h3>
              <p className="text-gray-700 mt-2">
                La prima de junio de 2025 corresponde a 15 días de salario por
                el primer semestre del año. Para un trabajador con salario
                mínimo de $1.423.500 que haya laborado todo el semestre, sería
                aproximadamente $711.750 más el proporcional del auxilio de
                transporte.{" "}
                <span className="font-medium text-blue-600">
                  Nuestra calculadora te permite obtener el valor exacto de tu
                  prima en segundos
                </span>{" "}
                - solo ingresa tu salario, beneficios y el periodo trabajado
                para recibir un cálculo personalizado y preciso.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">
                ¿Cómo se calcula la prima 2025?
              </h3>
              <p className="text-gray-700 mt-2">
                Para 2025, la prima se calcula sumando el salario mensual más el
                auxilio de transporte (cuando aplica), multiplicando este
                resultado por los días trabajados durante el semestre, y
                dividiendo entre 360. Si has trabajado todo el semestre (180
                días), corresponde exactamente a medio mes de salario más
                auxilio de transporte.{" "}
                <span className="font-medium text-blue-600">
                  ¡No te compliques con las fórmulas! Nuestra calculadora
                  realiza automáticamente todos estos cálculos
                </span>
                , considerando tus ingresos específicos y el período exacto que
                has trabajado.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">
                ¿Cuándo se paga la prima de 2025?
              </h3>
              <p className="text-gray-700 mt-2">
                Según la legislación colombiana, la prima de servicios se paga
                en dos momentos del año:
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    Primera prima: A más tardar el 30 de junio de 2025,
                    correspondiente al primer semestre (enero a junio).
                  </li>
                  <li>
                    Segunda prima: A más tardar el 20 de diciembre de 2025,
                    correspondiente al segundo semestre (julio a diciembre).
                  </li>
                </ul>
                El empleador debe realizar el pago dentro de estos plazos
                legales para evitar sanciones.{" "}
                <span className="font-medium text-blue-600">
                  Planifica con anticipación utilizando nuestra calculadora
                </span>{" "}
                para conocer el monto exacto que deberías recibir en cada fecha
                de pago.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">
                ¿Cuál es la fórmula para calcular la prima?
              </h3>
              <p className="text-gray-700 mt-2">La fórmula exacta es:</p>
              <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg my-2">
                Prima = (Salario mensual + Auxilio de transporte) × Días
                trabajados ÷ 360
              </p>
              <p className="text-gray-700 mt-2">
                Por ejemplo, para un trabajador con salario de $2.000.000, sin
                derecho a auxilio de transporte, que trabajó 180 días (semestre
                completo):
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg my-2">
                Prima = ($2.000.000) × 180 ÷ 360 = $1.000.000
              </p>
              <p className="text-gray-700 mt-2">
                Para un trabajador con salario mínimo ($1.423.500) más auxilio
                de transporte ($200.000) que trabajó el semestre completo:
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg my-2">
                Prima = ($1.423.500 + $200.000) × 180 ÷ 360 = $811.750
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-medium text-blue-600">
                  ¿Por qué complicarse con cálculos manuales?
                </span>{" "}
                Nuestra calculadora aplica automáticamente esta fórmula y
                considera todos los detalles específicos de tu situación laboral
                para darte un resultado preciso al instante.
              </p>
            </div>
          </div>

          {/* Banner para destacar la calculadora */}
          <div className="mt-8 bg-blue-100 p-6 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-6">
                <h3 className="text-lg font-bold text-blue-800">
                  Calcula tu prima de servicios 2025 ahora mismo
                </h3>
                <p className="text-blue-700 mt-2">
                  Nuestra calculadora es gratuita, precisa y fácil de usar.
                  Obtén el valor exacto de tu prima en segundos.
                </p>
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center"
              >
                Usar la calculadora
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PrimaPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <PrimaContent />
    </Suspense>
  );
}
