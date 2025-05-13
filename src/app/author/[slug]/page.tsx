type AuthorPageProps = {
  params: Promise<{ slug: string }>;
};

// TODO: Bring author details

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;

  return <div>Author</div>;
}
