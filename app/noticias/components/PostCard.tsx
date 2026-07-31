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
    <article className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Imagem */}
      <Link href={`/noticias/${post.slug.current}`}>
        <div className="relative aspect-16/10 overflow-hidden">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).width(800).height(500).url()}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
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
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {category.title}
          </span>
        )}

        <Link href={`/noticias/${post.slug.current}`}>
          <h2 className="line-clamp-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
            {post.title}
          </h2>
        </Link>

        <p className="line-clamp-3 leading-relaxed text-muted-foreground">
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
          href={`/noticias/${post.slug.current}`}
          className="inline-flex items-center gap-2 font-medium text-primary transition-all group-hover:gap-3"
        >
          Continuar lendo
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}
