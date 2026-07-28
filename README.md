# Nori Wok — Next.js

Sitio web responsivo para un negocio de comida oriental rápida, construido con el mismo stack base utilizado en MhegasDev.

## Stack

- Next.js 14.2.11
- React 18.3.1
- TypeScript 5.4.5
- Tailwind CSS 3.4.18
- Framer Motion
- Lucide React
- next-themes
- ESLint, PostCSS y Autoprefixer

## Funcionalidad

- Diseño mobile-first y responsivo.
- Tema claro/oscuro.
- Menú filtrable.
- Carrito persistente con localStorage.
- Pedido preparado para WhatsApp.
- Exportación estática para cPanel o Hostinger.
- Metadata SEO, Open Graph, JSON-LD Restaurant, sitemap, robots y manifest.
- Páginas de privacidad y términos.
- Respeto a `prefers-reduced-motion`.

## Desarrollo

```bash
npm install
npm run dev
```

## Build estático

```bash
npm run build
```

Next.js generará el sitio estático en la carpeta `out/`.

## Configuración del negocio

Editar:

```text
src/app/lib/config.ts
```

Ahí se encuentran nombre, dominio, WhatsApp, dirección, correo y horarios.

El menú está en:

```text
src/app/data/menu.ts
```

## Pendientes antes de publicar

- Sustituir datos provisionales.
- Incorporar logotipo definitivo.
- Reemplazar ilustraciones por fotografías finales optimizadas en WebP/AVIF cuando estén disponibles.
- Revisar aviso de privacidad y términos con asesoría legal.
- Configurar dominio real y Google Business Profile.
