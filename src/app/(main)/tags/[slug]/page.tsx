import { Metadata } from "next"
import { notFound } from "next/navigation"
import ArticleGrid from "@/components/articles/article-grid"
import { client } from "@/sanity/client"
import { tagsPageQuery } from "@/sanity/utils/queries"
import { TagsPageQueryResult } from "@/sanity/types"

interface TagPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const tags: { slug: string }[] = await client.fetch(
    `*[_type=="tag"]{ "slug": slug.current }`,
  )
  return tags.map((tag) => ({ slug: tag.slug }))
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { slug } = await params

  const tag = await client.fetch<{ name: string } | null>(
    `*[_type=="tag" && slug.current == $slug][0]{ name }`,
    { slug },
  )

  if (!tag) {
    return {
      title: "Tag Not Found - Kodia News",
      description: "The requested tag does not exist.",
    }
  }

  return {
    title: `Kodia News – ${tag.name}`,
    description: `Articles tagged with ${tag.name}`,
  }
}

export default async function TagsPage({ params }: TagPageProps) {
  const { slug } = await params

  const tag = await client.fetch<{ name: string } | null>(
    `*[_type=="tag" && slug.current == $slug][0]{ name }`,
    { slug },
  )

  if (!tag) {
    notFound()
  }

  const articles = await client.fetch<TagsPageQueryResult>(tagsPageQuery, {
    slug,
  })

  if (articles.length === 0) {
    return (
      <section className="py-10 px-4 space-y-8 text-center">
        <h1>News for {tag.name}</h1>
        <p className="mt-4 text-lg">
          There are currently no articles tagged with “{tag.name}”.
        </p>
      </section>
    )
  }

  return (
    <section className="px-4 space-y-8">
      <h1 className="text-2xl font-semibold">Latest news in {tag.name}</h1>
      <ArticleGrid articles={articles} />
    </section>
  )
}
