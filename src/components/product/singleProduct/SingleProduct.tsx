"use client";

import Container from "@/components/container/Container";
import { useQuery } from "@tanstack/react-query";
import GallerySlider from "./GallerySlider";
import { getAllProducts, getProduct } from "@/services/api";
import ProductDetails from "./detailsProduct/ProductDetails";
import { Product } from "@/types/product/typeProduct";
import ProductRelated from "./ProductRelated";
import ContactForm from "../ContactForm";
import LoadingSinglePage from "../LoadingSinglePage";

export default function SingleProduct({ id }: { id: string }) {
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  const { data: productRelated } = useQuery<Product[]>({
    queryKey: ["Products"],
    queryFn: () => getAllProducts(),
  });

  const randomProducts = productRelated
    ?.filter((product) => product.id !== id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <LoadingSinglePage />
      </div>
    );
  }

  return (
    <main>
      <Container className="px-[20px] xl:px-[40px] mt-[50px] mb-[70px]">
        <section className="flex flex-col md:flex-row min-h-[500px] md:pt-[65px] mb-[50px] md:mb-[70px] overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="w-full md:w-[60%] min-h-[250px] mb-[30px] md:mb-0">
            <GallerySlider productImg={product?.images} />
          </div>
          <div className="w-full md:w-[40%] min-h-[250px] md:pr-[50px]">
            <ProductDetails product={product} />
          </div>
        </section>
        <section className="mb-[110px]">
          <ProductRelated products={randomProducts ?? []} />
        </section>
        <section>
          <ContactForm />
        </section>
      </Container>
    </main>
  );
}
