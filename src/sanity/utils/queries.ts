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

export const tagsQuery = defineQuery(`
  *[_type == "tag"]{
    _id,
    name,
    "slug": slug.current
  }
`)

export const tagsPageQuery = defineQuery(`
  *[_type=="article" && references(
    *[_type=="tag" && slug.current == $slug]._id
  )] | order(publishedAt desc){
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

export const articlePageQuery = defineQuery(` 
    *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    image,
    excerpt,
    content,
    publishedAt,
    author->{
      _id,
      bio,
      name,
      image,
      "authorSlug": slug.current
    },
    tags[]->{
      _id,
      name,
      color,
      "tagSlug": slug.current
    }
  }
`)
