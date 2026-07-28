"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { formatMoney } from "@/app/lib/config";

export default function MobileCartBar() {
  const { totalItems, totalPrice, openCart } = useCart();
  if (!totalItems) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
      <button type="button" onClick={openCart} className="flex w-full items-center justify-between rounded-2xl bg-nori px-5 py-4 text-white shadow-2xl">
        <span className="flex items-center gap-2 font-black"><ShoppingBag size={19} /> Ver pedido ({totalItems})</span>
        <strong>{formatMoney(totalPrice)}</strong>
      </button>
    </div>
  );
}
