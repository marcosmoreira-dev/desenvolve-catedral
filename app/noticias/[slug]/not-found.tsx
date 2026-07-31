import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold">
        Artigo não encontrado
      </h1>

      <p className="mt-4 text-slate-600">
        O artigo que você procura não existe ou foi removido.
      </p>

      <Link
        href="/blog"
        className="mt-8 rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white"
      >
        Voltar ao Blog
      </Link>
    </main>
  );
}