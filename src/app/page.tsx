import {
  BriefcaseIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CalculatorIcon,
  SunIcon,
  BuildingLibraryIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import type { Metadata } from "next";

// Importando los componentes
import ContactBar from "./components/ContactBar";
import HeroSection from "./components/HeroSection";
import StatisticsSection from "./components/StatisticsSection";
import PrimaBanner from "./components/PrimaBanner";
import BusinessBanner from "./components/BusinessBanner";
import CalculatorsSection from "./components/CalculatorsSection";
import BenefitsSection from "./components/BenefitsSection";
import InfoSection from "./components/InfoSection";
import ContactSection from "./components/ContactSection";
import WaveDivider from "./components/WaveDivider";
import FloatingPrimaButton from "./components/FloatingPrimaButton";

export const metadata: Metadata = {
  title: "Calculadora Laboral Colombia 2025 | Calcular Prima, Liquidación y Nómina",
  description:
    "Calculadora laboral colombiana gratis. Calcula prima de servicios, liquidación laboral, nómina, horas extras y retención en la fuente. Herramientas actualizadas 2025.",
  keywords:
    "calculadora laboral, calculadora de liquidación, calculadora de prima, calcular prima, calculadora liquidación laboral, calculadora prima servicios, calculadora laboral colombia, liquidación laboral gratis, calculadora de liquidación laboral gratis, mi calculadora laboral, calculadora salarial, calculadora prima, calcular liquidación laboral, calculadora de liquidación colombia 2025",
};

const calculadoras = [
  {
    titulo: "Calculadora de Liquidación Laboral",
    descripcion:
      "Calculadora de liquidación laboral gratis - Calcula tu liquidación final incluyendo todas las prestaciones sociales según la ley colombiana",
    icono: BriefcaseIcon,
    href: "/calculadoras/liquidacion",
    keywords: [
      "calculadora de liquidación",
      "calculadora liquidación laboral",
      "liquidación laboral gratis",
      "calculadora de liquidación laboral gratis",
      "calcular liquidación laboral",
    ],
    color: "bg-blue-50 text-blue-600 ring-blue-100",
  },
  {
    titulo: "Calculadora de Nómina Salarial",
    descripcion:
      "Calculadora salarial Colombia - Calcula tu nómina mensual, salario neto y todas las deducciones laborales actualizadas 2025",
    icono: CalculatorIcon,
    href: "/calculadoras/nomina",
    keywords: [
      "calculadora salarial",
      "calculadora de nómina",
      "calculadora laboral",
      "salario neto",
      "nómina mensual colombia",
    ],
    color: "bg-green-50 text-green-600 ring-green-100",
  },
  {
    titulo: "Calculadora de Horas Extras",
    descripcion:
      "Calculadora laboral para horas extras - Calcula recargos nocturnos, dominicales y festivos según legislación colombiana 2025",
    icono: ClockIcon,
    href: "/calculadoras/horas-extras",
    keywords: [
      "calculadora horas extras",
      "calculadora laboral",
      "recargo nocturno colombia",
      "recargo dominical festivo",
      "horas extras colombia",
      "Reforma laboral 2025",
      "horas extras 2025",
      "recargo dominical festivo",
      "horas extras colombia",
      "Reforma laboral 2025",
      "horas extras 2025",
    ],
    color: "bg-purple-50 text-purple-600 ring-purple-100",
  },
  {
    titulo: "Calculadora Retención en la Fuente",
    descripcion: "Calculadora laboral retención - Calcula tu retención en la fuente mensual según la DIAN y legislación tributaria vigente",
    icono: CurrencyDollarIcon,
    href: "/calculadoras/retencion",
    keywords: [
      "calculadora retención fuente",
      "calculadora laboral",
      "retención en la fuente",
      "impuestos colombia",
      "calculadora tributaria",
    ],
    color: "bg-amber-50 text-amber-600 ring-amber-100",
  },
  {
    titulo: "Calculadora de Cesantías",
    descripcion:
      "Calculadora laboral cesantías - Calcula cesantías e intereses según el fondo de cesantías y legislación laboral colombiana",
    icono: BuildingLibraryIcon,
    href: "/calculadoras/cesantias",
    keywords: [
      "calculadora cesantías",
      "calculadora laboral",
      "intereses cesantías",
      "fondo cesantías colombia",
      "cesantías colombia 2025",
    ],
    color: "bg-indigo-50 text-indigo-600 ring-indigo-100",
  },
  {
    titulo: "Calculadora de Vacaciones",
    descripcion: "Calculadora laboral vacaciones - Calcula compensación vacacional, días acumulados y liquidación de descanso remunerado",
    icono: SunIcon,
    href: "/calculadoras/vacaciones",
    keywords: [
      "calculadora vacaciones",
      "calculadora laboral",
      "compensación vacacional",
      "días de vacaciones",
      "liquidación vacaciones colombia",
    ],
    color: "bg-cyan-50 text-cyan-600 ring-cyan-100",
  },
  {
    titulo: "Calculadora Prima de Servicios",
    descripcion:
      "Calculadora de prima - Calcula prima de servicios, prima de junio y diciembre según la legislación laboral colombiana actualizada",
    icono: BriefcaseIcon,
    href: "/calculadoras/prima",
    keywords: [
      "calculadora de prima",
      "calculadora prima servicios",
      "calcular prima",
      "prima de servicios colombia",
      "calculadora prima junio",
    ],
    color: "bg-teal-50 text-teal-600 ring-teal-100",
  },
  {
    titulo: "Calculadora Aportes Independientes",
    descripcion:
      "Calculadora laboral independientes - Calcula aportes a pensión, salud y otros gastos como trabajador independiente según legislación 2025",
    icono: BriefcaseIcon,
    href: "/calculadoras/aportes-independientes",
    keywords: [
      "calculadora aportes independientes",
      "calculadora laboral",
      "aportes pensión independientes",
      "aportes salud independientes",
      "trabajadores independientes colombia",
    ],
    color: "bg-rose-50 text-rose-600 ring-rose-100",
  },
];

// Nuevas secciones para mejorar la página
const beneficios = [
  {
    titulo: "Cálculos Precisos y Actualizados",
    descripcion:
      "Todos nuestros cálculos están basados en la legislación laboral colombiana vigente para 2025, incluyendo los últimos cambios normativos.",
    icono: DocumentTextIcon,
  },
  {
    titulo: "Ahorra Tiempo y Evita Errores",
    descripcion:
      "Automatiza tus cálculos laborales y obtén resultados precisos en segundos, evitando costosos errores administrativos.",
    icono: ClockIcon,
  },
  {
    titulo: "Seguridad y Confianza",
    descripcion:
      "Nuestras calculadoras están respaldadas por profesionales en derecho laboral con amplia experiencia en la legislación colombiana.",
    icono: ShieldCheckIcon,
  },
];

const estadisticas = [
  {
    cifra: "1.423.500",
    descripcion: "Salario mínimo legal vigente 2025 para calcular prima y liquidación",
    colorClase: "from-blue-500 to-blue-600",
  },
  {
    cifra: "24%",
    descripcion: "Aporte total seguridad social - Calculadora laboral precisa",
    colorClase: "from-green-500 to-green-600",
  },
  {
    cifra: "+15.000",
    descripcion: "Cálculos de liquidación laboral y prima realizados mensualmente",
    colorClase: "from-purple-500 to-purple-600",
  },
  {
    cifra: "100%",
    descripcion: "Calculadora de liquidación laboral gratis actualizada 2025",
    colorClase: "from-yellow-500 to-yellow-600",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Contact Bar */}
      <ContactBar />

      {/* Title Section */}
      <HeroSection />
      {/* Datos Estadísticos con diseño mejorado */}
      <div className="max-w-7xl mx-auto relative z-10">
        <StatisticsSection estadisticas={estadisticas} />

        {/* Banner Prima Junio 2025 */}
        <PrimaBanner />

        {/* Sección Calculadoras */}
        <CalculatorsSection calculadoras={calculadoras} />
        
        {/* Banner de anuncios 
        <AdBanner adSlot="1234567890" />*/}

        {/* Sección Beneficios */}
        <BenefitsSection beneficios={beneficios} />
        {/* Sección Informativa */}
        <InfoSection />

        {/* Banner Calculadora Empresarial */}
        <BusinessBanner />

        {/* Nueva sección de palabras clave específicas para SEO */}
        <section className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8" aria-labelledby="calculadoras-especificas">
          <div className="text-center mb-8">
            <h2 id="calculadoras-especificas" className="text-2xl font-bold text-gray-900 mb-4">
              Calculadoras Laborales Más Buscadas en Colombia
            </h2>
            <p className="text-gray-700">
              Herramientas especializadas para todos tus cálculos laborales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-blue-800 mb-2">Mi Calculadora Laboral</h3>
              <p className="text-sm text-gray-600">Calculadora laboral personalizada para trabajadores colombianos con todas las prestaciones actualizadas 2025.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-blue-800 mb-2">Calculadora de Liquidación Laboral Gratis</h3>
              <p className="text-sm text-gray-600">Calcula tu liquidación laboral sin costo, incluyendo cesantías, prima e indemnización según la ley.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-blue-800 mb-2">Calculadora Prima Servicios 2025</h3>
              <p className="text-sm text-gray-600">Calcula prima de servicios de junio y diciembre con la legislación laboral colombiana vigente.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-blue-800 mb-2">Calcular Liquidación Laboral</h3>
              <p className="text-sm text-gray-600">Herramienta precisa para calcular liquidación por terminación de contrato laboral en Colombia.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-blue-800 mb-2">Calculadora Salarial Colombia</h3>
              <p className="text-sm text-gray-600">Calcula salario neto, deducciones y aportes de seguridad social según la legislación 2025.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-blue-800 mb-2">Recargo Nocturno Colombia 2025</h3>
              <p className="text-sm text-gray-600">Calcula recargos nocturnos, dominicales y festivos según las tarifas laborales actualizadas.</p>
            </div>
          </div>
        </section>

        {/* Sección CTA 
        <CTASection />*/}

        {/* Sección Contacto */}
        <ContactSection />

        {/* Sección Newsletter 
        <NewsletterForm />*/}
      </div>

      {/* Subtle Wave Divider */}
      <WaveDivider />

      {/* Botón flotante para la calculadora de prima */}
      <FloatingPrimaButton />
      
      {/* Botón flotante para compartir la página 
      <ShareButton variant="floating" />*/}
    </main>
  );
}
