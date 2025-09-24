"use client";

import { RootState } from "@/app/store";
import CardProduct from "@/components/utils/CardProduct";
import Loading from "@/components/utils/Loading";
import { getAllProductsPagination, getProductsCount } from "@/services/api";
import { Product } from "@/types/product/typeProduct";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import PaginatioShop from "./PaginationShop";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type PropShopProduct = {
  currentPage: number;
};

export default function ShopProducts({ currentPage }: PropShopProduct) {
  const gridLg = useSelector((state: RootState) => state.pageGrid.gridLg);
  const gridMd = useSelector((state: RootState) => state.pageGrid.gridMd);
  const grid = useSelector((state: RootState) => state.pageGrid.grid);

  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString(); 
  const category = searchParams.get("category") || undefined;
  const discount = searchParams.get("discount") === "true" ? true : undefined;
  const color = searchParams.get("color") || undefined;
  const size = searchParams.get("size") || undefined;

  
  const [paramsVersion, setParamsVersion] = useState(0);

  useEffect(() => {
    setParamsVersion(prev => prev + 1);
  }, [searchParamsString]);

  const { data: Products, isLoading } = useQuery<Product[]>({
    queryKey: ["products", currentPage, category, discount, color, size, paramsVersion],
    queryFn: () =>
      getAllProductsPagination({
        page: currentPage,
        category,
        discount,
        color,
        size,
      }),
    staleTime: 1000 * 60 * 5,
  });

  const { data: totalProducts } = useQuery({
    queryKey: ["productsCount", category, discount, color, size, paramsVersion],
    queryFn: () => getProductsCount({ category, discount, color, size }),
  });

  const totalPages = Math.ceil((totalProducts || 0) / 12);

  
  useEffect(() => {
    if (currentPage < totalPages) {
      queryClient.prefetchQuery({
        queryKey: [
          "products",
          currentPage + 1,
          category,
          discount,
          color,
          size,
          paramsVersion,
        ],
        queryFn: () =>
          getAllProductsPagination({
            page: currentPage + 1,
            category,
            discount,
            color,
            size,
          }),
        staleTime: 1000 * 60 * 5,
      });
    }
  }, [currentPage, totalPages, queryClient, category, discount, color, size, paramsVersion]);

  
  const gridClasses = useMemo(() => {
    const base = "grid gap-[22px] gap-y-[30px]";
    const mdClass =
      gridMd === 1
        ? "md:grid-cols-1"
        : gridMd === 2
        ? "md:grid-cols-2"
        : gridMd === 3
        ? "md:grid-cols-3"
        : "md:grid-cols-4";
    const lgClass =
      gridLg === 1
        ? "lg:grid-cols-1"
        : gridLg === 2
        ? "lg:grid-cols-2"
        : gridLg === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-4";
    const smClass =
      grid === 1
        ? "grid-cols-1"
        : grid === 2
        ? "grid-cols-2"
        : grid === 3
        ? "grid-cols-3"
        : "grid-cols-4";
    return `${base} ${smClass} ${mdClass} ${lgClass}`;
  }, [grid, gridMd, gridLg]);

  if (isLoading) {
    return (
      <div className="w-full mt-[35px] px-[30px]">
        <Loading />
      </div>
    );
  }

  if (!Products || Products.length === 0) {
    return (
      <div className="w-full min-h-[200px] flex justify-center items-center mt-[35px] px-[30px] text-center text-[18px] text-gray-600">
        هیچ محصولی یافت نشد.
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1440px] px-[30px]">
      <h1 className="h-[30px] mb-[10px]">
        <span className="text-[22px] font-semibold">همه محصولات</span>
      </h1>
      <div className="flex flex-col gap-[40px]">
        <div className={gridClasses}>
          {Products.map((item: Product) => (
            <CardProduct
              key={item.id}
              item={item}
              className={
                gridLg === 4
                  ? "md:h-[360px] h-[260px]"
                  : "md:h-[460px] h-[260px]"
              }
              classNameImg={
                gridLg === 4
                  ? "md:h-[256px] h-[156px]"
                  : "md:h-[356px] h-[156px]"
              }
            />
          ))}
        </div>
        <PaginatioShop currentPage={currentPage} totalPage={totalPages} />
      </div>
    </div>
  );
}
