import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { ArrowDownTrayIcon, ShareIcon } from '@heroicons/react/24/outline';
import {
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  WhatsappIcon,
  LinkedinIcon,
  FacebookIcon,
} from 'react-share';
import { EmailShareButton, EmailIcon } from 'react-share';
import { trackUmamiEvent } from './UmamiAnalytics';

interface Resultado {
  concepto: string;
  valor: number;
  descripcion?: string;
}

interface ResultadoCalculoProps {
  resultados: Resultado[];
  total: number;
  titulo: string;
  subtitulo?: string;
}

const ResultadoCalculo = ({ resultados, total, titulo, subtitulo }: ResultadoCalculoProps) => {
  const [showShare, setShowShare] = useState(false);

  const formatCurrency = (value: number) => {
    const absValue = Math.abs(value);
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(absValue);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = `${titulo} - Total: ${formatCurrency(total)}`;
  const shareMessage = `He calculado mi ${titulo.toLowerCase()} usando la Calculadora Laboral Colombia. Resultado: ${formatCurrency(total)}`;

  const getValueClass = (valor: number) => {
    return valor < 0 ? 'text-red-600' : 'text-gray-900';
  };
  const generarPDF = () => {
    // Registrar evento en Umami cuando se descarga el PDF
    trackUmamiEvent('download_pdf', {
      action: 'download_pdf',
      content_type: titulo.toLowerCase().replace(/ /g, '_'),
      total_amount: total
    });
    
    const doc = new jsPDF();
    
    // Configuración inicial del documento
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    
    // Encabezado
    doc.setTextColor(0, 47, 167); // Azul corporativo
    doc.text("Liquidación Laboral", doc.internal.pageSize.width/2, 20, { align: "center" });
    // Información del documento
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    const fecha = new Date().toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Añadir información del documento
    doc.text(`Fecha de generación: ${fecha}`, 20, 40);
    if (subtitulo) {
      doc.text(subtitulo, 20, 50);
    }

    // Línea separadora
    doc.setDrawColor(0, 47, 167);
    doc.setLineWidth(0.5);
    doc.line(20, 55, 190, 55);

    // Tabla de resultados
    let y = 70;
    doc.setFontSize(11);
    
    // Cabecera de la tabla
    doc.setFont("helvetica", "bold");
    doc.setFillColor(240, 240, 240);
    doc.rect(20, y - 10, 170, 10, 'F');
    doc.text("Concepto", 25, y - 2);
    doc.text("Valor", 150, y - 2);
    
    // Contenido de la tabla
    doc.setFont("helvetica", "normal");
    resultados.forEach((resultado, index) => {
      // Alternar colores de fondo para mejor legibilidad
      if (index % 2 === 0) {
        doc.setFillColor(250, 250, 250);
        doc.rect(20, y, 170, 20, 'F');
      }

      // Concepto y valor
      doc.text(resultado.concepto, 25, y + 5);
      const valorTexto = resultado.valor < 0 ? `- ${formatCurrency(resultado.valor)}` : formatCurrency(resultado.valor);
      doc.text(valorTexto, 170, y + 5, { align: 'right' });
      
      // Descripción en texto más pequeño y gris
      if (resultado.descripcion) {
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text(resultado.descripcion, 30, y + 12);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(11);
      }
      
      y += 20;
    });

    // Total
    doc.setLineWidth(0.5);
    doc.line(20, y, 190, y);
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(0, 47, 167);
    doc.text("Total a Recibir:", 25, y);
    doc.text(formatCurrency(total), 170, y, { align: 'right' });

    // Pie de página
    const yFooter = doc.internal.pageSize.height - 20;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.line(20, yFooter - 10, 190, yFooter - 10);
    doc.text("Este documento es informativo y los valores pueden estar sujetos a verificación.", 20, yFooter);
    doc.text("Calculadora de Liquidación Laboral -www.calculalaboral.com/", 20, yFooter + 5);

    // Guardar PDF
    doc.save('liquidacion-laboral.pdf');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">{titulo}</h2>
            {subtitulo && (
              <p className="mt-0.5 text-sm text-blue-100">{subtitulo}</p>
            )}
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-2">
            <button
              onClick={generarPDF}
              className="flex-1 cursor-pointer sm:flex-none flex items-center justify-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-200 text-sm"
            >
              <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
              <span className="font-medium">Descargar PDF</span>
            </button>            <div className="relative flex-1 sm:flex-none">
              <button
                onClick={() => {
                  setShowShare(!showShare);
                  // Solo registramos el evento cuando se abre el menú de compartir
                  if (!showShare) {
                    trackUmamiEvent('share_menu_open', {
                      action: 'open_share_menu',
                      content_type: titulo.toLowerCase().replace(/ /g, '_'),
                      total_amount: total
                    });
                  }
                }}
                className="w-full cursor-pointer flex items-center justify-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-200 text-sm"
              >
                <ShareIcon className="h-4 w-4 mr-2" />
                <span className="font-medium">Compartir</span>
              </button>
              {showShare && (                <div className="absolute right-0 mt-2 p-3 bg-white rounded-lg shadow-xl z-10">
                  <div className="flex flex-col gap-3">
                    <WhatsappShareButton 
                      url={shareUrl} 
                      title={shareMessage}
                      onClick={() => {
                        trackUmamiEvent('share_content', {
                          action: 'share',
                          platform: 'whatsapp',
                          content_type: titulo.toLowerCase().replace(/ /g, '_'),
                          total_amount: total
                        });
                      }}
                    >
                      <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <WhatsappIcon size={32} round />
                        <span className="text-sm text-gray-700">WhatsApp</span>
                      </div>
                    </WhatsappShareButton>
                    <EmailShareButton 
                      url={shareUrl} 
                      subject={shareTitle} 
                      body={shareMessage}
                      onClick={() => {
                        trackUmamiEvent('share_content', {
                          action: 'share',
                          platform: 'email',
                          content_type: titulo.toLowerCase().replace(/ /g, '_'),
                          total_amount: total
                        });
                      }}
                    >
                      <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <EmailIcon size={32} round />
                        <span className="text-sm text-gray-700">Gmail</span>
                      </div>
                    </EmailShareButton>
                    <LinkedinShareButton 
                      url={shareUrl} 
                      title={shareTitle} 
                      summary={shareMessage}
                      onClick={() => {
                        trackUmamiEvent('share_content', {
                          action: 'share',
                          platform: 'linkedin',
                          content_type: titulo.toLowerCase().replace(/ /g, '_'),
                          total_amount: total
                        });
                      }}
                    >
                      <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <LinkedinIcon size={32} round />
                        <span className="text-sm text-gray-700">LinkedIn</span>
                      </div>
                    </LinkedinShareButton>
                    <FacebookShareButton 
                      url={shareUrl} 
                      hashtag="#CalculadoraLaboral"
                      onClick={() => {
                        trackUmamiEvent('share_content', {
                          action: 'share',
                          platform: 'facebook',
                          content_type: titulo.toLowerCase().replace(/ /g, '_'),
                          total_amount: total
                        });
                      }}
                    >
                      <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <FacebookIcon size={32} round />
                        <span className="text-sm text-gray-700">Facebook</span>
                      </div>
                    </FacebookShareButton>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="mb-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
          <p className="text-sm text-blue-700 flex items-center">
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            <span>¡Puedes descargar tu liquidación en PDF para guardarla o compartirla!</span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {resultados.map((resultado, index) => (
            <div 
              key={index}
              className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50/50 transition-colors duration-200"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 truncate">{resultado.concepto}</h3>
                  {resultado.descripcion && (
                    <p className="mt-0.5 text-xs text-gray-500 line-clamp-2">{resultado.descripcion}</p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <span className={`text-sm font-semibold whitespace-nowrap ${getValueClass(resultado.valor)}`}>
                    {resultado.valor < 0 ? '- ' : ''}{formatCurrency(resultado.valor)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-gray-200">
          <div className="flex justify-between items-center px-3 py-2 bg-blue-50 rounded-lg">
            <span className="text-base font-semibold text-gray-900">Total a Recibir</span>
            <span className="text-lg font-bold text-blue-600">{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultadoCalculo;