import Image from "next/image";
import Link from "next/link";

const noticias = await client.fetch(`
  *[_type == "post"] | order(_createdAt desc){
    title,
    slug,
    image,
    description,
    category,
    publishedAt
  }
`);

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-primary px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold">
            Notícias
          </h1>

          <p className="mt-4 max-w-2xl text-lg opacity-90">
            Acompanhe as novidades, eventos e acontecimentos da Catedral.
          </p>
        </div>
      </section>


      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {noticias.map((noticia) => (
            <article
              key={noticia.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={noticia.image}
                  alt={noticia.title}
                  fill
                  className="object-cover"
                />
              </div>


              <div className="p-6">
                <span className="text-sm font-medium text-primary">
                  {noticia.category}
                </span>

                <h2 className="mt-3 text-xl font-bold">
                  {noticia.title}
                </h2>

                <p className="mt-3 text-gray-600">
                  {noticia.description}
                </p>

                <p className="mt-4 text-sm text-gray-500">
                  {noticia.date}
                </p>


                <Link
                  href={`/noticias/${noticia.slug}`}
                  className="mt-5 inline-block font-medium text-primary hover:underline"
                >
                  Ler notícia →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}