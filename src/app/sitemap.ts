import type { MetadataRoute } from "next";
import { siteConfig } from "@/app/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/aviso-de-privacidad/`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/terminos/`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
