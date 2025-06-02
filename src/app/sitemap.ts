import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { BASE_URL, guide } from "@/constants";

export const dynamic = "force-static";

const baseUrl = BASE_URL.replace(/\/$/, "");
const ROUTES = guide.map((entry) => entry.href);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const query = `*[_type in ["page","post"]]{
    _type,
    "slug": slug.current,
    "lastModified": coalesce(lastModified, _updatedAt),
    changeFrequency,
    priority
  }`;

  type SitemapItem = {
    _type: "page" | "post";
    slug: string;
    lastModified?: string | Date;
    changeFrequency?:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
    priority?: number;
  };

  const items: SitemapItem[] = await client.fetch(query);

  const generatedRoutes: MetadataRoute.Sitemap = items.map((item) => {
    const prefix = item._type === "post" ? "/post/" : "/";
    return {
      url: new URL(`${prefix}${item.slug}`, baseUrl).href,
      lastModified: item.lastModified,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    };
  });

  const staticRoutes: MetadataRoute.Sitemap = ROUTES.map((route) => ({
    url: new URL(route, baseUrl).href,
    lastModified: "2012-12-10T00:00:00Z",
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [
    {
      url: new URL("", baseUrl).href,
      lastModified: new Date().toISOString().split(".")[0] + "Z",
      changeFrequency: "always",
      priority: 1,
    },
    ...generatedRoutes,
    ...staticRoutes,
  ];
}
