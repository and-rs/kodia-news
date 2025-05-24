import ArticleAuthor from "@/components/articles/article-author"
import { Badge } from "@/components/ui/badge"
import { client } from "@/sanity/client"
import { ArticlePageQueryResult } from "@/sanity/types"
import imageUrlFor from "@/sanity/utils/img-builder"
import { portableTextComponents } from "@/sanity/utils/portable-text"
import { articlePageQuery } from "@/sanity/utils/queries"
import { Calendar } from "lucide-react"
import { PortableText } from "next-sanity"
import Image from "next/image"
import { notFound } from "next/navigation"

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params

  const article = await client.fetch<ArticlePageQueryResult>(articlePageQuery, {
    slug,
  })

  if (!article) {
    notFound()
  }

  return (
    <div className="mx-4 space-y-4">
      <h1 className="tracking-tight leading-10">{article?.title}</h1>
      <hr />
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex flex-row gap-4">
          {article?.author && <ArticleAuthor author={article.author} />}

          <div className="flex items-center text-muted-foreground">
            <Calendar className="mr-1 w-4 h-4" />
            {article.publishedAt && (
              <span className="text-sm">{formatDate(article.publishedAt)}</span>
            )}
          </div>
        </div>
        {article.tags &&
          article.tags.map((tag) => (
            <Badge color={tag.color ?? "default"} variant={"tag"} key={tag._id}>
              {tag.name}
            </Badge>
          ))}
      </div>

      <div className="flow-root">
        {article.image && (
          <div className="overflow-hidden w-full xs:float-right xs:max-w-80 xs:my-4 xs:ml-4">
            <Image
              className="object-cover w-full h-full rounded border"
              blurDataURL={imageUrlFor(article.image).width(100).url()}
              src={imageUrlFor(article.image).width(800).url()}
              alt={article.image.alt!}
              placeholder="blur"
              loading="eager"
              height={400}
              width={400}
              priority
            />
          </div>
        )}
        {article.content && article.content.length > 0 ? (
          <div className="max-w-none prose prose-lg dark:prose-invert">
            <PortableText
              components={portableTextComponents}
              value={article.content}
            />
          </div>
        ) : (
          <p className="italic">No content available.</p>
        )}
      </div>
    </div>
  )
}
