import { ArrowDown } from "lucide-react";
import { BackgroundVideo } from "@/components/common/BackgroundVideo";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showArrow?: boolean;
  /** Agora a Hero Section aceita o vídeo e repassa para o fundo! */
  videoSrc?: string;
}

export function HeroSection({
  title,
  subtitle,
  showArrow = false,
  videoSrc,
}: HeroSectionProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
      {/* Nosso novo componente de vídeo! 
        Se o videoSrc vier vazio, ele mostra o pontilhado amigável.
        A opacidade foi aumentada um pouco para o vídeo aparecer bem.
      */}
      <BackgroundVideo src={videoSrc} opacity="opacity-30" />

      {/* Conteúdo Principal */}
      <div className="z-10 text-center space-y-4 px-4 relative">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground drop-shadow-sm">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto drop-shadow-sm">
          {subtitle}
        </p>
      </div>

      {showArrow && (
        <div className="absolute bottom-10 z-10 animate-bounce text-muted-foreground">
          <ArrowDown className="w-8 h-8" />
        </div>
      )}
    </section>
  );
}
