// schemas/pastoral.ts
export default {
  name: 'pastoral',
  title: 'Pastorais e Movimentos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nome da Pastoral',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Imagem/Foto de Capa',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      title: 'Resumo / Descrição Curta',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Conteúdo Detalhado',
      type: 'array',
      of: [{ type: 'block' }], // Permite texto formatado (Rich Text)
    },
    {
      name: 'leader',
      title: 'Coordenador / Responsável',
      type: 'string',
    },
    {
      name: 'meetingTimes',
      title: 'Horário/Dias de Encontro',
      type: 'string',
    },
  ],
};