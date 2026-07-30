import React from "react";
import { MapPin } from "lucide-react";

interface GoogleMapEmbedProps {
  /**
   * INSTRUÇÃO: Para pegar esse link, vá no Google Maps, pesquise o endereço,
   * clique em "Compartilhar" -> "Incorporar um mapa" -> Copie APENAS o link dentro do src="..."
   */
  src?: string;
}

export function GoogleMapEmbed({ src }: GoogleMapEmbedProps) {
  if (!src) {
    return (
      <div className="bg-muted/30 border-2 border-dashed border-border/50 rounded-3xl h-64 flex flex-col items-center justify-center relative group">
        <MapPin className="w-10 h-10 text-muted-foreground/50 mb-2 group-hover:scale-110 transition-transform" />
        <p className="font-medium text-muted-foreground">Área do Mapa</p>
        <p className="text-xs text-muted-foreground mt-1 px-4 text-center">
          Passe a prop &apos;src&apos; com o link do iframe do Google Maps.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-64 rounded-3xl overflow-hidden border border-border bg-muted">
      <iframe
        src={src}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
