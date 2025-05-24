import { getInitials } from "@/components/articles/article-author"
import ArticleGrid from "@/components/articles/article-grid"
import BackHome from "@/components/navigation/back-home"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { client } from "@/sanity/client"
import { AuthorPageQueryResult } from "@/sanity/types"
import imageUrlFor from "@/sanity/utils/img-builder"
import { authorPageQuery } from "@/sanity/utils/queries"
import { ExternalLink, LucideMail } from "lucide-react"
import { notFound } from "next/navigation"

type AuthorPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const resolvedParams = await params
  const { slug } = resolvedParams

  const author = await client.fetch<AuthorPageQueryResult>(authorPageQuery, {
    slug,
  })

  if (!author || !author.name) {
    return {
      title: "Author Not Found - Kodia News",
      description: "The author profile you are looking for could not be found.",
    }
  }

  const siteName = "Kodia News"
  const pageTitle = `${author.name} - ${siteName}`

  const description =
    author.bio || `Profile of ${author.name}, an author at ${siteName}.`
  const imageUrl = author.image
    ? imageUrlFor(author.image).width(1200).height(630).url()
    : undefined

  const authorUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/author/${author.slug}`

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: author.name,
      description: description,
      url: authorUrl,
      type: "profile",
      siteName: siteName,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  }
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params

  const author = await client.fetch<AuthorPageQueryResult>(authorPageQuery, {
    slug,
  })

  if (!author) {
    notFound()
  }

  const authorInitials = getInitials(author?.name)
  const image = author.image && imageUrlFor(author.image).width(200).url()

  return (
    <div className="flex flex-col gap-6 mx-4">
      <BackHome />
      <div className="flex flex-col gap-8 items-center xs:flex-row">
        <Avatar className="size-52">
          {image && <AvatarImage src={image} />}
          <AvatarFallback>{authorInitials}</AvatarFallback>
        </Avatar>
        <div className="space-y-6">
          <h1>{author?.name}</h1>
          <p>{author?.bio}</p>
          <AuthorLinks {...author} />
        </div>
      </div>
      <div className="flex flex-col gap-6 pt-6">
        <h2 className="tracking-tight">Articles by {author.name}</h2>
        <ArticleGrid showAuthor={false} articles={author.articles} />
      </div>
    </div>
  )
}

function AuthorLinks(author: AuthorPageQueryResult) {
  if (!author?.social) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-4">
      {author.social.twitter && (
        <a
          href={`https://twitter.com/${author.social.twitter.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {author.social.twitter}
        </a>
      )}

      {author.social.website && (
        <a
          href={author.social.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="mr-1 size-4" />
          Personal Website
        </a>
      )}

      {author.email && (
        <a href={`mailto:${author.email}`}>
          <LucideMail className="mr-1 size-4" />
          {author.email}
        </a>
      )}
    </div>
  )
}
