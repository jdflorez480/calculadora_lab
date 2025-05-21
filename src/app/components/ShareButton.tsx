'use client';

import React, { useState } from 'react';
import { ShareIcon, CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { trackUmamiEvent } from './UmamiAnalytics';

interface ShareButtonProps {
  title?: string;
  text?: string;
  className?: string;
  variant?: 'button' | 'icon' | 'floating';
}

const ShareButton: React.FC<ShareButtonProps> = ({
  title = 'Calculadoras Laborales de Colombia',
  text = 'Herramientas gratuitas para calcular prestaciones laborales en Colombia',
  className = '',
  variant = 'button',
}) => {
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Función para manejar el compartir
  const handleShare = async () => {
    trackUmamiEvent('share_click', { 
      action: 'share_page',
      method: 'web_share_api'
    });

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url: window.location.href,
        });
      } else {
        setShowDropdown(!showDropdown);
      }
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  };

  // Función para copiar el enlace al portapapeles
  const copyToClipboard = () => {
    trackUmamiEvent('share_click', { 
      action: 'copy_link',
      method: 'clipboard'
    });

    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
    setShowDropdown(false);
  };

  // Función para compartir en redes sociales específicas
  const shareToSocialMedia = (platform: string) => {
    trackUmamiEvent('share_click', { 
      action: 'share_to_social',
      platform
    });

    let shareUrl = '';
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(title);

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${pageTitle} ${pageUrl}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
    setShowDropdown(false);
  };

  // Diferentes variantes de visualización
  if (variant === 'floating') {
    return (
      <div className="fixed bottom-24 right-4 z-50 sm:right-8">
        <button
          onClick={handleShare}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Compartir esta página"
        >
          <ShareIcon className="h-6 w-6" />
        </button>

        {/* Dropdown para navegadores que no soportan Web Share API */}
        {showDropdown && (
          <div className="absolute bottom-16 right-0 bg-white rounded-md shadow-lg p-2 w-48">
            <button
              className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={() => shareToSocialMedia('whatsapp')}
            >
              Compartir por WhatsApp
            </button>
            <button
              className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={() => shareToSocialMedia('facebook')}
            >
              Compartir en Facebook
            </button>
            <button
              className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={() => shareToSocialMedia('twitter')}
            >
              Compartir en Twitter
            </button>
            <button
              className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={copyToClipboard}
            >
              <ClipboardIcon className="h-4 w-4 mr-2" />
              {copied ? 'Enlace copiado!' : 'Copiar enlace'}
              {copied && <CheckIcon className="h-4 w-4 text-green-500 ml-2" />}
            </button>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className="relative inline-block">
        <button
          onClick={handleShare}
          className={`p-2 rounded-full text-gray-600 hover:bg-gray-100 ${className}`}
          aria-label="Compartir esta página"
        >
          <ShareIcon className="h-5 w-5" />
        </button>

        {/* Dropdown para navegadores que no soportan Web Share API */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg p-2 w-48 z-10">
            <button
              className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={() => shareToSocialMedia('whatsapp')}
            >
              Compartir por WhatsApp
            </button>
            <button
              className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={() => shareToSocialMedia('facebook')}
            >
              Compartir en Facebook
            </button>
            <button
              className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={() => shareToSocialMedia('twitter')}
            >
              Compartir en Twitter
            </button>
            <button
              className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
              onClick={copyToClipboard}
            >
              <ClipboardIcon className="h-4 w-4 mr-2" />
              {copied ? 'Enlace copiado!' : 'Copiar enlace'}
              {copied && <CheckIcon className="h-4 w-4 text-green-500 ml-2" />}
            </button>
          </div>
        )}
      </div>
    );
  }

  // Variante por defecto: botón completo
  return (
    <div className="relative inline-block">
      <button
        onClick={handleShare}
        className={`flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 ${className}`}
        aria-label="Compartir esta página"
      >
        <ShareIcon className="h-5 w-5 mr-2" />
        Compartir
      </button>

      {/* Dropdown para navegadores que no soportan Web Share API */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg p-2 w-48 z-10">
          <button
            className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
            onClick={() => shareToSocialMedia('whatsapp')}
          >
            Compartir por WhatsApp
          </button>
          <button
            className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
            onClick={() => shareToSocialMedia('facebook')}
          >
            Compartir en Facebook
          </button>
          <button
            className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
            onClick={() => shareToSocialMedia('twitter')}
          >
            Compartir en Twitter
          </button>
          <button
            className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md"
            onClick={copyToClipboard}
          >
            <ClipboardIcon className="h-4 w-4 mr-2" />
            {copied ? 'Enlace copiado!' : 'Copiar enlace'}
            {copied && <CheckIcon className="h-4 w-4 text-green-500 ml-2" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
