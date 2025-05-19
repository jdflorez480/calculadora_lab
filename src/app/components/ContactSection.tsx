import React from 'react';

const ContactSection = () => {
  return (
    <div className="mt-20 mb-12 relative z-20 bg-white rounded-xl overflow-hidden shadow-xl border border-blue-100">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-5 px-6">
        <h2 className="text-2xl font-bold text-white text-center">
          Contacto y Soporte
        </h2>
      </div>
      <div className="p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <p className="text-lg text-gray-700">
              Desarrollado para ayudar a los trabajadores colombianos. Todos
              los cálculos se realizan según la legislación laboral vigente.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    ¿Tienes dudas o sugerencias?
                  </p>
                  <a
                    href="mailto:contacto@calculalaboral.com"
                    className="text-blue-600 font-medium text-lg hover:underline"
                  >
                    contacto@calculalaboral.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-inner max-w-md w-full">
            <p className="font-medium text-gray-800 mb-3">
              También puedes contactarnos si:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Crees que algún cálculo no es correcto
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Deseas que agreguemos una nueva calculadora
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Tienes interés en publicidad o colaboraciones
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
