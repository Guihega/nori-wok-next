import type { MetadataRoute } from "next";

import { siteConfig } from "@/app/lib/config";
import { withBasePath } from "@/app/lib/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const rootUrl = new URL(
    withBasePath("/"),
    siteConfig.url,
  );

  return [
    {
      url: rootUrl.toString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL(
        "aviso-de-privacidad/",
        rootUrl,
      ).toString(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: new URL(
        "terminos/",
        rootUrl,
      ).toString(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}