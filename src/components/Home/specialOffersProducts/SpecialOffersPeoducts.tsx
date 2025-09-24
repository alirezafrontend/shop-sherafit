import HeaderProduct from "@/components/utils/HeaderProduct";
import LinkAllProducts from "@/components/utils/LinkAllProducts";
import TitleProduct from "@/components/utils/TitleProduct";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SpecialOffersPeoductsList from "./SpecialOffersPeoductsList";
import ButtonProduct from "@/components/utils/ButtonProduct";
import { getAllProducts } from "@/services/api";
import { Product } from "@/types/product/typeProduct";

export default async function SpecialOffersPeoducts() {
  const queryClient = new QueryClient();

  type ProductsData = Awaited<ReturnType<typeof getAllProducts>>;

  await queryClient.prefetchQuery<ProductsData>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const dehydratedState = dehydrate(queryClient);

  const initialData =
    queryClient.getQueryData<ProductsData>(["newProducts"]) ?? [];

  return (
    <section className="w-full min-h-[500px] mb-[110px]">
      <HeaderProduct>
        <TitleProduct title="فروش ویژه" />
        <LinkAllProducts src="/shop" />
      </HeaderProduct>
      <HydrationBoundary state={dehydratedState}>
        <SpecialOffersPeoductsList initialData={initialData as Product[]} />
      </HydrationBoundary>
      <ButtonProduct title="مشاهده همه محصولات" href="/shop/page/1" />
    </section>
  );
}
