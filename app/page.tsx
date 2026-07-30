import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// Componentes
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionBadge } from "@/components/common/SectionBadge";
import { ServiceRowCard } from "@/components/common/ServiceRowCard";
import { SuccessCase } from "@/components/sections/SuccessCase";
import { Newsletter } from "@/components/sections/Newsletter";
import { Metadata } from "next";
import { services } from "@/constants/services";
import Link from "next/link";

// INSTRUÇÃO: A Home Page utiliza o título 'default' do layout.tsx.
// Define aqui uma descrição com bom SEO pra empresa.
// Toda página deve ter uma descrição única.
export const metadata: Metadata = {
  description:
    "Descrição principal da empresa. Expliqueo que a empresa faz e qual o seu diferencial de mercado.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      {/* INSTRUÇÃO: Passe um link de vídeo em videoSrc="..." para ativar o vídeo de fundo. */}
      <HeroSection
        title="Nome da Empresa"
        subtitle="Muito mais que uma consultoria, o parceiro ideal para o seu crescimento."
        showArrow
      />

      {/* 2. QUEM SOMOS */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <SectionBadge>Quem somos</SectionBadge>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* INSTRUÇÃO: Troque a div abaixo pelo componente Image do Next.js contendo a foto institucional. */}
          <div className="bg-muted/50 aspect-[4/3] rounded-3xl flex items-center justify-center border border-border shadow-inner">
            <span className="text-muted-foreground font-medium">
              Imagem/Vídeo Institucional
            </span>
          </div>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet. Et optio quod et veritatis voluptatum
              aut omnis galisum. Aut necessitatibus voluptatum qui aperiam harum
              a corporis similique. Ut pariatur excepturi qui consectetur
              dolores qui praesentium.
            </p>
            <Button variant="outline" className="rounded-full px-8">
              Saiba mais
            </Button>
          </div>
        </div>
      </section>

      {/* 3. VÍDEO E CARROSSEL */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary/60 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">Nossos Destaques</h2>
            <p className="mt-4 opacity-80 max-w-2xl">
              Acompanhe nossos resultados e o impacto visual que geramos nos
              projetos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* COLUNA 1: VÍDEO INLINE */}
            <div className="w-full aspect-video bg-black/20 backdrop-blur-sm border border-primary-foreground/20 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
              {/* INSTRUCAO PARA O DESENVOLVEDOR: 
                  Substitua a div interna inteira pela tag <video> com o link do cliente 
                  ou por um iframe do YouTube/Vimeo. 
              */}
              <div className="flex flex-col items-center justify-center text-primary-foreground/70">
                <Film className="w-12 h-12 mb-4 opacity-50" />
                <p className="font-medium tracking-widest uppercase text-sm">
                  Espaco para Video
                </p>
              </div>
            </div>

            {/* COLUNA 2: CARROSSEL SHADCN */}
            <div className="w-full px-12 lg:px-0">
              {/* INSTRUCAO: O Carousel abaixo esta configurado para loop infinito. 
                  Voce pode alterar as opcoes no objeto "opts". 
              */}
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {/* INSTRUCAO: Faca um .map() nas imagens reais do projeto aqui. */}
                  {[1, 2, 3, 4, 5].map((index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-full"
                    >
                      <div className="p-1">
                        <div className="flex aspect-video items-center justify-center bg-background/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-6 text-center shadow-sm">
                          <span className="text-2xl font-semibold">
                            Imagem {index}
                          </span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Botoes de navegacao do carrossel */}
                <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 bg-background/20 hover:bg-background/40 border-none text-primary-foreground" />
                <CarouselNext className="hidden md:flex -right-4 lg:-right-12 bg-background/20 hover:bg-background/40 border-none text-primary-foreground" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVIÇOS */}
      <section className="py-24 container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionBadge>Serviços</SectionBadge>

        <div className="flex flex-col gap-6">
          {/* Renderiza dinamicamente os 3 primeiros serviços da sua constante */}
          {services.slice(0, 3).map((service) => (
            <ServiceRowCard
              key={service.slug}
              title={service.title}
              description={service.introSubtitle}
              href={`/servicos/${service.slug}`}
            />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/servicos">
            <Button
              variant="outline"
              className="rounded-full px-10 h-12 text-md hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Ver todos os serviços
            </Button>
          </Link>
        </div>
      </section>

      {/* 5. E 6. COMPONENTES GLOBAIS */}
      <SuccessCase />
      <Newsletter />
    </div>
  );
}
