import Link from 'next/link';
import { BriefcaseIcon, CurrencyDollarIcon, ClockIcon, CalculatorIcon, GiftIcon } from '@heroicons/react/24/outline';

const calculadoras = [
  {
    titulo: 'Liquidación Laboral',
    descripcion: 'Calcula tu liquidación final incluyendo todas tus prestaciones sociales',
    icono: BriefcaseIcon,
    href: '/calculadoras/liquidacion'
  },
  {
    titulo: 'Calculadora de Nómina',
    descripcion: 'Calcula tu salario neto mensual incluyendo todas las deducciones',
    icono: CalculatorIcon,
    href: '/calculadoras/nomina'
  },
  {
    titulo: 'Horas Extras',
    descripcion: 'Calcula el valor de tus horas extras, recargos nocturnos y dominicales',
    icono: ClockIcon,
    href: '/calculadoras/horas-extras'
  },
  {
    titulo: 'Retención en la Fuente',
    descripcion: 'Calcula el valor de tu retención en la fuente mensual',
    icono: CurrencyDollarIcon,
    href: '/calculadoras/retencion'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Calculadoras Laborales Colombia
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Herramientas gratuitas para calcular tus prestaciones laborales
          </p>
        </div>

        {/* Banner Prima Junio 2025 */}
        <div className="mt-8 mb-8">
          <Link href="/calculadoras/prima" 
                className="block bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-white p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <span className="bg-blue-100 p-3 rounded-full">
                  <GiftIcon className="h-8 w-8 text-blue-600" />
                </span>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-blue-900">¡Calcula tu Prima de Junio 2025!</h2>
                  <p className="text-gray-600">Conoce cuánto recibirás de prima este semestre según la ley colombiana</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                Calcular Prima
              </button>
            </div>
          </Link>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {calculadoras.map((calc) => (
            <Link
              key={calc.titulo}
              href={calc.href}
              className="relative group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-100 text-blue-700 ring-4 ring-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <calc.icono className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {calc.titulo}
                </h3>
                <p className="mt-2 text-base text-gray-600 group-hover:text-gray-700">
                  {calc.descripcion}
                </p>
              </div>
              <span
                className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-200 group-hover:ring-blue-200"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-700 bg-blue-50 rounded-lg p-4 inline-block shadow-sm">
            Desarrollado para ayudar a los trabajadores colombianos. 
            Todos los cálculos se realizan según la legislación laboral vigente.
          </p>
        </div>
      </div>
    </main>
  );
}
