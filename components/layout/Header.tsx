"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Church } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";

export const navLinks = [
  { name: "Início", href: "/" },
  { name: "Notícias", href: "/noticias" },
  { name: "Horários", href: "#horarios" },
  { name: "Sobre", href: "/sobre" },
  { name: "Pastorais", href: "/pastorais" },
  { name: "Eventos", href: "/eventos" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-sky-950/80 bg-slate-950/95 backdrop-blur-md text-slate-100 transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        
        {/* Logo Institucional */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-blue-950/60 border border-sky-500/40 rounded-lg text-sky-400 group-hover:bg-blue-900/50 group-hover:border-sky-400 transition-all">
              <Church className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-slate-50 leading-tight tracking-wide">
                Catedral
              </span>
              <span className="text-xs font-serif text-sky-400 tracking-widest uppercase font-medium">
                São João Batista
              </span>
            </div>
          </Link>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-sky-300 ${
                  isActive ? "text-sky-400 font-semibold" : "text-slate-300"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-sky-400 rounded-full animate-in fade-in zoom-in duration-300 shadow-[0_0_8px_#38bdf8]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Ação Principal Desktop */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="#horarios"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium h-10 px-6 py-2 rounded-md shadow-md hover:shadow-sky-500/20 transition-all text-sm flex items-center justify-center border border-sky-400/30"
          >
            Missa Hoje
          </Link>
        </div>

        {/* Menu Mobile */}
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}