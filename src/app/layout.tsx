import type {
  Metadata,
  Viewport,
} from "next";

import "./globals.css";

import Providers from "@/app/components/Providers";
import { siteConfig } from "@/app/lib/config";
import { withBasePath } from "@/app/lib/paths";

const publicSiteUrl = new URL(
  withBasePath("/"),
  siteConfig.url,
).toString();

const heroImageUrl = new URL(
  withBasePath("/images/hero-bowl.svg"),
  siteConfig.url,
).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default:
      "Nori Wok | Comida oriental rápida y fresca",
    template: "%s | Nori Wok",
  },

  description: siteConfig.description,

  keywords: [
    "comida oriental",
    "wok",
    "ramen",
    "sushi",
    "comida rápida",
    "pedidos por WhatsApp",
  ],

  alternates: {
    canonical: publicSiteUrl,
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: publicSiteUrl,
    siteName: siteConfig.name,
    title:
      "Nori Wok | Comida oriental preparada al momento",
    description: siteConfig.description,

    images: [
      {
        url: heroImageUrl,
        width: 1200,
        height: 630,
        alt: "Bowl oriental de Nori Wok",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [heroImageUrl],
  },

  icons: {
    icon: withBasePath(
      "/icons/favicon.svg",
    ),
  },

  manifest: withBasePath(
    "/manifest.webmanifest",
  ),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,

  themeColor: [
    {
      media:
        "(prefers-color-scheme: light)",
      color: "#fffaf1",
    },
    {
      media:
        "(prefers-color-scheme: dark)",
      color: "#101612",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      suppressHydrationWarning
    >
      <body>
        <a
          href="#contenido"
          className="skip-link"
        >
          Saltar al contenido
        </a>

        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}