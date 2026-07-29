"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircleMore,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import {
  useEffect,
  useRef,
} from "react";

import { useCart } from "@/app/context/CartContext";
import {
  formatMoney,
  siteConfig,
} from "@/app/lib/config";

export default function CartDrawer() {
  const reduceMotion = useReducedMotion();

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  const panelRef =
    useRef<HTMLElement>(null);

  const previousActiveElementRef =
    useRef<HTMLElement | null>(null);

  const {
    items,
    totalItems,
    totalPrice,
    isCartOpen,
    closeCart,
    updateQuantity,
    clearCart,
  } = useCart();

  /*
   * Administra:
   *
   * 1. Bloqueo del scroll del documento.
   * 2. Cierre mediante Escape.
   * 3. Contención del foco dentro del drawer.
   * 4. Restauración del foco al elemento que abrió el carrito.
   */
  useEffect(() => {
    if (!isCartOpen) {
      return;
    }

    previousActiveElementRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const onKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeCart();
        return;
      }

      if (
        event.key !== "Tab" ||
        !panelRef.current
      ) {
        return;
      }

      const focusableElements =
        panelRef.current.querySelectorAll<HTMLElement>(
          [
            "a[href]",
            "button:not([disabled])",
            "input:not([disabled])",
            "select:not([disabled])",
            "textarea:not([disabled])",
            '[tabindex]:not([tabindex="-1"])',
          ].join(","),
        );

      if (!focusableElements.length) {
        return;
      }

      const firstElement =
        focusableElements[0];

      const lastElement =
        focusableElements[
          focusableElements.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener(
      "keydown",
      onKeyDown,
    );

    return () => {
      window.clearTimeout(focusTimer);

      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        onKeyDown,
      );

      previousActiveElementRef.current?.focus();
    };
  }, [isCartOpen, closeCart]);

  const checkout = () => {
    if (!items.length) {
      return;
    }

    const detail = items.map(
      (item) =>
        `• ${item.quantity} × ${item.name} — ${formatMoney(
          item.price * item.quantity,
        )}`,
    );

    const message = [
      `Hola, quiero realizar un pedido en ${siteConfig.name}:`,
      "",
      ...detail,
      "",
      `Total estimado: ${formatMoney(totalPrice)}`,
      "Modalidad: Recoger en sucursal",
      `Dirección: ${siteConfig.address}`,
      "",
      "Nombre:",
      "Hora estimada de recolección:",
    ].join("\n");

    const number =
      siteConfig.whatsappNumber.replace(
        /\D/g,
        "",
      );

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(
        message,
      )}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleExploreMenu = () => {
    closeCart();

    window.setTimeout(() => {
      document
        .getElementById("menu")
        ?.scrollIntoView({
          behavior: reduceMotion
            ? "auto"
            : "smooth",
          block: "start",
        });
    }, 50);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          key="cart-drawer"
          className="fixed inset-0 z-[80]"
          role="presentation"
        >
          <motion.button
            type="button"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            animate={{
              opacity: 1,
            }}
            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                  }
            }
            transition={{
              duration: reduceMotion
                ? 0
                : 0.22,
            }}
            className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-[3px]"
            onClick={closeCart}
            aria-label="Cerrar pedido"
          />

          <motion.aside
            ref={panelRef}
            initial={
              reduceMotion
                ? false
                : {
                    x: "100%",
                  }
            }
            animate={{
              x: 0,
            }}
            exit={
              reduceMotion
                ? undefined
                : {
                    x: "100%",
                  }
            }
            transition={{
              duration: reduceMotion
                ? 0
                : 0.34,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-0 top-0 flex h-full w-full max-w-[480px] flex-col overflow-hidden bg-rice shadow-[0_0_80px_rgba(0,0,0,0.26)] dark:bg-[#121914]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            aria-describedby="cart-description"
          >
            {/* Encabezado */}
            <header className="relative overflow-hidden border-b border-ink/10 px-5 pb-5 pt-6 dark:border-white/10 sm:px-6">
              <div
                className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border-[34px] border-chili/[0.055] dark:border-chili/[0.08]"
                aria-hidden="true"
              />

              <div className="relative flex items-start justify-between gap-5">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-chili/[0.07] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-chili dark:bg-chili/10">
                    <ShoppingBag
                      size={14}
                      aria-hidden="true"
                    />
                    Tu selección
                  </div>

                  <h2
                    id="cart-title"
                    className="mt-3 text-3xl font-black tracking-[-0.04em] text-ink dark:text-white"
                  >
                    Pedido
                    <span className="ml-2 text-chili">
                      ({totalItems})
                    </span>
                  </h2>

                  <p
                    id="cart-description"
                    className="mt-2 max-w-sm text-sm leading-6 text-ink/55 dark:text-white/50"
                  >
                    Ajusta cantidades y envía el
                    resumen por WhatsApp.
                  </p>
                </div>

                <motion.button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeCart}
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.92,
                        }
                  }
                  className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink shadow-sm transition-colors hover:border-chili/30 hover:text-chili focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chili dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:text-wasabi"
                  aria-label="Cerrar pedido"
                >
                  <X
                    size={20}
                    aria-hidden="true"
                  />
                </motion.button>
              </div>

              {items.length > 0 && (
                <div className="relative mt-5 grid grid-cols-3 gap-2">
                  {[
                    "Revisa",
                    "Confirma",
                    "Envía",
                  ].map((label, index) => (
                    <div
                      key={label}
                      className="rounded-xl border border-ink/[0.06] bg-white/50 px-3 py-2 dark:border-white/[0.07] dark:bg-white/[0.035]"
                    >
                      <span className="text-[9px] font-black tracking-[0.16em] text-ink/30 dark:text-white/25">
                        0{index + 1}
                      </span>

                      <span className="mt-1 block text-xs font-black text-ink dark:text-white">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </header>

            {/* Contenido */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6">
              {!items.length ? (
                <motion.div
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
                  className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <div className="relative">
                    <div
                      className="absolute inset-0 scale-150 rounded-full bg-chili/10 blur-2xl"
                      aria-hidden="true"
                    />

                    <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] bg-chili/10 text-chili">
                      <ShoppingBag
                        size={38}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3 className="mt-7 text-2xl font-black tracking-[-0.03em] text-ink dark:text-white">
                    Tu pedido está vacío
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-ink/58 dark:text-white/52">
                    Agrega platillos desde el menú
                    y prepara tu mensaje de
                    WhatsApp.
                  </p>

                  <motion.button
                    type="button"
                    onClick={handleExploreMenu}
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
                    className="group mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-nori px-6 py-3 font-black text-white shadow-lg shadow-nori/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nori focus-visible:ring-offset-4 focus-visible:ring-offset-rice dark:bg-wasabi dark:text-nori dark:focus-visible:ring-wasabi dark:focus-visible:ring-offset-[#121914]"
                  >
                    Explorar menú

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </motion.button>
                </motion.div>
              ) : (
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <motion.article
                      key={item.id}
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
                        duration:
                          reduceMotion
                            ? 0
                            : 0.28,
                        delay:
                          reduceMotion
                            ? 0
                            : index * 0.035,
                      }}
                      className="group relative grid grid-cols-[88px_1fr] gap-4 overflow-hidden rounded-[1.5rem] border border-ink/[0.06] bg-white/72 p-3 shadow-sm transition-shadow hover:shadow-md dark:border-white/[0.07] dark:bg-white/[0.045]"
                    >
                      <div className="relative h-[88px] w-[88px] overflow-hidden rounded-[1.15rem] bg-cream">
                        <Image
                          src={item.image}
                          alt={`Platillo ${item.name}`}
                          fill
                          sizes="88px"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                        />

                        <span className="absolute bottom-2 left-2 flex min-h-6 min-w-6 items-center justify-center rounded-full bg-nori px-1.5 text-[10px] font-black text-white shadow-md dark:bg-wasabi dark:text-nori">
                          ×{item.quantity}
                        </span>
                      </div>

                      <div className="min-w-0 py-0.5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="truncate font-black text-ink dark:text-white">
                              {item.name}
                            </h3>

                            <p className="mt-1 text-sm font-black text-chili">
                              {formatMoney(item.price)}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                -item.quantity,
                              )
                            }
                            aria-label={`Eliminar ${item.name}`}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink/35 transition-colors hover:bg-chili/10 hover:text-chili focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chili dark:text-white/35"
                          >
                            <Trash2
                              size={17}
                              aria-hidden="true"
                            />
                          </button>
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-3">
                          <div className="inline-flex min-h-10 items-center gap-1 rounded-full border border-ink/10 bg-rice/70 p-1 dark:border-white/10 dark:bg-black/10">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  -1,
                                )
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chili dark:text-white dark:hover:bg-white/10"
                              aria-label={`Quitar una unidad de ${item.name}`}
                            >
                              <Minus
                                size={15}
                                aria-hidden="true"
                              />
                            </button>

                            <strong className="min-w-7 text-center text-sm text-ink dark:text-white">
                              {item.quantity}
                            </strong>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  1,
                                )
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chili dark:text-white dark:hover:bg-white/10"
                              aria-label={`Agregar una unidad de ${item.name}`}
                            >
                              <Plus
                                size={15}
                                aria-hidden="true"
                              />
                            </button>
                          </div>

                          <strong className="text-sm font-black text-ink dark:text-white">
                            {formatMoney(
                              item.price *
                                item.quantity,
                            )}
                          </strong>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>

            {/* Resumen */}
            <footer className="relative border-t border-ink/10 bg-white px-5 py-5 dark:border-white/10 dark:bg-[#17201b] sm:px-6">
              <div
                className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full border-[34px] border-chili/[0.04] dark:border-chili/[0.065]"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <span className="text-sm font-semibold text-ink/55 dark:text-white/52">
                      Total estimado
                    </span>

                    <p className="mt-1 text-xs text-ink/38 dark:text-white/35">
                      Se confirma por WhatsApp.
                    </p>
                  </div>

                  <strong className="text-3xl font-black tracking-[-0.04em] text-ink dark:text-white">
                    {formatMoney(totalPrice)}
                  </strong>
                </div>

                <motion.button
                  type="button"
                  onClick={checkout}
                  disabled={!items.length}
                  whileHover={
                    !reduceMotion &&
                    items.length
                      ? {
                          y: -2,
                        }
                      : undefined
                  }
                  whileTap={
                    !reduceMotion &&
                    items.length
                      ? {
                          scale: 0.985,
                        }
                      : undefined
                  }
                  className="group mt-5 flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-chili px-5 py-4 font-black text-white shadow-lg shadow-chili/15 transition-shadow hover:shadow-xl hover:shadow-chili/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chili focus-visible:ring-offset-4 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-40 dark:focus-visible:ring-offset-[#17201b]"
                >
                  <MessageCircleMore
                    size={19}
                    aria-hidden="true"
                  />

                  Enviar pedido por WhatsApp

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </motion.button>

                {items.length > 0 && (
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-nori dark:text-wasabi">
                      <CheckCircle2
                        size={15}
                        aria-hidden="true"
                      />
                      Resumen listo para enviar
                    </div>

                    <button
                      type="button"
                      onClick={clearCart}
                      className="min-h-10 rounded-full px-3 text-sm font-bold text-ink/48 transition-colors hover:bg-chili/5 hover:text-chili focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chili dark:text-white/45"
                    >
                      Vaciar pedido
                    </button>
                  </div>
                )}
              </div>
            </footer>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}