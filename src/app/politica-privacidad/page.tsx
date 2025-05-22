import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Calculadoras Laborales Colombia",
  description: "Política de privacidad y tratamiento de datos personales para Calculadora Laboral Colombia.",
  keywords: "política de privacidad, tratamiento de datos, privacidad, calculadora laboral colombia, protección de datos personales",
};

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Política de Privacidad</h1>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Información General</h2>
          <p className="text-gray-600">
            En Calculadora Laboral Colombia, accesible desde www.calculalaboral.com, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Esta Política de Privacidad describe los tipos de información que recopilamos y registramos en Calculadora Laboral Colombia y cómo la utilizamos.
          </p>
          <p className="text-gray-600 mt-2">
            Si tienes preguntas adicionales o requieres más información sobre nuestra Política de Privacidad, no dudes en contactarnos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Recopilación y Uso de la Información</h2>
          <p className="text-gray-600">
            Para mejorar tu experiencia mientras utilizas nuestro sitio web, podemos pedirte cierta información de identificación personal, como tu nombre, dirección de correo electrónico y datos demográficos. La información que recopilamos se utilizará únicamente para mejorar nuestro sitio web y los servicios que ofrecemos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Uso de Cookies</h2>
          <p className="text-gray-600">
            Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos de texto que los sitios web pueden utilizar para hacer más eficiente la experiencia del usuario. Principalmente usamos cookies para:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Entender y guardar las preferencias del usuario para futuras visitas</li>
            <li>Recopilar datos analíticos para mejorar nuestro sitio web y servicios</li>
            <li>Personalizar anuncios relevantes a través de Google AdSense</li>
          </ul>
          <p className="text-gray-600 mt-2">
            Puedes elegir deshabilitar las cookies a través de las opciones de tu navegador. Sin embargo, si lo haces, puede que algunas características del sitio no funcionen correctamente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Google AdSense</h2>
          <p className="text-gray-600">
            Utilizamos Google AdSense para mostrar anuncios en nuestro sitio web. Google AdSense utiliza cookies para personalizar los anuncios que se muestran en nuestro sitio. La tecnología de Google AdSense colocará cookies en tu dispositivo para entender tus intereses basándose en tus visitas anteriores a nuestro sitio y otros sitios web.
          </p>
          <p className="text-gray-600 mt-2">
            Google utiliza esta información para mostrarte anuncios personalizados. Ninguna información personal identificable se almacena en estas cookies. Puedes optar por no participar en el uso de cookies de Google visitando la <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">página de configuración de anuncios de Google</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Servicios de Análisis</h2>
          <p className="text-gray-600">
            Utilizamos servicios de análisis web como Google Analytics, Vercel Analytics y Umami para recopilar información sobre el uso de nuestro sitio web. Estos servicios utilizan cookies para ayudarnos a analizar cómo los usuarios utilizan el sitio. La información generada por estas cookies se transmite y almacena en los servidores de estos proveedores.
          </p>
          <p className="text-gray-600 mt-2">
            Utilizamos esta información para evaluar el uso del sitio web, compilar informes sobre la actividad del sitio y proporcionar otros servicios relacionados con la actividad del sitio web y el uso de Internet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Derechos de Protección de Datos en Colombia</h2>
          <p className="text-gray-600">
            De acuerdo con la Ley 1581 de 2012 de Protección de Datos Personales en Colombia, tienes los siguientes derechos:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Conocer, actualizar y rectificar tus datos personales</li>
            <li>Solicitar prueba de la autorización otorgada para el tratamiento de tus datos</li>
            <li>Ser informado sobre el uso que se ha dado a tus datos personales</li>
            <li>Revocar la autorización y/o solicitar la supresión de tus datos cuando lo consideres</li>
            <li>Acceder gratuitamente a tus datos personales que hayan sido objeto de tratamiento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Cambios a esta Política de Privacidad</h2>
          <p className="text-gray-600">
            Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Te recomendamos que revises periódicamente esta Política de Privacidad para estar informado sobre cómo estamos protegiendo tu información.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Contacto</h2>
          <p className="text-gray-600">
            Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos a través de  nuestra sección de contacto.
          </p>
        </section>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            Volver al inicio
          </Link>
        </div>
      </div>      <p className="text-sm text-gray-500 text-center mt-8">
        Última actualización: 22 de mayo de 2025
      </p>
      </div>
    </div>
  );
}
