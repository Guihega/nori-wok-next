"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

import { useCart } from "@/app/context/CartContext";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    id: "menu",
    href: "#menu",
    label: "Menú",
  },
  {
    id: "experiencia",
    href: "#experiencia",
    label: "Experiencia",
  },
  {
    id: "nosotros",
    href: "#nosotros",
    label: "Nosotros",
  },
  {
    id: "contacto",
    href: "#contacto",
    label: "Contacto",
  },
];

export default function Navbar() {
  const reduceMotion = useReducedMotion();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { totalItems, openCart } = useCart();

  /*
   * Actualiza la presentación del encabezado y detecta
   * qué sección debe mostrarse como activa.
   *
   * requestAnimationFrame limita las operaciones ejecutadas
   * durante el desplazamiento y evita cálculos excesivos.
   */
  useEffect(() => {
    let ticking = false;
    let frameId: number | null = null;

    const updateNavigationState = () => {
      const activationPoint =
        window.scrollY + window.innerHeight * 0.32;

      let nextActiveSection = "";

      /*
       * Se recorre la navegación desde la última sección.
       * La primera coincidencia encontrada corresponde
       * a la sección más avanzada dentro del documento.
       */
      for (
        let index = navItems.length - 1;
        index >= 0;
        index -= 1
      ) {
        const item = navItems[index];
        const section = document.getElementById(item.id);

        if (!section) {
          continue;
        }

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        if (activationPoint >= sectionTop) {
          nextActiveSection = item.id;
          break;
        }
      }

      setScrolled(window.scrollY > 24);
      setActiveSection(nextActiveSection);

      ticking = false;
      frameId = null;
    };

    const requestNavigationUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;

      frameId = window.requestAnimationFrame(
        updateNavigationState,
      );
    };

    updateNavigationState();

    window.addEventListener(
      "scroll",
      requestNavigationUpdate,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      requestNavigationUpdate,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        requestNavigationUpdate,
      );

      window.removeEventListener(
        "resize",
        requestNavigationUpdate,
      );

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  /*
   * Cuando el menú móvil está abierto:
   *
   * 1. Bloquea el desplazamiento del documento.
   * 2. Permite cerrarlo con la tecla Escape.
   * 3. Restablece el estado anterior al cerrarlo.
   */
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        onKeyDown,
      );
    };
  }, [open]);

  const handleNavigation = (
    sectionId: string,
  ) => {
    setActiveSection(sectionId);
    setOpen(false);
  };

  const handleHomeNavigation = () => {
    setActiveSection("");
    setOpen(false);
  };

  const handleOpenCart = () => {
    setOpen(false);
    openCart();
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={`pointer-events-auto mx-auto transition-all duration-300 motion-reduce:transition-none ${
          scrolled
            ? "mt-2 max-w-[1180px] px-3 sm:px-4"
            : "max-w-[1440px] px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 motion-reduce:transition-none ${
            scrolled
              ? "min-h-[58px] rounded-full border border-black/5 bg-rice/90 px-3 shadow-[0_16px_45px_rgba(52,32,11,0.11)] backdrop-blur-xl sm:px-5 dark:border-white/10 dark:bg-[#101612]/90"
              : "min-h-[78px] bg-transparent"
          }`}
        >
          {/* Logotipo */}
          <motion.a
            href="#inicio"
            onClick={handleHomeNavigation}
            whileTap={
              reduceMotion
                ? undefined
                : {
                    scale: 0.97,
                  }
            }
            className="group flex min-h-11 items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chili focus-visible:ring-offset-2 focus-visible:ring-offset-rice dark:focus-visible:ring-wasabi dark:focus-visible:ring-offset-[#101612]"
            aria-label="Nori Wok, volver al inicio"
          >
            <img
              src="/icons/logo.svg"
              alt=""
              width="42"
              height="42"
              className={`transition-all duration-300 motion-reduce:transition-none ${
                scrolled
                  ? "h-9 w-9"
                  : "h-10 w-10"
              }`}
            />

            <span
              className={`hidden font-black tracking-[0.12em] text-ink transition-all duration-300 motion-reduce:transition-none min-[420px]:inline dark:text-white ${
                scrolled
                  ? "text-base"
                  : "text-lg"
              }`}
            >
              NORI{" "}
              <span className="text-chili transition-colors group-hover:text-chili/75">
                WOK
              </span>
            </span>
          </motion.a>

          {/* Navegación de escritorio */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => {
              const isActive =
                activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    handleNavigation(item.id)
                  }
                  aria-current={
                    isActive
                      ? "location"
                      : undefined
                  }
                  className={`group relative inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-bold transition-colors motion-reduce:transition-none ${
                    isActive
                      ? "text-chili dark:text-wasabi"
                      : "text-ink/65 hover:text-ink dark:text-white/65 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-section"
                      transition={{
                        duration: reduceMotion
                          ? 0
                          : 0.28,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-chili/[0.08] dark:bg-wasabi/10"
                      aria-hidden="true"
                    />
                  )}

                  <span>{item.label}</span>

                  <span
                    className={`absolute bottom-1.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-chili transition-all duration-300 motion-reduce:transition-none dark:bg-wasabi ${
                      isActive
                        ? "w-4 opacity-100"
                        : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-70"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* Acciones */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <motion.button
              type="button"
              onClick={handleOpenCart}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -1,
                    }
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              className="group relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-full bg-chili px-3.5 text-sm font-black text-white shadow-md shadow-chili/10 transition-shadow hover:shadow-lg hover:shadow-chili/20 sm:px-4"
              aria-label={`Abrir pedido. ${totalItems} productos agregados`}
            >
              <span
                className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 motion-reduce:transition-none group-hover:translate-y-0"
                aria-hidden="true"
              />

              <ShoppingBag
                size={18}
                className="relative z-10"
                aria-hidden="true"
              />

              <span className="relative z-10 hidden sm:inline">
                Pedido
              </span>

              <AnimatePresence
                mode="popLayout"
                initial={false}
              >
                <motion.span
                  key={totalItems}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          scale: 0.65,
                          opacity: 0,
                        }
                  }
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.65,
                          opacity: 0,
                        }
                  }
                  transition={{
                    duration: reduceMotion
                      ? 0
                      : 0.2,
                  }}
                  className="relative z-10 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-white px-1.5 py-0.5 text-xs font-black text-chili"
                >
                  {totalItems}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Botón del menú móvil */}
            <motion.button
              type="button"
              onClick={() =>
                setOpen(
                  (currentValue) =>
                    !currentValue,
                )
              }
              whileTap={
                reduceMotion
                  ? undefined
                  : {
                      scale: 0.94,
                    }
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink shadow-sm backdrop-blur-md lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={
                open
                  ? "Cerrar menú"
                  : "Abrir menú"
              }
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.span
                  key={open ? "close" : "open"}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          rotate: -20,
                          scale: 0.8,
                        }
                  }
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          rotate: 20,
                          scale: 0.8,
                        }
                  }
                  transition={{
                    duration: reduceMotion
                      ? 0
                      : 0.16,
                  }}
                >
                  {open ? (
                    <X
                      size={21}
                      aria-hidden="true"
                    />
                  ) : (
                    <Menu
                      size={21}
                      aria-hidden="true"
                    />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-menu"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: -12,
                      scale: 0.98,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: -10,
                      scale: 0.98,
                    }
              }
              transition={{
                duration: reduceMotion
                  ? 0
                  : 0.22,
                ease: "easeOut",
              }}
              className="mt-2 overflow-hidden rounded-[28px] border border-black/5 bg-rice/95 p-3 shadow-[0_24px_70px_rgba(52,32,11,0.18)] backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-[#101612]/95"
              aria-label="Navegación móvil"
            >
              <div className="space-y-1">
                {navItems.map(
                  (item, index) => {
                    const isActive =
                      activeSection === item.id;

                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() =>
                          handleNavigation(
                            item.id,
                          )
                        }
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: -12,
                              }
                        }
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration:
                            reduceMotion
                              ? 0
                              : 0.2,
                          delay:
                            reduceMotion
                              ? 0
                              : index *
                                0.035,
                        }}
                        aria-current={
                          isActive
                            ? "location"
                            : undefined
                        }
                        className={`flex min-h-12 items-center justify-between rounded-2xl px-4 font-bold transition-colors motion-reduce:transition-none ${
                          isActive
                            ? "bg-chili text-white"
                            : "text-ink hover:bg-cream dark:text-white dark:hover:bg-white/5"
                        }`}
                      >
                        <span>
                          {item.label}
                        </span>

                        <span
                          className={`h-2 w-2 rounded-full transition-colors motion-reduce:transition-none ${
                            isActive
                              ? "bg-white"
                              : "bg-ink/15 dark:bg-white/20"
                          }`}
                          aria-hidden="true"
                        />
                      </motion.a>
                    );
                  },
                )}
              </div>

              <div className="mt-3 border-t border-black/5 pt-3 dark:border-white/10">
                <button
                  type="button"
                  onClick={handleOpenCart}
                  className="flex min-h-12 w-full items-center justify-center gap-3 rounded-2xl bg-nori px-4 font-black text-white transition-colors hover:bg-nori/90 dark:bg-wasabi dark:text-nori"
                >
                  <ShoppingBag
                    size={19}
                    aria-hidden="true"
                  />

                  <span>
                    Revisar mi pedido
                  </span>

                  <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs dark:bg-nori/10">
                    {totalItems}
                  </span>
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}