import { CalendarDays, Clock } from "lucide-react";

import { Post } from "@/sanity/lib/types";

interface ArticleHeaderProps {
  post: Post;
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  const category = post.categories?.[0];

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <header className="mb-12">
      {category && (
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {category.title}
        </span>
      )}

      <h1 className="mb-6 text-5xl font-bold text-slate-900">
        {post.title}
      </h1>

      <p className="mb-8 text-xl text-slate-600">
        {post.excerpt}
      </p>

      <div className="flex flex-wrap gap-6 text-sm text-slate-500">
        {formattedDate && (
          <div className="flex items-center gap-2">
            <CalendarDays size={18} />
            {formattedDate}
          </div>
        )}

        {post.readingTime && (
          <div className="flex items-center gap-2">
            <Clock size={18} />
            {post.readingTime} min de leitura
          </div>
        )}
      </div>
    </header>
  );
}