"use client";

import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/app/context/CartContext";
import { formatMoney, siteConfig } from "@/app/lib/config";

export default function CartDrawer() {
  const {
    items,
    totalItems,
    totalPrice,
    isCartOpen,
    closeCart,
    updateQuantity,
    clearCart,
  } = useCart();

  useEffect(() => {
    if (!isCartOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const checkout = () => {
    if (!items.length) return;
    const detail = items.map(
      (item) => `• ${item.quantity} × ${item.name} — ${formatMoney(item.price * item.quantity)}`,
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
    const number = siteConfig.whatsappNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <button className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={closeCart} aria-label="Cerrar carrito" />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-rice shadow-2xl dark:bg-[#121914]">
        <div className="flex items-center justify-between border-b border-ink/10 p-5 dark:border-white/10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-chili">Tu selección</p>
            <h2 id="cart-title" className="mt-1 text-2xl font-black text-ink dark:text-white">Pedido ({totalItems})</h2>
          </div>
          <button type="button" onClick={closeCart} className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/5" aria-label="Cerrar">
            <X className="text-ink dark:text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {!items.length ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="rounded-full bg-chili/10 p-5 text-chili"><ShoppingBag size={34} /></div>
              <h3 className="mt-5 text-xl font-black text-ink dark:text-white">Tu pedido está vacío</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-ink/60 dark:text-white/60">Agrega platillos desde el menú y prepara tu mensaje de WhatsApp.</p>
              <button type="button" onClick={closeCart} className="mt-6 rounded-full bg-nori px-5 py-3 text-sm font-black text-white">Explorar menú</button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <article key={item.id} className="grid grid-cols-[72px_1fr] gap-4 rounded-3xl bg-white p-3 shadow-sm dark:bg-white/5">
                  <img src={item.image} alt="" width="72" height="72" className="h-[72px] w-[72px] rounded-2xl object-cover" />
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div><h3 className="font-black text-ink dark:text-white">{item.name}</h3><p className="text-sm font-bold text-chili">{formatMoney(item.price)}</p></div>
                      <button type="button" onClick={() => updateQuantity(item.id, -item.quantity)} aria-label={`Eliminar ${item.name}`} className="p-1 text-ink/45 hover:text-chili dark:text-white/45"><Trash2 size={17} /></button>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-ink/10 px-2 py-1 dark:border-white/10">
                      <button type="button" onClick={() => updateQuantity(item.id, -1)} className="rounded-full p-1 hover:bg-black/5 dark:hover:bg-white/5" aria-label={`Quitar una unidad de ${item.name}`}><Minus size={15} /></button>
                      <strong className="min-w-5 text-center text-sm text-ink dark:text-white">{item.quantity}</strong>
                      <button type="button" onClick={() => updateQuantity(item.id, 1)} className="rounded-full p-1 hover:bg-black/5 dark:hover:bg-white/5" aria-label={`Agregar una unidad de ${item.name}`}><Plus size={15} /></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-ink/10 bg-white p-5 dark:border-white/10 dark:bg-[#17201b]">
          <div className="mb-4 flex items-center justify-between"><span className="font-semibold text-ink/60 dark:text-white/60">Total estimado</span><strong className="text-2xl text-ink dark:text-white">{formatMoney(totalPrice)}</strong></div>
          <button type="button" onClick={checkout} disabled={!items.length} className="w-full rounded-full bg-chili px-5 py-4 font-black text-white transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40">Enviar pedido por WhatsApp</button>
          {items.length > 0 && <button type="button" onClick={clearCart} className="mt-3 w-full py-2 text-sm font-bold text-ink/55 hover:text-chili dark:text-white/55">Vaciar pedido</button>}
        </div>
      </aside>
    </div>
  );
}
