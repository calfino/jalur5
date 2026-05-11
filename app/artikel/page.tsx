import { client } from "@/lib/sanity";
import { articlesQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: object;
  author?: { name: string };
  category?: { title: string };
}

export const revalidate = 60;

export default async function ArtikelPage() {
  const articles: Article[] = await client.fetch(articlesQuery);

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-10">Artikel</h1>
        {articles.length === 0 ? (
          <p className="text-gray-500">Belum ada artikel. Tambahkan artikel lewat Studio.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link key={article._id} href={`/artikel/${article.slug.current}`} className="group block border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                {article.mainImage && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={urlFor(article.mainImage).width(600).height(400).url()}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4">
                  {article.category && (
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">{article.category.title}</span>
                  )}
                  <h2 className="text-lg font-bold mt-1 group-hover:text-blue-600 transition-colors">{article.title}</h2>
                  {article.excerpt && <p className="text-sm text-gray-600 mt-2 line-clamp-3">{article.excerpt}</p>}
                  <div className="text-xs text-gray-400 mt-3">
                    {article.author?.name && <span>{article.author.name}</span>}
                    {article.publishedAt && (
                      <span className="ml-2">{new Date(article.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
