import { HeroSection } from "@/components/home/HeroSection";
import { MassScheduleSection } from "@/components/home/MassScheduleSection";
import { AboutSection } from "@/components/home/AboutSection";
import { EventSection } from "@/components/home/EventsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { PastoralSection } from "@/components/home/PastoralSection";
import { DonationBanner } from "@/components/home/DonationBanner";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased selection:bg-cathedral-blue selection:text-white">
      {/* 1. Hero / Boas-vindas (Escuro) */}
      <HeroSection />

      {/* 2. Horários de Missa (Claro/Tons de gelo) */}
      <MassScheduleSection />

      {/* 3. História & Sobre a Catedral (Branco) */}
      <AboutSection />

      {/* 4. Agenda de Eventos (Gelo suave) */}
      <EventSection />

      {/* 5. Últimas Notícias (Branco) */}
      <NewsSection />

      {/* 6. Pastorais e Movimentos (Branco) */}
      <PastoralSection />

      {/* 7. Dízimo & Ofertas (Escuro / Destaque) */}
      <DonationBanner />

      {/* 8. Contato / Atendimento (Azul Marinho Catedral) */}
      <CTASection />
    </main>
  );
}