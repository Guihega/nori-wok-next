"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Leaf, Timer, UtensilsCrossed } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { openCart } = useCart();

  return (
    <section id="inicio" className="relative overflow-hidden bg-rice bg-grain pt-32 dark:bg-[#101612]">
      <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.03fr_.97fr] lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-nori/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-nori dark:border-white/10 dark:bg-white/5 dark:text-wasabi">
            <Leaf size={15} /> Ingredientes frescos · sabor al wok
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl dark:text-white">
            Sabores de Asia, <span className="text-chili">listos para tu día.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ink/70 dark:text-white/70">
            Bowls, ramen, sushi y platillos al wok preparados al momento. Elige, confirma por WhatsApp y recoge sin filas.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#menu" className="inline-flex items-center justify-center gap-2 rounded-full bg-chili px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:shadow-lift">
              Ver menú <ArrowRight size={19} />
            </a>
            <button
              type="button"
              onClick={openCart}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/70 px-7 py-4 font-black text-ink transition hover:-translate-y-1 hover:border-chili hover:text-chili dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              Armar pedido
            </button>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 text-sm sm:grid-cols-3">
            <div className="flex items-center gap-3"><Timer className="text-chili" size={20} /><span className="font-semibold text-ink/70 dark:text-white/70">15–20 min aprox.</span></div>
            <div className="flex items-center gap-3"><UtensilsCrossed className="text-chili" size={20} /><span className="font-semibold text-ink/70 dark:text-white/70">Hecho al momento</span></div>
            <div className="flex items-center gap-3"><Leaf className="text-chili" size={20} /><span className="font-semibold text-ink/70 dark:text-white/70">Opciones veggie</span></div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: 2 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-2xl"
        >
          <div className="absolute inset-12 rounded-full bg-chili/10 blur-3xl" aria-hidden="true" />
          <img
            src="/images/hero-bowl.svg"
            alt="Bowl oriental con arroz, vegetales y proteína"
            width="720"
            height="620"
            fetchPriority="high"
            className="relative h-auto w-full drop-shadow-2xl"
          />
          <div className="absolute bottom-8 left-0 rounded-3xl bg-white/90 p-4 shadow-soft backdrop-blur dark:bg-[#17201b]/90">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gold/15 px-3 py-2 text-xl font-black text-gold">4.9</div>
              <div><p className="font-black text-ink dark:text-white">Favorito local</p><p className="text-xs text-ink/55 dark:text-white/55">★★★★★</p></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
