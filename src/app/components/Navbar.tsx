import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="group flex items-center" title="Ir al inicio">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="Logo Calculadora Laboral"
                  width={32}
                  height={32}
                  priority
                  className="text-blue-600"
                />
                <div className="absolute -top-1 -right-1 bg-blue-600 rounded-full p-0.5 shadow-sm transform group-hover:scale-110 transition-transform">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-3 w-3 text-white" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                Calculadora Laboral
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <Link
                href="/calculadoras/liquidacion"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Liquidación
              </Link>
              <Link
                href="/calculadoras/nomina"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Nómina
              </Link>
              <Link
                href="/calculadoras/horas-extras"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Horas Extras
              </Link>
              <Link
                href="/calculadoras/retencion"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Retención
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}