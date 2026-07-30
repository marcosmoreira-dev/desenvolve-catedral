import Link from "next/link";
import Image from "next/image"; // Importante para otimização
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/constants/services";

// Componentes
import { HeroSection } from "@/components/sections/HeroSection";
import { Newsletter } from "@/components/sections/Newsletter";

export default function ListaServicosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. HERO SECTION COM VÍDEO DE FUNDO */}
      {/* INSTRUÇÃO: Basta colocar um arquivo .mp4 na pasta public/media/ e referenciar aqui */}
      <HeroSection
        title="Nossos Serviços"
        subtitle="Soluções estratégicas e personalizadas para escalar os resultados do seu negócio."
        videoSrc="/media/fundo-servicos.mp4"
      />

      {/* 2. LISTA DE SERVIÇOS (LAYOUT Z-PATTERN PREMIUM) */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-24 max-w-7xl mx-auto">
          {services.map((service, index) => {
            // A mágica do ziguezague: se for par, imagem na esquerda. Se ímpar, imagem na direita.
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.slug}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-20 items-center group`}
              >
                {/* Lado A: Imagem/Mídia do Serviço */}
                <div className="w-full lg:w-1/2 aspect-video lg:aspect-[4/3] relative rounded-3xl overflow-hidden border border-border shadow-md">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Lado B: Informações e Conversão */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {service.introSubtitle}
                    </p>
                  </div>

                  {/* Mostramos 3 pontos da metodologia como um "Gostinho" do que o serviço entrega */}
                  <ul className="space-y-4 py-4">
                    {service.methodology.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground line-clamp-2">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link href={`/servicos/${service.slug}`}>
                      <Button
                        size="lg"
                        className="rounded-full h-14 px-8 text-lg w-full sm:w-auto shadow-md group/btn"
                      >
                        Ver detalhes do serviço
                        <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CALL TO ACTION / DIAGNÓSTICO */}
      <section className="py-32 bg-primary/5 border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Não sabe por onde começar?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Fale com um de nossos especialistas. Faremos um diagnóstico
            detalhado da sua empresa para entender exatamente qual solução trará
            o maior retorno para o seu momento atual.
          </p>
          <div className="pt-8">
            <Link href="/contato">
              <Button
                size="lg"
                className="rounded-full h-16 px-10 text-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Solicitar Diagnóstico Gratuito
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER */}
      <Newsletter />
    </div>
  );
}
