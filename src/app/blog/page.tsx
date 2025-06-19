'use client';

import Link from 'next/link';
import { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '13',
    title: 'Aprendices del SENA: ¿Cuánto ganan y qué cambia con la reforma laboral 2025?',
    excerpt: 'Descubre las novedades para aprendices SENA con la reforma laboral: contrato laboral formal, salario entre 75-100% del mínimo y todas las prestaciones sociales.',
    date: '2025-06-19',
    category: 'Reforma Laboral',
    slug: 'reforma-laboral-2025/aprendices-sena-reforma-laboral'
  },
  {
    id: '12',
    title: '¿Cuánto es el recargo dominical y festivo en Colombia según la reforma laboral?',
    excerpt: 'Descubre cómo cambia el recargo dominical con la reforma laboral: del 75% actual aumentará hasta el 100% en 2027. Incluye ejemplos de cálculo y tablas con los valores por año.',
    date: '2025-06-19',
    category: 'Reforma Laboral',
    slug: 'guia-horas-extras-2025/recargo-dominical-festivo-2025'
  },
  {
    id: '11',
    title: '¿A qué hora inicia el recargo nocturno en Colombia desde 2025?',
    excerpt: 'Todo sobre el cambio en el horario de recargo nocturno con la Reforma Laboral 2025: ahora inicia a las 7:00 p.m. en lugar de las 9:00 p.m. Aprende cómo calcularlo correctamente.',
    date: '2025-06-19',
    category: 'Reforma Laboral',
    slug: 'guia-horas-extras-2025/recargo-nocturno-colombia-2025'
  },
  {
    id: '1',
    title: 'Cambios en el Salario Mínimo y Subsidio de Transporte 2025',
    excerpt: 'Análisis detallado del nuevo salario mínimo de $1.423.500 y subsidio de transporte de $200.000. Impacto en prestaciones sociales y recomendaciones para empleadores y trabajadores.',
    date: '2025-04-22',
    category: 'Actualidad Laboral',
    slug: 'salario-minimo-2025'
  },
  {
    id: '2',
    title: 'Guía Completa de Prima de Servicios Junio 2025',
    excerpt: 'Todo lo que necesitas saber sobre la prima de servicios: cálculo, fechas de pago, casos especiales y preguntas frecuentes actualizadas para 2025.',
    date: '2025-04-20',
    category: 'Guías',
    slug: 'guia-prima-servicios-2025'
  },
  {
    id: '3',
    title: 'Nuevas Regulaciones en el Trabajo Remoto 2025',
    excerpt: 'Actualización sobre las normas de trabajo remoto y teletrabajo: derechos, obligaciones y beneficios tanto para empleadores como trabajadores.',
    date: '2025-04-15',
    category: 'Legislación',
    slug: 'regulaciones-trabajo-remoto-2025'
  },
  {
    id: '4',
    title: 'Cómo Optimizar tu Declaración de Renta 2025',
    excerpt: 'Estrategias efectivas para la declaración de renta: deducciones permitidas, beneficios tributarios y consejos para maximizar tu devolución.',
    date: '2025-04-10',
    category: 'Impuestos',
    slug: 'optimizar-declaracion-renta-2025'
  },
  {
    id: '5',
    title: 'Horas Extras y Recargos: Lo Que Debes Saber en 2025',
    excerpt: 'Guía actualizada sobre el cálculo de horas extras, recargos nocturnos, dominicales y festivos. Incluye ejemplos prácticos y casos especiales.',
    date: '2025-04-05',
    category: 'Guías',
    slug: 'guia-horas-extras-2025'
  },
  {
    id: '6',
    title: 'Cesantías e Intereses: Fechas Clave para 2025',
    excerpt: 'Calendario completo de fechas importantes para cesantías y sus intereses, incluyendo plazos de consignación y retiro para diferentes propósitos.',
    date: '2025-04-01',
    category: 'Prestaciones',
    slug: 'cesantias-fechas-2025'
  },
  {
    id: '7',
    title: 'Novedades en Seguridad Social para 2025',
    excerpt: 'Cambios importantes en aportes a salud, pensión y ARL. Actualización de bases de cotización y nuevos beneficios para trabajadores.',
    date: '2025-03-28',
    category: 'Seguridad Social',
    slug: 'novedades-seguridad-social-2025'
  },
  {
    id: '8',
    title: 'Licencias Laborales: Guía Completa 2025',
    excerpt: 'Todo sobre licencias de maternidad, paternidad, luto y demás permisos laborales. Incluye procedimientos y requisitos actualizados.',
    date: '2025-03-25',
    category: 'Guías',
    slug: 'licencias-laborales-2025'
  },
  {
    id: '9',
    title: 'Reforma Pensional 2025: Impacto y Cambios',
    excerpt: 'Análisis detallado de la reforma pensional, sus implicaciones para trabajadores actuales y futuros pensionados.',
    date: '2025-03-20',
    category: 'Legislación',
    slug: 'reforma-pensional-2025'
  },
  {
    id: '10',
    title: 'Vacaciones: Derechos y Cálculos 2025',
    excerpt: 'Guía actualizada sobre el derecho a vacaciones, cálculo de días, compensación en dinero y casos especiales.',
    date: '2025-03-15',
    category: 'Guías',
    slug: 'guia-vacaciones-2025'
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Blog Laboral</h1>
          <p className="mt-4 text-xl text-gray-600">
            Artículos y guías sobre legislación laboral colombiana
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between">
          <input
            type="text"
            placeholder="Buscar artículos..."
            className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(post => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('es-CO', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="mt-4 text-blue-600 font-medium">Leer más →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}