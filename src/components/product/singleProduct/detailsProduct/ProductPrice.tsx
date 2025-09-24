"use client";
import { Product } from "@/types/product/typeProduct";
import React from "react";

export default function ProductPrice({
  productPrice,
}: {
  productPrice: Product;
}) {
  const formatPrice = (x: number) => {
    return x?.toLocaleString();
  };

  return (
    <div className="mt-[20px] mb-[30px]">
      <div className="flex justify-center md:justify-start gap-[15px]">
        <div className="flex flex-col justify-center md:justify-start">
          <div className="relative inline-block">
            <div className="flex justify-center md:justify-start relative text-[14px] font-medium z-10">
              {formatPrice(productPrice?.price)}
            </div>
            <span className="absolute top-1/2 left-[10%] md:-right-[10%] -translate-y-[50%] w-[80%] h-[2px] bg-red-600 rounded z-20 -rotate-5 opacity-60"></span>
          </div>
          <div className="flex items-center gap-[5px] text-[18px] font-medium">
            <span>
              {formatPrice(
                productPrice?.price -
                  (productPrice?.price * productPrice?.discount) / 100
              )}
            </span>
            <span>تومان</span>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center w-[41px] h-[24px] text-[#fff] px-[8px] py-[4px] bg-[#000]">
            <span>{productPrice?.discount}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
