import { notFound } from "next/navigation";

import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/sanity/lib/types";

import type { Metadata } from "next";

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;

  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  const post = data as Post | null

  if (!post) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

import { ArticleHeader } from "./components/ArticleHeader";
import { ArticleBody } from "./components/ArticleBody";
import { ArticleAuthor } from "./components/ArticleAuthor";
import { ShareButtons } from "./components/ShareButtons";
{/* import { RelatedPosts } from "./components/RelatedPosts"; */}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <ArticleHeader post={post as Post} />

      <ArticleBody post={post as Post} />

      <ArticleAuthor post={post as Post} />

      <ShareButtons />

      {/* <RelatedPosts /> */}
    </main>
  );
}