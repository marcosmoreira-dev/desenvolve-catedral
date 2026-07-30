import { Target, TrendingUp, Users } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionBadge } from "@/components/common/SectionBadge";
import { StatCard } from "@/components/common/StatCard";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { Newsletter } from "@/components/sections/Newsletter";

export default function QuemSomosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      {/* INSTRUÇÃO: Passe um link de vídeo em videoSrc="..." para ativar o vídeo de fundo. */}
      <HeroSection
        title="Quem somos"
        subtitle="Frase de impacto que resume a essência da empresa."
        showArrow
      />

      {/* 2. EMPRESA */}
      <section className="py-24 container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <SectionBadge>Empresa</SectionBadge>

        {/* INSTRUÇÃO: Use a classe text-primary para destacar palavras-chave no texto do cliente. */}
        <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed text-foreground">
          Lorem ipsum dolor sit amet,{" "}
          <span className="text-primary font-bold">consectetur</span> adipiscing
          elit. Maecenas scelerisque sagittis sollicitudin. Morbi elit est,
          eleifend eget nisi rhoncus.
          <span className="text-primary font-bold">Curabitur</span> quis rutrum
          augue.
        </h2>
      </section>

      {/* 3. RESULTADOS */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionBadge>Resultados</SectionBadge>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* INSTRUÇÃO: Adicione ou remova StatCards conforme os dados do cliente. */}
          <StatCard
            icon={<TrendingUp className="w-7 h-7" />}
            value="+500"
            label="Projetos Entregues"
          />
          <StatCard
            icon={<Users className="w-7 h-7" />}
            value="98%"
            label="Satisfação dos Clientes"
          />
          <StatCard
            icon={<Target className="w-7 h-7" />}
            value="+10 Anos"
            label="De Experiência no Mercado"
          />
        </div>
      </section>

      {/* 4. VALORES */}
      <section className="py-24 container mx-auto px-4 md:px-8 relative overflow-hidden">

        <div className="max-w-4xl mx-auto bg-primary/10 border border-primary/20 rounded-3xl p-12 md:p-16 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-10 text-foreground">Valores</h2>

          <ul className="space-y-6 text-lg md:text-xl font-medium text-muted-foreground">
            <li>Lorem ipsum dolor sit amet: consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet: consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet: consectetur adipiscing elit.</li>
          </ul>
        </div>
      </section>

      {/* 5. FEEDBACKS */}
      <section className="py-24 container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionBadge>Feedbacks</SectionBadge>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            companyName="Nome da empresa 1"
            role="Cargo do Cliente"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque sagittis sollicitudin."
          />
          <TestimonialCard
            companyName="Nome da empresa 2"
            role="Cargo do Cliente"
            text="Morbi elit est, eleifend eget nisi rhoncus, consequat auctor est. Morbi mollis tellus eros."
          />
        </div>
      </section>

      {/* 6. NEWSLETTER */}
      <Newsletter />
    </div>
  );
}
