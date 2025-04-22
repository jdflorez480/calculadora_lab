'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: '¿Qué son las prestaciones sociales?',
    answer: 'Las prestaciones sociales son beneficios adicionales al salario que todo empleador debe pagar a sus trabajadores. Incluyen prima de servicios, cesantías, intereses sobre cesantías y vacaciones.',
    category: 'Conceptos Básicos'
  },
  {
    question: '¿Cómo se calcula la prima de servicios?',
    answer: 'La prima de servicios equivale a 15 días de salario por cada semestre trabajado. Se calcula tomando el salario base más el auxilio de transporte (si aplica) multiplicado por los días trabajados y dividido entre 360.',
    category: 'Cálculos'
  },
  {
    question: '¿Quién tiene derecho al auxilio de transporte?',
    answer: 'Tienen derecho al auxilio de transporte los trabajadores que devenguen hasta dos salarios mínimos legales mensuales vigentes (SMLMV).',
    category: 'Derechos Laborales'
  },
  {
    question: '¿Cómo se calculan las horas extras?',
    answer: 'Las horas extras diurnas tienen un recargo del 25% sobre el valor de la hora ordinaria. Las horas extras nocturnas tienen un recargo del 75%. Los domingos y festivos tienen un recargo del 75% sobre la hora ordinaria.',
    category: 'Cálculos'
  }
];

export default function FAQPage() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Preguntas Frecuentes</h1>
          <p className="mt-4 text-xl text-gray-600">
            Resolvemos tus dudas sobre temas laborales en Colombia
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between">
          <input
            type="text"
            placeholder="Buscar pregunta..."
            className="px-4 py-2 border text-gray-600 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setActiveQuestion(activeQuestion === faq.question ? null : faq.question)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    activeQuestion === faq.question ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {activeQuestion === faq.question && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}