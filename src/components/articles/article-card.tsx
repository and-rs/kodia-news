import { client } from "@/sanity/client"
import { ArticlesQueryResult } from "@/sanity/types"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import Image from "next/image"
import { Card } from "../ui/card"

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export default function ArticleCard(article: ArticlesQueryResult[number]) {
  if (!article) {
    return null
  }

  return (
    <Card className="max-w-3xl h-fit">
      <div className="flex gap-4 px-4">
        <div className="flex flex-col gap-4 w-2/3">
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>

        <div className="overflow-hidden w-1/3 rounded border aspect-square">
          {article.image ? (
            <Image
              className="object-cover w-full aspect-square"
              src={urlFor(article.image).width(500).url()}
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
