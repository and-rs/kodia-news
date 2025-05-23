import { defineType } from "sanity"

export const tagSchema = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, "-"),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Blue", value: "blue" },
          { title: "Green", value: "green" },
          { title: "Red", value: "red" },
          { title: "Yellow", value: "yellow" },
          { title: "Purple", value: "purple" },
          { title: "Gray", value: "gray" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
  orderings: [
    {
      title: "Name A-Z",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
})
