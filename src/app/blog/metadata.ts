import { Metadata } from 'next';

const blogMetadata: Metadata = {
  title: 'Blog Laboral Colombia | Noticias y Actualizaciones 2025',
  description: 'Artículos actualizados sobre legislación laboral colombiana, prestaciones sociales, impuestos y seguridad social. Mantente informado sobre tus derechos laborales.',
  keywords: 'blog laboral, noticias laborales, legislación laboral colombia, prestaciones sociales, salario mínimo 2025, prima de servicios, cesantías, vacaciones, reforma pensional',
  authors: [{ name: 'Calculadora Laboral Colombia' }],
  alternates: {
    canonical: 'https://www.calculalaboral.com/blog'
  },
  openGraph: {
    title: 'Blog Laboral Colombia | Calculadora Laboral',
    description: 'Información actualizada sobre legislación laboral colombiana, prestaciones sociales y derechos laborales.',
    url: 'https://www.calculalaboral.com/blog',
    siteName: 'Calculadora Laboral Colombia',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Blog Laboral Colombia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Laboral Colombia | Calculadora Laboral',
    description: 'Información actualizada sobre legislación laboral colombiana y derechos laborales.',
    images: ['/images/logo.png'],
  }
};

export default blogMetadata;