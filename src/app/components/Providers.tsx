"use client";

import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/app/context/CartContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
