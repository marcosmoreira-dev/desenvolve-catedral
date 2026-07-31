export function EmptyState() {
  return (
    <section className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
      <h2 className="text-2xl font-bold text-slate-900">
        Nenhum artigo encontrado
      </h2>

      <p className="mt-3 text-slate-600">
        Em breve publicaremos novos conteúdos.
      </p>
    </section>
  );
}