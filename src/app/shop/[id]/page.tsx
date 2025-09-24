import SingleProduct from "@/components/product/singleProduct/SingleProduct";

export default async function SinglePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <SingleProduct id={id} />;
}
