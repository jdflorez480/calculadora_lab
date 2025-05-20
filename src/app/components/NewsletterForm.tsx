'use client';

import { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validación básica
    if (!email || !isChecked) {
      return;
    }

    try {
      // La URL del formulario Brevo
      const response = await fetch(
        'https://sibforms.com/serve/MUIFAG8nL0m708wgNbVxGiKoqDo27HNRGoc6uthInMMHkjol9_ykFvFMY9fxqK-PNIUPCgYgaXiiG3NWQyQYnKDgsOqfH6KzCgvMgLA9HlTL-JP8gMlBG_ElqdGtccO8KEGasRB1XIU5jGLx8gI-_Q7l0bmVay94rrTZpWGxkBbOnot-l4ti5IZvmIV7Z4yiSIO-5kAZyBL1UywQ',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            EMAIL: email,
            OPT_IN: isChecked ? '1' : '0',
            locale: 'es',
          }),
        }
      );

      if (response.ok) {
        setFormStatus('success');
        setEmail('');
        setIsChecked(false);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };
  return (
    <div className="w-full  my-8 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Mensajes de error/éxito */}
      {formStatus === 'error' && (
       <div className="mx-4 mt-4 p-3 bg-green-50 border border-green-400 rounded-lg text-green-800 text-sm">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 512 512">
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
            </svg>
            <span>Se ha realizado su suscripción.</span>
          </div>
        </div>
      )}

      {formStatus === 'success' && (
        <div className="mx-4 mt-4 p-3 bg-green-50 border border-green-400 rounded-lg text-green-800 text-sm">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 512 512">
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
            </svg>
            <span>Se ha realizado su suscripción.</span>
          </div>
        </div>
      )}

      <div className="px-6 py-6 flex flex-col md:flex-row md:items-center">
        {/* Columna izquierda: Título y descripción */}
        <div className="md:w-1/3 pr-6">
          <h3 className="text-2xl font-bold text-gray-800">Newsletter</h3>
          <p className="text-gray-600 mt-2">
            Suscríbase a nuestra newsletter para recibir nuestras novedades.
          </p>
        </div>

        {/* Columna derecha: Formulario */}
        <div className="md:w-2/3 mt-4 md:mt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="email" 
                className="block text-gray-700 font-semibold text-sm mb-1"
              >
                Introduzca su dirección de e-mail para suscribirse*
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-3 text-gray-950 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  placeholder="EMAIL"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 cursor-pointer hover:bg-gray-700 text-white font-bold rounded-md transition duration-200 whitespace-nowrap text-sm"
                >
                  SUSCRIBIRSE
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Introduzca su dirección de e-mail para suscribirse. Ej.: abc@xyz.com
              </p>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="optin"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500"
                required
              />
              <div className="ml-2">
                <label htmlFor="optin" className="block text-sm text-gray-700">
                  Acepto las condiciones y recibir sus newsletters.
                </label>
                <p className="text-xs text-gray-500">
                  Puede cancelar su suscripción cuando quiera mediante el enlace de nuestra newsletter.
                </p>
              </div>
            </div>

            {/* Aviso legal */}
            <div className="flex items-center p-3 bg-gray-50 rounded-md text-xs text-gray-600">
              <svg className="w-8 h-8 text-blue-500 flex-shrink-0" viewBox="0 0 63 63">
                <path d="M31.54 0l1.05 3.06 3.385-.01-2.735 1.897 1.05 3.042-2.748-1.886-2.738 1.886 1.044-3.05-2.745-1.897h3.393zm13.97 3.019L46.555 6.4l3.384.01-2.743 2.101 1.048 3.387-2.752-2.1-2.752 2.1 1.054-3.382-2.745-2.105h3.385zm9.998 10.056l1.039 3.382h3.38l-2.751 2.1 1.05 3.382-2.744-2.091-2.743 2.091 1.054-3.381-2.754-2.1h3.385zM58.58 27.1l1.04 3.372h3.379l-2.752 2.096 1.05 3.387-2.744-2.091-2.75 2.092 1.054-3.387-2.747-2.097h3.376zm-3.076 14.02l1.044 3.364h3.385l-2.743 2.09 1.05 3.392-2.744-2.097-2.743 2.097 1.052-3.377-2.752-2.117 3.385-.01zm-9.985 9.91l1.045 3.364h3.393l-2.752 2.09 1.05 3.393-2.745-2.097-2.743 2.097 1.05-3.383-2.751-2.1 3.384-.01zM31.45 55.01l1.044 3.043 3.393-.008-2.752 1.9L34.19 63l-2.744-1.895-2.748 1.891 1.054-3.05-2.743-1.9h3.384zm-13.934-3.98l1.036 3.364h3.402l-2.752 2.09 1.053 3.393-2.747-2.097-2.752 2.097 1.053-3.382-2.743-2.1 3.384-.01zm-9.981-9.91l1.045 3.364h3.398l-2.748 2.09 1.05 3.392-2.753-2.1-2.752 2.096 1.053-3.382-2.743-2.102 3.384-.009zM4.466 27.1l1.038 3.372H8.88l-2.752 2.097 1.053 3.387-2.743-2.09-2.748 2.09 1.053-3.387L0 30.472h3.385zm3.069-14.025l1.045 3.382h3.395L9.23 18.56l1.05 3.381-2.752-2.09-2.752 2.09 1.053-3.381-2.744-2.1h3.384zm9.99-10.056L18.57 6.4l3.393.01-2.743 2.1 1.05 3.373-2.754-2.092-2.751 2.092 1.053-3.382-2.744-2.1h3.384zm24.938 19.394l-10-4.22a2.48 2.48 0 00-1.921 0l-10 4.22A2.529 2.529 0 0019 24.75c0 10.47 5.964 17.705 11.537 20.057a2.48 2.48 0 001.921 0C36.921 42.924 44 36.421 44 24.75a2.532 2.532 0 00-1.537-2.336zm-2.46 6.023l-9.583 9.705a.83.83 0 01-1.177 0l-5.416-5.485a.855.855 0 010-1.192l1.177-1.192a.83.83 0 011.177 0l3.65 3.697 7.819-7.916a.83.83 0 011.177 0l1.177 1.191a.843.843 0 010 1.192z" fill="#0092FF"></path>
              </svg>
              <p className="ml-2">
                Usamos Brevo como plataforma de marketing. Al enviar este formulario, aceptas que los datos personales que proporcionaste se transferirán a Brevo para su procesamiento, de acuerdo con{' '}
                <a 
                  href="https://www.brevo.com/es/legal/privacypolicy/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  la Política de privacidad de Brevo.
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
