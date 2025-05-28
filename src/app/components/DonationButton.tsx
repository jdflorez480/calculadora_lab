'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { trackUmamiEvent } from './UmamiAnalytics';
import { XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';

interface DonationButtonProps {
  variant?: 'floating' | 'inline' | 'footer';
  className?: string;
}

const DonationButton: React.FC<DonationButtonProps> = ({ 
  variant = 'inline',
  className = '' 
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleDonationClick = () => {
    trackUmamiEvent('donation_modal_open', { 
      action: 'donation_modal_opened',
      variant: variant
    });
    
    setShowModal(true);
  };

  const handleConfirmDonation = () => {
    trackUmamiEvent('donation_click', { 
      action: 'donation_confirmed',
      variant: variant
    });
    
    setShowModal(false);
    window.open('https://link.mercadopago.com.co/calculalaboral', '_blank', 'noopener,noreferrer');
  };

  const handleCloseModal = () => {
    trackUmamiEvent('donation_modal_close', { 
      action: 'donation_modal_closed',
      variant: variant
    });
    
    setShowModal(false);
  };
  if (variant === 'floating') {
    return (
      <>
        <div className="fixed bottom-4 right-4 z-50 sm:right-8">
          <button
            onClick={handleDonationClick}
            className="group cursor-pointer flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            aria-label="Apoyar con una donación"
          >
            <Image
              src="/images/kofi.png"
              alt="Donar"
              width={24}
              height={24}
              className="transition-transform group-hover:scale-110"
            />
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-16 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            ¡Apoya nuestro trabajo!
          </div>
        </div>        {/* Modal motivacional */}
        {showModal && (
          <div className="fixed inset-0 bg-blue-50 bg-opacity-95 z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-xl border border-blue-100 transform transition-all">
              <div className="relative p-6">
                {/* Botón cerrar */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                {/* Contenido del modal */}
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-pink-100 to-red-100 mb-4">
                    <HeartIcon className="h-8 w-8 text-red-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ¡Ayúdanos a mantener esta herramienta!
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Estas calculadoras son completamente gratuitas y las mantenemos actualizadas 
                    constantemente. Tu apoyo nos ayuda a seguir brindando este servicio a miles 
                    de trabajadores colombianos.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleConfirmDonation}
                      className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      ¡Sí, quiero apoyar! 💚
                    </button>
                   <button
                      onClick={handleCloseModal}
                      className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                    >
                      Ahora no 💔
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-4">
                    Cualquier monto es de gran ayuda ❤️
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  if (variant === 'footer') {
    return (
      <>
        <button
          onClick={handleDonationClick}
          className={`group inline-flex items-center cursor-pointer gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-medium text-sm hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-md ${className}`}
          aria-label="Apoyar con una donación"
        >
          <Image
            src="/images/kofi.png"
            alt="Donar"
            width={20}
            height={20}
            className="transition-transform group-hover:scale-110"
          />
          <span>¡Apóyanos!</span>
        </button>        {/* Modal motivacional para footer */}
        {showModal && (
          <div className="fixed inset-0 bg-blue-50 bg-opacity-95 z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-xl border border-blue-100 transform transition-all">
              <div className="relative p-6">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-pink-100 to-red-100 mb-4">
                    <HeartIcon className="h-8 w-8 text-red-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ¡Ayúdanos a mantener esta herramienta!
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Estas calculadoras son completamente gratuitas y las mantenemos actualizadas 
                    constantemente. Tu apoyo nos ayuda a seguir brindando este servicio a miles 
                    de trabajadores colombianos.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleConfirmDonation}
                      className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      ¡Sí, quiero apoyar! 💚
                    </button>
                    <button
                      onClick={handleCloseModal}
                      className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                    >
                      Ahora no  💔
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-4">
                    Cualquier monto es de gran ayuda ❤️
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  // Variante inline por defecto
  return (
    <>
      <button
        onClick={handleDonationClick}
        className={`group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold text-base hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg ${className}`}
        aria-label="Apoyar con una donación"
      >
        <Image
          src="/images/kofi.png"
          alt="Donar"
          width={24}
          height={24}
          className="transition-transform group-hover:scale-110"
        />
        <span>Apoya nuestro trabajo</span>
      </button>      {/* Modal motivacional para inline */}
      {showModal && (
        <div className="fixed inset-0 bg-blue-50 bg-opacity-95 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-xl border border-blue-100 transform transition-all">
            <div className="relative p-6">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-pink-100 to-red-100 mb-4">
                  <HeartIcon className="h-8 w-8 text-red-500" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ¡Ayúdanos a mantener esta herramienta!
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Estas calculadoras son completamente gratuitas y las mantenemos actualizadas 
                  constantemente. Tu apoyo nos ayuda a seguir brindando este servicio a miles 
                  de trabajadores colombianos.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleConfirmDonation}
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    ¡Sí, quiero apoyar! 💚
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    Ahora no  💔
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  Cualquier monto es de gran ayuda ❤️
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationButton;
