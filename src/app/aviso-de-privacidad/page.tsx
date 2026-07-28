import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/app/lib/config";

export const metadata: Metadata = { title: "Aviso de privacidad", description: `Aviso de privacidad de ${siteConfig.name}.` };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-rice px-4 py-20 text-ink dark:bg-[#101612] dark:text-white">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-soft sm:p-12 dark:bg-white/5">
        <Link href="/" className="text-sm font-black text-chili">← Volver al inicio</Link>
        <h1 className="mt-8 text-4xl font-black">Aviso de privacidad</h1>
        <div className="prose-copy mt-8"><p>{siteConfig.name} protege la información que las personas comparten al solicitar información o realizar pedidos.</p><h2>Datos recopilados</h2><p>Podemos recibir nombre, teléfono, detalles del pedido y datos necesarios para atender la solicitud.</p><h2>Finalidad</h2><p>La información se utiliza únicamente para procesar pedidos, brindar atención y dar seguimiento al servicio.</p><h2>Contacto</h2><p>Para ejercer derechos de acceso, rectificación, cancelación u oposición, escribe a {siteConfig.email}.</p><p>Este documento debe revisarse con asesoría legal antes de publicar el sitio definitivo.</p></div>
      </article>
    </main>
  );
}
