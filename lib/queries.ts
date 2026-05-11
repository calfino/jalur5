import { groq } from "next-sanity";

export const articlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    "author": author->{ name, image },
    "category": category->{ title }
  }
`;

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    publishedAt,
    mainImage,
    "author": author->{ name, image, bio },
    "category": category->{ title }
  }
`;
