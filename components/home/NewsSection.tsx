import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

// Tipagem para a estrutura de imagem do Sanity
interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  mainImage?: SanityImage | null; // Tipagem correta sem usar 'any'
}

interface NewsSectionProps {
  posts: Post[];
}

export function NewsSection({ posts }: NewsSectionProps) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Notícias e Comunicados</h2>
          <p className="text-slate-600 mt-2">Acompanhe as novidades da nossa paróquia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <article key={post._id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
                {post.mainImage && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={urlFor(post.mainImage).width(600).height(400).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-amber-700 font-semibold">
                      {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/noticias/${post.slug}`}
                    className="text-amber-800 font-medium text-sm hover:underline"
                  >
                    Ler mais →
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p className="col-span-3 text-center text-slate-500">Nenhuma notícia encontrada.</p>
          )}
        </div>
      </div>
    </section>
  );
}