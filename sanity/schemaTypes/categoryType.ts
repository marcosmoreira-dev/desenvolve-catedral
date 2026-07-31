import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Categorias",
  type: "document",
  icon: TagIcon,

  fields: [
    defineField({
      name: "title",
      title: "Nome",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 3,
      description: "Breve descrição da categoria (opcional).",
    }),
  ],

  preview: {
    select: {
      title: "title",
    },
  },
});