/** @type {import('next').NextConfig} */

const basePath =
  process.env.NODE_ENV === "production"
    ? "/nori-wok"
    : "";

const nextConfig = {
  output: "export",

  reactStrictMode: true,

  swcMinify: true,

  /*
   * Desarrollo:
   * http://localhost:3000/
   *
   * Producción:
   * https://TU-DOMINIO.com/nori-wok/
   */
  basePath,

  /*
   * Expone la ruta base al código de la aplicación.
   * Next.js sustituye este valor durante la compilación.
   */
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;