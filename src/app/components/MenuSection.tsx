"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Check,
  Flame,
  Leaf,
  Plus,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useCart } from "@/app/context/CartContext";
import { menuItems } from "@/app/data/menu";
import { formatMoney } from "@/app/lib/config";
import type {
  MenuCategory,
  MenuItem,
} from "@/app/types";

type FilterValue = "all" | MenuCategory;
type MotionPreference = boolean | null;

type CardProps = {
  item: MenuItem;
  quantity: number;
  isAdded: boolean;
  reduceMotion: MotionPreference;
  onAdd: (item: MenuItem) => void;
};

const filters: Array<{
  value: FilterValue;
  label: string;
}> = [
  { value: "all", label: "Todo" },
  { value: "wok", label: "Wok" },
  { value: "ramen", label: "Ramen" },
  { value: "sushi", label: "Sushi" },
  { value: "veggie", label: "Vegetariano" },
];

function QuantityBadge({
  quantity,
}: {
  quantity: number;
}) {
  if (quantity <= 0) {
    return null;
  }

  return (
    <span className="flex min-h-8 min-w-8 items-center justify-center rounded-full bg-nori px-2 text-xs font-black text-white shadow-lg dark:bg-wasabi dark:text-nori">
      ×{quantity}
    </span>
  );
}

