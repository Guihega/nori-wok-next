"use client";

import {
  MessageCircleMore,
  Sparkles,
  Star,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

const testimonials = [
  {
    name: "Mariana R.",
    quote:
      "El wok llegó caliente, con buena porción y los vegetales todavía crujientes. Repetiría sin pensarlo.",
    detail: "Pedido de Wok Teriyaki",
    initials: "MR",
  },
  {
    name: "Daniel C.",
    quote:
      "El proceso por WhatsApp es muy cómodo. Pedí, confirmé y pasé a recoger sin esperar.",
    detail: "Pedido para recoger",
    initials: "DC",
  },
  {
    name: "Alejandra M.",
    quote:
      "El ramen tiene muy buen sabor y el empaque llegó perfecto. Excelente opción para cenar.",
    detail: "Pedido de Ramen Miso",
    initials: "AM",
  },
];

function Rating() {
  return (
    <div
      className="flex items-center gap-1 text-gold"
      aria-label="Cinco de cinco estrellas"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          fill="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  const featured = testimonials[0];
  const secondary = testimonials.slice(1);

  return (
    <section
      className="relative isolate overflow-hidden bg-white py-20 dark:bg-[#131b16] sm:py-24 lg:py-28"
      aria-labelledby="testimonials-title"
    >
      {/* Fondo ambiental */}
      <div
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-chili/[0.035] blur-3xl dark:bg-chili/[0.045]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 bottom-8 h-96 w-96 rounded-full bg-gold/[0.08] blur-3xl dark:bg-wasabi/[0.045]"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 260 180"
        className="pointer-events-none absolute right-[5%] top-8 hidden h-44 w-64 text-ink/[0.035] dark:text-white/[0.03] xl:block"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 145C68 119 72 72 124 54C169 39 199 58 247 17"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M7 171C64 142 79 106 129 88C174 72 204 88 255 49"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Encabezado */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-chili/10 bg-chili/[0.05] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-chili dark:border-white/10 dark:bg-white/[0.045]">
              <MessageCircleMore
                size={14}
                aria-hidden="true"
              />
              Lo que dicen
            </div>

            <h2
              id="testimonials-title"
              className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-ink dark:text-white sm:text-5xl lg:text-[3.6rem]"
            >
              Se siente fresco.
              <span className="mt-1 block text-chili">
                Sabe mejor.
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
            <p className="text-base leading-8 text-ink/62 dark:text-white/62 sm:text-lg">
              Opiniones sobre sabor, temperatura, empaque y facilidad
              de pedido. Cuatro detalles que convierten una comida
              rápida en una experiencia que vale la pena repetir.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Rating />

              <span className="h-5 w-px bg-ink/10 dark:bg-white/10" />

              <span className="text-sm font-black text-ink/55 dark:text-white/50">
                Experiencias verificadas en pedidos locales
              </span>
            </div>
          </motion.div>
        </div>

        {/* Composición editorial */}
        <div className="mt-14 grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-5">
          {/* Testimonio principal */}
          <motion.article
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -24,
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
            className="group relative min-h-[500px] overflow-hidden rounded-[2rem] bg-nori p-7 text-white shadow-[0_30px_85px_rgba(23,63,54,0.2)] sm:rounded-[2.75rem] sm:p-10 lg:min-h-[570px] lg:p-12"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[56px] border-wasabi/[0.08] transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -bottom-28 left-[18%] h-72 w-72 rounded-full bg-wasabi/[0.07] blur-3xl"
              aria-hidden="true"
            />

            <MessageCircleMore
              size={160}
              strokeWidth={1}
              className="pointer-events-none absolute -bottom-8 -right-2 text-white/[0.04]"
              aria-hidden="true"
            />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-5">
                <Rating />

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-wasabi">
                  <Sparkles
                    size={14}
                    aria-hidden="true"
                  />
                  Experiencia destacada
                </span>
              </div>

              <blockquote className="mt-12 max-w-4xl text-3xl font-black leading-[1.14] tracking-[-0.035em] sm:text-4xl lg:text-[3rem]">
                “{featured.quote}”
              </blockquote>

              <div className="mt-auto flex flex-col gap-5 pt-12 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-wasabi text-lg font-black text-nori">
                    {featured.initials}
                  </span>

                  <div>
                    <strong className="block text-lg font-black">
                      {featured.name}
                    </strong>

                    <span className="mt-1 block text-sm text-white/50">
                      {featured.detail}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                  Sabor · temperatura · porción
                </span>
              </div>
            </div>
          </motion.article>

          {/* Opiniones secundarias */}
          <div className="grid gap-4">
            {secondary.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
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
                  amount: 0.3,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay:
                    reduceMotion
                      ? 0
                      : 0.06 + index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                className={`group relative min-h-[270px] overflow-hidden rounded-[2rem] border p-7 transition-shadow duration-300 hover:shadow-xl motion-reduce:transition-none sm:rounded-[2.5rem] sm:p-9 ${
                  index === 0
                    ? "border-ink/[0.06] bg-rice text-ink dark:border-white/[0.07] dark:bg-[#17201b] dark:text-white"
                    : "border-transparent bg-chili text-white shadow-[0_22px_60px_rgba(191,30,39,0.16)]"
                }`}
              >
                <div
                  className={`pointer-events-none absolute -bottom-16 -right-14 h-48 w-48 rounded-full border-[34px] transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none ${
                    index === 0
                      ? "border-chili/[0.05] dark:border-chili/[0.07]"
                      : "border-white/[0.07]"
                  }`}
                  aria-hidden="true"
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <Rating />

                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-black ${
                        index === 0
                          ? "bg-nori/10 text-nori dark:bg-wasabi/10 dark:text-wasabi"
                          : "bg-white/15 text-white"
                      }`}
                    >
                      {testimonial.initials}
                    </span>
                  </div>

                  <blockquote
                    className={`mt-7 text-xl font-black leading-8 tracking-[-0.025em] ${
                      index === 0
                        ? "text-ink dark:text-white"
                        : "text-white"
                    }`}
                  >
                    “{testimonial.quote}”
                  </blockquote>

                  <div className="mt-auto pt-8">
                    <strong className="block font-black">
                      {testimonial.name}
                    </strong>

                    <span
                      className={`mt-1 block text-sm ${
                        index === 0
                          ? "text-ink/48 dark:text-white/45"
                          : "text-white/55"
                      }`}
                    >
                      {testimonial.detail}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}