import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircleMore,
} from "lucide-react";

import { siteConfig } from "@/app/lib/config";
import { withBasePath } from "@/app/lib/paths";

const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Hola, quiero consultar disponibilidad y hacer un pedido.",
)}`;

const footerLinks = [
  {
    label: "Menú",
    href: "#menu",
  },
  {
    label: "Experiencia",
    href: "#experiencia",
  },
  {
    label: "Nosotros",
    href: "#nosotros",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#0b120f] text-white">
      {/* Decoración ambiental */}
      <div
        className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full border-[48px] border-white/[0.025]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 right-[12%] h-80 w-80 rounded-full bg-wasabi/[0.035] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="h-px bg-gradient-to-r from-transparent via-wasabi/35 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.75fr_1.1fr] lg:gap-12">
          {/* Marca */}
          <div className="max-w-md">
            <a
              href="#inicio"
              className="group inline-flex min-h-11 items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wasabi focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b120f]"
              aria-label="Nori Wok, volver al inicio"
            >
              <Image
                src={withBasePath("/icons/logo.svg")}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 motion-reduce:transition-none"
              />

              <span className="text-lg font-black tracking-[0.13em]">
                NORI{" "}
                <span className="text-[#ff6b6b]">
                  WOK
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
              Comida oriental preparada al momento, con una carta
              clara y atención directa para pedir sin complicaciones.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex min-h-11 items-center gap-3 rounded-full bg-wasabi px-5 py-3 text-sm font-black text-nori transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wasabi focus-visible:ring-offset-4 focus-visible:ring-offset-[#0b120f] motion-reduce:transition-none"
            >
              <MessageCircleMore
                size={18}
                aria-hidden="true"
              />

              Pedir por WhatsApp

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Navegación */}
          <nav
            aria-label="Navegación del pie de página"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-wasabi">
              Explora
            </p>

            <ul className="mt-5 space-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex min-h-10 items-center gap-2 rounded-lg py-2 text-sm font-bold text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wasabi motion-reduce:transition-none"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-white/45 transition-colors group-hover:bg-wasabi"
                      aria-hidden="true"
                    />

                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Información práctica */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-wasabi">
              Información
            </p>

            <div className="mt-5 grid gap-3">
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-14 items-start gap-4 rounded-[1.2rem] border border-white/[0.14] bg-white/[0.055] p-4 transition-colors hover:bg-white/[0.085] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wasabi motion-reduce:transition-none"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-chili/15 text-chili">
                  <MapPin
                    size={18}
                    aria-hidden="true"
                  />
                </span>

                <span>
                  <strong className="block text-sm font-black">
                    Ubicación
                  </strong>

                  <span className="mt-1 block text-xs leading-5 text-white/75">
                    {siteConfig.address}
                  </span>
                </span>

                <ArrowUpRight
                  size={16}
                  className="ml-auto mt-1 shrink-0 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-wasabi motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </a>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="flex min-h-14 items-start gap-3 rounded-[1.2rem] border border-white/[0.14] bg-white/[0.055] p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Clock3
                      size={17}
                      aria-hidden="true"
                    />
                  </span>

                  <span>
                    <strong className="block text-sm font-black">
                      Horario
                    </strong>

                    <span className="mt-1 block text-[11px] leading-5 text-white/75">
                      {siteConfig.schedule.weekdays}
                      <br />
                      {siteConfig.schedule.sunday}
                    </span>
                  </span>
                </div>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex min-h-14 items-start gap-3 rounded-[1.2rem] border border-white/[0.14] bg-white/[0.055] p-4 transition-colors hover:bg-white/[0.085] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wasabi motion-reduce:transition-none"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-white">
                    <Mail
                      size={17}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="min-w-0">
                    <strong className="block text-sm font-black">
                      Correo
                    </strong>

                    <span className="mt-1 block truncate text-[11px] leading-5 text-white/75 group-hover:text-white">
                      {siteConfig.email}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/65">
            © {currentYear} {siteConfig.name}. Todos los derechos
            reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-bold text-white/75">
            <Link
              href="/aviso-de-privacidad/"
              className="rounded-md transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wasabi"
            >
              Aviso de privacidad
            </Link>

            <Link
              href="/terminos/"
              className="rounded-md transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wasabi"
            >
              Términos
            </Link>

            <a
              href="#inicio"
              className="group inline-flex items-center gap-2 rounded-md text-wasabi focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wasabi"
            >
              Volver arriba

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}