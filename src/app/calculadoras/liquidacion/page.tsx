"use client";

import { useState, Suspense } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import ResultadoCalculo from "../../components/ResultadoCalculo";
import { calcularLiquidacionTotal } from "../../utils/calculosLaborales";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import BotonVolver from "../../components/BotonVolver";

// Constantes
const SALARIO_MINIMO_2025 = 1423500;
const TOPE_AUXILIO_TRANSPORTE = SALARIO_MINIMO_2025 * 2;

// Registrar el idioma español para el DatePicker
registerLocale("es", es);

interface ResultadoLiquidacion {
  resultados: Array<{
    concepto: string;
    valor: number;
    descripcion?: string;
  }>;
  total: number;
  diasLaborados: number;
}

function LiquidacionContent() {
  const [formData, setFormData] = useState({
    salarioBase: "",
    auxilioTransporte: true,
    fechaInicio: null as Date | null,
    fechaFin: null as Date | null,
  });
  const [resultado, setResultado] = useState<ResultadoLiquidacion | null>(null);

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
        salarioNumerico <= TOPE_AUXILIO_TRANSPORTE ? true : false,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fechaInicio || !formData.fechaFin) return;

    const salarioNumerico = parseFloat(formData.salarioBase.replace(/\./g, ""));
    const datos = {
      salarioBase: salarioNumerico,
      auxilioTransporte: formData.auxilioTransporte,
      fechaInicio: formData.fechaInicio,
      fechaFin: formData.fechaFin,
    };

    const resultados = calcularLiquidacionTotal(datos);

    const resultadosFormateados = [
      {
        concepto: "Cesantías",
        valor: resultados.cesantias,
        descripcion:
          "Calculado sobre salario total incluyendo auxilio de transporte",
      },
      {
        concepto: "Intereses sobre Cesantías",
        valor: resultados.interesesCesantias,
        descripcion: "12% anual sobre las cesantías",
      },
      {
        concepto: "Prima de Servicios (Primer Semestre)",
        valor: resultados.primaPrimerSemestre,
        descripcion: "Equivalente a medio salario por semestre trabajado",
      },
      {
        concepto: "Prima de Servicios (Segundo Semestre)",
        valor: resultados.primaSegundoSemestre,
        descripcion: "Equivalente a medio salario por semestre trabajado",
      },
      {
        concepto: "Vacaciones",
        valor: resultados.vacaciones,
        descripcion: "15 días de salario por año trabajado",
      },
    ];

    // Agregamos los aportes como información adicional
    const informacionAportes = [
      {
        concepto: "Aporte mensual a Salud",
        valor: -resultados.aportesSalud,
        descripcion: "4% del salario base - aporte mensual del empleado",
      },
      {
        concepto: "Aporte mensual a Pensión",
        valor: -resultados.aportesPension,
        descripcion: "4% del salario base - aporte mensual del empleado",
      },
    ];

    setResultado({
      resultados: [...resultadosFormateados, ...informacionAportes],
      total: resultados.total,
      diasLaborados: resultados.diasLaborados,
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <BotonVolver />
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Calculadora de Liquidación Laboral
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Calcula el valor de tu liquidación laboral incluyendo todas tus
            prestaciones sociales
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          {/* Formulario reestructurado en un solo div contenedor principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bloque de Salario Base */}
            <div className="form-group">
              <div className="flex items-center h-8">
                <CurrencyDollarIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Salario Base Mensual
                </label>
              </div>
              <p className="text-sm text-gray-600 mb-2 pl-7">
                Ingrese su salario mensual actual
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
            </div>

            {/* Bloque de Período Laboral */}
            <div className="form-group">
              <div className="flex items-center h-8 mb-2">
                <CalendarIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Período Laboral
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-7">
                <div>
                  <label
                    htmlFor="fechaInicio"
                    className="block text-sm text-gray-600 mb-1.5"
                  >
                    Fecha de Inicio
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={formData.fechaInicio}
                      onChange={(date) =>
                        setFormData({ ...formData, fechaInicio: date })
                      }
                      selectsStart
                      startDate={formData.fechaInicio}
                      endDate={formData.fechaFin}
                      dateFormat="dd/MM/yyyy"
                      locale="es"
                      placeholderText="Seleccionar fecha"
                      className="block w-full py-2.5 pl-3 pr-10 text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 ease-in-out sm:text-sm cursor-pointer bg-white shadow-sm"
                      required
                    />
                    <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="fechaFin"
                    className="block text-sm text-gray-600 mb-1.5"
                  >
                    Fecha de Terminación
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={formData.fechaFin}
                      onChange={(date) =>
                        setFormData({ ...formData, fechaFin: date })
                      }
                      selectsEnd
                      startDate={formData.fechaInicio ?? undefined}
                      endDate={formData.fechaFin ?? undefined}
                      minDate={formData.fechaInicio ?? undefined}
                      dateFormat="dd/MM/yyyy"
                      locale="es"
                      placeholderText="Seleccionar fecha"
                      className="block w-full py-2.5 pl-3 pr-10 text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 ease-in-out sm:text-sm cursor-pointer bg-white shadow-sm"
                      required
                    />
                    <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Auxilio de Transporte (ocupando toda una línea en móvil, y sólo 1 columna en desktop) */}
            <div className="form-group lg:col-span-1">
              <div className="flex items-center h-8 mb-2">
                <TruckIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Auxilio de Transporte
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
                <span className="ml-3 text-sm text-gray-600">
                  Se marca automáticamente si el salario es menor o igual a 2
                  SMMLV (${formatNumber(TOPE_AUXILIO_TRANSPORTE.toString())})
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-lg cursor-pointer"
            >
              Calcular Liquidación
            </button>
          </div>
        </form>

        {resultado && (
          <div className="mt-8 animate-fade-in">
            <ResultadoCalculo
              resultados={resultado.resultados}
              total={resultado.total}
              titulo="Resumen de Liquidación"
              subtitulo={`Período laboral: ${resultado.diasLaborados} días`}
            />
          </div>
        )}

        {/* Texto explicativo sobre la liquidación laboral */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Qué es la Liquidación Laboral?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La liquidación laboral es el conjunto de prestaciones sociales y
            derechos económicos que el empleador debe pagar al trabajador al
            finalizar el contrato laboral. Esta liquidación representa el cierre
            formal de la relación laboral y busca garantizar que el trabajador
            reciba todos los beneficios a los que tiene derecho según la
            legislación colombiana.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            La liquidación incluye conceptos como cesantías, intereses sobre
            cesantías, prima de servicios proporcional, vacaciones pendientes y,
            en casos de despido sin justa causa, la correspondiente
            indemnización. Cada uno de estos conceptos se calcula de manera
            diferente y depende de factores como el salario, el tiempo laborado
            y la causa de terminación del contrato.
          </p>

          {/* Nueva sección de preguntas frecuentes */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Preguntas Frecuentes sobre Liquidaciones Laborales 2025
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">
                ¿Cómo se calcula la liquidación de un trabajador?
              </h3>
              <p className="text-gray-700 mt-2">
                La liquidación laboral es la suma de varios conceptos a los que
                el trabajador tiene derecho al finalizar su contrato:
                <ul className="list-disc pl-5 mt-2 space-y-1.5">
                  <li>
                    <span className="font-medium">Cesantías:</span> Equivalen a
                    un mes de salario por cada año trabajado o proporcional por
                    fracción. Fórmula: (Salario mensual × Días trabajados) ÷
                    360.
                  </li>
                  <li>
                    <span className="font-medium">
                      Intereses sobre cesantías:
                    </span>{" "}
                    12% anual sobre el valor de las cesantías. Fórmula:
                    (Cesantías × 0.12 × Días trabajados) ÷ 360.
                  </li>
                  <li>
                    <span className="font-medium">
                      Prima de servicios proporcional:
                    </span>{" "}
                    Parte proporcional de la prima según los días trabajados en
                    el semestre. Fórmula: (Salario mensual × Días trabajados en
                    el semestre) ÷ 360.
                  </li>
                  <li>
                    <span className="font-medium">Vacaciones compensadas:</span>{" "}
                    15 días de salario por año trabajado o proporcional.
                    Fórmula: (Salario mensual × Días trabajados) ÷ (360 × 15 ÷
                    30).
                  </li>
                  <li>
                    <span className="font-medium">
                      Indemnización por despido sin justa causa (si aplica):
                    </span>{" "}
                    Varía según el tipo de contrato y la antigüedad del
                    trabajador.
                  </li>
                </ul>
              </p>
              <p className="text-gray-700 mt-3">
                <span className="font-medium text-blue-600">
                  Nuestra calculadora automatiza estos cálculos complejos
                </span>{" "}
                y te muestra el resultado detallado de cada concepto según tu
                situación específica.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">
                ¿Cómo sacar el cálculo de una liquidación?
              </h3>
              <p className="text-gray-700 mt-2">
                Para calcular una liquidación laboral correctamente, necesitas
                recopilar la siguiente información:
                <ul className="list-disc pl-5 mt-2 space-y-1.5">
                  <li>
                    Salario base mensual actual (incluyendo comisiones y pagos
                    variables recurrentes)
                  </li>
                  <li>
                    Si tienes derecho a auxilio de transporte (generalmente si
                    el salario es menor a 2 SMMLV)
                  </li>
                  <li>Fecha exacta de inicio del contrato</li>
                  <li>Fecha de terminación del contrato</li>
                  <li>Días pendientes de vacaciones</li>
                  <li>
                    Motivo de la terminación del contrato (para determinar si
                    aplica indemnización)
                  </li>
                </ul>
              </p>
              <p className="text-gray-700 mt-3">
                Con estos datos, aplica las fórmulas correspondientes para cada
                concepto y suma los resultados.{" "}
                <span className="font-medium text-blue-600">
                  Simplifica este proceso usando nuestra calculadora
                </span>
                , que realiza todos los cálculos automáticamente según la
                legislación laboral colombiana vigente para 2025.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">
                ¿Cómo es el pago de una liquidación laboral?
              </h3>
              <p className="text-gray-700 mt-2">
                El pago de la liquidación laboral debe realizarse al momento de
                la terminación del contrato. Por ley, el empleador está obligado
                a poner a disposición del trabajador el valor total de la
                liquidación el último día de trabajo. No existe un "plazo
                adicional" legalmente establecido para este pago.
              </p>
              <p className="text-gray-700 mt-2">
                El pago generalmente se realiza mediante:
                <ul className="list-disc pl-5 mt-1.5 space-y-1">
                  <li>Transferencia bancaria a la cuenta del empleado</li>
                  <li>Cheque</li>
                  <li>En algunos casos, efectivo</li>
                </ul>
              </p>
              <p className="text-gray-700 mt-2">
                Es fundamental que el trabajador reciba un{" "}
                <span className="font-medium">documento detallado</span> de
                liquidación donde se especifique cada concepto pagado. Si el
                empleador no realiza el pago oportuno, puede enfrentar sanciones
                legales incluyendo el pago de un día de salario por cada día de
                retraso (indemnización moratoria).
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">
                ¿Cuántos días tienen para pagarme la liquidación?
              </h3>
              <p className="text-gray-700 mt-2">
                En Colombia, cuando finaliza un contrato laboral, el empleador debe pagar la liquidación al trabajador de forma inmediata. Esto significa que lo ideal es que el pago se realice el mismo día de la terminación del contrato o, como máximo, al día hábil siguiente.
              </p>
              <p className="text-gray-700 mt-2">
                A pesar de esto, se entiende que algunas empresas necesitan un tiempo prudente para realizar los trámites administrativos correspondientes. En la práctica, suele aceptarse un plazo de hasta <span className="font-medium">15 días hábiles</span> para efectuar el pago, siempre que no exista mala fe ni intención de dilatar injustificadamente la obligación.
              </p>
              <p className="text-gray-700 mt-2">
                Además, de acuerdo con el <span className="font-medium">artículo 65 del Código Sustantivo del Trabajo</span>, si la empresa no cumple con este pago en el tiempo adecuado sin una causa justificada, deberá pagar al trabajador una indemnización equivalente a un día de salario por cada día de retraso.
              </p>
              <p className="text-gray-700 mt-2">
                En resumen, aunque no hay un plazo fijo establecido por ley, se espera que la liquidación se entregue de inmediato y cualquier demora injustificada puede acarrear sanciones para el empleador.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700">
                ¿Cómo calculo mi liquidación?
              </h3>
              <p className="text-gray-700 mt-2">
                Para calcular tu propia liquidación, necesitas:
              </p>
              <div className="mt-3  bg-gray-50 p-4 rounded-md">
                <ol className="list-decimal pl-5 space-y-2 text-gray-700 ">
                  <li>
                    Ingresa tu salario mensual actual en nuestra calculadora
                    (incluye el promedio de comisiones si las recibes
                    regularmente).
                  </li>
                  <li>
                    Marca si recibes auxilio de transporte (automático si tu
                    salario es menor o igual a 2 SMMLV).
                  </li>
                  <li>
                    Ingresa la fecha exacta de inicio de tu contrato laboral.
                  </li>
                  <li>
                    Ingresa la fecha de terminación (puedes usar la fecha actual
                    si quieres proyectar tu liquidación).
                  </li>
                  <li>Haz clic en "Calcular Liquidación".</li>
                </ol>
              </div>
              <p className="text-gray-700 mt-3">
                <span className="font-medium text-blue-600">
                  Nuestra calculadora aplicará automáticamente todas las
                  fórmulas
                </span>{" "}
                requeridas según la legislación laboral colombiana de 2025,
                mostrándote el valor exacto de cada concepto de tu liquidación y
                el total a recibir. Esto te permitirá verificar que tu empleador
                realice el cálculo correcto.
              </p>
            </div>

          </div>

          {/* Banner para destacar la calculadora */}
          <div className="mt-8 bg-blue-100 p-6 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-6">
                <h3 className="text-lg font-bold text-blue-800">
                  Calcula tu liquidación laboral 2025 ahora mismo
                </h3>
                <p className="text-blue-700 mt-2">
                  Nuestra calculadora es gratuita, precisa y fácil de usar.
                  Obtén el valor exacto de tu liquidación en segundos.
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
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a 1 1 0 010 1.414z"
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

export default function LiquidacionPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <LiquidacionContent />
    </Suspense>
  );
}
