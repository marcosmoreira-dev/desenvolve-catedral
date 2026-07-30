"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendContactEmail } from "@/actions/sendContactEmail";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus("success");
        formElement.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Erro capturado no frontend:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center transition-all duration-500">
      {submitStatus === "success" ? (
        <div className="flex flex-col items-center justify-center text-center h-full min-h-[350px] space-y-6 animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2 shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-foreground">
              Mensagem enviada!
            </h3>
            <p className="text-muted-foreground text-lg max-w-sm mx-auto leading-relaxed">
              Agradecemos o seu contato. Nossa equipe analisará suas informações
              e retornará o mais breve possível.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 mt-4 hover:bg-primary/5"
            onClick={() => setSubmitStatus("idle")}
          >
            Enviar nova mensagem
          </Button>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Impulsione o seu negócio
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-in fade-in duration-500"
          >
            <div className="space-y-2">
              <Label htmlFor="nome">Nome completo</Label>
              <Input
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                className="bg-background h-12 rounded-xl border-border/50 focus-visible:ring-primary/30"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail profissional</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-background h-12 rounded-xl border-border/50 focus-visible:ring-primary/30"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="bg-background h-12 rounded-xl border-border/50 focus-visible:ring-primary/30"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="empresa">Empresa</Label>
              <Input
                id="empresa"
                name="empresa"
                placeholder="Nome da sua empresa"
                className="bg-background h-12 rounded-xl border-border/50 focus-visible:ring-primary/30"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem">Como podemos ajudar?</Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                placeholder="Conte um pouco sobre o seu desafio..."
                className="bg-background min-h-[150px] rounded-xl resize-none border-border/50 focus-visible:ring-primary/30"
                required
                disabled={isSubmitting}
              />
            </div>

            {submitStatus === "error" && (
              <p className="text-destructive text-sm font-medium animate-in slide-in-from-top-1">
                Ocorreu um erro ao enviar a mensagem. Verifique as configurações
                de e-mail no servidor.
              </p>
            )}

            <Button
              type="submit"
              className="w-full h-14 text-lg rounded-xl mt-4 transition-all shadow-md hover:shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
