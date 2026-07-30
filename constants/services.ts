export interface ServiceDifferential {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  heroSubtitle: string;
  videoSrc: string; // Para a Hero Section
  imageSrc: string; // Para o corpo da página e listagem
  introSubtitle: string;
  introDescription: string;
  methodology: string[];
  differentials: ServiceDifferential[];
}

export const services: Service[] = [
  {
    slug: "servico-1",
    title: "Serviço 1",
    heroSubtitle: "Frase de impacto do serviço",
    videoSrc: "/media/fundo-servico-1.mp4",
    imageSrc: "/media/imagem-servico-1.webp",
    introSubtitle: "Impulsione o seu negócio",
    introDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem magna, bibendum non vehicula ut, tempor ut felis. Praesent rhoncus, mi ut pharetra aliquet, turpis mi condimentum dolor, non commodo nibh massa et libero. Mauris libero turpis, imperdiet non leo sed, ornare volutpat orci. Phasellus vitae magna sollicitudin, pellentesque nisi eu, ullamcorper eros.",
    methodology: [
      "Primeiro passo da metodologia detalhado aqui.",
      "Segundo passo focado em análise de dados e diagnóstico.",
      "Terceiro passo focado na execução do plano de ação.",
      "Quarto passo para validação e testes de qualidade.",
      "Quinto passo: entrega e monitoramento de resultados.",
    ],
    differentials: [
      {
        title: "Diferencial 1",
        description:
          "Breve descrição do porquê esse ponto destaca a sua consultoria no mercado.",
      },
      {
        title: "Diferencial 2",
        description:
          "Breve descrição do porquê esse ponto destaca a sua consultoria no mercado.",
      },
      {
        title: "Diferencial 3",
        description:
          "Breve descrição do porquê esse ponto destaca a sua consultoria no mercado.",
      },
      {
        title: "Diferencial 4",
        description:
          "Breve descrição do porquê esse ponto destaca a sua consultoria no mercado.",
      },
      {
        title: "Diferencial 5",
        description:
          "Breve descrição do porquê esse ponto destaca a sua consultoria no mercado.",
      },
      {
        title: "Diferencial 6",
        description:
          "Breve descrição do porquê esse ponto destaca a sua consultoria no mercado.",
      },
    ],
  },
  // Para criar a página do Serviço 2, basta copiar este bloco acima, colar abaixo e mudar o "slug" para "servico-2".
];
