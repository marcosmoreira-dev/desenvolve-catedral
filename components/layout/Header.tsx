"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "@/components/layout/MobileMenu";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Quem somos", href: "/quem-somos" },
  { name: "Serviços", href: "/servicos" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-primary text-primary-foreground font-bold px-4 py-1.5 text-xl rounded-md transition-transform duration-300 group-hover:scale-105">
              LOGO
            </div>
          </Link>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-primary rounded-full animate-in fade-in zoom-in duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Ações Desktop - Botão HTML Puro */}
        <div className="hidden md:flex items-center gap-5">
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all text-sm font-medium">
            Diagnóstico Gratuito
          </button>
        </div>

        {/* Menu Mobile */}
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}