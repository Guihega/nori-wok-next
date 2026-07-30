# Nori Wok

Sitio web demostrativo, responsivo y orientado a conversión para un negocio de comida oriental. Permite explorar el menú, seleccionar platillos, administrar un carrito y preparar un pedido para enviarlo por WhatsApp.

## Demostración

- Sitio publicado: https://mhegasdev.com.mx/nori-wok/
- Repositorio: https://github.com/Guihega/nori-wok-next
- Versión estable: `v1.0.0`
- Tipo de despliegue: exportación estática en Hostinger

## Características principales

- Diseño mobile-first y completamente responsivo.
- Menú visual organizado por categorías.
- Filtrado de platillos.
- Carrito persistente mediante `localStorage`.
- Incremento, disminución y eliminación de productos.
- Cálculo automático del total estimado.
- Generación automática del resumen del pedido.
- Envío del pedido mediante WhatsApp.
- Tema claro y oscuro.
- Navegación entre secciones.
- Animaciones con respeto a `prefers-reduced-motion`.
- Aviso de privacidad y términos del servicio.
- Metadatos SEO.
- Open Graph y Twitter Cards.
- Datos estructurados JSON-LD para restaurante.
- Archivos `robots.txt`, `sitemap.xml` y manifiesto web.
- Exportación estática compatible con hosting tradicional.
- Publicación desde la subcarpeta `/nori-wok/`.

## Tecnologías

- Next.js 14.2.35
- React 18.3.1
- TypeScript 5.4.5
- Tailwind CSS 3.4.18
- Framer Motion 11.18.2
- Lucide React 0.545.0
- next-themes 0.4.6
- ESLint
- PostCSS
- Autoprefixer

## Instalación local

Clona el repositorio:

```bash
git clone https://github.com/Guihega/nori-wok-next.git
cd nori-wok-next
```

Instala las dependencias:

```bash
npm install
```

Inicia el entorno de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en:

```text
http://localhost:3000/
```

En desarrollo no se utiliza la subcarpeta `/nori-wok/`.

## Scripts disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor local de desarrollo.

### Validación de código

```bash
npm run lint
```

Ejecuta las comprobaciones de ESLint.

### Compilación de producción

```bash
npm run build
```

Genera la compilación optimizada y la exportación estática dentro de la carpeta:

```text
out/
```

### Inicio con servidor de Next.js

```bash
npm run start
```

Este comando corresponde al servidor de Next.js. Para la publicación actual se utiliza la exportación estática generada mediante `npm run build`.

## Configuración del negocio

Los datos generales se encuentran en:

```text
src/app/lib/config.ts
```

Desde este archivo se administran:

- Nombre comercial.
- Descripción.
- Dominio.
- Número de WhatsApp.
- Teléfono.
- Correo electrónico.
- Dirección.
- Enlace de ubicación.
- Horarios.
- Moneda.

Los productos y categorías del menú se encuentran en:

```text
src/app/data/menu.ts
```

Las funciones utilizadas para aplicar la ruta base de producción se encuentran en:

```text
src/app/lib/paths.ts
```

## Configuración de la ruta base

La configuración de Next.js está definida en:

```text
next.config.mjs
```

Durante el desarrollo, la aplicación se ejecuta desde la raíz:

```text
/
```

Durante la compilación de producción se utiliza:

```text
/nori-wok
```

como `basePath`.

La URL pública resultante es:

```text
https://mhegasdev.com.mx/nori-wok/
```

## Generar la exportación estática

Para realizar una compilación limpia desde PowerShell:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force out -ErrorAction SilentlyContinue

npm run lint
npm run build
```

Después de la compilación, Next.js genera el sitio estático en:

```text
out/
```

La estructura incluye, entre otros elementos:

```text
out/
├── 404/
├── _next/
├── aviso-de-privacidad/
├── icons/
├── images/
├── terminos/
├── 404.html
├── index.html
├── manifest.webmanifest
├── robots.txt
└── sitemap.xml
```

## Empaquetado para Hostinger

Desde PowerShell, genera un archivo ZIP compatible con servidores Linux:

```powershell
Remove-Item .\nori-wok-hostinger.zip -Force -ErrorAction SilentlyContinue

