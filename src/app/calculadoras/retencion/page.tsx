"use client";

import { useState, Suspense } from "react";
import {
  CurrencyDollarIcon,
  UserIcon,
  HomeIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import ResultadoCalculo from "../../components/ResultadoCalculo";
import {
  calcularRetencionFuente,
  UVT_2025,
} from "../../utils/calculosLaborales";
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import BotonVolver from "../../components/BotonVolver";

// Registrar el idioma español para el DatePicker
registerLocale("es", es);

interface ResultadoRetencion {
  resultados: Array<{
    concepto: string;
    valor: number;
    descripcion?: string;
  }>;
  total: number;
  titulo: string;
  subtitulo: string;
}

interface FormData {
  salarioBase: string;
  bonificaciones: string;
  comisiones: string;
  auxilioTransporte: boolean;
  fondoVoluntarioPensiones: string;
  afc: string;
  dependientes: boolean;
  interesesVivienda: string;
  medicinaPrepagada: string;
  fechaCalculo: Date | null;
}

function RetencionContent() {
  const [formData, setFormData] = useState<FormData>({
    salarioBase: "",
    bonificaciones: "",
    comisiones: "",
    auxilioTransporte: true,
    fondoVoluntarioPensiones: "",
    afc: "",
    dependientes: false,
    interesesVivienda: "",
    medicinaPrepagada: "",
    fechaCalculo: null,
  });
  const [resultado, setResultado] = useState<ResultadoRetencion | null>(null);

  const formatNumber = (value: string) => {
    const number = value.replace(/\D/g, "");
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleMoneyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const rawValue = value.replace(/\./g, "");
    setFormData({
      ...formData,
      [name]: formatNumber(rawValue),
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const datos = {
      salarioBase: parseFloat(formData.salarioBase.replace(/\./g, "")),
      bonificaciones:
        parseFloat(formData.bonificaciones.replace(/\./g, "")) || 0,
      comisiones: parseFloat(formData.comisiones.replace(/\./g, "")) || 0,
      auxilioTransporte: formData.auxilioTransporte,
      fondoVoluntarioPensiones:
        parseFloat(formData.fondoVoluntarioPensiones.replace(/\./g, "")) || 0,
      afc: parseFloat(formData.afc.replace(/\./g, "")) || 0,
      dependientes: formData.dependientes,
      interesesVivienda:
        parseFloat(formData.interesesVivienda.replace(/\./g, "")) || 0,
      medicinaPrepagada:
        parseFloat(formData.medicinaPrepagada.replace(/\./g, "")) || 0,
    };

    const resultadoCalculo = calcularRetencionFuente(datos);

    const resultadosFormateados = [
      {
        concepto: "Ingresos Totales",
        valor: datos.salarioBase + datos.bonificaciones + datos.comisiones,
        descripcion: "Suma de salario, bonificaciones y comisiones",
      },
      ...resultadoCalculo.detalleDeducciones.map((d) => ({
        concepto: d.concepto,
        valor: -d.valor,
        descripcion:
          d.concepto === "Deducción por Dependientes"
            ? "10% del ingreso total"
            : d.concepto === "Medicina Prepagada"
            ? "Máximo 16 UVT mensuales"
            : "",
      })),
      {
        concepto: "Renta Exenta",
        valor: -resultadoCalculo.rentaExenta,
        descripcion: "25% del ingreso menos deducciones (máximo 240 UVT)",
      },
      {
        concepto: "Base Gravable",
        valor: resultadoCalculo.baseGravable,
        descripcion: "Base para calcular la retención",
      },
    ];

    setResultado({
      resultados: resultadosFormateados,
      total: -resultadoCalculo.totalRetencion,
      titulo: "Resumen de Retención en la Fuente",
      subtitulo: `Valor UVT ${new Intl.NumberFormat("es-CO").format(UVT_2025)}`,
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
            Calculadora de Retención en la Fuente
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Calcula tu retención en la fuente mensual según la normativa DIAN
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <div className="grid grid-cols-1 gap-6">
            {/* Ingresos */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">
                Ingresos Mensuales
              </h3>

              {/* Salario Base */}
              <div className="form-group">
                <div className="flex items-center mb-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    Salario Base Mensual
                  </label>
                </div>
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
                    onChange={handleMoneyInputChange}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">COP</span>
                  </div>
                </div>
              </div>

              {/* Bonificaciones */}
              <div className="form-group">
                <div className="flex items-center mb-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    Bonificaciones
                  </label>
                </div>
                <div className="relative rounded-lg">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-900 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="bonificaciones"
                    className="block w-full pl-8 pr-12 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm input-currency shadow-sm"
                    placeholder="0"
                    value={formData.bonificaciones}
                    onChange={handleMoneyInputChange}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">COP</span>
                  </div>
                </div>
              </div>

              {/* Comisiones */}
              <div className="form-group">
                <div className="flex items-center mb-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    Comisiones
                  </label>
                </div>
                <div className="relative rounded-lg">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-900 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="comisiones"
                    className="block w-full pl-8 pr-12 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm input-currency shadow-sm"
                    placeholder="0"
                    value={formData.comisiones}
                    onChange={handleMoneyInputChange}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">COP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Deducciones y Beneficios */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">
                Deducciones y Beneficios
              </h3>

              {/* Auxilio de Transporte */}
              <div className="form-group">
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="auxilioTransporte"
                    checked={formData.auxilioTransporte}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    Recibe Auxilio de Transporte
                  </label>
                </div>
              </div>

              {/* Fondo Voluntario de Pensiones */}
              <div className="form-group">
                <div className="flex items-center mb-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    Aportes a Fondo Voluntario de Pensiones
                  </label>
                </div>
                <div className="relative rounded-lg">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-900 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="fondoVoluntarioPensiones"
                    className="block w-full pl-8 pr-12 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm input-currency shadow-sm"
                    placeholder="0"
                    value={formData.fondoVoluntarioPensiones}
                    onChange={handleMoneyInputChange}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">COP</span>
                  </div>
                </div>
              </div>

              {/* AFC */}
              <div className="form-group">
                <div className="flex items-center mb-2">
                  <HomeIcon className="h-5 w-5 text-blue-500" />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    Aportes a Cuenta AFC
                  </label>
                </div>
                <div className="relative rounded-lg">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-900 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="afc"
                    className="block w-full pl-8 pr-12 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm input-currency shadow-sm"
                    placeholder="0"
                    value={formData.afc}
                    onChange={handleMoneyInputChange}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">COP</span>
                  </div>
                </div>
              </div>

              {/* Dependientes */}
              <div className="form-group">
                <div className="flex items-center mb-2">
                  <UserIcon className="h-5 w-5 text-blue-500" />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    Dependientes
                  </label>
                </div>
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      type="checkbox"
                      name="dependientes"
                      checked={formData.dependientes}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                  </div>
                  <span className="ml-3 text-sm text-gray-600">
                    Tiene personas a cargo (hijos, cónyuge, padres)
                  </span>
                </div>
              </div>

              {/* Intereses de Vivienda */}
              <div className="form-group">
                <div className="flex items-center mb-2">
                  <HomeIcon className="h-5 w-5 text-blue-500" />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    Intereses de Vivienda
                  </label>
                </div>
                <div className="relative rounded-lg">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-900 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="interesesVivienda"
                    className="block w-full pl-8 pr-12 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm input-currency shadow-sm"
                    placeholder="0"
                    value={formData.interesesVivienda}
                    onChange={handleMoneyInputChange}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">COP</span>
                  </div>
                </div>
              </div>

              {/* Medicina Prepagada */}
              <div className="form-group">
                <div className="flex items-center mb-2">
                  <HeartIcon className="h-5 w-5 text-blue-500" />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    Medicina Prepagada
                  </label>
                </div>
                <div className="relative rounded-lg">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-900 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="medicinaPrepagada"
                    className="block w-full pl-8 pr-12 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm input-currency shadow-sm"
                    placeholder="0"
                    value={formData.medicinaPrepagada}
                    onChange={handleMoneyInputChange}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">COP</span>
                  </div>
                </div>
              </div>

              {/* Fecha de Cálculo */}
              <div className="form-group">
                <div className="flex items-center mb-2">
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    Fecha de Cálculo
                  </label>
                </div>
                <div className="relative rounded-lg">
                  <DatePicker
                    selected={formData.fechaCalculo}
                    onChange={(date) =>
                      setFormData({ ...formData, fechaCalculo: date })
                    }
                    dateFormat="dd/MM/yyyy"
                    locale="es"
                    placeholderText="Seleccionar fecha"
                    className="block w-full py-2.5 pl-3 pr-10 text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 ease-in-out sm:text-sm cursor-pointer bg-white shadow-sm"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-lg cursor-pointer"
            >
              Calcular Retención
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

        {/* Texto explicativo sobre la retención en la fuente */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Qué es la Retención en la Fuente en Colombia?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La retención en la fuente es un mecanismo de recaudo anticipado del
            impuesto sobre la renta en Colombia. Consiste en que el empleador o
            pagador descuenta un porcentaje del salario o pago mensual del
            trabajador y lo entrega directamente a la DIAN. Así, el trabajador
            va abonando parte de su impuesto de renta a lo largo del año.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            ¿Cómo se calcula la retención en la fuente?
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            El cálculo depende de los ingresos, deducciones y beneficios
            permitidos por la ley. Se consideran factores como salario,
            bonificaciones, comisiones, aportes voluntarios, dependientes,
            intereses de vivienda y medicina prepagada. La base gravable se
            determina restando las deducciones y rentas exentas a los ingresos,
            y sobre esa base se aplica la tabla de retención vigente para 2025.
          </p>

          <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg mb-4">
            Base gravable = Ingresos - Deducciones - Renta exenta
            <br />
            Retención = Según tabla DIAN (progresiva por rangos en UVT)
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Preguntas frecuentes sobre retención en la fuente
          </h3>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">
                ¿Quiénes están sujetos a retención en la fuente?
              </h4>
              <p className="text-gray-700 mt-2">
                Todos los empleados y personas naturales que reciban pagos
                laborales superiores a ciertos límites establecidos por la DIAN
                pueden estar sujetos a retención en la fuente, dependiendo de su
                nivel de ingresos y deducciones.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">
                ¿Qué deducciones y beneficios puedo aplicar?
              </h4>
              <p className="text-gray-700 mt-2">
                Puedes deducir aportes voluntarios a pensiones, cuentas AFC,
                intereses de vivienda, medicina prepagada (hasta{" "}
                <strong>16 UVT = $752.960</strong>), y deducción por
                dependientes (hasta el 10% del ingreso). Además, la renta exenta
                del 25% aplica sobre la base menos deducciones, hasta{" "}
                <strong>240 UVT = $11.295.600</strong>.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">
                ¿Cómo saber si me están reteniendo correctamente?
              </h4>
              <p className="text-gray-700 mt-2">
                Puedes usar nuestra calculadora para simular tu retención
                mensual y comparar con el descuento que ves en tu nómina. Si hay
                diferencias, consulta con tu área de nómina o un contador.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">
                Ejemplo práctico de cálculo
              </h4>
              <p className="text-gray-700 mt-2">
                Si tu ingreso mensual es de $5.000.000, tienes $500.000 en
                deducciones y $1.000.000 de renta exenta, la base gravable sería
                $3.500.000. Sobre esa base, se consulta la tabla DIAN de 2025
                para determinar el porcentaje de retención aplicable según los
                rangos de UVT.
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg my-2">
                Ingreso: $5.000.000
                <br />
                Deducciones: $500.000
                <br />
                Renta exenta: $1.000.000
                <br />
                Base gravable: $3.500.000
                <br />
                Retención: Según tabla DIAN 2025
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-medium text-blue-600">
                  ¡Utiliza nuestra calculadora para obtener el valor exacto de
                  tu retención en la fuente según tu salario y beneficios!
                </span>
              </p>
            </div>
          </div>

          {/* Banner para destacar la calculadora */}
          <div className="mt-8 bg-blue-100 p-6 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-6">
                <h3 className="text-lg font-bold text-blue-800">
                  Calcula tu retención en la fuente fácilmente
                </h3>
                <p className="text-blue-700 mt-2">
                  Nuestra calculadora es gratuita, precisa y fácil de usar.
                  Obtén el valor exacto de tu retención en segundos.
                </p>
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-6 py-3 cursor-pointer bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md flex items-center"
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
            <p className="text-sm text-blue-700 mt-4">
              *Información basada en el valor de la UVT para 2025 según
              resolución DIAN 000101 del 13 de diciembre de 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RetencionPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <RetencionContent />
    </Suspense>
  );
}
