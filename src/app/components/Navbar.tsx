"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Liquidación', href: '/calculadoras/liquidacion' },
    { name: 'Nómina', href: '/calculadoras/nomina' },
    { name: 'Horas Extras', href: '/calculadoras/horas-extras' },
    { name: 'Retención', href: '/calculadoras/retencion' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
  ];

 return (
    <nav className={`fixed  w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="group flex items-center" title="Ir al inicio">
              <div className="relative">
                <div className="overflow-hidden rounded-lg transform transition-transform group-hover:scale-105 duration-300">
                  <Image
                    src="/images/logo.png"
                    alt="Logo Calculadora Laboral"
                    width={40}
                    height={40}
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 bg-blue-600 rounded-full p-1 shadow-lg transform group-hover:scale-110 transition-all duration-300 group-hover:bg-blue-700">
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
              <div className="ml-3 flex flex-col">
                <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Calculadora Laboral
                </span>
                <span className="text-xs text-gray-500 -mt-1 hidden md:block">
                  Tu asistente legal en Colombia
                </span>
              </div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </Link>
              ))}
              <div className="flex items-center ml-4 bg-blue-50 px-3 rounded-full shadow-sm">
                <Image
                  src="/images/bandera_colombia.png"
                  alt="Bandera de Colombia"
                  width={28}
                  height={18}
                  className="rounded shadow-sm transform hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1 bg-gray-50 rounded-b-lg shadow-inner">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium mx-2 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center justify-center py-2 border-t border-gray-200 mt-2">
            <Image
              src="/images/bandera_colombia.png"
              alt="Bandera de Colombia"
              width={28}
              height={18}
              className="rounded shadow-sm"
            />
            <span className="ml-2 text-sm text-gray-500">Colombia</span>
          </div>
        </div>
      </div>
    </nav>
    
  );
}