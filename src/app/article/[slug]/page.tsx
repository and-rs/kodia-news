type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

// TODO: Bring article details

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  return <div>Article</div>;
}
