"use client";

import Link from "next/link";
import { Heart, QrCode } from "lucide-react";

export function DonationBanner() {
  return (
    <section className="py-16 bg-cathedral-navy text-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="bg-cathedral-navy-light/60 border border-cathedral-blue/30 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-md">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cathedral-blue/20 text-cathedral-blue-light text-xs font-semibold uppercase tracking-wider mb-4">
              <Heart className="w-3.5 h-3.5" />
              Devolução do Dízimo & Ofertas
            </div>
            <h2 className="text-3xl md:text-4xl text-white font-serif font-bold mb-4">
              Sua generosidade mantém nossa missão viva
            </h2>
            <p className="text-slate-300 font-light text-base leading-relaxed">
              Ajude a manter as obras evangelizadoras, os projetos sociais e a manutenção da nossa amada Catedral São João Batista.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <Link href="/dizimo" className="btn-blue gap-2 justify-center">
              <QrCode className="w-4 h-4" />
              Chave PIX / Dízimo
            </Link>
            <Link href="/contato" className="btn-outline-light justify-center">
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}