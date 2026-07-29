"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDownRight,
  Flame,
  Leaf,
  MessageCircleMore,
  PackageCheck,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Ingredientes",
    description: "Seleccionados cada día",
    detail: "Frescura visible",
    icon: Leaf,
    accentClass:
      "bg-wasabi text-nori",
  },
  {
    number: "02",
    title: "Wok real",
    description: "Sabor intenso y textura",
    detail: "Preparado al momento",
    icon: Flame,
    accentClass:
      "bg-chili text-white",
  },
  {
    number: "03",
    title: "Pedido simple",
    description: "Directo por WhatsApp",
    detail: "Sin procesos complicados",
    icon: MessageCircleMore,
    accentClass:
      "bg-white text-nori",
  },
  {
    number: "04",
    title: "Empaque seguro",
    description: "Ideal para llevar",
    detail: "Listo para disfrutar",
    icon: PackageCheck,
    accentClass:
      "bg-gold text-ink",
  },
];

export default function ServiceHighlights() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative z-30 bg-white px-4 pb-14 dark:bg-[#131b16] sm:px-6 sm:pb-16 lg:px-8 lg:pb-20"
      aria-labelledby="service-highlights-title"
    >
      <div className="mx-auto -mt-10 max-w-[1240px] sm:-mt-12 lg:-mt-14">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 32,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion
              ? 0
              : 0.6,
            ease: "easeOut",
          }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-nori shadow-[0_28px_80px_rgba(23,63,54,0.26)] sm:rounded-[2.5rem]"
        >
          {/* Elementos ambientales */}
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border-[44px] border-white/[0.025]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-20 left-[28%] h-56 w-56 rounded-full bg-wasabi/[0.06] blur-2xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />

          <svg
            viewBox="0 0 220 180"
            className="pointer-events-none absolute right-4 top-2 hidden h-40 w-48 text-white/[0.05] lg:block"
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

          <div className="relative grid lg:grid-cols-[0.88fr_1.62fr]">
            {/* Mensaje editorial */}
            <div className="relative flex flex-col justify-between p-7 sm:p-9 lg:min-h-[390px] lg:p-10 xl:p-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.1] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  <Flame
                    size={14}
                    className="text-wasabi"
                    aria-hidden="true"
                  />

                  Nuestra forma de servir
                </div>

                <h2
                  id="service-highlights-title"
                  className="mt-7 max-w-md text-3xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[2.75rem]"
                >
                  Rápido por diseño.
                  <span className="mt-1 block text-wasabi">
                    Fresco por principio.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/85 sm:text-base">
                  Una experiencia pensada para
                  elegir rápido, recibir atención
                  directa y disfrutar cada platillo
                  como debe ser.
                </p>
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
                className="group mt-8 inline-flex min-h-11 w-fit items-center gap-3 rounded-full text-sm font-black text-wasabi focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wasabi focus-visible:ring-offset-4 focus-visible:ring-offset-nori"
              >
                Explorar el menú

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-wasabi text-nori transition-transform duration-300 group-hover:rotate-[-8deg] motion-reduce:transition-none">
                  <ArrowDownRight
                    size={18}
                    aria-hidden="true"
                  />
                </span>
              </motion.a>
            </div>

            {/* Bento de beneficios */}
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {highlights.map(
                (item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.number}
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
                        amount: 0.35,
                      }}
                      transition={{
                        duration:
                          reduceMotion
                            ? 0
                            : 0.42,
                        delay:
                          reduceMotion
                            ? 0
                            : index * 0.06,
                        ease: "easeOut",
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -3,
                            }
                      }
                      className="group relative min-h-[190px] overflow-hidden bg-[#19483d] p-6 transition-colors duration-300 hover:bg-[#1d5044] sm:min-h-[205px] sm:p-7 lg:p-8"
                    >
                      <div
                        className="pointer-events-none absolute -bottom-14 -right-14 h-36 w-36 rounded-full border-[26px] border-white/[0.025] transition-transform duration-500 group-hover:scale-110 motion-reduce:transition-none"
                        aria-hidden="true"
                      />

                      <span className="absolute right-6 top-6 text-[11px] font-black tracking-[0.18em] text-white/75">
                        {item.number}
                      </span>

                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 motion-reduce:transition-none ${item.accentClass}`}
                      >
                        <Icon
                          size={22}
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="relative mt-7">
                        <h3 className="text-lg font-black text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm font-bold text-white/90">
                          {item.description}
                        </p>

                        <p className="mt-4 text-xs leading-5 text-white/75">
                          {item.detail}
                        </p>
                      </div>
                    </motion.article>
                  );
                },
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}