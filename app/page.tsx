import { client } from '@/sanity/lib/client';
import { 
  postsQuery, 
  eventsQuery, 
  massSchedulesQuery, 
  pastoralsQuery 
} from '@/sanity/lib/queries';

import { HeroSection } from '@/components/home/HeroSection';
import { MassScheduleSection } from '@/components/home/MassScheduleSection';
import { NewsSection } from '@/components/home/NewsSection';
import { EventSection } from '@/components/home/EventsSection';
import { AboutSection } from '@/components/home/AboutSection';
import { PastoralSection } from '@/components/home/PastoralSection';
import { DonationBanner } from '@/components/home/DonationBanner';
import { CTASection } from '@/components/home/CTASection';

// Garante dados sempre atualizados (ou ajuste o ISR com revalidate conforme preferir)
export const revalidate = 60; // atualiza a cada 60 segundos

export default async function Home() {
  // Busca os dados do Sanity em paralelo
  const [posts, events, massSchedules, pastorals] = await Promise.all([
    client.fetch(postsQuery),
    client.fetch(eventsQuery),
    client.fetch(massSchedulesQuery),
    client.fetch(pastoralsQuery),
  ]);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MassScheduleSection schedules={massSchedules} />
      <NewsSection posts={posts} />
      <EventSection events={events} />
      <AboutSection />
      <PastoralSection pastorals={pastorals} />
      <DonationBanner />
      <CTASection />
    </main>
  );
}