import { Metadata } from "next";

import { BlogGrid } from "./components/BlogGrid";
import { SearchBar } from "./components/SearchBar";

import { POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Post } from "@/sanity/lib/types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Notícias | Catedral São João Batista",
  description:
    "Acompanhe as notícias, eventos, comunicados e formações da Catedral São João Batista.",
  alternates: {
    canonical: "/noticias",
  },
  openGraph: {
    title: "Notícias | Catedral São João Batista",
    description:
      "Fique por dentro das novidades, celebrações e acontecimentos da Catedral São João Batista.",
    url: "/noticias",
    siteName: "Catedral São João Batista",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Notícias da Catedral",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: "Catedral São João Batista",
    },
  ],
  keywords: [
    "catedral",
    "igreja",
    "católica",
    "notícias",
    "paróquia",
    "missas",
    "eventos",
    "liturgia",
  ],
};
interface NoticiasPageProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function NoticiasPage({ searchParams }: NoticiasPageProps) {
  const { search } = await searchParams;

  // Busca todos os posts do Sanity
  const { data } = await sanityFetch({
    query: POSTS_QUERY,
  });

  let posts = (data ?? []) as Post[];

  // Associa e filtra estritamente com base nos nomes/títulos dos artigos
  if (search) {
    const searchLower = search.toLowerCase();
    posts = posts.filter((post) =>
      post.title?.toLowerCase().includes(searchLower),
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Faixa Azul Padrão Rhema */}
      <section className="bg-gradient-to-br from-[#0A3455] via-[#1A4E78] to-[#1A4E78] text-white py-16 md:py-20 text-center transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-roboto">
            Notícias
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Acompanhe os eventos, comunicados, celebrações e novidades da Catedral São João Batista.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal do Blog */}
      <main className="mx-auto max-w-7xl w-full space-y-10 px-6 py-16 flex-1">
        <SearchBar />

        {posts.length ? (
          <BlogGrid posts={posts} />
        ) : (
          <div className="text-center py-20 bg-muted/20 border border-dashed border-border rounded-2xl max-w-2xl mx-auto px-4">
            <p className="text-xl font-medium text-foreground">
              Nenhuma notícia encontrada.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Tente pesquisar utilizando outro termo.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}