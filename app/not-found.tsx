import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundText } from "@/components/common/BackgroundText";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] relative overflow-hidden bg-background">
      <BackgroundText
        text="404"
        className="opacity-20 [&>span]:text-[15rem] md:[&>span]:text-[20rem]"
      />

      <div className="z-10 text-center space-y-6 px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          Página não encontrada
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          A página que você está procurando não existe, foi removida ou o link
          está incorreto.
        </p>

        <div className="pt-4">
          <Link href="/">
            <Button size="lg" className="rounded-full px-8 h-12 shadow-md">
              Voltar para o Início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
