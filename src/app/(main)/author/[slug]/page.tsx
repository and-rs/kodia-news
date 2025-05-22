type AuthorPageProps = {
  params: Promise<{ slug: string }>
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params

  return <div>Author</div>
}
