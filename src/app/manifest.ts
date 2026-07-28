import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nori Wok",
    short_name: "Nori Wok",
    description: "Comida oriental preparada al momento.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf1",
    theme_color: "#b72025",
    icons: [{ src: "/icons/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
