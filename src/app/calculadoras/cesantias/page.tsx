'use client';

import { useState, Suspense } from 'react';
import { CurrencyDollarIcon, CalendarIcon, TruckIcon } from '@heroicons/react/24/outline';
import ResultadoCalculo from '../../components/ResultadoCalculo';
import DatePicker, { registerLocale } from 'react-datepicker';
import { es } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { calcularCesantias, calcularInteresesCesantias, calcularDiasLaborados, calcularSalarioTotal } from '../../utils/calculosLaborales';

// Constantes
const SALARIO_MINIMO_2025 = 1423500;
const TOPE_AUXILIO_TRANSPORTE = SALARIO_MINIMO_2025 * 2;
const AUXILIO_TRANSPORTE_2025 = 200000;

// Registrar el idioma español para el DatePicker
registerLocale('es', es);

interface FormData {
  salarioBase: string;
  otrosIngresos: string;
  auxilioTransporte: boolean;
  fechaInicioPeriodo: Date | null;
  fechaFinPeriodo: Date | null;
}

interface ResultadoCesantiasFormateado {
  resultados: Array<{
    concepto: string;
    valor: number;
    descripcion: string;
  }>;
  total: number;
  titulo: string;
  subtitulo: string;
}

function CesantiasContent() {
  const [formData, setFormData] = useState<FormData>({
    salarioBase: '',
    otrosIngresos: '',
    auxilioTransporte: true,
    fechaInicioPeriodo: new Date(2025, 0, 1), // 1 de enero 2025
    fechaFinPeriodo: new Date(2025, 11, 31), // 31 de diciembre 2025
  });
  
  const [resultado, setResultado] = useState<ResultadoCesantiasFormateado | null>(null);

  const formatNumber = (value: string) => {
    const number = value.replace(/\D/g, '');
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleSalarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\./g, '');
    const salarioNumerico = parseInt(rawValue) || 0;
    
    setFormData({
      ...formData,
      salarioBase: formatNumber(rawValue),
      // Solo desmarcar automáticamente si supera el tope, pero permitir que se marque manualmente
      auxilioTransporte: salarioNumerico <= TOPE_AUXILIO_TRANSPORTE ? formData.auxilioTransporte : false
    });
  };

  const handleOtrosIngresosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\./g, '');
    setFormData({
      ...formData,
      otrosIngresos: formatNumber(rawValue)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const salarioBase = parseFloat(formData.salarioBase.replace(/\./g, ''));
    const otrosIngresos = parseFloat(formData.otrosIngresos.replace(/\./g, '')) || 0;
    const salarioTotal = salarioBase + otrosIngresos;
    
    // Calcular los días trabajados en el periodo
    const diasLaborados = calcularDiasLaborados(formData.fechaInicioPeriodo!, formData.fechaFinPeriodo!);
    
    // Calcular el salario total incluyendo auxilio de transporte si aplica
    const salarioConAuxilio = calcularSalarioTotal(salarioTotal, formData.auxilioTransporte);
    
    // Calcular cesantías e intereses
    const valorCesantias = calcularCesantias(salarioConAuxilio, diasLaborados);
    const valorIntereses = calcularInteresesCesantias(valorCesantias, diasLaborados);
    
    const auxilioTransporteValor = formData.auxilioTransporte ? AUXILIO_TRANSPORTE_2025 : 0;

    const resultadosFormateados = [
      {
        concepto: 'Salario Base',
        valor: salarioBase,
        descripcion: 'Salario mensual actual'
      },
      {
        concepto: 'Otros Ingresos',
        valor: otrosIngresos,
        descripcion: 'Comisiones, horas extras y otros pagos variables'
      },
      {
        concepto: 'Auxilio de Transporte',
        valor: auxilioTransporteValor,
        descripcion: 'Se incluye si el salario es menor o igual a 2 SMMLV'
      },
      {
        concepto: 'Intereses de Cesantías',
        valor: valorIntereses,
        descripcion: '12% anual o proporcional al tiempo trabajado'
      }
    ];

    setResultado({
      resultados: resultadosFormateados,
      total: valorCesantias,
      titulo: 'Cesantías 2025',
      subtitulo: `Período: ${formData.fechaInicioPeriodo?.toLocaleDateString('es-CO')} - ${formData.fechaFinPeriodo?.toLocaleDateString('es-CO')}`
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Calculadora de Cesantías 2025
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Calcula el valor de tus cesantías e intereses según la ley colombiana
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg inline-block">
            <p className="text-sm text-blue-700">
              Recuerda que las cesantías deben consignarse antes del 14 de febrero de cada año
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Salario Base */}
            <div className="form-group">
              <div className="flex items-center h-8">
                <CurrencyDollarIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Salario Base Mensual
                </label>
              </div>
              <p className="text-sm text-gray-600 mb-2 pl-7">Ingrese su salario mensual actual</p>
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

            {/* Otros Ingresos */}
            <div className="form-group">
              <div className="flex items-center h-8">
                <CurrencyDollarIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Otros Ingresos
                </label>
              </div>
              <p className="text-sm text-gray-600 mb-2 pl-7">Comisiones, horas extras, etc.</p>
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
            </div>

            {/* Auxilio de Transporte */}
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
                    onChange={(e) => setFormData({...formData, auxilioTransporte: e.target.checked})}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
                <span className="ml-3 text-sm text-gray-600">
                  Se marca automáticamente si el salario es menor o igual a 2 SMMLV (${formatNumber(TOPE_AUXILIO_TRANSPORTE.toString())})
                </span>
              </div>
            </div>

            {/* Período de Cálculo */}
            <div className="form-group lg:col-span-1">
              <div className="flex items-center h-8 mb-2">
                <CalendarIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Período de Cálculo
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4 pl-7">
                <div>
                  <DatePicker
                    selected={formData.fechaInicioPeriodo}
                    onChange={(date) => setFormData({...formData, fechaInicioPeriodo: date})}
                    dateFormat="dd/MM/yyyy"
                    locale="es"
                    className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <DatePicker
                    selected={formData.fechaFinPeriodo}
                    onChange={(date) => setFormData({...formData, fechaFinPeriodo: date})}
                    dateFormat="dd/MM/yyyy"
                    locale="es"
                    className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
              Calcular Cesantías
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

        {/* Texto explicativo sobre las cesantías */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué son las Cesantías?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las cesantías son una prestación social obligatoria en Colombia que consiste en un ahorro que el empleador debe hacer por cada trabajador. Este ahorro equivale a un mes de salario por cada año trabajado o proporcional al tiempo laborado.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            El propósito de las cesantías es proporcionar un respaldo financiero al trabajador en caso de desempleo o para cubrir necesidades específicas como vivienda o educación.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Cómo se calculan las Cesantías?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            El cálculo de las cesantías se realiza con base en el último salario mensual devengado por el trabajador, incluyendo el auxilio de transporte si aplica. La fórmula general es:
          </p>
          <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg mb-4">
            Cesantías = (Salario mensual + Auxilio de transporte) × Días trabajados ÷ 360
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Intereses de las Cesantías</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Además de las cesantías, el empleador debe pagar a sus trabajadores un interés del 12% anual (o proporcional al tiempo trabajado) sobre el valor de las cesantías acumuladas al 31 de diciembre de cada año. La fórmula para calcular los intereses es:
          </p>
          <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg mb-4">
            Intereses = Cesantías × 12% × Días trabajados ÷ 360
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Cuándo se pagan?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Los empleadores deben consignar las cesantías a los fondos de cesantías antes del 14 de febrero de cada año. Los intereses sobre las cesantías deben ser pagados directamente al trabajador a más tardar el 31 de enero.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Cuándo se pueden retirar?</h3>
          <p className="text-gray-700 leading-relaxed">
            Las cesantías se pueden retirar en los siguientes casos:
          </p>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2">
            <li>Para financiar la educación superior del trabajador, su cónyuge, compañera o compañero permanente y sus hijos</li>
            <li>Para compra, construcción o mejoramiento de vivienda</li>
            <li>En caso de terminación del contrato de trabajo</li>
            <li>Para pago de impuesto predial o de liberación de gravámenes hipotecarios sobre vivienda propia</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function CesantiasPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <CesantiasContent />
    </Suspense>
  );
}