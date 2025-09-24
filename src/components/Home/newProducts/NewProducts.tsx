import NewProductsList from "./NewProductsList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getAllProducts } from "@/services/api";
import { Product } from "@/types/product/typeProduct";
import ButtonProduct from "@/components/utils/ButtonProduct";
import HeaderProduct from "@/components/utils/HeaderProduct";
import TitleProduct from "@/components/utils/TitleProduct";
import LinkAllProducts from "@/components/utils/LinkAllProducts";

export default async function NewProducts() {
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
      <div>
        <h1 className="text-[50px] font-black text-center mb-[60px]">شرافیت</h1>
      </div>
      <HeaderProduct>
        <TitleProduct title="جدیدترین محصولات" />
        <LinkAllProducts src="/shop" />
      </HeaderProduct>
      <HydrationBoundary state={dehydratedState}>
        <NewProductsList initialData={initialData as Product[]} />
      </HydrationBoundary>
      <ButtonProduct title="مشاهده همه محصولات" href="/shop/page/1" />
    </section>
  );
}
