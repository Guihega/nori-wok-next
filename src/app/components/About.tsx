"use client";

import {
  ArrowDownRight,
  Clock3,
  HeartHandshake,
  Leaf,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

const principles = [
  {
    title: "Sabor reconocible",
    description:
      "Recetas conocidas y combinaciones propias, sin complicar la experiencia.",
    icon: UtensilsCrossed,
  },
  {
    title: "Atención cercana",
    description:
      "Comunicación directa para confirmar disponibilidad y personalizar el pedido.",
    icon: HeartHandshake,
  },
  {
    title: "Frescura visible",
    description:
      "Ingredientes seleccionados y preparaciones hechas al momento.",
    icon: Leaf,
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="nosotros"
      className="relative isolate scroll-mt-24 overflow-hidden bg-cream py-20 dark:bg-[#101612] sm:py-24 lg:py-28"
      aria-labelledby="about-title"
    >
      {/* Decoración ambiental */}
      <div
        className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full border-[48px] border-chili/[0.035] dark:border-chili/[0.055]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-gold/[0.08] blur-3xl dark:bg-wasabi/[0.05]"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 260 170"
        className="pointer-events-none absolute right-[6%] top-10 hidden h-40 w-60 text-ink/[0.04] dark:text-white/[0.035] xl:block"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M17 138C72 111 66 69 118 50C162 34 189 54 244 15"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M8 165C67 137 77 99 126 82C174 65 201 83 253 45"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Encabezado */}
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end lg:gap-16">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 22,
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
            <div className="inline-flex items-center gap-2 rounded-full border border-chili/10 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-chili shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05]">
              <Sparkles size={14} aria-hidden="true" />
              Una cocina cercana
            </div>

            <h2
              id="about-title"
              className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-ink dark:text-white sm:text-5xl lg:text-[3.6rem]"
            >
              Sabores de Asia,
              <span className="mt-1 block text-chili">
                hechos para tu día.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 22,
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
            className="max-w-3xl lg:justify-self-end"
          >
            <p className="text-base leading-8 text-ink/65 dark:text-white/65 sm:text-lg">
              Nori Wok nace con una idea sencilla: ofrecer comida
              oriental accesible, fresca y fácil de pedir. Nuestra
              carta combina recetas conocidas con propuestas propias,
              siempre con una presentación limpia y atención directa.
            </p>

            <a
              href="#contacto"
              className="group mt-6 inline-flex min-h-11 items-center gap-3 rounded-full font-black text-nori focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chili focus-visible:ring-offset-4 focus-visible:ring-offset-cream dark:text-wasabi dark:focus-visible:ring-wasabi dark:focus-visible:ring-offset-[#101612]"
            >
              Conoce dónde encontrarnos

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-nori text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none dark:bg-wasabi dark:text-nori">
                <ArrowDownRight
                  size={18}
                  aria-hidden="true"
                />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Composición editorial */}
        <div className="mt-14 grid gap-4 lg:grid-cols-[1.18fr_0.82fr] lg:gap-5">
          {/* Historia principal */}
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
            className="group relative min-h-[500px] overflow-hidden rounded-[2rem] bg-rice p-7 shadow-[0_28px_80px_rgba(75,45,14,0.1)] dark:bg-[#17201b] sm:rounded-[2.75rem] sm:p-10 lg:min-h-[590px] lg:p-12"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full border-[52px] border-chili/[0.055] transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none dark:border-chili/[0.08]"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute bottom-[-5rem] left-[18%] h-64 w-64 rounded-full bg-gold/[0.1] blur-3xl dark:bg-wasabi/[0.055]"
              aria-hidden="true"
            />

            <span
              className="absolute -bottom-8 -right-2 select-none text-[8.5rem] font-black leading-none tracking-[-0.08em] text-ink/[0.035] dark:text-white/[0.025] sm:text-[12rem] lg:text-[15rem]"
              aria-hidden="true"
            >
              NORI
            </span>

            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-chili">
                    Nuestra idea
                  </p>

                  <h3 className="mt-5 max-w-2xl text-3xl font-black leading-[1.02] tracking-[-0.04em] text-ink dark:text-white sm:text-4xl lg:text-[3rem]">
                    Comida rápida,
                    <span className="mt-1 block text-nori dark:text-wasabi">
                      sin sentirse impersonal.
                    </span>
                  </h3>
                </div>

                <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-chili text-white shadow-lg shadow-chili/15 sm:flex">
                  <HeartHandshake
                    size={27}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <blockquote className="mt-10 max-w-2xl border-l-2 border-chili/30 pl-5 text-lg leading-8 text-ink/68 dark:text-white/65 sm:text-xl">
                “Queremos que elegir tu comida sea sencillo, pero que
                el resultado siga sintiéndose cuidado, fresco y hecho
                especialmente para ti.”
              </blockquote>

              <div className="mt-auto pt-12">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-ink/35 dark:text-white/35">
                  Lo que guía cada pedido
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {principles.map((principle, index) => {
                    const Icon = principle.icon;

                    return (
                      <motion.div
                        key={principle.title}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 16,
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
                          duration: reduceMotion ? 0 : 0.4,
                          delay:
                            reduceMotion
                              ? 0
                              : index * 0.06,
                          ease: "easeOut",
                        }}
                        className="rounded-[1.35rem] border border-ink/[0.06] bg-white/55 p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none dark:border-white/[0.07] dark:bg-white/[0.035]"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-nori/10 text-nori dark:bg-wasabi/10 dark:text-wasabi">
                          <Icon
                            size={17}
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                        </span>

                        <strong className="mt-4 block text-sm font-black text-ink dark:text-white">
                          {principle.title}
                        </strong>

                        <span className="mt-2 block text-xs leading-5 text-ink/50 dark:text-white/45">
                          {principle.description}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Métricas asimétricas */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[1.2fr_0.8fr]">
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
              className="group relative min-h-[310px] overflow-hidden rounded-[2rem] bg-chili p-7 text-white shadow-[0_25px_70px_rgba(191,30,39,0.2)] sm:rounded-[2.5rem] sm:p-9"
            >
              <div
                className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full border-[42px] border-white/[0.075] transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
                aria-hidden="true"
              />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <Sparkles
                      size={22}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45">
                    Preparación
                  </span>
                </div>

                <div className="mt-10">
                  <strong className="block text-[5rem] font-black leading-none tracking-[-0.07em] sm:text-[6rem]">
                    100
                    <span className="text-[0.48em] align-top">
                      %
                    </span>
                  </strong>

                  <p className="mt-3 max-w-sm text-xl font-black">
                    Preparado al momento.
                  </p>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
                    Cada platillo inicia cuando confirmas tu pedido,
                    para conservar sabor, temperatura y textura.
                  </p>
                </div>
              </div>
            </motion.article>

            <div className="grid gap-4 sm:col-span-2 sm:grid-cols-[0.82fr_1.18fr] lg:col-span-1">
              <motion.article
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
                  delay: reduceMotion ? 0 : 0.1,
                  ease: "easeOut",
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                className="relative overflow-hidden rounded-[2rem] bg-gold p-6 text-ink shadow-sm sm:p-7"
              >
                <UtensilsCrossed
                  size={22}
                  aria-hidden="true"
                />

                <strong className="mt-8 block text-5xl font-black tracking-[-0.055em]">
                  6+
                </strong>

                <span className="mt-2 block text-sm font-black">
                  opciones principales
                </span>

                <span className="mt-2 block text-xs leading-5 text-ink/55">
                  Una carta corta para decidir sin perder variedad.
                </span>
              </motion.article>

              <motion.article
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
                  delay: reduceMotion ? 0 : 0.15,
                  ease: "easeOut",
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                className="relative overflow-hidden rounded-[2rem] bg-nori p-6 text-white shadow-[0_20px_55px_rgba(23,63,54,0.17)] sm:p-7 dark:border dark:border-white/[0.07]"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border-[24px] border-wasabi/[0.09]"
                  aria-hidden="true"
                />

                <Clock3
                  size={22}
                  className="text-wasabi"
                  aria-hidden="true"
                />

                <strong className="mt-8 block text-5xl font-black tracking-[-0.055em]">
                  7 días
                </strong>

                <span className="mt-2 block text-sm font-black text-wasabi">
                  de servicio semanal
                </span>

                <span className="mt-2 block max-w-xs text-xs leading-5 text-white/50">
                  Disponibilidad pensada para resolver desde una
                  comida rápida hasta el antojo del fin de semana.
                </span>
              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}