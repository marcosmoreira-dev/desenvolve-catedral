import { defineField, defineType } from 'sanity';

export const event = defineType({
  name: 'event',
  title: 'Eventos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome do Evento',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Data e Hora',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Local',
      type: 'string',
      initialValue: 'Catedral São João Batista',
    }),
    defineField({
      name: 'description',
      title: 'Descrição Curta',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Imagem do Evento',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});