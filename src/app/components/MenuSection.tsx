"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { menuItems } from "@/app/data/menu";
import { formatMoney } from "@/app/lib/config";
import type { MenuCategory } from "@/app/types";
import { useCart } from "@/app/context/CartContext";

const filters: { value: "all" | MenuCategory; label: string }[] = [
  { value: "all", label: "Todo" },
  { value: "wok", label: "Wok" },
  { value: "ramen", label: "Ramen" },
  { value: "sushi", label: "Sushi" },
  { value: "veggie", label: "Vegetariano" },
];

export default function MenuSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const { addItem } = useCart();
  const reduceMotion = useReducedMotion();

  const visibleItems = useMemo(
    () => menuItems.filter((item) => filter === "all" || item.categories.includes(filter)),
    [filter],
  );

  const handleAdd = (id: string) => {
    const item = menuItems.find((entry) => entry.id === id);
    if (!item) return;
    addItem(item);
    setLastAdded(id);
    window.setTimeout(() => setLastAdded((current) => (current === id ? null : current)), 1400);
  };

  return (
    <section id="menu" className="scroll-mt-24 bg-white py-24 dark:bg-[#131b16]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-chili">Elige tu antojo</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.035em] text-ink sm:text-5xl dark:text-white">Menú destacado</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-ink/65 lg:justify-self-end dark:text-white/65">
            Una selección clara para decidir rápido. Todos los platillos pueden personalizarse según disponibilidad.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar menú">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                filter === item.value
                  ? "bg-nori text-white shadow-md"
                  : "border border-ink/10 bg-rice text-ink hover:border-nori hover:text-nori dark:border-white/10 dark:bg-white/5 dark:text-white"
              }`}
              aria-pressed={filter === item.value}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-[2rem] border border-ink/5 bg-rice shadow-sm transition hover:-translate-y-1.5 hover:shadow-lift dark:border-white/10 dark:bg-[#17201b]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-cream dark:bg-white/5">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width="420"
                    height="320"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black text-ink dark:text-white">{item.name}</h3>
                    <strong className="whitespace-nowrap text-lg text-chili">{formatMoney(item.price)}</strong>
                  </div>
                  <p className="mt-3 min-h-14 text-sm leading-6 text-ink/65 dark:text-white/65">{item.description}</p>
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-wasabi/15 px-3 py-1.5 text-xs font-black text-nori dark:text-wasabi">{item.tag}</span>
                    <button
                      type="button"
                      onClick={() => handleAdd(item.id)}
                      className="inline-flex items-center gap-2 rounded-full bg-chili px-4 py-2.5 text-sm font-black text-white transition hover:shadow-lg active:scale-95"
                    >
                      {lastAdded === item.id ? <><Check size={17} /> Agregado</> : <>Agregar <Plus size={17} /></>}
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
