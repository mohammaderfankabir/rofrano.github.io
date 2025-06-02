import type { MetadataRoute } from "next";
import { BASE_URL } from "@/constants";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${BASE_URL.replace(/\/$/, "")}/sitemap.xml`,
  };
}
