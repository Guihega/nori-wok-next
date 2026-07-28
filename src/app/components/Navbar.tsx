"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "#menu", label: "Menú" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-rice/90 py-2 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#101612]/90"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Nori Wok, inicio">
          <img src="/icons/logo.svg" alt="" width="42" height="42" className="h-10 w-10" />
          <span className="text-lg font-black tracking-[0.12em] text-ink dark:text-white">
            NORI <span className="text-chili">WOK</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink/75 transition hover:text-chili dark:text-white/75 dark:hover:text-wasabi"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-10 items-center gap-2 rounded-full bg-chili px-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            aria-label={`Abrir carrito. ${totalItems} productos`}
          >
            <ShoppingBag size={18} />
            <span className="hidden sm:inline">Pedido</span>
            <span className="min-w-5 rounded-full bg-white px-1.5 py-0.5 text-xs text-chili">{totalItems}</span>
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="mx-4 mt-3 rounded-3xl border border-black/5 bg-white p-4 shadow-soft lg:hidden dark:border-white/10 dark:bg-[#17201b]"
          aria-label="Navegación móvil"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 font-semibold text-ink hover:bg-cream dark:text-white dark:hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
