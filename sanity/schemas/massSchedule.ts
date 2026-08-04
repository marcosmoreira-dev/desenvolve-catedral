import { defineField, defineType } from 'sanity';

export const massSchedule = defineType({
  name: 'massSchedule',
  title: 'Horários de Missas',
  type: 'document',
  fields: [
    defineField({
      name: 'day',
      title: 'Dia / Categoria',
      type: 'string',
      description: 'Ex: Segunda a Sexta, Sábado, Domingo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'times',
      title: 'Horários',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ex: ["07:00", "12:00", "19:00"]',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Observação Adicional',
      type: 'string',
      description: 'Ex: Transmissão ao vivo pelo YouTube',
    }),
  ],
});