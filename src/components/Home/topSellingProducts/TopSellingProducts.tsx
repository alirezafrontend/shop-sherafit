import HeaderProduct from "@/components/utils/HeaderProduct";
import LinkAllProducts from "@/components/utils/LinkAllProducts";
import TitleProduct from "@/components/utils/TitleProduct";
import { getAllProducts } from "@/services/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TopSellingProductsList from "./TopSellingProductsList";
import { Product } from "@/types/product/typeProduct";
import ButtonProduct from "@/components/utils/ButtonProduct";

export default async function TopSellingProducts() {
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
        <TitleProduct title="پرفروش‌ترین محصولات" />
        <LinkAllProducts src="/shop" />
      </HeaderProduct>
      <HydrationBoundary state={dehydratedState}>
        <TopSellingProductsList initialData={initialData as Product[]} />
      </HydrationBoundary>
      <ButtonProduct title="مشاهده همه محصولات" href="/shop/page/1" />
    </section>
  );
}
