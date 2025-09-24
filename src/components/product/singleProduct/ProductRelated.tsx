"use client";

import React from "react";
import { Product } from "@/types/product/typeProduct";
import CardProduct from "@/components/utils/CardProduct";

interface ProductRelatedProps {
  products: Product[];
}

export default function ProductRelated({ products }: ProductRelatedProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="mb-[110px]">
      <div className="flex justify-center mb-[40px] md:mb-[50px]">
        <span className="text-[20px] font-light">ممکن است خوشتان بیاید</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            item={product}
            className="md:h-[520px] h-[279px]"
            classNameImg="md:h-[420px] h-[170px]"
          />
        ))}
      </div>
    </section>
  );
}
