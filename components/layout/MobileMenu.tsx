"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu } from "lucide-react";
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
    <div className="md:hidden flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full hover:bg-muted"
            aria-label="Abrir menu"
          >
            <Menu className="h-7 w-7 text-foreground" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[85vw] sm:w-[350px] flex flex-col pt-16 px-8 z-[100]">
          <SheetTitle className="sr-only">Menu Principal</SheetTitle>
          <SheetDescription className="sr-only">Navegação mobile</SheetDescription>

          <div className="flex flex-col h-full">
            <nav className="flex flex-col gap-6 mt-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <SheetClose asChild key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-2xl font-medium tracking-tight transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-6 pb-8 pt-8 border-t border-border">
              <button className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors text-lg">
                <div className="p-2 bg-muted rounded-full">
                  <Globe className="h-5 w-5" />
                </div>
                <span>Mudar Idioma</span>
              </button>
              
              <SheetClose asChild>
                <Button size="lg" className="w-full rounded-xl text-lg h-14 shadow-md">
                  Diagnóstico Gratuito
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}