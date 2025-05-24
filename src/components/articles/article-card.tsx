import { ArticlesQueryResult } from "@/sanity/types"
import imageUrlFor from "@/sanity/utils/img-builder"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"
import ArticleAuthor from "./article-author"

export default function ArticleCard(article: ArticlesQueryResult[number]) {
  if (!article) {
    return null
  }

  return (
    <Card className="overflow-hidden p-0 max-w-3xl h-fit">
      <div className="flex flex-col-reverse xs:flex-row">
        <div className="flex flex-col justify-between p-4">
          <div className="flex flex-col gap-4">
            <Link
              href={`/article/${article.slug}`}
              className="hover:underline underline-offset-3"
            >
              <h3>{article.title}</h3>
            </Link>
            <p className="text-sm">{article.excerpt}</p>
          </div>
          <div className="flex justify-between mt-8 md:mt-4">
            <ArticleAuthor author={article.author} />
            <div className="flex gap-2 items-center">
              {article.tags?.map((tag, idx) => (
                <Badge color={tag.color ?? "default"} variant={"tag"} key={idx}>
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-l md:w-1/3 xxs:aspect-video shrink-0 xs:aspect-square">
          {article.image ? (
            <Image
              className="object-cover w-full aspect-square"
              src={imageUrlFor(article.image).width(500).url()}
              alt={article.image.alt!}
              height={200}
              width={200}
            />
          ) : (
            <div className="object-cover w-full animate-pulse bg-accent aspect-square" />
          )}
        </div>
      </div>
    </Card>
  )
}
