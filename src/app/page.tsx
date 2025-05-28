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
import ShareButton from "./components/ShareButton";
import AdBanner from "./components/AdBanner";

export const metadata: Metadata = {
  title: "Calculadoras Laborales Colombia | Herramientas Laborales 2025",
  description:
    "Calcula liquidación, nómina, horas extras, retención en la fuente y prestaciones sociales con nuestras calculadoras laborales colombianas actualizadas a 2025.",
  keywords:
    "calculadora laboral colombia, liquidación, nómina, horas extras, retención en la fuente, cesantías, prima, vacaciones, legislación laboral colombiana 2025",
};

const calculadoras = [
  {
    titulo: "Liquidación Laboral",
    descripcion:
      "Calcula tu liquidación final incluyendo todas tus prestaciones sociales",
    icono: BriefcaseIcon,
    href: "/calculadoras/liquidacion",
    keywords: [
      "liquidación laboral",
      "prestaciones sociales",
      "indemnización",
      "terminación contrato",
      "finiquito",
    ],
    color: "bg-blue-50 text-blue-600 ring-blue-100",
  },
  {
    titulo: "Calculadora de Nómina",
    descripcion:
      "Calcula tu salario neto mensual incluyendo todas las deducciones",
    icono: CalculatorIcon,
    href: "/calculadoras/nomina",
    keywords: [
      "nómina mensual",
      "salario neto",
      "deducciones",
      "aportes seguridad social",
      "parafiscales",
    ],
    color: "bg-green-50 text-green-600 ring-green-100",
  },
  {
    titulo: "Horas Extras",
    descripcion:
      "Calcula el valor de tus horas extras, recargos nocturnos y dominicales",
    icono: ClockIcon,
    href: "/calculadoras/horas-extras",
    keywords: [
      "horas extras",
      "recargo nocturno",
      "dominicales",
      "festivos",
      "jornada laboral",
    ],
    color: "bg-purple-50 text-purple-600 ring-purple-100",
  },
  {
    titulo: "Retención en la Fuente",
    descripcion: "Calcula el valor de tu retención en la fuente mensual",
    icono: CurrencyDollarIcon,
    href: "/calculadoras/retencion",
    keywords: [
      "retención fuente",
      "impuestos",
      "declaración renta",
      "deducciones fiscales",
      "tributarios",
    ],
    color: "bg-amber-50 text-amber-600 ring-amber-100",
  },
  {
    titulo: "Cesantías",
    descripcion:
      "Calcula tus cesantías e intereses según la legislación colombiana",
    icono: BuildingLibraryIcon,
    href: "/calculadoras/cesantias",
    keywords: [
      "cesantías",
      "intereses cesantías",
      "fondo cesantías",
      "liquidación anual",
      "ahorro laboral",
    ],
    color: "bg-indigo-50 text-indigo-600 ring-indigo-100",
  },
  {
    titulo: "Vacaciones",
    descripcion: "Calcula el valor de tus vacaciones y días acumulados",
    icono: SunIcon,
    href: "/calculadoras/vacaciones",
    keywords: [
      "vacaciones",
      "días acumulados",
      "compensación",
      "descanso remunerado",
      "liquidación vacacional",
    ],
    color: "bg-cyan-50 text-cyan-600 ring-cyan-100",
  },
  {
    titulo: "Aportes Independientes",
    descripcion:
      "Calcula tus aportes a pensión, salud y otros gastos como independiente",
    icono: BriefcaseIcon,
    href: "/calculadoras/aportes-independientes",
    keywords: [
      "aportes independientes",
      "pensión",
      "salud",
      "impuestos",
      "trabajadores independientes",
    ],
    color: "bg-teal-50 text-teal-600 ring-teal-100",
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
    descripcion: "Salario mínimo legal vigente 2025 (COP)",
    colorClase: "from-blue-500 to-blue-600",
  },
  {
    cifra: "24%",
    descripcion: "Aporte total a seguridad social por empleador",
    colorClase: "from-green-500 to-green-600",
  },
  {
    cifra: "+10.000",
    descripcion: "Cálculos realizados por mes",
    colorClase: "from-purple-500 to-purple-600",
  },
  {
    cifra: "100%",
    descripcion: "Cumplimiento con legislación laboral actualizada",
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
