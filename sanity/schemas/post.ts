import { defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Notícias',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo / Subtítulo',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo da Notícia',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
});