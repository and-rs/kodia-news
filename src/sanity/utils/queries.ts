import { defineQuery } from "next-sanity"

export const articlesQuery = defineQuery(`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    image,
    excerpt,
    publishedAt,
    author->{
      image,
      name,
      "authorSlug": slug.current
    },
    tags[]->{
      name,
      color
    }
  }
`)
