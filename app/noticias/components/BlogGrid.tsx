import { Post } from "@/sanity/lib/types";
import { PostCard } from "./PostCard";

interface BlogGridProps {
  posts: Post[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </section>
  );
}