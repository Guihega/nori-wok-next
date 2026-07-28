import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/app/lib/config";

export const metadata: Metadata = { title: "Términos del servicio", description: `Términos del servicio de ${siteConfig.name}.` };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-rice px-4 py-20 text-ink dark:bg-[#101612] dark:text-white">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-soft sm:p-12 dark:bg-white/5">
        <Link href="/" className="text-sm font-black text-chili">← Volver al inicio</Link>
        <h1 className="mt-8 text-4xl font-black">Términos del servicio</h1>
        <div className="prose-copy mt-8"><p>Los precios y productos mostrados en el sitio son informativos y pueden cambiar según disponibilidad.</p><h2>Pedidos</h2><p>El pedido se considera confirmado únicamente cuando el negocio responde por WhatsApp y valida productos, total, modalidad y horario.</p><h2>Disponibilidad</h2><p>Ingredientes, promociones, tiempos de preparación y cobertura de entrega están sujetos a operación diaria.</p><h2>Contenido del sitio</h2><p>Las fotografías, ilustraciones, marcas y textos pertenecen a sus respectivos titulares.</p><p>Este documento debe revisarse con asesoría legal antes de publicar el sitio definitivo.</p></div>
      </article>
    </main>
  );
}
