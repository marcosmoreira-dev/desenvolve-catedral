import { groq } from 'next-sanity';

// 1. Buscar Notícias
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0..2] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage
  }
`;

// 2. Buscar Eventos
export const eventsQuery = groq`
  *[_type == "event"] | order(date asc)[0..3] {
    _id,
    title,
    date,
    location,
    description,
    image
  }
`;

// 3. Buscar Horários de Missas
export const massSchedulesQuery = groq`
  *[_type == "massSchedule"] {
    _id,
    day,
    times,
    note
  }
`;

// 4. Buscar Pastorais
export const pastoralsQuery = groq`
  *[_type == "pastoral"] | order(title asc) {
    _id,
    title,
    description,
    meetingInfo,
    icon
  }
`;