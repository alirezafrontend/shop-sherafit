import OptionSelector from "@/components/utils/OptionSelector";
import { Product } from "@/types/product/typeProduct";
import React from "react";

export default function ProductOptionSelector({
  productSelected,
}: {
  productSelected: Product;
}) {
  return (
    <div className="flex flex-col gap-[40px]">
      <OptionSelector title="رنگ" options={productSelected.colors} />
      <OptionSelector title="سایز" options={productSelected.size} />
    </div>
  );
}
