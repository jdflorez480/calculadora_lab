import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.calculalaboral.com';
  // URLs principales
  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified: new Date('2025-05-22'),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
  ];

  // Calculadoras
  const calculadorasRoutes = [
    {
      url: `${baseUrl}/calculadoras/prima`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9, // Alta prioridad por ser una calculadora importante y temporal
    },
    {
      url: `${baseUrl}/calculadoras/nomina`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculadoras/liquidacion`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculadoras/horas-extras`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculadoras/retencion`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculadoras/vacaciones`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculadoras/cesantias`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculadoras/aportes-independientes`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];
  // Artículos del blog
  const blogArticles = [
    {
      url: `${baseUrl}/blog/reforma-laboral-2025/aprendices-sena-reforma-laboral`,
      lastModified: new Date('2025-06-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/guia-horas-extras-2025/recargo-dominical-festivo-2025`,
      lastModified: new Date('2025-06-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/guia-horas-extras-2025/recargo-nocturno-colombia-2025`,
      lastModified: new Date('2025-06-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/salario-minimo-2025`,
      lastModified: new Date('2025-04-22'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/guia-prima-servicios-2025`,
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/guia-horas-extras-2025`,
      lastModified: new Date('2025-04-05'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/regulaciones-trabajo-remoto-2025`,
      lastModified: new Date('2025-04-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/optimizar-declaracion-renta-2025`,
      lastModified: new Date('2025-04-10'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/cesantias-fechas-2025`,
      lastModified: new Date('2025-04-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/licencias-laborales-2025`,
      lastModified: new Date('2025-03-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/reforma-pensional-2025`,
      lastModified: new Date('2025-03-20'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/guia-vacaciones-2025`,
      lastModified: new Date('2025-03-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/novedades-seguridad-social-2025`,
      lastModified: new Date('2025-03-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/reforma-laboral-2025/aprendices-sena-reforma-laboral`,
      lastModified: new Date('2025-06-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/guia-horas-extras-2025/recargo-dominical-festivo-2025`,
      lastModified: new Date('2025-06-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/guia-horas-extras-2025/recargo-nocturno-colombia-2025`,
      lastModified: new Date('2025-06-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  return [...mainRoutes, ...calculadorasRoutes, ...blogArticles];
}