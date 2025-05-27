"use client";

import { useState, Suspense } from "react";
import {
  CurrencyDollarIcon,
  UserIcon,
  HomeIcon,
  HeartIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import ResultadoCalculo from "../../components/ResultadoCalculo";
import {
  calcularRetencionFuente,
  UVT_2025,
} from "../../utils/calculosLaborales";
import BotonVolver from "../../components/BotonVolver";

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
  tipoPersona: 'empleado' | 'independiente';
  salarioBase: string;
  bonificaciones: string;
  comisiones: string;
  auxilioTransporte: boolean;
  fondoVoluntarioPensiones: string;
  afc: string;
  dependientes: boolean;
  interesesVivienda: string;
  medicinaPrepagada: string;
  // Campos específicos para independientes
  contrataEmpleados: boolean;
  aplicaPresuncionCostos: boolean;
  gastosReales: string;
}

function RetencionContent() {  const [formData, setFormData] = useState<FormData>({
    tipoPersona: 'empleado',
    salarioBase: "",
    bonificaciones: "",
    comisiones: "",
    auxilioTransporte: true,
    fondoVoluntarioPensiones: "",
    afc: "",
    dependientes: false,
    interesesVivienda: "",
    medicinaPrepagada: "",
    contrataEmpleados: false,
    aplicaPresuncionCostos: true,
    gastosReales: "",
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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const datos = {
      tipoPersona: formData.tipoPersona,
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
      // Campos específicos para independientes
      contrataEmpleados: formData.contrataEmpleados,
      aplicaPresuncionCostos: formData.aplicaPresuncionCostos,
      gastosReales: parseFloat(formData.gastosReales.replace(/\./g, "")) || 0,
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
        </div>        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <div className="grid grid-cols-1 gap-6">
            {/* Tipo de Persona */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">
                Tipo de Contribuyente
              </h3>

              <div className="form-group">
                <div className="flex items-center mb-2">
                  <BriefcaseIcon className="h-5 w-5 text-blue-500" />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    ¿Eres empleado o trabajas de forma independiente?
                  </label>
                </div>
                <select
                  name="tipoPersona"
                  value={formData.tipoPersona}
                  onChange={handleSelectChange}
                  className="block w-full py-2.5 pl-3 pr-10 text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 ease-in-out sm:text-sm cursor-pointer bg-white shadow-sm"
                  required
                >
                  <option value="empleado">Empleado (Trabajo en relación de dependencia)</option>
                  <option value="independiente">Independiente (Prestación de servicios / Honorarios)</option>
                </select>
              </div>

              {/* Campos específicos para independientes */}
              {formData.tipoPersona === 'independiente' && (
                <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-md font-medium text-blue-900">
                    Configuración para Independientes
                  </h4>
                  
                  {/* ¿Contrata empleados? */}
                  <div className="form-group">
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        name="contrataEmpleados"
                        checked={formData.contrataEmpleados}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <label className="ml-2 block text-sm font-medium text-gray-900">
                        ¿Contratas empleados?
                      </label>
                    </div>
                  </div>

                  {/* Tipo de costos */}
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      ¿Cómo deseas calcular los costos y gastos?
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="aplicaPresuncionCostos"
                          value="true"
                          checked={formData.aplicaPresuncionCostos}
                          onChange={(e) => setFormData({...formData, aplicaPresuncionCostos: e.target.value === 'true'})}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                        />
                        <label className="ml-2 text-sm text-gray-700">
                          Presunción de costos ({formData.contrataEmpleados ? '50%' : '75%'} de los ingresos)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="aplicaPresuncionCostos"
                          value="false"
                          checked={!formData.aplicaPresuncionCostos}
                          onChange={(e) => setFormData({...formData, aplicaPresuncionCostos: e.target.value === 'true'})}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                        />
                        <label className="ml-2 text-sm text-gray-700">
                          Costos y gastos reales (según facturas)
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Campo para gastos reales */}
                  {!formData.aplicaPresuncionCostos && (
                    <div className="form-group">
                      <div className="flex items-center mb-2">
                        <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />
                        <label className="ml-2 block text-sm font-medium text-gray-900">
                          Costos y Gastos Reales
                        </label>
                      </div>
                      <div className="relative rounded-lg">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-900 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="gastosReales"
                          className="block w-full pl-8 pr-12 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm input-currency shadow-sm"
                          placeholder="0"
                          value={formData.gastosReales}
                          onChange={handleMoneyInputChange}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">COP</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Incluye todos los costos y gastos necesarios para generar tus ingresos
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Ingresos */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">
                Ingresos Mensuales
              </h3>

              {/* Salario Base / Ingresos */}
              <div className="form-group">
                <div className="flex items-center mb-2">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />
                  <label className="ml-2 block text-sm font-medium text-gray-900">
                    {formData.tipoPersona === 'empleado' ? 'Salario Base Mensual' : 'Ingresos Mensuales por Servicios'}
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

              {/* Auxilio de Transporte - Solo para empleados */}
              {formData.tipoPersona === 'empleado' && (
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
              )}

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
                <p className="text-xs text-gray-500 mt-1">
                  Máximo deducible: 16 UVT mensuales (${new Intl.NumberFormat("es-CO").format(16 * 49799)})
                </p>
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
        )}        {/* Texto explicativo sobre la retención en la fuente */}
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
            ¿Cómo funciona para empleados vs independientes?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">
                Para Empleados
              </h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Se calculan aportes obligatorios (salud, pensión, FSP)</li>
                <li>• Se considera auxilio de transporte si aplica</li>
                <li>• Deducciones por dependientes, AFC, vivienda</li>
                <li>• Renta exenta del 25% (máx. 240 UVT)</li>
                <li>• Aplica tabla de retención según base gravable</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700 mb-2">
                Para Independientes
              </h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Sin aportes obligatorios automáticos</li>
                <li>• Presunción de costos: 75% (sin empleados) o 50% (con empleados)</li>
                <li>• O costos reales según facturas</li>
                <li>• Mismas deducciones adicionales que empleados</li>
                <li>• Aplica la misma tabla 383 de retención</li>
              </ul>
            </div>
          </div>

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

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg">
              <strong>Empleados:</strong>
              <br />
              Base = Ingresos - Aportes - Deducciones - Renta exenta - Aux. transporte
              <br />
              Retención = Según tabla DIAN
            </div>
            <div className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg">
              <strong>Independientes:</strong>
              <br />
              Base = Ingresos - Costos - Deducciones - Renta exenta
              <br />
              Retención = Según tabla DIAN
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Preguntas frecuentes sobre retención en la fuente
          </h3>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">
                ¿Quiénes están sujetos a retención en la fuente?
              </h4>
              <p className="text-gray-700 mt-2">
                <strong>Empleados:</strong> Todos los empleados que reciban pagos
                laborales superiores a ciertos límites establecidos por la DIAN.
                <br />
                <strong>Independientes:</strong> Profesionales y prestadores de servicios
                que facturen a empresas, dependiendo de su nivel de ingresos.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">
                ¿Qué es la presunción de costos para independientes?
              </h4>
              <p className="text-gray-700 mt-2">
                Es un beneficio que permite deducir automáticamente un porcentaje
                de los ingresos como costos sin necesidad de tener facturas.
                Es del <strong>75%</strong> si no contratas empleados, o del{" "}
                <strong>50%</strong> si contratas empleados. El límite es{" "}
                <strong>1000 UVT anuales = ${new Intl.NumberFormat("es-CO").format(1000 * 49799)}</strong>.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">
                ¿Qué deducciones y beneficios puedo aplicar?
              </h4>
              <p className="text-gray-700 mt-2">
                Tanto empleados como independientes pueden deducir aportes voluntarios a pensiones, 
                cuentas AFC, intereses de vivienda, medicina prepagada (hasta{" "}
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
                mensual y comparar con el descuento que ves en tu nómina o
                facturas. Si hay diferencias, consulta con tu área de nómina,
                contador o la empresa que te paga.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-blue-700">
                Ejemplo práctico de cálculo
              </h4>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-gray-700 font-semibold">Empleado:</p>
                  <p className="text-gray-700 font-mono bg-gray-100 p-3 rounded-lg text-xs">
                    Salario: $5.000.000
                    <br />
                    Aportes: $400.000
                    <br />
                    Deducciones: $500.000
                    <br />
                    Renta exenta: $1.025.000
                    <br />
                    Aux. transporte: $200.000
                    <br />
                    Base gravable: $2.875.000
                    <br />
                    Retención: Según tabla DIAN
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Independiente:</p>
                  <p className="text-gray-700 font-mono bg-gray-100 p-3 rounded-lg text-xs">
                    Ingresos: $5.000.000
                    <br />
                    Presunción costos 75%: $3.750.000
                    <br />
                    Deducciones: $500.000
                    <br />
                    Renta exenta: $187.500
                    <br />
                    Base gravable: $562.500
                    <br />
                    Retención: Según tabla DIAN
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mt-3">
                <span className="font-medium text-blue-600">
                  ¡Utiliza nuestra calculadora para obtener el valor exacto de
                  tu retención según tu situación específica!
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
