export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  // console.log(params.slug, "samisiso");

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      Product Detail Page {params.slug}
    </section>
  );
}
