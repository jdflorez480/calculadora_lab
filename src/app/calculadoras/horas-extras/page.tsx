'use client';

import { Suspense, useState } from 'react';
import { CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';
import ResultadoCalculo from '../../components/ResultadoCalculo';
import { calcularHorasExtras } from '../../utils/calculosLaborales';

interface ResultadoHorasExtras {
  resultados: Array<{
    concepto: string;
    valor: number;
    descripcion: string;
  }>;
  total: number;
}

interface FormData {
  salarioBase: string;
  horasExtrasDiurnas: string;
  horasExtrasNocturnas: string;
  horasDominicalesFestivas: string;
  horasExtrasDominicalesFestivas: string;
  horasNocturnas: string;
}

function HorasExtrasContent() {
  const [formData, setFormData] = useState<FormData>({
    salarioBase: '',
    horasExtrasDiurnas: '0',
    horasExtrasNocturnas: '0',
    horasDominicalesFestivas: '0',
    horasExtrasDominicalesFestivas: '0',
    horasNocturnas: '0'
  });
  const [resultado, setResultado] = useState<ResultadoHorasExtras | null>(null);

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

  const handleHorasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numeroHoras = Math.min(Math.max(parseInt(value) || 0, 0), 999);
    setFormData({
      ...formData,
      [name]: numeroHoras.toString()
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const datos = {
      salarioBase: parseFloat(formData.salarioBase.replace(/\./g, '')),
      horasExtrasDiurnas: parseInt(formData.horasExtrasDiurnas),
      horasExtrasNocturnas: parseInt(formData.horasExtrasNocturnas),
      horasDominicalesFestivas: parseInt(formData.horasDominicalesFestivas),
      horasExtrasDominicalesFestivas: parseInt(formData.horasExtrasDominicalesFestivas),
      horasNocturnas: parseInt(formData.horasNocturnas)
    };

    const resultadoCalculo = calcularHorasExtras(datos);
    
    const resultadosFormateados = [
      {
        concepto: 'Valor Hora Ordinaria',
        valor: resultadoCalculo.valorHoraOrdinaria,
        descripcion: 'Salario mensual dividido por 240 horas'
      },
      {
        concepto: 'Horas Extras Diurnas',
        valor: resultadoCalculo.totalHorasExtrasDiurnas,
        descripcion: `${datos.horasExtrasDiurnas} horas con recargo del 25%`
      },
      {
        concepto: 'Horas Extras Nocturnas',
        valor: resultadoCalculo.totalHorasExtrasNocturnas,
        descripcion: `${datos.horasExtrasNocturnas} horas con recargo del 75%`
      },
      {
        concepto: 'Recargo Dominical/Festivo',
        valor: resultadoCalculo.totalHorasDominicalesFestivas,
        descripcion: `${datos.horasDominicalesFestivas} horas con recargo del 75%`
      },
      {
        concepto: 'Horas Extras Dominicales/Festivas',
        valor: resultadoCalculo.totalHorasExtrasDominicalesFestivas,
        descripcion: `${datos.horasExtrasDominicalesFestivas} horas con recargo del 100%`
      },
      {
        concepto: 'Recargo Nocturno',
        valor: resultadoCalculo.totalRecargoNocturno,
        descripcion: `${datos.horasNocturnas} horas con recargo del 35%`
      }
    ];

    setResultado({
      resultados: resultadosFormateados,
      total: resultadoCalculo.totalGeneral
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Calculadora de Horas Extras
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Calcula el valor de tus horas extras, recargos nocturnos y dominicales
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
          {/* Salario Base */}
          <div className="mb-6">
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
                placeholder="1.000.000"
                value={formData.salarioBase}
                onChange={handleSalarioChange}
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">COP</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Horas Extras Diurnas */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Horas Extras Diurnas
                </label>
              </div>
              <input
                type="number"
                name="horasExtrasDiurnas"
                className="block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                placeholder="0"
                value={formData.horasExtrasDiurnas}
                onChange={handleHorasChange}
                min="0"
                max="999"
              />
              <p className="mt-1 text-sm text-gray-500">Recargo del 25%</p>
            </div>

            {/* Horas Extras Nocturnas */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Horas Extras Nocturnas
                </label>
              </div>
              <input
                type="number"
                name="horasExtrasNocturnas"
                className="block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                placeholder="0"
                value={formData.horasExtrasNocturnas}
                onChange={handleHorasChange}
                min="0"
                max="999"
              />
              <p className="mt-1 text-sm text-gray-500">Recargo del 75%</p>
            </div>

            {/* Horas Dominicales/Festivos */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Horas Dominicales/Festivas
                </label>
              </div>
              <input
                type="number"
                name="horasDominicalesFestivas"
                className="block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                placeholder="0"
                value={formData.horasDominicalesFestivas}
                onChange={handleHorasChange}
                min="0"
                max="999"
              />
              <p className="mt-1 text-sm text-gray-500">Recargo del 75%</p>
            </div>

            {/* Horas Extras Dominicales/Festivas */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Horas Extras Dominicales/Festivas
                </label>
              </div>
              <input
                type="number"
                name="horasExtrasDominicalesFestivas"
                className="block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                placeholder="0"
                value={formData.horasExtrasDominicalesFestivas}
                onChange={handleHorasChange}
                min="0"
                max="999"
              />
              <p className="mt-1 text-sm text-gray-500">Recargo del 100%</p>
            </div>

            {/* Horas Nocturnas Ordinarias */}
            <div className="form-group">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <label className="ml-2 block text-sm font-medium text-gray-900">
                  Horas Nocturnas
                </label>
              </div>
              <input
                type="number"
                name="horasNocturnas"
                className="block w-full py-2.5 px-3 text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm"
                placeholder="0"
                value={formData.horasNocturnas}
                onChange={handleHorasChange}
                min="0"
                max="999"
              />
              <p className="mt-1 text-sm text-gray-500">Recargo del 35%</p>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:shadow-lg cursor-pointer"
            >
              Calcular Horas Extras
            </button>
          </div>
        </form>

        {resultado && (
          <div className="mt-8 animate-fade-in">
            <ResultadoCalculo
              resultados={resultado.resultados}
              total={resultado.total}
              titulo="Resumen de Horas Extras"
              subtitulo="Total a pagar por conceptos adicionales"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function HorasExtrasPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HorasExtrasContent />
    </Suspense>
  );
}