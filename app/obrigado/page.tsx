import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BackgroundText } from '@/components/common/BackgroundText';

export default function ObrigadoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] relative overflow-hidden bg-background text-center px-4">
      {/* Elemento de fundo decorativo */}
      <BackgroundText 
        text="SUCESSO" 
        className="opacity-[0.02] [&>span]:text-[10rem] md:[&>span]:text-[18rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
      />
      
      <div className="relative z-10 max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {/* Ícone de Sucesso */}
        <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 shadow-inner">
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </div>

        {/* Títulos e Mensagem */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Mensagem enviada!
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Agradecemos o seu contato. Nossa equipe de especialistas já recebeu seus dados e retornará muito em breve para entendermos como podemos escalar os seus resultados.
          </p>
        </div>

        {/* Próximos Passos (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link href="/" passHref>
            <Button size="lg" className="rounded-full h-14 px-8 text-lg w-full sm:w-auto shadow-md group/btn">
              Voltar para o início
              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {/* Coloque o link real das redes sociais do cliente no href abaixo */}
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg w-full sm:w-auto group/social border-border hover:bg-muted transition-colors">
              <FaInstagram className="w-5 h-5 mr-2 text-muted-foreground group-hover/social:text-primary transition-colors" />
              Acompanhe nosso trabalho
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
