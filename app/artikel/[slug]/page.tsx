import { client, urlFor } from "@/lib/sanity";
import { articleBySlugQuery, articlesQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const revalidate = 60;

export async function generateStaticParams() {
  const articles = await client.fetch(articlesQuery);
  return articles.map((a: { slug: { current: string } }) => ({ slug: a.slug.current }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await client.fetch(articleBySlugQuery, { slug: params.slug });
  if (!article) notFound();

  return (
    <>
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
