"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const newsPosts = [
  {
    id: "1",
    title: "Festa do Padroeiro São João Batista 2026",
    excerpt: "Confira a programação completa das celebrações e da tradicional quermesse em nossa catedral.",
    date: "10 de Maio, 2026",
    category: "Eventos",
    imageUrl: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80",
    slug: "festa-padroeiro-2026",
  },
  {
    id: "2",
    title: "Inscrições Abertas para a Catequese Infantil",
    excerpt: "Saiba como matricular os seus filhos para os novos grupos de preparação para os sacramentos.",
    date: "02 de Maio, 2026",
    category: "Catequese",
    imageUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80",
    slug: "inscricoes-catequese-2026",
  },
  {
    id: "3",
    title: "Campanha de Arrecadação de Alimentos",
    excerpt: "A Pastoral Social convida toda a comunidade a colaborar com cestas básicas para famílias carentes.",
    date: "28 de Abril, 2026",
    category: "Ação Social",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
    slug: "campanha-alimentos",
  },
];

export function NewsSection() {
  return (
    <section className="bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-cathedral-blue text-xs font-semibold uppercase tracking-widest">
              Acompanhe a Paróquia
            </span>
            <h2 className="section-title text-left mt-2 mb-0">Últimas Notícias</h2>
          </div>
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-cathedral-blue hover:text-blue-700 font-medium text-sm mt-4 md:mt-0 transition-colors group"
          >
            Ver todas as notícias
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsPosts.map((post) => (
            <article key={post.id} className="card-elegant overflow-hidden p-0 flex flex-col">
              <div className="relative h-52 w-full bg-slate-100">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-cathedral-navy/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5 text-cathedral-blue" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-cathedral-navy mb-2 hover:text-cathedral-blue transition-colors">
                    <Link href={`/noticias/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground font-light line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link
                    href={`/noticias/${post.slug}`}
                    className="text-xs font-semibold text-cathedral-blue hover:underline inline-flex items-center gap-1"
                  >
                    Ler matéria completa &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}