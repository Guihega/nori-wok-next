"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChefHat,
  Leaf,
  Sparkles,
  Timer,
} from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { openCart } = useCart();

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-rice bg-grain pt-24 dark:bg-[#101612]"
    >
      {/* Fondos ambientales */}
      <div
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-wasabi/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-cream/70 to-transparent dark:from-[#152019]/70"
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-[clamp(700px,82vh,860px)] max-w-[1440px] items-center gap-10 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:gap-4 lg:px-8 lg:pb-16 lg:pt-6 xl:px-12">
        {/* Contenido */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-20 max-w-2xl"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-nori/10 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5"
          >
            <Leaf size={15} className="text-nori dark:text-wasabi" />

            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-nori dark:text-wasabi">
              Ingredientes frescos · sabor al wok
            </span>
          </motion.div>

          <h1 className="max-w-3xl text-[clamp(3.35rem,6.2vw,6.8rem)] font-black leading-[0.9] tracking-[-0.055em] text-ink dark:text-white">
            Sabores de Asia,
            <span className="mt-2 block text-chili">
              listos para tu día.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-ink/65 sm:text-lg dark:text-white/65">
            Bowls, ramen, sushi y platillos al wok preparados al momento.
            Elige tus favoritos, confirma por WhatsApp y disfruta sin
            complicaciones.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#menu"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-chili px-7 py-4 font-black text-white shadow-lg shadow-chili/15 transition-shadow hover:shadow-xl hover:shadow-chili/25"
            >
              Ver menú

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.button
              type="button"
              onClick={openCart}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/75 px-7 py-4 font-black text-ink backdrop-blur-md transition-colors hover:border-chili hover:text-chili dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-wasabi dark:hover:text-wasabi"
            >
              Armar pedido
            </motion.button>
          </div>

          {/* Datos integrados */}
          <div className="mt-10 flex max-w-xl flex-wrap items-center gap-x-6 gap-y-4 border-t border-ink/10 pt-6 dark:border-white/10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-chili/10 text-chili">
                <Timer size={19} />
              </span>

              <div>
                <strong className="block text-sm font-black text-ink dark:text-white">
                  15–20 min
                </strong>

                <span className="text-xs text-ink/50 dark:text-white/50">
                  tiempo aproximado
                </span>
              </div>
            </div>

            <div className="hidden h-9 w-px bg-ink/10 sm:block dark:bg-white/10" />

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-nori/10 text-nori dark:bg-wasabi/10 dark:text-wasabi">
                <ChefHat size={19} />
              </span>

              <div>
                <strong className="block text-sm font-black text-ink dark:text-white">
                  Hecho al momento
                </strong>

                <span className="text-xs text-ink/50 dark:text-white/50">
                  sabor y textura real
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Composición visual */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.93,
                  x: 28,
                }
          }
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }
          }
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: "easeOut",
          }}
          className="relative z-10 mx-auto flex min-h-[470px] w-full max-w-[720px] items-center justify-center lg:min-h-[620px]"
        >
          {/* Texto vertical decorativo */}
          <div
            className="absolute right-1 top-1/2 hidden -translate-y-1/2 select-none flex-col items-center gap-3 xl:flex"
            aria-hidden="true"
          >
            <span className="h-16 w-px bg-ink/15 dark:bg-white/15" />

            <span className="[writing-mode:vertical-rl] text-[10px] font-black uppercase tracking-[0.35em] text-ink/30 dark:text-white/30">
              Asian street kitchen
            </span>
          </div>

          {/* Fondo orgánico */}
          <div
            className="absolute left-1/2 top-1/2 h-[76%] w-[78%] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] rounded-[48%_52%_46%_54%/57%_42%_58%_43%] bg-[#f3dfb8] shadow-[0_40px_90px_rgba(87,55,18,0.16)] dark:bg-[#29352b]"
            aria-hidden="true"
          />

          <div
            className="absolute left-[12%] top-[18%] h-[65%] w-[68%] rotate-6 rounded-[48%_52%_46%_54%/57%_42%_58%_43%] border border-chili/15"
            aria-hidden="true"
          />

          <div
            className="absolute right-[10%] top-[16%] h-24 w-24 rounded-full bg-chili/85 shadow-xl shadow-chili/20"
            aria-hidden="true"
          />

          <div
            className="absolute bottom-[14%] left-[10%] h-14 w-14 rounded-full border-[12px] border-gold/25"
            aria-hidden="true"
          />

          <div
            className="absolute left-[13%] top-[29%] h-3 w-3 rounded-full bg-nori"
            aria-hidden="true"
          />

          <div
            className="absolute right-[18%] top-[42%] h-4 w-4 rounded-full bg-gold"
            aria-hidden="true"
          />

          {/* Vapor */}
          <motion.svg
            viewBox="0 0 180 180"
            className="absolute left-1/2 top-[4%] z-10 h-36 w-36 -translate-x-1/2 text-ink/65 sm:h-44 sm:w-44 dark:text-white/60"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.45, 0.85, 0.45],
                    y: [8, -2, 8],
                  }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M48 164C18 126 80 107 52 69C34 44 65 24 64 3"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <path
              d="M92 166C63 132 119 108 93 73C73 46 109 25 106 2"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <path
              d="M134 163C109 133 158 111 137 80C119 54 150 35 147 16"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </motion.svg>

          {/* Bowl */}
          <motion.img
            src="/images/hero-bowl.svg"
            alt="Bowl oriental con arroz, vegetales y proteína"
            width="720"
            height="620"
            fetchPriority="high"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -7, 0],
                  }
            }
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 h-auto w-[108%] max-w-none drop-shadow-[0_34px_34px_rgba(54,31,10,0.24)] sm:w-full lg:w-[112%]"
          />

          {/* Tarjeta de tiempo */}
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
              delay: 0.4,
            }}
            className="absolute right-[1%] top-[17%] z-30 hidden rounded-3xl border border-white/70 bg-white/90 p-4 shadow-soft backdrop-blur-xl sm:block dark:border-white/10 dark:bg-[#17201b]/90"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-chili/10 text-chili">
                <Timer size={20} />
              </span>

              <div>
                <p className="text-sm font-black text-ink dark:text-white">
                  Listo muy pronto
                </p>

                <p className="text-xs text-ink/50 dark:text-white/50">
                  recién preparado
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tarjeta de valoración */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, 5, 0],
                  }
            }
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[7%] left-[1%] z-30 rounded-3xl border border-white/70 bg-white/90 p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-[#17201b]/90"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gold/15 px-3 py-2 text-xl font-black text-gold">
                4.9
              </div>

              <div>
                <p className="font-black text-ink dark:text-white">
                  Favorito local
                </p>

                <p
                  className="text-xs tracking-[0.14em] text-gold"
                  aria-label="Cinco estrellas"
                >
                  ★★★★★
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sello inferior */}
          <div className="absolute bottom-[2%] right-[8%] z-30 hidden items-center gap-2 rounded-full bg-nori px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg md:flex dark:bg-wasabi dark:text-nori">
            <Sparkles size={15} />
            Sabor al wok
          </div>
        </motion.div>
      </div>
    </section>
  );
}