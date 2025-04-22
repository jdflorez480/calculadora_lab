'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Importar los componentes de los artículos
import SalarioMinimo2025 from '../articulos/SalarioMinimo2025';
import GuiaPrima2025 from '../articulos/GuiaPrima2025';
import GuiaHorasExtras2025 from '../articulos/GuiaHorasExtras2025';
import RegulacionesTrabajoRemoto2025 from '../articulos/RegulacionesTrabajoRemoto2025';
import OptimizarDeclaracionRenta2025 from '../articulos/OptimizarDeclaracionRenta2025';
import CesantiasFechas2025 from '../articulos/CesantiasFechas2025';
import LicenciasLaborales2025 from '../articulos/LicienciasLaborales2025';
import ReformaPensional2025 from '../articulos/ReformaPensional2025';
import GuiaVacaciones2025 from '../articulos/GuiaVacaciones2025';
import NovedadesSeguridadSocial2025 from '../articulos/NovedadesSeguridadSocial2025';

// Mapeo de slugs a componentes
const articleComponents: { [key: string]: React.ComponentType } = {
  'salario-minimo-2025': SalarioMinimo2025,
  'guia-prima-servicios-2025': GuiaPrima2025,
  'guia-horas-extras-2025': GuiaHorasExtras2025,
  'regulaciones-trabajo-remoto-2025': RegulacionesTrabajoRemoto2025,
  'optimizar-declaracion-renta-2025': OptimizarDeclaracionRenta2025,
  'cesantias-fechas-2025': CesantiasFechas2025,
  'licencias-laborales-2025': LicenciasLaborales2025,
  'reforma-pensional-2025': ReformaPensional2025,
  'guia-vacaciones-2025': GuiaVacaciones2025,
  'novedades-seguridad-social-2025': NovedadesSeguridadSocial2025
};

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;

  // Obtener el componente correspondiente al slug
  const ArticleComponent = articleComponents[slug];

  // Si no existe el artículo, mostrar la página 404
  if (!ArticleComponent) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Volver al blog
        </Link>

        <ArticleComponent />
      </div>
    </div>
  );
}