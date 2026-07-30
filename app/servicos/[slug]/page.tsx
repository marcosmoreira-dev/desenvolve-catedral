import { notFound } from "next/navigation";
import Image from "next/image"; // Importante para otimização
import { CheckCircle2, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/constants/services";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { Newsletter } from "@/components/sections/Newsletter";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicoDetalhePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO COM VÍDEO DINÂMICO */}
      <HeroSection
        title={service.title}
        subtitle={service.heroSubtitle}
        videoSrc={service.videoSrc} // O vídeo agora vem das constantes
      />

      {/* 2. INTRODUÇÃO COM IMAGEM DINÂMICA */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Imagem do Serviço */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border">
            <Image
              src={service.imageSrc}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{service.title}</h2>
            <p className="text-xl text-primary font-medium">
              {service.introSubtitle}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
              {service.introDescription}
            </p>
            <div className="pt-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Diagnóstico Gratuito
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METODOLOGIA E FORMULÁRIO */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
            {/* Lado Esquerdo: Metodologia */}
            <div className="space-y-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Nossa Metodologia
              </h2>
              <ul className="space-y-6">
                {service.methodology.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lado Direito: Captura de Lead */}
            <div className="sticky top-28">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center mb-16 text-center space-y-4">
            <div className="bg-primary-foreground/10 px-8 py-2 rounded-full text-sm font-medium uppercase tracking-widest">
              Por que nos escolher
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Nossos Diferenciais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.differentials.map((diff, index) => (
              <div
                key={index}
                className="bg-background text-foreground rounded-3xl p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300 shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <Trophy className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl">{diff.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER */}
      <Newsletter />
    </div>
  );
}
