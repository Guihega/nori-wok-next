"use client";

import Image from "next/image";
import {
  ArrowRight,
  Flame,
  MessageCircleMore,
  PackageCheck,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Elige",
    description:
      "Explora una carta corta, filtra por categoría y agrega tus favoritos.",
    detail:
      "Platillos claros, precios visibles y decisiones rápidas.",
    icon: UtensilsCrossed,
  },
  {
    number: "02",
    title: "Confirma",
    description:
      "Revisamos tu pedido y preparamos el mensaje listo para WhatsApp.",
    detail:
      "Sin registros largos ni procesos innecesarios.",
    icon: MessageCircleMore,
  },
  {
    number: "03",
    title: "Disfruta",
    description:
      "Recoge en sucursal o solicita entrega según disponibilidad.",
    detail:
      "Empaque seguro y comida preparada al momento.",
    icon: PackageCheck,
  },
];

export default function Experience() {
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  const ActiveIcon = steps[activeStep].icon;

  return (
    <section
      id="experiencia"
      className="relative isolate scroll-mt-24 overflow-hidden bg-nori py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="experience-title"
    >
      {/* Fondo ambiental */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full border-[58px] border-white/[0.025]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-wasabi/[0.06] blur-3xl"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 220 180"
        className="pointer-events-none absolute right-[8%] top-10 hidden h-44 w-52 text-white/[0.035] xl:block"
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
        {/* Encabezado editorial */}
        <div className="mb-12 grid gap-7 xl:grid-cols-[1.05fr_0.95fr] xl:items-end xl:gap-16">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.1] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white">
              <Flame size={14} className="text-wasabi" aria-hidden="true" />
              Nuestra diferencia
            </div>

            <h2
              id="experience-title"
              className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.045em] sm:text-5xl xl:text-[3.5rem] 2xl:text-6xl"
            >
              Rápido no tiene que
              <span className="mt-1 block text-wasabi">
                significar genérico.
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
            className="max-w-2xl xl:justify-self-end"
          >
            <p className="text-base leading-8 text-white/85 sm:text-lg">
              Diseñamos una experiencia corta y clara: eliges,
              confirmas y recibes comida preparada al momento,
              sin sacrificar sabor, textura ni consistencia.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.13em] text-white/85">
              <span className="rounded-full border border-white/25 bg-white/[0.06] px-3 py-2">
                Carta enfocada
              </span>
              <span className="rounded-full border border-white/25 bg-white/[0.06] px-3 py-2">
                Atención directa
              </span>
              <span className="rounded-full border border-white/25 bg-white/[0.06] px-3 py-2">
                Preparación real
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-12 xl:grid-cols-[1.12fr_0.88fr] xl:items-center xl:gap-16">
          {/* Escena visual */}
          <motion.div
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
              duration: reduceMotion ? 0 : 0.65,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#102d27] shadow-[0_35px_90px_rgba(0,0,0,0.28)] sm:rounded-[2.75rem]">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(151,182,93,0.14),transparent_34%)]"
                aria-hidden="true"
              />

              <Image
                src="/images/wok-scene.svg"
                alt="Cocinero preparando comida oriental en un wok al fuego"
                width={760}
                height={650}
                sizes="(min-width: 1280px) 56vw, 100vw"
                className="relative h-auto w-full"
              />

              {/* Etiqueta superior */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md sm:left-7 sm:top-7">
                <Sparkles
                  size={14}
                  className="text-wasabi"
                  aria-hidden="true"
                />
                Preparación visible
              </div>

              {/* Estado activo */}
              <motion.div
                key={steps[activeStep].number}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.25,
                }}
                className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-[#0e2822]/90 p-4 shadow-xl backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-[360px] sm:p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-wasabi text-nori">
                    <ActiveIcon
                      size={20}
                      strokeWidth={2.3}
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-wasabi">
                      Paso {steps[activeStep].number}
                    </p>

                    <p className="mt-1 font-black text-white">
                      {steps[activeStep].detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sello exterior */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                    }
              }
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 right-5 hidden rounded-[1.5rem] bg-rice px-5 py-4 text-ink shadow-soft sm:block lg:right-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-chili/10 text-chili">
                  <Flame size={19} aria-hidden="true" />
                </span>

                <div>
                  <strong className="block text-sm font-black">
                    Hecho al fuego
                  </strong>
                  <span className="text-xs text-ink/75">
                    No recalentamos: cocinamos.
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Secuencia interactiva */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 24,
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
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.08,
              ease: "easeOut",
            }}
          >
            <div className="relative">
              <ol className="space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === index;
                  return (
                    <li key={step.number}>
                      <motion.button
                        type="button"
                        onClick={() => setActiveStep(index)}
                        onMouseEnter={() => setActiveStep(index)}
                        onFocus={() => setActiveStep(index)}
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                x: 3,
                              }
                        }
                        whileTap={
                          reduceMotion
                            ? undefined
                            : {
                                scale: 0.99,
                              }
                        }
                        aria-pressed={isActive}
                        className={`group relative grid w-full grid-cols-[56px_1fr] gap-4 rounded-[1.5rem] border p-4 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wasabi focus-visible:ring-offset-4 focus-visible:ring-offset-nori motion-reduce:transition-none sm:p-5 ${
                          isActive
                            ? "border-wasabi/35 bg-white/[0.09]"
                            : "border-white/[0.08] bg-white/[0.035] hover:bg-white/[0.06]"
                        }`}
                      >
                        {isActive && (
                          <>
                            <motion.span
                              layoutId="experience-active-step"
                              className="absolute inset-0 -z-10 rounded-[1.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(151,182,93,0.12),transparent_55%)]"
                              transition={{
                                duration: reduceMotion ? 0 : 0.28,
                                ease: "easeOut",
                              }}
                              aria-hidden="true"
                            />

                            <motion.span
                              layoutId="experience-active-indicator"
                              className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-wasabi shadow-[0_0_18px_rgba(151,182,93,0.45)]"
                              transition={{
                                duration: reduceMotion ? 0 : 0.28,
                                ease: "easeOut",
                              }}
                              aria-hidden="true"
                            />
                          </>
                        )}

                        <span
                          className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 motion-reduce:transition-none ${
                            isActive
                              ? "bg-wasabi text-nori"
                              : "bg-white/[0.1] text-white/85"
                          }`}
                        >
                          <Icon
                            size={22}
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                        </span>

                        <span className="block pt-1">
                          <span className="flex items-center justify-between gap-3">
                            <strong
                              className={`text-lg font-black transition-colors ${
                                isActive
                                  ? "text-white"
                                  : "text-white/90"
                              }`}
                            >
                              {step.title}
                            </strong>

                            <span
                              className={`text-[10px] font-black tracking-[0.2em] ${
                                isActive
                                  ? "text-wasabi"
                                  : "text-white/75"
                              }`}
                            >
                              {step.number}
                            </span>
                          </span>

                          <span className="mt-2 block text-sm leading-6 text-white/80">
                            {step.description}
                          </span>
                        </span>
                      </motion.button>
                    </li>
                  );
                })}
              </ol>
            </div>

            <motion.a
              href="#menu"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      x: 3,
                    }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="group mt-8 inline-flex min-h-11 items-center gap-3 rounded-full font-black text-wasabi focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wasabi focus-visible:ring-offset-4 focus-visible:ring-offset-nori"
            >
              Armar mi pedido

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-wasabi text-nori transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                <ArrowRight
                  size={19}
                  aria-hidden="true"
                />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}