import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/app/components/Providers";
import { siteConfig } from "@/app/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Nori Wok | Comida oriental rápida y fresca",
    template: "%s | Nori Wok",
  },
  description: siteConfig.description,
  keywords: ["comida oriental", "wok", "ramen", "sushi", "comida rápida", "pedidos por WhatsApp"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Nori Wok | Comida oriental preparada al momento",
    description: siteConfig.description,
    images: [{ url: "/images/hero-bowl.svg", width: 1200, height: 630, alt: "Bowl oriental de Nori Wok" }],
  },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description, images: ["/images/hero-bowl.svg"] },
  icons: { icon: "/icons/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffaf1" },
    { media: "(prefers-color-scheme: dark)", color: "#101612" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" suppressHydrationWarning>
      <body>
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
