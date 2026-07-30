import React from "react";
import { Film } from "lucide-react";

interface BackgroundVideoProps {
  /** URL do vídeo (mp4, webm). Idealmente hospedado no próprio projeto ou CDN. */
  src?: string;
  /** Imagem de fallback caso o vídeo demore a carregar ou dê erro. */
  poster?: string;
  /** Classe de opacidade para não atrapalhar a leitura do texto (ex: opacity-10, opacity-20) */
  opacity?: string;
}

export function BackgroundVideo({
  src,
  poster,
  opacity = "opacity-10", // Padrão bem transparente para não ofuscar o texto
}: BackgroundVideoProps) {
  // Se o dev ainda não passou a URL do vídeo, mostra um placeholder de "área de vídeo"
  if (!src) {
    return (
      <div
        className={`absolute inset-0 z-0 flex flex-col items-center justify-center bg-muted/50 border-2 border-dashed border-border/50 m-4 rounded-3xl ${opacity}`}
      >
        <Film className="w-16 h-16 text-muted-foreground mb-4" />
        <p className="text-xl font-bold text-muted-foreground tracking-widest uppercase">
          Área de Vídeo
        </p>
        <p className="text-sm text-muted-foreground">
          (Passe a prop &apos;src&apos; no componente)
        </p>
      </div>
    );
  }

  // Se tem o link, renderiza o player blindado para fundo (autoplay, sem som, loop infinito)
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${opacity} bg-black`}>
      <video
        autoPlay
        loop
        muted
        playsInline // Crucial para o vídeo tocar no iOS sem abrir tela cheia
        poster={poster}
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      {/* Overlay para garantir que o vídeo fique um pouco escurecido se necessário */}
      <div className="absolute inset-0 bg-background/20" />
    </div>
  );
}
