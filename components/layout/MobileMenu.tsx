"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Church, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface NavLink {
  name: string;
  href: string;
}

export function MobileMenu({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();

  return (
    <div className="lg:hidden flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-amber-100 hover:bg-stone-800 hover:text-sky-400"
            aria-label="Abrir menu de navegação"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[85vw] sm:w-[360px] flex flex-col pt-12 px-6 bg-slate-900 border-stone-800 text-stone-100 z-[100]">
          <SheetTitle className="sr-only">Menu Principal da Catedral</SheetTitle>
          <SheetDescription className="sr-only">Navegação adaptada para dispositivos móveis</SheetDescription>

          {/* Cabeçalho do Menu */}
          <div className="flex items-center gap-3 pb-6 border-b border-stone-800">
            <div className="p-2 bg-blue-900/30 border border-amber-800/50 rounded-lg text-sky-400">
              <Church className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-amber-50 text-base">Catedral</h3>
              <p className="text-xs text-amber-300/70 font-serif uppercase tracking-widest">São João Batista</p>
            </div>
          </div>

          <div className="flex flex-col h-full justify-between py-6">
            {/* Nav Links */}
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <SheetClose asChild key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-lg font-medium font-serif tracking-wide transition-colors py-1 ${
                        isActive
                          ? "text-sky-400 font-semibold pl-2 border-l-2 border-amber-400"
                          : "text-stone-300 hover:text-amber-200"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>

            {/* Ações / Informações no Rodapé do Sheet */}
            <div className="flex flex-col gap-4 pt-6 border-t border-stone-800">
              <div className="flex flex-col gap-2 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Praça da Catedral, S/N - Centro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Secretaria: Seg a Sex (08h - 17h)</span>
                </div>
              </div>

              <SheetClose asChild>
                <Button asChild className="w-full bg-blue-600 hover:bg-amber-800 text-white font-serif tracking-wide h-12 shadow-md">
                  <Link href="#horarios">Horários das Missas</Link>
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}