function AddButton({
  item,
  isAdded,
  reduceMotion,
  onAdd,
  featured = false,
}: CardProps & {
  featured?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onAdd(item)}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -2 }
      }
      whileTap={
        reduceMotion
          ? undefined
          : { scale: 0.98 }
      }
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-black transition-all motion-reduce:transition-none ${
        featured ? "min-h-12 sm:w-auto" : "w-full"
      } ${
        isAdded
          ? featured
            ? "bg-wasabi text-nori"
            : "bg-nori text-white dark:bg-wasabi dark:text-nori"
          : "bg-chili text-white hover:bg-[#c8282d] hover:shadow-lg"
      }`}
      aria-label={`Agregar ${item.name} al pedido`}
    >
      {isAdded ? (
        <>
          <Check size={17} aria-hidden="true" />
          Agregado
        </>
      ) : (
        <>
          {featured ? "Agregar al pedido" : "Agregar"}
          <Plus size={17} aria-hidden="true" />
        </>
      )}
    </motion.button>
  );
}

function FeaturedCard({
  item,
  quantity,
  isAdded,
  reduceMotion,
  onAdd,
  hasSupportingItems,
}: CardProps & {
  hasSupportingItems: boolean;
}) {
  return (
    <motion.article
      whileHover={
        reduceMotion
          ? undefined
          : { y: -4 }
      }
      className="group relative overflow-hidden rounded-[2.25rem] bg-nori shadow-[0_24px_70px_rgba(23,63,54,0.2)] dark:border dark:border-white/10"
    >
      <div
        className={`grid h-full ${
          hasSupportingItems
            ? "md:grid-cols-[1.04fr_.96fr] lg:min-h-[610px] lg:grid-cols-1 xl:grid-cols-[1.04fr_.96fr]"
            : "md:min-h-[500px] md:grid-cols-[1.08fr_.92fr]"
        }`}
      >
        <div className="relative min-h-[330px] overflow-hidden bg-cream dark:bg-white/5 sm:min-h-[390px]">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes={
              hasSupportingItems
                ? "(max-width: 767px) 100vw, (max-width: 1279px) 60vw, 34vw"
                : "(max-width: 767px) 100vw, 54vw"
            }
            className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-nori/35 via-transparent to-transparent"
            aria-hidden="true"
          />

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-nori shadow-sm backdrop-blur-md">
            <Flame
              size={14}
              className="text-chili"
              aria-hidden="true"
            />
            Selección de la casa
          </div>

          {quantity > 0 && (
            <div className="absolute bottom-5 left-5 rounded-full bg-nori px-3.5 py-2 text-xs font-black text-white shadow-lg">
              {quantity} en tu pedido
            </div>
          )}
        </div>

        <div className="relative flex flex-col justify-between overflow-hidden p-7 text-white sm:p-8 lg:p-9">
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full border-[38px] border-white/[0.035]"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-wasabi px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-nori">
                <Leaf size={14} aria-hidden="true" />
                {item.tag}
              </span>

              <strong className="text-2xl font-black text-wasabi sm:text-3xl">
                {formatMoney(item.price)}
              </strong>
            </div>

            <h3 className="mt-7 text-3xl font-black leading-none tracking-[-0.04em] sm:text-4xl">
              {item.name}
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
              {item.description}
            </p>
          </div>

          <div className="relative mt-10">
            <AddButton
              item={item}
              quantity={quantity}
              isAdded={isAdded}
              reduceMotion={reduceMotion}
              onAdd={onAdd}
              featured
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function SupportingCard(props: CardProps) {
  const {
    item,
    quantity,
    reduceMotion,
  } = props;

  return (
    <motion.article
      whileHover={
        reduceMotion
          ? undefined
          : { y: -4 }
      }
      className="group grid min-h-[290px] overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-rice shadow-sm transition-shadow hover:shadow-lift dark:border-white/10 dark:bg-[#17201b] sm:grid-cols-[0.86fr_1.14fr]"
    >
      <div className="relative min-h-[230px] overflow-hidden bg-cream dark:bg-white/5 sm:min-h-full">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 42vw, 22vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
        />

        <div className="absolute bottom-4 left-4">
          <QuantityBadge quantity={quantity} />
        </div>
      </div>

      <div className="flex flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <span className="rounded-full bg-wasabi/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-nori dark:text-wasabi">
              {item.tag}
            </span>

            <strong className="whitespace-nowrap text-lg font-black text-chili">
              {formatMoney(item.price)}
            </strong>
          </div>

          <h3 className="mt-5 text-xl font-black leading-tight text-ink dark:text-white">
            {item.name}
          </h3>

          <p className="mt-3 text-sm leading-6 text-ink/60 dark:text-white/60">
            {item.description}
          </p>
        </div>

        <div className="mt-6">
          <AddButton {...props} />
        </div>
      </div>
    </motion.article>
  );
}

function RegularCard(props: CardProps) {
  const {
    item,
    quantity,
    reduceMotion,
  } = props;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 18 }
      }
      animate={{ opacity: 1, y: 0 }}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -4 }
      }
      className="group overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-rice shadow-sm transition-shadow hover:shadow-lift dark:border-white/10 dark:bg-[#17201b]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream dark:bg-white/5">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5">
          <span className="rounded-full border border-white/60 bg-white/85 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-nori shadow-sm backdrop-blur-md">
            {item.tag}
          </span>
          <QuantityBadge quantity={quantity} />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-black leading-tight text-ink dark:text-white">
            {item.name}
          </h3>

          <strong className="whitespace-nowrap text-lg font-black text-chili">
            {formatMoney(item.price)}
          </strong>
        </div>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-ink/60 dark:text-white/60">
          {item.description}
        </p>

        <div className="mt-6">
          <AddButton {...props} />
        </div>
      </div>
    </motion.article>
  );
}

export default function MenuSection() {
  const [filter, setFilter] =
    useState<FilterValue>("all");
  const [lastAdded, setLastAdded] =
    useState<string | null>(null);

  const feedbackTimer = useRef<number | null>(
    null,
  );

  const reduceMotion = useReducedMotion();
  const { addItem, items, openCart } = useCart();

  const visibleItems = useMemo(
    () =>
      menuItems.filter(
        (item) =>
          filter === "all" ||
          item.categories.includes(filter),
      ),
    [filter],
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<FilterValue, number> = {
      all: menuItems.length,
      wok: 0,
      ramen: 0,
      sushi: 0,
      veggie: 0,
    };

    menuItems.forEach((item) => {
      item.categories.forEach((category) => {
        counts[category] += 1;
      });
    });

    return counts;
  }, []);

  const cartQuantities = useMemo(
    () =>
      new Map(
        items.map((item) => [
          item.id,
          item.quantity,
        ]),
      ),
    [items],
  );

  const totalCartItems = useMemo(
    () =>
      items.reduce(
        (total, item) =>
          total + item.quantity,
        0,
      ),
    [items],
  );

  const featuredItem = visibleItems[0];
  const supportingItems = visibleItems.slice(1, 3);
  const remainingItems = visibleItems.slice(3);

  useEffect(
    () => () => {
      if (feedbackTimer.current !== null) {
        window.clearTimeout(feedbackTimer.current);
      }
    },
    [],
  );

  const handleAdd = (item: MenuItem) => {
    addItem(item);
    setLastAdded(item.id);

    if (feedbackTimer.current !== null) {
      window.clearTimeout(feedbackTimer.current);
    }

    feedbackTimer.current = window.setTimeout(
      () => {
        setLastAdded((current) =>
          current === item.id ? null : current,
        );
        feedbackTimer.current = null;
      },
      1400,
    );
  };

  const buildCardProps = (
    item: MenuItem,
  ): CardProps => ({
    item,
    quantity: cartQuantities.get(item.id) ?? 0,
    isAdded: lastAdded === item.id,
    reduceMotion,
    onAdd: handleAdd,
  });

  return (
    <section
      id="menu"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 dark:bg-[#131b16] sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -left-40 top-36 h-96 w-96 rounded-full bg-wasabi/[0.06] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-[28rem] w-[28rem] rounded-full bg-gold/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-chili/[0.08] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-chili dark:bg-chili/15">
              <Sparkles size={14} aria-hidden="true" />
              Elige tu antojo
            </div>

            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-ink dark:text-white sm:text-5xl lg:text-[3.65rem]">
              Un menú corto.
              <span className="mt-1 block text-chili">
                Decisiones más fáciles.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-8 text-ink/65 dark:text-white/65">
              Platillos claros, porciones honestas y
              combinaciones pensadas para pedir rápido.
              Personaliza según disponibilidad y confirma
              directamente por WhatsApp.
            </p>

            {totalCartItems > 0 && (
              <button
                type="button"
                onClick={openCart}
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full font-black text-nori transition-colors hover:text-chili dark:text-wasabi dark:hover:text-white"
              >
                <ShoppingBag size={18} aria-hidden="true" />
                Revisar mi pedido
                <span className="flex min-h-6 min-w-6 items-center justify-center rounded-full bg-nori px-2 text-xs text-white dark:bg-wasabi dark:text-nori">
                  {totalCartItems}
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-ink/[0.07] bg-rice/80 p-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar menú"
          >
            {filters.map((item) => {
              const isActive = filter === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFilter(item.value)}
                  className={`relative isolate inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-full px-4 text-sm font-black transition-colors motion-reduce:transition-none sm:px-5 ${
                    isActive
                      ? "text-white dark:text-nori"
                      : "text-ink/65 hover:text-ink dark:text-white/65 dark:hover:text-white"
                  }`}
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.span
                      layoutId="menu-filter-active"
                      transition={{
                        duration: reduceMotion ? 0 : 0.25,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-nori dark:bg-wasabi"
                      aria-hidden="true"
                    />
                  )}

                  <span>{item.label}</span>
                  <span
                    className={`flex min-h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] ${
                      isActive
                        ? "bg-white/15 text-white dark:bg-nori/10 dark:text-nori"
                        : "bg-ink/[0.06] text-ink/45 dark:bg-white/10 dark:text-white/45"
                    }`}
                  >
                    {categoryCounts[item.value]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {visibleItems.length} platillos disponibles en la
          categoría seleccionada.
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 16 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              reduceMotion
                ? undefined
                : { opacity: 0, y: -10 }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.28,
              ease: "easeOut",
            }}
            className="mt-10"
          >
            {featuredItem && (
              <div
                className={`grid gap-5 ${
                  supportingItems.length > 0
                    ? "lg:grid-cols-[1.16fr_.84fr]"
                    : ""
                }`}
              >
                <FeaturedCard
                  {...buildCardProps(featuredItem)}
                  hasSupportingItems={
                    supportingItems.length > 0
                  }
                />

                {supportingItems.length > 0 && (
                  <div className="grid auto-rows-fr gap-5">
                    {supportingItems.map((item) => (
                      <SupportingCard
                        key={item.id}
                        {...buildCardProps(item)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {remainingItems.length > 0 && (
              <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {remainingItems.map((item) => (
                  <RegularCard
                    key={item.id}
                    {...buildCardProps(item)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}