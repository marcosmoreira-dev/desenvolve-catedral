import { metadata, viewport } from 'next-sanity/studio';
import { Studio } from './Studio';

// Força a rota a ser dinâmica no lado do servidor
export const dynamic = 'force-dynamic';

// Exportações de servidor (Metadata e Viewport)
export { metadata, viewport };

export default function StudioPage() {
  return <Studio />;
}