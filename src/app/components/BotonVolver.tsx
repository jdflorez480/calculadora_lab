'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface BotonVolverProps {
  href?: string;
}

export default function BotonVolver({ href = '/' }: BotonVolverProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center p-2 text-sm text-gray-700 bg-white hover:bg-gray-50 rounded-lg hover:text-blue-600 transition-all duration-200 shadow-sm border border-gray-200"
      title="Volver atrás"
    >
      <ArrowLeftIcon className="h-5 w-5 mr-1" />
      <span>Volver</span>
    </Link>
  );
}