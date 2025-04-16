'use client';

import { useState, Suspense } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { es } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import ResultadoCalculo from '../../components/ResultadoCalculo';
import { calcularLiquidacionTotal } from '../../utils/calculosLaborales';
import { CalendarIcon, CurrencyDollarIcon, TruckIcon } from '@heroicons/react/24/outline';

// Constantes
const SALARIO_MINIMO_2025 = 1423500;
const TOPE_AUXILIO_TRANSPORTE = SALARIO_MINIMO_2025 * 2;

// Registrar el idioma español para el DatePicker
registerLocale('es', es);

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
    salarioBase: '',
    auxilioTransporte: true,
    fechaInicio: null as Date | null,
    fechaFin: null as Date | null,
  });
  const [resultado, setResultado] = useState<ResultadoLiquidacion | null>(null);

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
      auxilioTransporte: salarioNumerico <= TOPE_AUXILIO_TRANSPORTE ? true : false
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fechaInicio || !formData.fechaFin) return;

    const salarioNumerico = parseFloat(formData.salarioBase.replace(/\./g, ''));
    const datos = {
      salarioBase: salarioNumerico,
      auxilioTransporte: formData.auxilioTransporte,
      fechaInicio: formData.fechaInicio,
      fechaFin: formData.fechaFin
    };

    const resultados = calcularLiquidacionTotal(datos);
    
    const resultadosFormateados = [
      {
        concepto: 'Cesantías',
        valor: resultados.cesantias,
        descripcion: 'Calculado sobre salario total incluyendo auxilio de transporte'
      },
      {
        concepto: 'Intereses sobre Cesantías',
        valor: resultados.interesesCesantias,
        descripcion: '12% anual sobre las cesantías'
      },
      {
        concepto: 'Prima de Servicios (Primer Semestre)',
        valor: resultados.primaPrimerSemestre,
        descripcion: 'Equivalente a medio salario por semestre trabajado'
      },
      {
        concepto: 'Prima de Servicios (Segundo Semestre)',
        valor: resultados.primaSegundoSemestre,
        descripcion: 'Equivalente a medio salario por semestre trabajado'
      },
      {
        concepto: 'Vacaciones',
        valor: resultados.vacaciones,
        descripcion: '15 días de salario por año trabajado'
      }
    ];

    // Agregamos los aportes como información adicional
    const informacionAportes = [
      {
        concepto: 'Aporte mensual a Salud',
        valor: -resultados.aportesSalud,
        descripcion: '4% del salario base - aporte mensual del empleado'
      },
      {
        concepto: 'Aporte mensual a Pensión',
        valor: -resultados.aportesPension,
        descripcion: '4% del salario base - aporte mensual del empleado'
      }
    ];

    setResultado({
      resultados: [...resultadosFormateados, ...informacionAportes],
      total: resultados.total,
      diasLaborados: resultados.diasLaborados
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Calculadora de Liquidación Laboral
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Calcula el valor de tu liquidación laboral incluyendo todas tus prestaciones sociales
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
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
                  <label htmlFor="fechaInicio" className="block text-sm text-gray-600 mb-1.5">
                    Fecha de Inicio
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={formData.fechaInicio}
                      onChange={(date) => setFormData({...formData, fechaInicio: date})}
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
                  <label htmlFor="fechaFin" className="block text-sm text-gray-600 mb-1.5">
                    Fecha de Terminación
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={formData.fechaFin}
                      onChange={(date) => setFormData({...formData, fechaFin: date})}
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
                    onChange={(e) => setFormData({...formData, auxilioTransporte: e.target.checked})}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
                <span className="ml-3 text-sm text-gray-600">
                  Se marca automáticamente si el salario es menor o igual a 2 SMMLV (${formatNumber(TOPE_AUXILIO_TRANSPORTE.toString())})
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