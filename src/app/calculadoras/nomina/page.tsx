'use client';

import { useState, Suspense } from 'react';
import { CurrencyDollarIcon, CalendarIcon, TruckIcon } from '@heroicons/react/24/outline';
import ResultadoCalculo from '../../components/ResultadoCalculo';
import { calcularNomina, SALARIO_MINIMO_2025 } from '../../utils/calculosLaborales';
import DatePicker, { registerLocale } from 'react-datepicker';
import { es } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';

// Registrar el idioma español para el DatePicker
registerLocale('es', es);

const TOPE_AUXILIO_TRANSPORTE = SALARIO_MINIMO_2025 * 2;

interface Resultado {
  resultados: Array<{
    concepto: string;
    valor: number;
    descripcion?: string;
  }>;
  total: number;
  diasTrabajados: number;
}

interface FormData {
  salarioBase: string;
  otrosIngresos: string;
  diasTrabajados: string;
  auxilioTransporte: boolean;
  fechaPago: Date | null;
}

function NominaContent() {
  const [formData, setFormData] = useState<FormData>({
    salarioBase: '',
    otrosIngresos: '',
    diasTrabajados: '30',
    auxilioTransporte: true,
    fechaPago: null
  });
  
  const [resultado, setResultado] = useState<Resultado | null>(null);

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
      auxilioTransporte: salarioNumerico <= TOPE_AUXILIO_TRANSPORTE
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

    const datos = {
      salarioBase: parseFloat(formData.salarioBase.replace(/\./g, '')),
      otrosIngresos: parseFloat(formData.otrosIngresos.replace(/\./g, '')) || 0,
      diasTrabajados: parseInt(formData.diasTrabajados),
      auxilioTransporte: formData.auxilioTransporte
    };

    const resultadoCalculo = calcularNomina(datos);
    
    const resultadosFormateados = [
      {
        concepto: 'Salario Base',
        valor: resultadoCalculo.salarioBase,
        descripcion: `Proporcional a ${datos.diasTrabajados} días trabajados`
      },
      {
        concepto: 'Auxilio de Transporte',
        valor: resultadoCalculo.auxilioTransporte,
        descripcion: 'Aplica si el salario es menor o igual a 2 SMMLV'
      },
      {
        concepto: 'Otros Ingresos',
        valor: resultadoCalculo.otrosIngresos,
        descripcion: 'Bonificaciones, comisiones u otros pagos adicionales'
      },
      {
        concepto: 'Aporte a Salud',
        valor: -resultadoCalculo.descuentoSalud,
        descripcion: '4% del salario base'
      },
      {
        concepto: 'Aporte a Pensión',
        valor: -resultadoCalculo.descuentoPension,
        descripcion: '4% del salario base'
      }
    ];

    setResultado({
      resultados: resultadosFormateados,
      total: resultadoCalculo.salarioNeto,
      diasTrabajados: datos.diasTrabajados
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Calculadora de Nómina Mensual
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Calcula tu salario neto mensual incluyendo todas las deducciones
          </p>
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
              <p className="text-sm text-gray-600 mb-2 pl-7">Bonificaciones, comisiones, etc.</p>
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

            {/* Días Trabajados */}
            <div className="form-group">
              <div className="flex items-center h-8">
                <CalendarIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Días Trabajados
                </label>
              </div>
              <p className="text-sm text-gray-600 mb-2 pl-7">Número de días laborados en el mes</p>
              <input
                type="number"
                min="1"
                max="30"
                name="diasTrabajados"
                className="block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                value={formData.diasTrabajados}
                onChange={(e) => setFormData({...formData, diasTrabajados: e.target.value})}
                required
              />
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

            {/* Fecha de Pago */}
            <div className="form-group lg:col-span-1">
              <div className="flex items-center h-8 mb-2">
                <CalendarIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Fecha de Pago
                </label>
              </div>
              <div className="relative rounded-lg">
                <DatePicker
                  selected={formData.fechaPago}
                  onChange={(date) => setFormData({...formData, fechaPago: date})}
                  dateFormat="dd/MM/yyyy"
                  locale="es"
                  placeholderText="Seleccionar fecha"
                  className="block w-full py-2.5 pl-3 pr-10 text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200 ease-in-out sm:text-sm cursor-pointer bg-white shadow-sm"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-lg cursor-pointer"
            >
              Calcular Nómina
            </button>
          </div>
        </form>

        {resultado && (
          <div className="mt-8 animate-fade-in">
            <ResultadoCalculo
              resultados={resultado.resultados}
              total={resultado.total}
              titulo="Resumen de Nómina"
              subtitulo={`Período: ${resultado.diasTrabajados} días`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function NominaPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <NominaContent />
    </Suspense>
  );
}