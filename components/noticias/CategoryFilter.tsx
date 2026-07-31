export function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="rounded-full bg-slate-900 px-4 py-2 text-white">
        Todos
      </button>

      <button className="rounded-full border px-4 py-2">
        Seguro de Vida
      </button>

      <button className="rounded-full border px-4 py-2">
        Seguro Saúde
      </button>

      <button className="rounded-full border px-4 py-2">
        Responsabilidade Civil
      </button>
    </div>
  );
}