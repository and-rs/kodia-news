import { client } from "@/sanity/client"
import { ArticlesQueryResult } from "@/sanity/types"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import Image from "next/image"
import { Badge } from "../ui/badge"
import { Card } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

function getInitials(name?: string | null): string {
  if (!name) return "?"
  const parts = name.trim().split(" ")
  if (!parts[1]) return parts[0][0]
  const initials = parts[0][0] + parts[1][0]
  return initials.toUpperCase()
}

export default function ArticleCard(article: ArticlesQueryResult[number]) {
  if (!article) {
    return null
  }

  const authorInitials = getInitials(article.author?.name)

  return (
    <Card className="overflow-hidden p-0 max-w-3xl h-fit">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-between p-4 md:w-2/3">
          <div className="space-y-2">
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
          </div>
          <div className="flex justify-between mt-8 md:mt-4">
            <div className="flex gap-4 items-center">
              <Avatar>
                {article.author?.image && (
                  <AvatarImage
                    src={urlFor(article.author.image).width(200).url()}
                  />
                )}
                <AvatarFallback>{authorInitials}</AvatarFallback>
              </Avatar>
              <Button variant={"link"} className="p-0 h-fit">
                {article.author?.name}
              </Button>
            </div>
            <div className="flex gap-2 items-center">
              {article.tags?.map((tag, idx) => (
                <Badge key={idx} className="text-sm h-fit">
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-l md:w-1/3 aspect-square">
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
