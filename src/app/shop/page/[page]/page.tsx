// app/shop/page/[page]/page.tsx
"use client";

import React from "react";
import ShopBanner from "@/components/shop/shopBanner/ShopBanner";
import ShopHeader from "@/components/shop/shopHeader/ShopHeader";
import FilterShopPage from "@/components/shop/shopProducts/FilterShopPage";
import ShopProducts from "@/components/shop/shopProducts/ShopProducts";

interface ShopPageProps {
  params: Promise<{ page: string }>; 
}

export default function ShopPage({ params }: ShopPageProps) {
  const unwrappedParams = React.use(params); 
  const pageNumber = parseInt(unwrappedParams.page, 10) || 1;

  return (
    <div>
      <ShopBanner />
      <ShopHeader className="sticky top-[65px] z-60" />
      <div className="flex">

        <div className="hidden md:block md:w-4/9 lg:w-2/8 mt-[60px] mb-[40px] px-[50px] h-[600px] sticky top-[165px] overflow-hidden">
          <FilterShopPage />
        </div>

        <div className="w-full md:w-5/9 lg:w-6/8 mt-[30px] mb-[50px]">
          <ShopProducts currentPage={pageNumber} />
        </div>
      </div>
    </div>
  );
}
