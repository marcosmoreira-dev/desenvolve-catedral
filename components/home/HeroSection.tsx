"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 bg-cathedral-navy text-white">
      {/* Imagem de Fundo com Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&q=80')" }}
      />
      <div className="absolute inset-0 hero-overlay z-0" />

      {/* Conteúdo Principal */}
      <div className="container-custom relative z-10 text-center flex flex-col items-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-cathedral-blue/20 border border-cathedral-blue-light/30 text-cathedral-blue-light text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
          Seja Bem-Vindo à Nossa Paróquia
        </span>

        <h1 className="text-white mb-6 font-serif max-w-4xl tracking-tight leading-tight">
          Catedral São João Batista
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
          Um lugar de oração, fé e comunidade no coração da cidade. Venha participar de nossas celebrações e vida paroquial.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-16">
          <Link href="#horarios" className="btn-blue text-base gap-2">
            Horários de Missa
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/sobre" className="btn-outline-light text-base">
            Conheça Nossa História
          </Link>
        </div>

        {/* Destaque Rápido de Informações */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl pt-8 border-t border-white/10 text-left text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-cathedral-blue-light shrink-0" />
            <div>
              <p className="font-semibold text-white">Próxima Missa</p>
              <p>Hoje às 19h00</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-cathedral-blue-light shrink-0" />
            <div>
              <p className="font-semibold text-white">Secretaria</p>
              <p>Seg a Sex: 08h - 17h</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-cathedral-blue-light shrink-0" />
            <div>
              <p className="font-semibold text-white">Localização</p>
              <p>Praça Dom Pedro II, Centro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}