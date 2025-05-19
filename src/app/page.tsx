import Link from 'next/link';
import { 
  BriefcaseIcon, 
  CurrencyDollarIcon, 
  ClockIcon, 
  CalculatorIcon, 
  GiftIcon, 
  SunIcon, 
  BuildingLibraryIcon,
  DocumentTextIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
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

// Nuevas secciones para mejorar la página
const beneficios = [
  {
    titulo: 'Cálculos Precisos y Actualizados',
    descripcion: 'Todos nuestros cálculos están basados en la legislación laboral colombiana vigente para 2025, incluyendo los últimos cambios normativos.',
    icono: DocumentTextIcon
  },
  {
    titulo: 'Ahorra Tiempo y Evita Errores',
    descripcion: 'Automatiza tus cálculos laborales y obtén resultados precisos en segundos, evitando costosos errores administrativos.',
    icono: ClockIcon
  },
  {
    titulo: 'Seguridad y Confianza',
    descripcion: 'Nuestras calculadoras están respaldadas por profesionales en derecho laboral con amplia experiencia en la legislación colombiana.',
    icono: ShieldCheckIcon
  }
];

const estadisticas = [
  { cifra: '1.423.500', descripcion: 'Salario mínimo legal vigente 2025 (COP)' },
  { cifra: '24%', descripcion: 'Aporte total a seguridad social por empleador (estimado)' },
  { cifra: '+10.000', descripcion: 'Cálculos realizados por mes' },
  { cifra: '100%', descripcion: 'Cumplimiento con legislación laboral actualizada' }
];

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full bg-blue-600 text-white py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">Contacto:</span>
          <a href="mailto:contacto@calculalaboral.com" className="hover:underline font-medium">contacto@calculalaboral.com</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Calculadoras Laborales de Colombia
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Herramientas gratuitas para calcular tus prestaciones laborales
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Última actualización: {new Date().toLocaleDateString('es-ES', {day: 'numeric', month: 'long', year: 'numeric'})} | Conforme a la legislación laboral vigente
          </p>
        </div>


        {/* Sección de Estadísticas */}
        <div className="mt-12 py-8 bg-blue-50 rounded-xl shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-center mb-8 text-blue-900">
              Datos Laborales Colombia 2025
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {estadisticas.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-blue-600">{stat.cifra}</p>
                  <p className="mt-2 text-base text-gray-700">{stat.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
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
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['prima de servicios', 'prima junio', 'cálculo prima', 'prestación social', 'beneficio laboral'].map((keyword) => (
                      <span key={keyword} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                Calcular Prima
              </button>
            </div>
          </Link>
        </div>

       


         {/* Banner Calculadora Empresarial */}
        <div className="mt-8 mb-12 relative">
          <div className="absolute -top-3 -right-3 bg-yellow-500 text-white text-sm font-bold py-1 px-3 rounded-full animate-pulse shadow-md z-10">
            ¡Para empresas!
          </div>
          <a href="https://www.calculadoraempresarial.com" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="block bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-white p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 border-dashed border-2 border-green-200">
              <div className="flex items-center space-x-4">
                <span className="bg-green-100 p-4 rounded-full shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                <div className="text-left">
                  <div className="flex items-center">
                    <h2 className="text-2xl font-bold text-green-900">¿Eres empresario o administras personal?</h2>
                    <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">Nuevo</span>
                  </div>
                  <p className="text-gray-600 mt-1">Optimiza tu gestión de recursos humanos con nuestra plataforma especializada para empresas</p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-center space-x-2 text-sm text-gray-700">
                      <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Cálculo automático de nómina para múltiples empleados</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm text-gray-700">
                      <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Gestión de liquidaciones, vacaciones y prestaciones</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-green-700 font-semibold text-sm mb-2">Soluciones empresariales</span>
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 cursor-pointer shadow-md hover:shadow-lg flex items-center">
                  <span>Visitar Calculadora Empresarial</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </a>
        </div>

        <section className="mt-16" aria-labelledby="calculadoras-section">
          <h2 id="calculadoras-section" className="text-2xl font-semibold text-center mb-8 text-blue-900">
            Nuestras Calculadoras Laborales
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        </section>

        {/* Sección de beneficios */}
        <section className="mt-16" aria-labelledby="beneficios-section">
          <h2 id="beneficios-section" className="text-2xl font-semibold text-blue-900 text-center mb-8">
            ¿Por qué usar nuestra calculadora laboral?
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {beneficios.map((beneficio) => (
              <div key={beneficio.titulo} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center">
                  <span className="flex-shrink-0 rounded-md p-3 bg-blue-50 text-blue-700">
                    <beneficio.icono className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{beneficio.titulo}</h3>
                    <p className="mt-2 text-base text-gray-600">{beneficio.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección informativa */}
        <section className="mt-16" aria-labelledby="informacion-adicional">
          <h2 id="informacion-adicional" className="sr-only">Información adicional</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Calculadora laboral colombiana actualizada {new Date().getFullYear()}</h3>
            <div className="prose prose-blue max-w-none text-gray-600">
              <p>
                Nuestra calculadora laboral colombiana te permite gestionar todos los aspectos laborales 
                según la legislación vigente. Desde el cálculo de nómina mensual, 
                incluyendo los aportes a seguridad social (salud, pensión y ARL), hasta la estimación 
                de prestaciones sociales como prima, cesantías, intereses y vacaciones.
              </p>
              <p className="mt-4">
                Con las herramientas de liquidación laboral, podrás conocer el valor 
                exacto que corresponde a un trabajador al momento de terminar su contrato, 
                teniendo en cuenta el tipo de contrato, tiempo trabajado y salario devengado.
              </p>
              <p className="mt-4">
                Nuestras calculadoras están actualizadas con la legislación colombiana de {new Date().getFullYear()}, 
                incluyendo las últimas reformas laborales y tributarias, para garantizar 
                que todos los cálculos sean precisos y conformes a la ley.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de CTA */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-md p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">¿Necesitas calcular tus prestaciones laborales?</h2>
            <p className="mt-4 text-lg text-blue-100">
              Utiliza nuestras calculadoras y obtén resultados precisos en segundos
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/calculadoras/nomina" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Comenzar ahora
              </Link>
            </div>
          </div>
        </section>

        {/* Sección de contacto mejorada */}
        <div className="mt-20 mb-12 relative z-20 bg-white rounded-xl overflow-hidden shadow-xl border border-blue-100">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-5 px-6">
            <h2 className="text-2xl font-bold text-white text-center">Contacto y Soporte</h2>
          </div>
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-lg">
                <p className="text-lg text-gray-700">
                  Desarrollado para ayudar a los trabajadores colombianos. 
                  Todos los cálculos se realizan según la legislación laboral vigente.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">¿Tienes dudas o sugerencias?</p>
                      <a href="mailto:contacto@calculalaboral.com" className="text-blue-600 font-medium text-lg hover:underline">
                        contacto@calculalaboral.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-inner max-w-md w-full">
                <p className="font-medium text-gray-800 mb-3">
                  También puedes contactarnos si:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Crees que algún cálculo no es correcto
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Deseas que agreguemos una nueva calculadora
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Tienes interés en publicidad o colaboraciones
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
