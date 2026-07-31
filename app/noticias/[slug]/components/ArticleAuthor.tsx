import { Post } from "@/sanity/lib/types";

interface ArticleAuthorProps {
  post: Post;
}

export function ArticleAuthor({ post }: ArticleAuthorProps) {
  if (!post.author) return null;

  return (
    <section className="mt-16 rounded-2xl border p-6">
      <p className="text-sm text-slate-500">
        Escrito por
      </p>

      <h3 className="text-xl font-semibold">
        {post.author.name}
      </h3>

      {post.author.role && (
        <p className="text-slate-600">
          {post.author.role}
        </p>
      )}
    </section>
  );
}