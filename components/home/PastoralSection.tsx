"use client";

import Link from "next/link";
import { Heart, BookOpen, Users, Music, HandHeart, Sparkles } from "lucide-react";

const pastorals = [
  {
    icon: BookOpen,
    title: "Catequese Paroquial",
    description: "Preparação para a Primeira Eucaristia, Crisma e Catequese de Adultos.",
  },
  {
    icon: HandHeart,
    title: "Pastoral Social",
    description: "Ações de caridade, doação de mantimentos e apoio às famílias necessitadas.",
  },
  {
    icon: Users,
    title: "Pastoral Familiar",
    description: "Acompanhamento, encontros de casais e fortalecimento das famílias cristãs.",
  },
  {
    icon: Music,
    title: "Ministério de Canto",
    description: "Animação litúrgica e coral para abrilhantar as missas e celebrações.",
  },
  {
    icon: Heart,
    title: "Pastoral da Acolhida",
    description: "Boas-vindas e recepção carinhosa aos fiéis em todas as celebrações.",
  },
  {
    icon: Sparkles,
    title: "Grupo de Jovens",
    description: "Encontros vibrantes de fé, amizade e formação espiritual para a juventude.",
  },
];

export function PastoralSection() {
  return (
    <section className="bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="text-cathedral-blue text-xs font-semibold uppercase tracking-widest">
            Engajamento e Serviço
          </span>
          <h2 className="section-title mt-2">Pastorais e Movimentos</h2>
          <div className="blue-divider mb-6" />
          <p className="section-subtitle">
            Descubra como colocar seus dons a serviço da Igreja e fazer parte de um de nossos grupos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastorals.map((pastoral, idx) => {
            const Icon = pastoral.icon;
            return (
              <div key={idx} className="card-elegant group hover:border-cathedral-blue/40">
                <div className="p-3 w-fit rounded-xl bg-cathedral-ice text-cathedral-blue mb-5 group-hover:bg-cathedral-blue group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-cathedral-navy mb-2">
                  {pastoral.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {pastoral.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/pastorais" className="btn-dark">
            Ver Todas as Pastorais
          </Link>
        </div>
      </div>
    </section>
  );
}