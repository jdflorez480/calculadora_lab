'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GiftIcon, XMarkIcon } from '@heroicons/react/24/outline';

const FloatingPrimaButton = () => {  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Verificar si estamos en junio (5) o mayo (4) para mostrar el botón
  // Mantenemos este comentario para referencia pero no usamos la variable por ahora
  // const currentMonth = new Date().getMonth();
  // const isPrimaRelevantMonth = currentMonth === 4 || currentMonth === 5; // Mayo o Junio
  
  useEffect(() => {
    // Verificar si el usuario ya cerró el botón (usando localStorage)
    const primaButtonClosed = localStorage.getItem('primaButtonClosed');
    if (primaButtonClosed) {
      setIsVisible(false);
    }
    
    // Iniciar animación
    const animationInterval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 2000);
    
    return () => clearInterval(animationInterval);
  }, []);
  
  const handleClose = () => {
    setIsVisible(false);
    // Guardar preferencia del usuario
    localStorage.setItem('primaButtonClosed', 'true');
  };
  const handleButtonClick = () => {
    // Registrar evento en Umami cuando se hace clic en el botón flotante
   /*  trackUmamiEvent('button_click_float', { 
      element: 'floating_prima_button',
      location: 'floating',
      action: 'navigate_to_prima_calculator'
    }); */
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 sm:bottom-8 md:right-8 md:left-auto md:transform-none">
      <div className={`flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg px-4 py-3 pr-2 ${isAnimating ? 'animate-pulse' : ''}`}>
        <Link href="/calculadoras/prima" className="flex items-center" onClick={handleButtonClick}>
          <div className="bg-white rounded-full p-2 mr-3">
            <GiftIcon className="h-5 w-5 text-blue-600" />
          </div>
          <span className="font-medium mr-2">¡Calcula tu Prima de Junio!</span>
        </Link>
        <button 
          onClick={handleClose}
          className="ml-2 bg-blue-800/30 hover:bg-blue-800/50 rounded-full p-1 transition-colors"
          aria-label="Cerrar"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default FloatingPrimaButton;


