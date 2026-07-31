import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,

  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Resumo",
      type: "text",
      rows: 3,
      description: "Pequeno resumo que aparecerá nos cards do blog.",
      validation: (Rule) => Rule.required().max(180),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
      weak: true,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "mainImage",
      title: "Imagem de capa",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: "categories",
      title: "Categorias",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "category" },
          weak: true,
        }),
      ],
    }),

    defineField({
      name: "publishedAt",
      title: "Data de publicação",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "featured",
      title: "Post em destaque",
      type: "boolean",
      initialValue: false,
      description: "Exibir este post em destaque na página inicial.",
    }),

    defineField({
      name: "readingTime",
      title: "Tempo de leitura (minutos)",
      type: "number",
      description: "Ex.: 5 para '5 min de leitura'.",
    }),

    defineField({
      name: "body",
      title: "Conteúdo",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      featured: "featured",
    },
    prepare({ title, author, media, featured }) {
      return {
        title,
        media,
        subtitle: `${featured ? "⭐ " : ""}${author ? `Por ${author}` : "Sem autor"}`,
      };
    },
  },
});