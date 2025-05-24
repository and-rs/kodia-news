import { ArticlesQueryResult } from "@/sanity/types"
import imageUrlFor from "@/sanity/utils/img-builder"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import Link from "next/link"

export function getInitials(name?: string | null): string {
  if (!name) return "?"
  const parts = name.trim().split(" ")
  if (!parts[1]) return parts[0][0]
  const initials = parts[0][0] + parts[1][0]
  return initials.toUpperCase()
}

export default function ArticleAuthor({
  author,
}: {
  author: ArticlesQueryResult[number]["author"]
}) {
  if (!author) {
    return null
  }

  const authorInitials = getInitials(author?.name)
  const image = author.image && imageUrlFor(author.image).width(200).url()

  return (
    <div className="flex gap-4 items-center">
      <Avatar>
        {image && <AvatarImage src={image} />}
        <AvatarFallback>{authorInitials}</AvatarFallback>
      </Avatar>
      <Link href={`/author/${author.authorSlug}`}>
        <Button variant={"link"} className="p-0 h-fit">
          {author.name}
        </Button>
      </Link>
    </div>
  )
}
