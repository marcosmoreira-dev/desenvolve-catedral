import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas'; // Ajuste o caminho conforme a localização da sua pasta schemas

export default defineConfig({
  name: 'default',
  title: 'Catedral São João Batista - Painel',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET! || 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes, // <--- Aqui registramos os documentos!
  },
});