import { client, urlFor } from "@/lib/sanity";
import { articleBySlugQuery, articlesQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const revalidate = 60;

export async function generateStaticParams() {
  const articles = await client.fetch(articlesQuery);
  return articles.map((a: { slug: { current: string } }) => ({ slug: a.slug.current }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await client.fetch(articleBySlugQuery, { slug });
  if (!article) return {};

  const imageUrl = article.mainImage ? urlFor(article.mainImage).width(1200).height(630).url() : "/logo-j5-ori.png";

  return {
    title: `${article.title} — Jalur5`,
    description: article.excerpt || article.title,
    alternates: { canonical: `/artikel/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt || article.title,
      url: `https://jalur5.com/artikel/${slug}`,
      siteName: "Jalur5",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: article.title }],
      type: "article",
      publishedTime: article.publishedAt,
      authors: article.author?.name ? [article.author.name] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt || article.title,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await client.fetch(articleBySlugQuery, { slug });
  if (!article) notFound();

  const imageUrl = article.mainImage ? urlFor(article.mainImage).width(1200).height(630).url() : null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt || article.title,
    url: `https://jalur5.com/artikel/${slug}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: article.author?.name
      ? { "@type": "Person", name: article.author.name }
      : { "@type": "Organization", name: "Jalur5" },
    publisher: {
      "@type": "Organization",
      name: "Jalur5",
      logo: { "@type": "ImageObject", url: "https://jalur5.com/logo-j5-ori.png" },
    },
    image: imageUrl ? [imageUrl] : ["https://jalur5.com/logo-j5-ori.png"],
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://jalur5.com/artikel/${slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16">
        {article.category && (
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{article.category.title}</span>
        )}
        <h1 className="text-4xl font-bold mt-2 mb-4">{article.title}</h1>
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
          {article.author?.image && (
            <Image
              src={urlFor(article.author.image).width(40).height(40).url()}
              alt={article.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          {article.author?.name && <span>{article.author.name}</span>}
          {article.publishedAt && (
            <span>{new Date(article.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
          )}
        </div>
        {article.mainImage && (
          <div className="relative h-64 sm:h-96 w-full mb-10 rounded-xl overflow-hidden">
            <Image
              src={urlFor(article.mainImage).width(900).height(500).url()}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="prose prose-lg max-w-none">
          <PortableText value={article.body} />
        </div>
      </main>
      <Footer />
    </>
  );
}
