'use client';

import { useState, Suspense, useEffect } from 'react';
import { CurrencyDollarIcon, CalendarIcon } from '@heroicons/react/24/outline';
import ResultadoCalculo from '../../components/ResultadoCalculo';
import DatePicker, { registerLocale } from 'react-datepicker';
import { es } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { calcularDiasLaborados } from '../../utils/calculosLaborales';

// Constantes
const DIAS_VACACIONES_POR_ANO = 15;

// Registrar el idioma español para el DatePicker
registerLocale('es', es);

interface FormData {
  salarioBase: string;
  otrosIngresos: string;
  diasVacaciones: string;
  fechaInicioPeriodo: Date | null;
  fechaFinPeriodo: Date | null;
  calcularDiasAutomaticamente: boolean;
}

interface ResultadoVacacionesFormateado {
  resultados: Array<{
    concepto: string;
    valor: number;
    descripcion: string;
  }>;
  total: number;
  titulo: string;
  subtitulo: string;
}

function VacacionesContent() {
  const [formData, setFormData] = useState<FormData>({
    salarioBase: '',
    otrosIngresos: '',
    diasVacaciones: '15', // Por defecto 15 días de vacaciones
    fechaInicioPeriodo: new Date(2025, 0, 1), // 1 de enero 2025
    fechaFinPeriodo: new Date(2025, 11, 31), // 31 de diciembre 2025
    calcularDiasAutomaticamente: true, // Por defecto, calculamos los días automáticamente
  });
  
  const [resultado, setResultado] = useState<ResultadoVacacionesFormateado | null>(null);
  const [diasLaboradosCalculados, setDiasLaboradosCalculados] = useState<number>(0);

  // Calcular días laborados cuando cambien las fechas
  useEffect(() => {
    if (formData.fechaInicioPeriodo && formData.fechaFinPeriodo) {
      const diasLaborados = calcularDiasLaborados(formData.fechaInicioPeriodo, formData.fechaFinPeriodo);
      setDiasLaboradosCalculados(diasLaborados);
      
      // Si está habilitado el cálculo automático, actualizar los días de vacaciones
      if (formData.calcularDiasAutomaticamente) {
        // Calcular días de vacaciones proporcionales (15 días por año trabajado)
        const diasVacacionesProporcionales = Math.round((DIAS_VACACIONES_POR_ANO * diasLaborados) / 360);
        
        // Asegurar un mínimo de 1 día si hay al menos algunos días trabajados
        const diasAAsignar = diasLaborados > 0 ? Math.max(1, diasVacacionesProporcionales) : 0;
        
        setFormData(prev => ({
          ...prev,
          diasVacaciones: diasAAsignar.toString()
        }));
      }
    }
  }, [formData.fechaInicioPeriodo, formData.fechaFinPeriodo, formData.calcularDiasAutomaticamente]);

  const formatNumber = (value: string) => {
    const number = value.replace(/\D/g, '');
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleSalarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\./g, '');
    setFormData({
      ...formData,
      salarioBase: formatNumber(rawValue)
    });
  };

  const handleOtrosIngresosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\./g, '');
    setFormData({
      ...formData,
      otrosIngresos: formatNumber(rawValue)
    });
  };
  
  const handleDiasVacacionesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Solo permitir números entre 1-30
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) <= 30 && parseInt(value) > 0)) {
      setFormData({
        ...formData,
        diasVacaciones: value,
        // Si el usuario edita manualmente los días, desactivar el cálculo automático
        calcularDiasAutomaticamente: false
      });
    }
  };

  const toggleCalculoAutomatico = () => {
    const nuevoEstado = !formData.calcularDiasAutomaticamente;
    setFormData({
      ...formData,
      calcularDiasAutomaticamente: nuevoEstado
    });
    
    // Si se activa el cálculo automático, actualizar los días de vacaciones inmediatamente
    if (nuevoEstado && formData.fechaInicioPeriodo && formData.fechaFinPeriodo) {
      const diasVacacionesProporcionales = Math.round((DIAS_VACACIONES_POR_ANO * diasLaboradosCalculados) / 360);
      const diasAAsignar = diasLaboradosCalculados > 0 ? Math.max(1, diasVacacionesProporcionales) : 0;
      
      setFormData(prev => ({
        ...prev,
        calcularDiasAutomaticamente: nuevoEstado,
        diasVacaciones: diasAAsignar.toString()
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const salarioBase = parseFloat(formData.salarioBase.replace(/\./g, ''));
    const otrosIngresos = parseFloat(formData.otrosIngresos.replace(/\./g, '')) || 0;
    const salarioTotal = salarioBase + otrosIngresos;
    
    // Calcular los días trabajados en el periodo
    const diasLaborados = calcularDiasLaborados(formData.fechaInicioPeriodo!, formData.fechaFinPeriodo!);
    
    // Obtener los días de vacaciones ingresados por el usuario
    const diasVacaciones = parseInt(formData.diasVacaciones) || 15;
    
    // Calcular proporcional según días trabajados
    const diasProporcionales = diasVacaciones; // Ya calculados previamente si es automático
    
    // Calcular vacaciones
    const valorVacacionesDiario = salarioTotal / 30;
    const valorVacaciones = valorVacacionesDiario * diasProporcionales;
    
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
        concepto: 'Días Trabajados',
        valor: diasLaborados,
        descripcion: 'Total días en el período seleccionado'
      },
      {
        concepto: 'Días de Vacaciones',
        valor: diasProporcionales,
        descripcion: formData.calcularDiasAutomaticamente 
          ? 'Días acumulados según tiempo trabajado (cálculo automático)' 
          : 'Días definidos manualmente'
      }
    ];

    setResultado({
      resultados: resultadosFormateados,
      total: Math.round(valorVacaciones),
      titulo: 'Vacaciones 2025',
      subtitulo: `Período: ${formData.fechaInicioPeriodo?.toLocaleDateString('es-CO')} - ${formData.fechaFinPeriodo?.toLocaleDateString('es-CO')}`
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Calculadora de Vacaciones 2025
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Calcula el valor de tus vacaciones según la ley laboral colombiana
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg inline-block">
            <p className="text-sm text-blue-700">
              En Colombia, todo trabajador tiene derecho a 15 días hábiles de vacaciones remuneradas por cada año de servicio
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
              {diasLaboradosCalculados > 0 && (
                <p className="text-xs text-blue-600 mt-1 pl-7">
                  {diasLaboradosCalculados} días trabajados en el período seleccionado
                </p>
              )}
            </div>

            {/* Días de Vacaciones */}
            <div className="form-group lg:col-span-1">
              <div className="flex items-center h-8 mb-2">
                <CalendarIcon className="h-5 w-5 text-blue-500 shrink-0" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Días de Vacaciones
                </label>
              </div>
              <div className="relative rounded-lg pl-7">
                <input
                  type="text"
                  name="diasVacaciones"
                  className={`block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm ${formData.calcularDiasAutomaticamente ? 'bg-gray-100' : ''}`}
                  placeholder="15"
                  value={formData.diasVacaciones}
                  onChange={handleDiasVacacionesChange}
                  disabled={formData.calcularDiasAutomaticamente}
                  required
                />
                <div className="flex items-center mt-1">
                  <input
                    type="checkbox"
                    id="calcularAutomaticamente"
                    checked={formData.calcularDiasAutomaticamente}
                    onChange={toggleCalculoAutomatico}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="calcularAutomaticamente" className="ml-2 text-xs text-gray-500 cursor-pointer">
                    Calcular automáticamente según tiempo trabajado (15 días por año)
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-lg cursor-pointer"
            >
              Calcular Vacaciones
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

        {/* Texto explicativo sobre las vacaciones */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué son las Vacaciones en Colombia?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las vacaciones son un derecho laboral fundamental que tienen todos los trabajadores en Colombia. Consisten en un período remunerado de descanso que se otorga al empleado después de un año continuo de servicio.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Según la legislación laboral colombiana, todo trabajador tiene derecho a 15 días hábiles consecutivos de vacaciones remuneradas por cada año de servicio. En caso de no completar el año de trabajo, las vacaciones se reconocerán proporcionalmente al tiempo laborado.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Cómo se calculan las Vacaciones?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            El cálculo de las vacaciones se realiza con base en el salario ordinario que esté devengando el trabajador al momento de disfrutarlas. La fórmula general para calcular las vacaciones es:
          </p>
          <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg mb-4">
            Vacaciones = (Salario mensual ÷ 30) × Días de vacaciones
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cuando el trabajador no ha cumplido un año completo de servicio, las vacaciones se calculan proporcionalmente al tiempo trabajado:
          </p>
          <p className="text-gray-700 font-mono bg-gray-100 p-4 rounded-lg mb-4">
            Vacaciones proporcionales = (Días trabajados × Días de vacaciones) ÷ 360
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Cuándo se deben pagar?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las vacaciones deben ser remuneradas al trabajador en el momento en que este comienza a disfrutarlas. Es importante destacar que durante el período de vacaciones, el trabajador recibe su salario normal como si estuviera laborando.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Se pueden acumular las vacaciones?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            La regla general es que las vacaciones no son acumulables. Sin embargo, la ley permite acumular las vacaciones hasta por 2 años en casos especiales, como para trabajadores técnicos, especializados y personal de confianza.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Es importante tener en cuenta que las vacaciones son un derecho irrenunciable del trabajador y su propósito es permitirle descansar física y mentalmente para recuperarse del desgaste laboral.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Qué pasa con las vacaciones no disfrutadas?</h3>
          <p className="text-gray-700 leading-relaxed">
            En caso de terminación del contrato laboral, el empleador debe compensar en dinero las vacaciones no disfrutadas. Esta compensación se calcula de la misma manera que las vacaciones regulares, pagando los días proporcionales al tiempo laborado que no fueron disfrutados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VacacionesPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <VacacionesContent />
    </Suspense>
  );
}