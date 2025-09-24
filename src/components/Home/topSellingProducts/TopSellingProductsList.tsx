"use client";

import CardProduct from "@/components/utils/CardProduct";
import Loading from "@/components/utils/Loading";
import { getAllProducts } from "@/services/api";
import { Product } from "@/types/product/typeProduct";
import { useQuery } from "@tanstack/react-query";

interface TopSellingProductsListProps {
  initialData: Product[];
}

export default function TopSellingProductsList({
  initialData,
}: TopSellingProductsListProps) {
  const { data = initialData, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    initialData,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3.5 gap-y-2 md:gap-x-7.5 md:gap-y-16 mb-[50px]">
      {data?.slice(-4).map((item: Product) => {
        return (
          <CardProduct
            key={item.id}
            item={item}
            className="md:h-[520px] h-[279px]"
            classNameImg="md:h-[420px] h-[170px]"
          />
        );
      })}
    </div>
  );
}
