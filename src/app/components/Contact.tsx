"use client";

import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircleMore,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { siteConfig } from "@/app/lib/config";

const contactItems = [
  {
    title: "Dirección",
    text: siteConfig.address,
    icon: MapPin,
    href: siteConfig.mapUrl,
    linkLabel: "Abrir ubicación",
  },
  {
    title: "Horario",
    text: `${siteConfig.schedule.weekdays} · ${siteConfig.schedule.sunday}`,
    icon: Clock3,
  },
  {
    title: "Correo",
    text: siteConfig.email,
    icon: Mail,
    href: `mailto:${siteConfig.email}`,
    linkLabel: "Enviar correo",
  },
];

const whatsappMessage = encodeURIComponent(
  "Hola, me gustaría consultar disponibilidad y realizar un pedido.",
);

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contacto"
      className="relative isolate scroll-mt-24 overflow-hidden bg-chili py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="contact-title"
    >
      {/* Fondo ambiental */}
      <div
        className="pointer-events-none absolute -left-32 -top-28 h-96 w-96 rounded-full border-[62px] border-white/[0.055]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 right-[12%] h-[30rem] w-[30rem] rounded-full bg-black/[0.08] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full border-[48px] border-white/[0.045]"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 220 180"
        className="pointer-events-none absolute right-[6%] top-8 hidden h-44 w-52 text-white/[0.07] xl:block"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M38 166C5 122 76 108 47 65C27 36 63 22 60 3"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M104 167C69 128 139 105 105 63C84 36 121 19 116 1"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M169 165C138 129 197 108 169 72C147 44 182 29 179 10"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Encabezado */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              ease: "easeOut",
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
              <Sparkles size={14} aria-hidden="true" />
              Visítanos
            </div>

            <h2
              id="contact-title"
              className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-[3.7rem]"
            >
              Tu próximo antojo
              <span className="mt-1 block text-white/58">
                empieza aquí.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : 0.08,
              ease: "easeOut",
            }}
            className="max-w-2xl lg:justify-self-end"
          >
            <p className="text-base leading-8 text-white/72 sm:text-lg">
              Confirma disponibilidad, personaliza tu pedido y recibe
              atención directa. Te ayudamos a resolver todo antes de
              preparar cada platillo.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/55">
              <span className="rounded-full border border-white/15 px-3 py-2">
                Respuesta directa
              </span>

              <span className="rounded-full border border-white/15 px-3 py-2">
                Pedido personalizado
              </span>

              <span className="rounded-full border border-white/15 px-3 py-2">
                Confirmación rápida
              </span>
            </div>
          </motion.div>
        </div>

        {/* Composición principal */}
        <div className="mt-14 grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-5">
          {/* CTA principal */}
          <motion.article
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -22,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              ease: "easeOut",
            }}
            className="group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/12 bg-[#a91620] p-7 shadow-[0_32px_90px_rgba(100,0,8,0.26)] sm:rounded-[2.75rem] sm:p-10 lg:min-h-[580px] lg:p-12"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[56px] border-white/[0.07] transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -bottom-24 left-[18%] h-72 w-72 rounded-full bg-white/[0.06] blur-3xl"
              aria-hidden="true"
            />

            <MessageCircleMore
              size={220}
              strokeWidth={0.8}
              className="pointer-events-none absolute -bottom-12 -right-4 text-white/[0.045]"
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/48">
                    Atención por WhatsApp
                  </p>

                  <h3 className="mt-5 max-w-2xl text-3xl font-black leading-[1.02] tracking-[-0.04em] sm:text-4xl lg:text-[3rem]">
                    Cuéntanos qué se te antoja.
                    <span className="mt-1 block text-white/58">
                      Nosotros resolvemos lo demás.
                    </span>
                  </h3>
                </div>

                <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-white text-chili shadow-xl sm:flex">
                  <MessageCircleMore
                    size={27}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
              </div>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/67 sm:text-lg">
                Pregunta por disponibilidad, solicita ajustes y
                confirma si recogerás en sucursal o necesitas entrega.
              </p>

              <div className="mt-auto pt-12">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    "Elige tus platillos",
                    "Confirma detalles",
                    "Recibe tu pedido",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.065] p-4 backdrop-blur-sm"
                    >
                      <span className="text-[10px] font-black tracking-[0.18em] text-white/35">
                        0{index + 1}
                      </span>

                      <strong className="mt-4 block text-sm font-black">
                        {step}
                      </strong>
                    </div>
                  ))}
                </div>

                <motion.a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -2,
                        }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="group/button mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-black text-chili shadow-xl shadow-black/10 transition-shadow hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#a91620]"
                >
                  Escribir por WhatsApp

                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover/button:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </motion.a>
              </div>
            </div>
          </motion.article>

          {/* Información de contacto */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[1.15fr_0.85fr]">
            {/* Dirección */}
            <motion.article
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 22,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : 0.05,
                ease: "easeOut",
              }}
              className="group relative min-h-[315px] overflow-hidden rounded-[2rem] bg-rice p-7 text-ink shadow-[0_26px_75px_rgba(77,17,19,0.16)] sm:rounded-[2.5rem] sm:p-9"
            >
              <div
                className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full border-[42px] border-chili/[0.055] transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
                aria-hidden="true"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-chili text-white">
                    <MapPin size={22} aria-hidden="true" />
                  </span>

                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/35">
                    Ubicación
                  </span>
                </div>

                <div className="mt-auto pt-10">
                  <h3 className="text-2xl font-black tracking-[-0.03em]">
                    Ven por tu pedido.
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-ink/58">
                    {siteConfig.address}
                  </p>

                  <a
                    href={siteConfig.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/map mt-6 inline-flex min-h-11 items-center gap-3 rounded-full font-black text-nori focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chili focus-visible:ring-offset-4 focus-visible:ring-offset-rice"
                  >
                    Abrir ubicación

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/map:translate-x-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </motion.article>

            {/* Horario y correo */}
            <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-1">
              {contactItems.slice(1).map(
                (
                  {
                    icon: Icon,
                    title,
                    text,
                    href,
                    linkLabel,
                  },
                  index,
                ) => (
                  <motion.article
                    key={title}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 18,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay:
                        reduceMotion
                          ? 0
                          : 0.1 + index * 0.06,
                      ease: "easeOut",
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -3,
                          }
                    }
                    className={`relative overflow-hidden rounded-[2rem] p-6 shadow-sm sm:p-7 ${
                      index === 0
                        ? "bg-gold text-ink"
                        : "border border-white/12 bg-white/[0.095] text-white backdrop-blur-md"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={
                        index === 0
                          ? "text-ink"
                          : "text-white"
                      }
                      aria-hidden="true"
                    />

                    <h3 className="mt-8 text-xl font-black">
                      {title}
                    </h3>

                    <p
                      className={`mt-3 text-sm leading-6 ${
                        index === 0
                          ? "text-ink/58"
                          : "text-white/62"
                      }`}
                    >
                      {text}
                    </p>

                    {href && linkLabel && (
                      <a
                        href={href}
                        className={`mt-5 inline-flex min-h-10 items-center gap-2 rounded-full text-sm font-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                          index === 0
                            ? "text-ink"
                            : "text-white"
                        }`}
                      >
                        {linkLabel}
                        <ArrowRight
                          size={16}
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </motion.article>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}