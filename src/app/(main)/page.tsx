import ArticleGrid from "@/components/articles/article-grid"
import { client } from "@/sanity/client"
import { ArticlesQueryResult } from "@/sanity/types"
import { articlesQuery } from "@/sanity/utils/queries"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kodia News",
  description: "Kodia News",
}

export default async function Home() {
  const articles = await client.fetch<ArticlesQueryResult>(articlesQuery)

  if (!articles || articles.length === 0) {
    return (
      <section className="flex justify-center items-center">
        <p>No articles found. Check back later!</p>
      </section>
    )
  }

  return (
    <section className="px-4 space-y-8">
      <h1>Latest News</h1>
      <ArticleGrid articles={articles} />
    </section>
  )
}
