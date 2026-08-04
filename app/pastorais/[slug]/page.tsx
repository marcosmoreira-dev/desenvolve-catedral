// app/pastorais/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface PastoralPageProps {
  params: {
    slug: string;
  };
}

async function getPastoral(slug: string) {
  const query = `*[_type == "pastoral" && slug.current == $slug][0] {
    title,
    description,
    mainImage,
    leader,
    meetingTimes
  }`;
  return await client.fetch(query, { slug });
}

export default async function PastoralPage({ params }: PastoralPageProps) {
  const pastoral = await getPastoral(params.slug);

  if (!pastoral) {
    notFound();
  }

  return (
    <main className="min-h-screen py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{pastoral.title}</h1>
        
        {pastoral.mainImage && (
          <div className="relative h-80 w-full mb-8 rounded-xl overflow-hidden shadow-md">
            <Image
              src={urlFor(pastoral.mainImage).width(1200).height(600).url()}
              alt={pastoral.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="bg-slate-50 p-6 rounded-lg mb-8 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
          {pastoral.leader && (
            <div>
              <strong className="text-slate-700 block">Coordenação:</strong>
              <span className="text-slate-600">{pastoral.leader}</span>
            </div>
          )}
          {pastoral.meetingTimes && (
            <div>
              <strong className="text-slate-700 block">Encontros:</strong>
              <span className="text-slate-600">{pastoral.meetingTimes}</span>
            </div>
          )}
        </div>

        <div className="prose max-w-none text-slate-700 leading-relaxed">
          <p>{pastoral.description}</p>
        </div>
      </div>
    </main>
  );
}