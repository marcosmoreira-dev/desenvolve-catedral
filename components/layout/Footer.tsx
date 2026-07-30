"use client";

import Link from "next/link";
import { MessageCircle, Mail, Globe, ChevronUp } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 relative">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="bg-foreground text-background font-bold px-5 py-2.5 text-2xl inline-block rounded-md mb-6">
              LOGO
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm mb-6">
              Transformando resultados com estratégias inteligentes e escaláveis
              para o seu negócio decole de verdade.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, label: "Instagram" },
                { icon: MessageCircle, label: "WhatsApp" },
                { icon: Mail, label: "E-mail" },
                { icon: Globe, label: "Website" },
              ].map((Social, index) => (
                <Link
                  key={index}
                  href="#"
                  aria-label={Social.label}
                  className="p-2.5 bg-background border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-foreground font-semibold mb-6">Serviços</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              {["Consultoria", "Assessoria", "Treinamentos", "Diagnóstico"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-primary hover:underline underline-offset-4 transition-all"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-foreground font-semibold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li>
                <Link
                  href="/quem-somos"
                  className="hover:text-primary hover:underline underline-offset-4 transition-all"
                >
                  Quem somos
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-primary hover:underline underline-offset-4 transition-all"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary hover:underline underline-offset-4 transition-all"
                >
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-foreground font-semibold mb-6">
              Contato e Local
            </h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="leading-relaxed">
                R. Passo da Pátria, 156, Sala 217
                <br />
                Bloco E - São Domingos
                <br />
                Niterói - RJ
              </li>
              <li className="pt-2 border-t border-border/50">
                <span className="block font-medium text-foreground mb-1">
                  CNPJ
                </span>
                99.999.999/9999-99
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-sm text-muted-foreground gap-4">
          <p>
            &copy; {new Date().getFullYear()} LOGO. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </Link>
            <span className="hidden md:inline-block">|</span>
            <p className="hidden md:block">
              Site desenvolvido por{" "}
              <span className="font-semibold text-foreground">
                Meta Consultoria
              </span>
            </p>
            <button
              onClick={scrollToTop}
              className="ml-4 p-2.5 bg-foreground text-background rounded-full hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Voltar ao topo"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
