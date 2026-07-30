import type { MetadataRoute } from "next";

import { siteConfig } from "@/app/lib/config";
import { withBasePath } from "@/app/lib/paths";

export default function robots(): MetadataRoute.Robots {
  const rootUrl = new URL(
    withBasePath("/"),
    siteConfig.url,
  );

  return {
    rules: {
      userAgent: "*",
      allow: withBasePath("/"),
    },

    sitemap: new URL(
      "sitemap.xml",
      rootUrl,
    ).toString(),
  };
}