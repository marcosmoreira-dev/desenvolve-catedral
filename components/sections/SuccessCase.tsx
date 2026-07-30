import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SuccessCaseProps {
  title?: string;
  testimonial?: string;
  href?: string;
}

export function SuccessCase({
  title = "Caso de sucesso",
  testimonial = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Maecenas lorem magna, bibendum non vehicula ut, tempor ut felis.",
  href = "#",
}: SuccessCaseProps) {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-foreground mb-12">{title}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-background aspect-video rounded-3xl shadow-sm border border-border flex items-center justify-center overflow-hidden relative">
            {/* INSTRUÇÃO: Substitua esta tag span pelo componente <Image /> com a miniatura real */}
            <span className="text-muted-foreground font-medium">
              Thumbnail do Caso
            </span>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              &quot;{testimonial}&quot;
            </p>
            <Link href={href} className="inline-block">
              <Button variant="outline" className="rounded-full px-8 h-12">
                Saiba mais
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
