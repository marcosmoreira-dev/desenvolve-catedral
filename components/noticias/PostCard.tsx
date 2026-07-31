import Image from "next/image";
import Link from "next/link";

import { CalendarDays, Clock, ArrowRight } from "lucide-react";

import { Post } from "@/sanity/lib/types";
import { urlFor } from "@/sanity/lib/image";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const category = post.categories?.[0];

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Imagem */}
      <Link href={`/blog/${post.slug.current}`}>
        <div className="relative h-60 overflow-hidden bg-slate-200">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).width(800).height(500).url()}
              alt={post.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-slate-500">
              Sem imagem
            </div>
          )}
        </div>
      </Link>

      {/* Conteúdo */}
      <div className="flex flex-col gap-4 p-6">
        {category && (
          <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            {category.title}
          </span>
        )}

        <Link href={`/blog/${post.slug.current}`}>
          <h2 className="line-clamp-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
            {post.title}
          </h2>
        </Link>

        <p className="line-clamp-3 leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          {formattedDate && (
            <div className="flex items-center gap-1">
              <CalendarDays size={16} />
              <span>{formattedDate}</span>
            </div>
          )}

          {post.readingTime && (
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{post.readingTime} min de leitura</span>
            </div>
          )}
        </div>

        <Link
          href={`/blog/${post.slug.current}`}
          className="mt-2 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:gap-3"
        >
          Ler artigo
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}
