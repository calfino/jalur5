import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";
import { articlesQuery } from "@/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await client.fetch(articlesQuery);

  const articleUrls: MetadataRoute.Sitemap = articles.map(
    (a: { slug: { current: string }; publishedAt?: string }) => ({
      url: `https://jalur5.com/artikel/${a.slug.current}`,
      lastModified: a.publishedAt ? new Date(a.publishedAt) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  );

  return [
    {
      url: "https://jalur5.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://jalur5.com/artikel",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...articleUrls,
  ];
}
