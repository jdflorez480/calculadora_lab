const blogPosts = [
  {
    title: 'Cambios en el Salario Mínimo y Subsidio de Transporte 2025',
    description: 'Análisis detallado del nuevo salario mínimo de $1.423.500 y subsidio de transporte de $200.000. Impacto en prestaciones sociales y recomendaciones.',
    link: 'https://www.calculalaboral.com/blog/salario-minimo-2025',
    pubDate: new Date('2025-04-22').toUTCString(),
    category: 'Actualidad Laboral'
  },
  {
    title: 'Guía Completa de Prima de Servicios Junio 2025',
    description: 'Todo lo que necesitas saber sobre la prima de servicios: cálculo, fechas de pago, casos especiales y preguntas frecuentes.',
    link: 'https://www.calculalaboral.com/blog/guia-prima-servicios-2025',
    pubDate: new Date('2025-04-20').toUTCString(),
    category: 'Guías'
  },
  {
    title: 'Nuevas Regulaciones en el Trabajo Remoto 2025',
    description: 'Actualización sobre las normas de trabajo remoto y teletrabajo: derechos, obligaciones y beneficios.',
    link: 'https://www.calculalaboral.com/blog/regulaciones-trabajo-remoto-2025',
    pubDate: new Date('2025-04-15').toUTCString(),
    category: 'Legislación'
  },
  {
    title: 'Cómo Optimizar tu Declaración de Renta 2025',
    description: 'Estrategias efectivas para la declaración de renta: deducciones permitidas y beneficios tributarios.',
    link: 'https://www.calculalaboral.com/blog/optimizar-declaracion-renta-2025',
    pubDate: new Date('2025-04-10').toUTCString(),
    category: 'Impuestos'
  },
  {
    title: 'Horas Extras y Recargos: Lo Que Debes Saber en 2025',
    description: 'Guía actualizada sobre el cálculo de horas extras, recargos nocturnos, dominicales y festivos.',
    link: 'https://www.calculalaboral.com/blog/guia-horas-extras-2025',
    pubDate: new Date('2025-04-05').toUTCString(),
    category: 'Guías'
  },
  {
    title: 'Cesantías e Intereses: Fechas Clave para 2025',
    description: 'Calendario completo de fechas importantes para cesantías y sus intereses.',
    link: 'https://www.calculalaboral.com/blog/cesantias-fechas-2025',
    pubDate: new Date('2025-04-01').toUTCString(),
    category: 'Prestaciones'
  },
  {
    title: 'Novedades en Seguridad Social para 2025',
    description: 'Cambios importantes en aportes a salud, pensión y ARL. Actualización de bases de cotización.',
    link: 'https://www.calculalaboral.com/blog/novedades-seguridad-social-2025',
    pubDate: new Date('2025-03-28').toUTCString(),
    category: 'Seguridad Social'
  },
  {
    title: 'Licencias Laborales: Guía Completa 2025',
    description: 'Todo sobre licencias de maternidad, paternidad, luto y demás permisos laborales.',
    link: 'https://www.calculalaboral.com/blog/licencias-laborales-2025',
    pubDate: new Date('2025-03-25').toUTCString(),
    category: 'Guías'
  },
  {
    title: 'Reforma Pensional 2025: Impacto y Cambios',
    description: 'Análisis detallado de la reforma pensional y sus implicaciones.',
    link: 'https://www.calculalaboral.com/blog/reforma-pensional-2025',
    pubDate: new Date('2025-03-20').toUTCString(),
    category: 'Legislación'
  },
  {
    title: 'Vacaciones: Derechos y Cálculos 2025',
    description: 'Guía actualizada sobre el derecho a vacaciones, cálculo de días y compensación.',
    link: 'https://www.calculalaboral.com/blog/guia-vacaciones-2025',
    pubDate: new Date('2025-03-15').toUTCString(),
    category: 'Guías'
  }
];

function generateRSSFeed(): string {
  const feedItems = blogPosts
    .map(post => `
      <item>
        <title>${post.title}</title>
        <link>${post.link}</link>
        <description>${post.description}</description>
        <pubDate>${post.pubDate}</pubDate>
        <category>${post.category}</category>
        <guid>${post.link}</guid>
      </item>
    `)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Blog Laboral Colombia</title>
        <link>https://www.calculalaboral.com/blog</link>
        <description>Noticias y guías sobre legislación laboral colombiana, prestaciones sociales y derecho laboral.</description>
        <language>es-co</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="https://www.calculalaboral.com/feed.xml" rel="self" type="application/rss+xml"/>
        ${feedItems}
      </channel>
    </rss>`;
}

export async function GET() {
  return new Response(generateRSSFeed(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}