tar -a -c -f .\nori-wok-hostinger.zip -C .\out .
```

Comprueba el contenido del paquete:

```powershell
tar -tf .\nori-wok-hostinger.zip |
  Select-Object -First 40
```

Las rutas deben utilizar `/` y mostrar una estructura similar a:

```text
./index.html
./_next/
./images/
./icons/
./aviso-de-privacidad/
./terminos/
```

No deben aparecer rutas con separadores de Windows, por ejemplo:

```text
images\platillo.svg
terminos\index.html
```

## Publicación en Hostinger

El contenido debe extraerse directamente dentro de:

```text
public_html/nori-wok/
```

La ubicación correcta del archivo principal es:

```text
public_html/nori-wok/index.html
```

No debe quedar dentro de una carpeta adicional como:

```text
public_html/nori-wok/out/index.html
```

Después de extraer el paquete, deben existir carpetas reales como:

```text
public_html/nori-wok/
├── 404/
├── _next/
├── aviso-de-privacidad/
├── icons/
├── images/
├── terminos/
├── 404.html
├── index.html
├── manifest.webmanifest
├── robots.txt
└── sitemap.xml
```

## Estructura principal del proyecto

```text
nori-wok-next/
├── public/
│   ├── icons/
│   ├── images/
│   └── manifest.webmanifest
├── src/
│   └── app/
│       ├── aviso-de-privacidad/
│       ├── components/
│       ├── context/
│       ├── data/
│       ├── lib/
│       ├── terminos/
│       ├── layout.tsx
│       └── page.tsx
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Calidad técnica

Resultados obtenidos con Lighthouse en la versión publicada:

- Rendimiento: 97
- Accesibilidad: 96
- Buenas prácticas: 100
- SEO: 100

También se validó:

- ESLint sin advertencias ni errores.
- Compilación de producción correcta.
- Exportación estática completa.
- Navegación funcional desde `/nori-wok/`.
- Recursos estáticos cargados correctamente.
- Consola del navegador sin errores.
- Carrito y modificación de cantidades funcionales.
- Generación del pedido para WhatsApp funcional.
- Páginas legales accesibles.
- Diseño adaptable a escritorio, tableta y dispositivos móviles.

## Páginas disponibles

### Página principal

```text
https://mhegasdev.com.mx/nori-wok/
```

### Aviso de privacidad

```text
https://mhegasdev.com.mx/nori-wok/aviso-de-privacidad/
```

### Términos del servicio

```text
https://mhegasdev.com.mx/nori-wok/terminos/
```

## Consideraciones antes de utilizarlo comercialmente

Este proyecto utiliza datos demostrativos. Antes de adaptarlo a un negocio real deben sustituirse:

- Dominio y URL canónica.
- Número de teléfono.
- Número de WhatsApp.
- Correo electrónico.
- Dirección.
- Ubicación en Google Maps.
- Horarios de atención.
- Productos.
- Categorías.
- Precios.
- Logotipo.
- Imágenes e ilustraciones.
- Textos comerciales.
- Aviso de privacidad.
- Términos del servicio.

Los documentos legales deben revisarse con asesoría profesional antes de publicar una versión comercial.

## Versión estable

La primera versión estable está identificada mediante la etiqueta:

```text
v1.0.0
```

La Release correspondiente se encuentra publicada en GitHub e incluye:

- Notas de la versión.
- Código fuente en formato ZIP.
- Código fuente en formato TAR.GZ.

## Estado del proyecto

La versión `v1.0.0` se encuentra:

- Integrada en la rama `master`.
- Publicada en GitHub.
- Desplegada en Hostinger.
- Validada en producción.