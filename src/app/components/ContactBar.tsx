import React from 'react';

const ContactBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-4 flex justify-between items-center mt-2 mb-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-200"
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
        <span className="font-medium">Contacto:</span>
        <a
          href="mailto:contacto@calculalaboral.com"
          className="hover:underline font-medium transition-colors duration-200 hover:text-blue-100"
        >
          contacto@calculalaboral.com
        </a>
      </div>
    </div>
  );
};

export default ContactBar;
