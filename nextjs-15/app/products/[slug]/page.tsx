export default async function ProductDetailPage({
  // menerima params slug dari URL
  params,
}: {
  // params type declaration
  params: Promise<{ slug: string }>;
}) {
  // destructuring params slug
  const { slug } = await params;
  console.log("slug", slug);

  return (
    <div>
      ProductDetailPage
      <p>Slug: {slug}</p>
    </div>
  );
}
