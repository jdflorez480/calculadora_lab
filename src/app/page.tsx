import Link from 'next/link';
import { BriefcaseIcon, CurrencyDollarIcon, ClockIcon, CalculatorIcon, GiftIcon, SunIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculadoras Laborales Colombia | Herramientas Laborales 2025',
  description: 'Calcula liquidación, nómina, horas extras, retención en la fuente y prestaciones sociales con nuestras calculadoras laborales colombianas actualizadas a 2025.',
  keywords: 'calculadora laboral colombia, liquidación, nómina, horas extras, retención en la fuente, cesantías, prima, vacaciones, legislación laboral colombiana 2025',
};

const calculadoras = [
  {
    titulo: 'Liquidación Laboral',
    descripcion: 'Calcula tu liquidación final incluyendo todas tus prestaciones sociales',
    icono: BriefcaseIcon,
    href: '/calculadoras/liquidacion',
    keywords: ['liquidación laboral', 'prestaciones sociales', 'indemnización', 'terminación contrato', 'finiquito']
  },
  {
    titulo: 'Calculadora de Nómina',
    descripcion: 'Calcula tu salario neto mensual incluyendo todas las deducciones',
    icono: CalculatorIcon,
    href: '/calculadoras/nomina',
    keywords: ['nómina mensual', 'salario neto', 'deducciones', 'aportes seguridad social', 'parafiscales']
  },
  {
    titulo: 'Horas Extras',
    descripcion: 'Calcula el valor de tus horas extras, recargos nocturnos y dominicales',
    icono: ClockIcon,
    href: '/calculadoras/horas-extras',
    keywords: ['horas extras', 'recargo nocturno', 'dominicales', 'festivos', 'jornada laboral']
  },
  {
    titulo: 'Retención en la Fuente',
    descripcion: 'Calcula el valor de tu retención en la fuente mensual',
    icono: CurrencyDollarIcon,
    href: '/calculadoras/retencion',
    keywords: ['retención fuente', 'impuestos', 'declaración renta', 'deducciones fiscales', 'tributarios']
  },
  {
    titulo: 'Cesantías',
    descripcion: 'Calcula tus cesantías e intereses según la legislación colombiana',
    icono: BuildingLibraryIcon,
    href: '/calculadoras/cesantias',
    keywords: ['cesantías', 'intereses cesantías', 'fondo cesantías', 'liquidación anual', 'ahorro laboral']
  },
  {
    titulo: 'Vacaciones',
    descripcion: 'Calcula el valor de tus vacaciones y días acumulados',
    icono: SunIcon,
    href: '/calculadoras/vacaciones',
    keywords: ['vacaciones', 'días acumulados', 'compensación', 'descanso remunerado', 'liquidación vacacional']
  }
];

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Calculadoras Laborales de Colombia
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Herramientas gratuitas para calcular tus prestaciones laborales
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Última actualización: 8 de mayo de 2025 | Conforme a la legislación laboral vigente
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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {calculadoras.map((calc) => (
            <article 
              key={calc.titulo}
              itemScope 
              itemType="https://schema.org/SoftwareApplication"
            >
              <Link
                href={calc.href}
                className="relative group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block h-full"
                title={`Acceder a ${calc.titulo}`}
              >
                <meta itemProp="applicationCategory" content="CalculadoraWeb" />
                <meta itemProp="operatingSystem" content="Web" />
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-blue-100 text-blue-700 ring-4 ring-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <calc.icono className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 
                    className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                    itemProp="name"
                  >
                    {calc.titulo}
                  </h3>
                  <p 
                    className="mt-2 text-lg text-gray-700 group-hover:text-gray-800"
                    itemProp="description"
                  >
                    {calc.descripcion}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {calc.keywords.map((keyword) => (
                      <span key={keyword} className="inline-flex items-center px-2 py-0.5 rounded text-sm font-medium bg-blue-50 text-blue-700">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-200 group-hover:ring-blue-200"
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-700 bg-blue-50 rounded-lg p-4 inline-block shadow-sm">
            Desarrollado para ayudar a los trabajadores colombianos. 
            Todos los cálculos se realizan según la legislación laboral vigente.
          </p>
        </div>
      </div>
      
      {/* Subtle Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="relative h-[80px]">
          <svg 
            className="absolute bottom-0 w-full h-full" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" 
            preserveAspectRatio="none" 
            shapeRendering="auto"
          >
            <defs>
              <path 
                id="gentle-wave" 
                d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" 
              />
            </defs>
            <g className="subtle-wave-animation">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(59, 130, 246, 0.2)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(96, 165, 250, 0.15)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(147, 197, 253, 0.1)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(219, 234, 254, 0.7)" />
            </g>
          </svg>
        </div>
      </div>
    </main>
  );
}
