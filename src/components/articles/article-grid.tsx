import { ArticlesQueryResult } from "@/sanity/types"
import ArticleCard from "./article-card"

interface Props {
  articles: ArticlesQueryResult
  showAuthor?: boolean
}

export default function ArticleGrid({ articles, showAuthor }: Props) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {articles.map((article) => (
        <ArticleCard
          key={article._id}
          article={article}
          showAuthor={showAuthor}
        />
      ))}
    </div>
  )
}
