import React from "react";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  companyName: string;
  role: string;
  text: string;
}

export function TestimonialCard({
  companyName,
  role,
  text,
}: TestimonialCardProps) {
  return (
    <div className="bg-muted rounded-3xl p-10 relative">
      <Quote className="absolute top-10 right-10 w-12 h-12 text-primary/20" />

      <div className="flex items-center gap-4 mb-8">
        {/* INSTRUÇÃO: Substitua a div abaixo por uma tag <Image /> do Next.js quando tiver a logo do cliente do feedback. */}
        <div className="w-16 h-16 rounded-full bg-background border border-border shrink-0 flex items-center justify-center text-xs text-muted-foreground">
          Logo
        </div>
        <div>
          <h4 className="font-bold text-lg text-foreground">{companyName}</h4>
          <p className="text-sm text-primary">{role}</p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        &quot;{text}&quot;
      </p>
    </div>
  );
}
