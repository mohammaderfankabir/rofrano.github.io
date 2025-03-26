import type { MetadataRoute } from "next";
import { BASE_URL, DATABASE } from "@/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries = [
    ...Object.values(DATABASE.pages),
    ...Object.values(DATABASE.posts),
  ];

  return sitemapEntries.map(
    ({ url, lastModified, changeFrequency, priority }) => ({
      url: `${BASE_URL}${url}`,
      lastModified,
      changeFrequency: changeFrequency as
        | "monthly"
        | "yearly"
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "never",
      priority,
    })
  );
}
