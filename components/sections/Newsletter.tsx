import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            Inscreva-se na nossa newsletter
          </h2>

          <form className="flex gap-2">
            <Input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-full h-12 focus-visible:ring-primary-foreground/30"
              required
            />
            <Button
              type="submit"
              variant="secondary"
              className="rounded-full h-12 px-8 hover:bg-secondary/90 transition-colors"
            >
              Inscreva-se
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
