"use client";

import Link from "next/link";
import { PhoneCall, Mail, MapPin, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-cathedral-navy text-white relative overflow-hidden">
      {/* Luzes sutis ao fundo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cathedral-blue/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-cathedral-blue-light text-xs font-semibold uppercase tracking-widest">
              Estamos Aqui Para Acolher Você
            </span>
            <h2 className="text-3xl md:text-5xl text-white font-serif font-bold mt-2 mb-6">
              Precisa de Atendimento Paroquial ou Direção Espiritual?
            </h2>
            <p className="text-slate-300 font-light text-base leading-relaxed mb-8">
              A secretaria da Catedral São João Batista está à disposição para informações sobre batizados, casamentos, intenções de missa e agendamentos com nossos padres.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contato" className="btn-blue justify-center gap-2">
                Falar com a Secretaria
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pedidos-oracao" className="btn-outline-light justify-center">
                Deixar Pedido de Oração
              </Link>
            </div>
          </div>

          {/* Cards de Contato Rápido */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cathedral-navy-light/70 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <PhoneCall className="w-6 h-6 text-cathedral-blue-light mb-3" />
              <h4 className="font-semibold text-white mb-1">Telefone / WhatsApp</h4>
              <p className="text-xs text-slate-300 mb-2">(00) 3333-4444</p>
              <span className="text-[10px] text-cathedral-blue-light font-medium uppercase">Atendimento em Horário Comercial</span>
            </div>

            <div className="bg-cathedral-navy-light/70 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <Mail className="w-6 h-6 text-cathedral-blue-light mb-3" />
              <h4 className="font-semibold text-white mb-1">E-mail</h4>
              <p className="text-xs text-slate-300 mb-2">contato@catedral.org.br</p>
              <span className="text-[10px] text-cathedral-blue-light font-medium uppercase">Resposta em até 24h</span>
            </div>

            <div className="bg-cathedral-navy-light/70 p-6 rounded-2xl border border-white/10 backdrop-blur-sm sm:col-span-2">
              <MapPin className="w-6 h-6 text-cathedral-blue-light mb-3" />
              <h4 className="font-semibold text-white mb-1">Endereço da Secretaria</h4>
              <p className="text-xs text-slate-300">Praça Dom Pedro II, s/n - Centro</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}