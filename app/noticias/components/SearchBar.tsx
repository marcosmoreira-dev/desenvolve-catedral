"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }
      router.push(`/blog?${params.toString()}`, { scroll: false });
    }, 300); // Filtra 300ms após parar de digitar

    return () => clearTimeout(delayDebounceFn);
  }, [query, router, searchParams]);

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar artigos por título..."
          className="w-full rounded-full border border-border bg-background pl-12 pr-6 py-3.5 outline-none text-foreground transition focus:ring-2 focus:ring-primary focus:border-primary shadow-sm"
        />
      </div>
    </div>
  );
}
