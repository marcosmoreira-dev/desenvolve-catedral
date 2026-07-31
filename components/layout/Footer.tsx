"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, ChevronUp, Church, HeartHandshake } from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-sky-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Identificação da Paróquia */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-950/80 border border-sky-500/40 rounded-md text-sky-400">
                <Church className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-slate-100 leading-none">
                  Catedral
                </h3>
                <span className="text-xs font-serif text-sky-400 tracking-widest uppercase font-medium">
                  São João Batista
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6 font-light">
              Um espaço de acolhimento, fé e oração no coração de nossa cidade. Unificados na Palavra e nos Sacramentos.
            </p>

            {/* Redes Sociais */}
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
                { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
                { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
                { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/" },
                { icon: Mail, label: "E-mail", href: "mailto:contato@catedral.org" },
              ].map((Social, index) => (
                <Link
                  key={index}
                  href={Social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={Social.label}
                  className="p-2.5 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <Social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-serif font-semibold text-slate-100 mb-6 tracking-wide border-b border-slate-800 pb-2">
              A Catedral
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              <li>
                <Link href="/sobre" className="hover:text-sky-400 transition-colors">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-sky-400 transition-colors">
                  Notícias & Informes
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-sky-400 transition-colors">
                  Agenda Paroquial
                </Link>
              </li>
              <li>
                <Link href="/pastorais" className="hover:text-sky-400 transition-colors">
                  Pastorais e Serviços
                </Link>
              </li>
            </ul>
          </div>

          {/* Vida Sacramental */}
          <div className="lg:col-span-2">
            <h4 className="font-serif font-semibold text-slate-100 mb-6 tracking-wide border-b border-slate-800 pb-2">
              Sacramentos
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              <li>
                <Link href="#horarios" className="hover:text-sky-400 transition-colors">
                  Horários de Missa
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-sky-400 transition-colors">
                  Confissões
                </Link>
              </li>
              <li>
                <Link href="/pastorais/catequese" className="hover:text-sky-400 transition-colors">
                  Batismo
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-sky-400 transition-colors">
                  Matrimônio
                </Link>
              </li>
            </ul>
          </div>

          {/* Secretaria & Localização */}
          <div className="lg:col-span-3">
            <h4 className="font-serif font-semibold text-slate-100 mb-6 tracking-wide border-b border-slate-800 pb-2">
              Secretaria Paroquial
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Praça Dom Pedro II, S/N - Centro
                  <br />
                  CEP 24000-000 | Niterói - RJ
                </span>
              </li>
              <li className="flex items-start gap-3 pt-2 border-t border-slate-900">
                <HeartHandshake className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div>
                  <span className="block font-medium text-slate-300">Atendimento:</span>
                  Segunda a Sexta: 08h às 17h
                  <br />
                  Sábado: 08h às 12h
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800 text-xs text-slate-500 gap-4">
          <p className="text-center md:text-left">
            &copy; {year ?? 2026} Catedral São João Batista. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="hover:text-slate-300 transition-colors">
              Política de Privacidade
            </Link>
            <span className="hidden md:inline-block text-slate-800">|</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-slate-900 border border-slate-800 text-slate-300 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-label="Voltar ao topo"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}