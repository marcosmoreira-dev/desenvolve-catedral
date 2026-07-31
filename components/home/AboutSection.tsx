"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Church, Heart, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Mídia / Imagens em Destaque */}
          <div className="relative">
            <div className="relative h-[420px] md:h-[480px] w-full rounded-2xl overflow-hidden shadow-soft border border-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&q=80"
                alt="Interior da Catedral São João Batista"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Card de Destaque Flutuante */}
            <div className="absolute -bottom-6 -right-2 md:right-6 bg-cathedral-navy text-white p-6 rounded-2xl shadow-blue-glow max-w-xs border border-cathedral-blue/30 backdrop-blur-md">
              <p className="text-3xl font-serif font-bold text-cathedral-blue-light mb-1">
                +100 Anos
              </p>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                De tradição, evangelização e serviço à comunidade no coração da cidade.
              </p>
            </div>
          </div>

          {/* Conteúdo Institucional */}
          <div>
            <span className="text-cathedral-blue text-xs font-semibold uppercase tracking-widest">
              Nossa História & Missão
            </span>
            <h2 className="section-title text-left mt-2 mb-6">
              Uma Comunidade Viva no Amor de Cristo
            </h2>
            <div className="blue-divider mx-0 mb-6" />

            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              A Catedral São João Batista é mais do que um marco arquitetônico e histórico; é um ponto de encontro para milhares de fiéis que buscam renovar sua fé, encontrar acolhimento e viver a comunhão fraterna.
            </p>

            {/* Ícones de Pilares */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-cathedral-ice border border-blue-100/50">
                <Church className="w-5 h-5 text-cathedral-blue mb-2" />
                <h4 className="font-semibold text-sm text-cathedral-navy mb-1">Tradição</h4>
                <p className="text-xs text-slate-500">Fé celebrada com solenidade e devoção.</p>
              </div>

              <div className="p-4 rounded-xl bg-cathedral-ice border border-blue-100/50">
                <Users className="w-5 h-5 text-cathedral-blue mb-2" />
                <h4 className="font-semibold text-sm text-cathedral-navy mb-1">Acolhida</h4>
                <p className="text-xs text-slate-500">Espaço aberto para todas as famílias.</p>
              </div>

              <div className="p-4 rounded-xl bg-cathedral-ice border border-blue-100/50">
                <Heart className="w-5 h-5 text-cathedral-blue mb-2" />
                <h4 className="font-semibold text-sm text-cathedral-navy mb-1">Caridade</h4>
                <p className="text-xs text-slate-500">Ação social constante junto aos irmãos.</p>
              </div>
            </div>

            <Link href="/sobre" className="btn-blue gap-2 inline-flex">
              Conheça Mais Sobre a Catedral
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}