import { defineType } from "sanity"

export const authorSchema = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      description: "Author biography",
      validation: (Rule) => Rule.max(500),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input: string) => input.toLowerCase().replace(/ /g, "-"),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.email(),
    },
    {
      name: "social",
      title: "Social Media",
      type: "object",
      fields: [
        {
          name: "twitter",
          title: "Twitter",
          type: "string",
        },
        {
          name: "website",
          title: "Website",
          type: "url",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "bio",
      media: "image",
    },
  },
})
