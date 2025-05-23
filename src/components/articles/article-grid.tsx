import { ArticlesQueryResult } from "@/sanity/types"
import ArticleCard from "./article-card"

export default function ArticleGrid({
  articles,
}: { articles: ArticlesQueryResult }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {articles.map((article) => (
        <ArticleCard key={article._id} {...article} />
      ))}
    </div>
  )
}
