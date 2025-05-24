import { client } from "@/sanity/client"
import { type TagsQueryResult } from "@/sanity/types"
import { tagsQuery } from "@/sanity/utils/queries"
import { ThemeSwitch } from "../theme-switch"
import { Button } from "../ui/button"
import Link from "next/link"

export default async function Header() {
  const tags = await client.fetch<TagsQueryResult>(tagsQuery)

  return (
    <nav className="flex fixed z-50 flex-row flex-wrap gap-4 justify-between items-center p-4 w-full border-b md:justify-between md:p-6 bg-background">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <h2>Kodia News</h2>
        </Link>
        <ThemeSwitch />
      </div>
      {tags && tags.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link href={`/tags/${tag.slug}`} key={tag._id}>
              <Button variant="link" className="text-md">
                {tag.name}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
