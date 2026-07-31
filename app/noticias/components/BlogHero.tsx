export function BlogHero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium">
          Desenvolve Seguro
        </span>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
          Blog sobre Seguros e Proteção Financeira
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-300">
          Conteúdos produzidos para ajudar você a entender melhor os seguros,
          proteger seu patrimônio e tomar decisões com mais segurança.
        </p>
      </div>
    </section>
  );
}