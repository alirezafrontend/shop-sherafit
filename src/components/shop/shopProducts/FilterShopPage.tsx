"use client";

import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { getAllProducts } from "@/services/api";
import { Product } from "@/types/product/typeProduct";

export default function FilterShopPage() {
  const { data } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const [discount, setDiscount] = useState(
    searchParams.get("discount") === "true"
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category")
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(
    searchParams.get("color")
  );
  const [selectedSize, setSelectedSize] = useState<string | null>(
    searchParams.get("size")
  );

  
  useEffect(() => {
    setSelectedCategory(searchParams.get("category"));
    setSelectedColor(searchParams.get("color"));
    setSelectedSize(searchParams.get("size"));
    setDiscount(searchParams.get("discount") === "true");
  }, [searchParams]);

  
  const categoryCounts = useMemo(() => {
    return (
      data?.reduce<Record<string, number>>((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      }, {}) ?? {}
    );
  }, [data]);

  const categories = useMemo(
    () => Object.entries(categoryCounts),
    [categoryCounts]
  );

  const colors = useMemo(
    () =>
      Array.from(new Set(data?.flatMap((item) => item.colors ?? []))).filter(
        Boolean
      ),
    [data]
  );

  const sizes = useMemo(
    () =>
      Array.from(new Set(data?.flatMap((item) => item.size ?? []))).filter(
        Boolean
      ),
    [data]
  );

  
  const handleCategoryClick = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCategory === cat) {
      setSelectedCategory(null);
      params.delete("category");
    } else {
      setSelectedCategory(cat);
      params.set("category", cat);
    }
    router.push(`?${params.toString()}`);
  };

  const handleColorClick = (color: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedColor === color) {
      setSelectedColor(null);
      params.delete("color");
    } else {
      setSelectedColor(color);
      params.set("color", color);
    }
    router.push(`?${params.toString()}`);
  };

  const handleSizeClick = (size: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedSize === size) {
      setSelectedSize(null);
      params.delete("size");
    } else {
      setSelectedSize(size);
      params.set("size", size);
    }
    router.push(`?${params.toString()}`);
  };

  const handleDiscountChange = (checked: boolean) => {
    setDiscount(checked);
    const params = new URLSearchParams(searchParams.toString());
    if (checked) {
      params.set("discount", "true");
    } else {
      params.delete("discount");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <Accordion className="overflow-auto" type="single" collapsible>
      
      <AccordionItem className="py-[10px]" value="item-1">
        <AccordionTrigger className="text-[18px]">نام محصول</AccordionTrigger>
        <AccordionContent className="max-h-60 overflow-auto">
          {categories?.map(([cat, count]) => (
            <div
              key={cat}
              className={`cursor-pointer py-1 ${
                selectedCategory === cat ? "text-black" : "text-gray-400"
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              <span>{cat}</span>
              <span> ({count})</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      
      <AccordionItem className="py-[10px]" value="item-2">
        <AccordionTrigger className="text-[18px]">رنگ</AccordionTrigger>
        <AccordionContent className="max-h-52 overflow-auto">
          {colors?.map((color) => (
            <div
              key={color}
              className={`cursor-pointer py-1 ${
                selectedColor === color ? "text-black" : "text-gray-400"
              }`}
              onClick={() => handleColorClick(color)}
            >
              <span>{color}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      
      <AccordionItem className="py-[10px]" value="item-3">
        <AccordionTrigger className="text-[18px]">سایز</AccordionTrigger>
        <AccordionContent className="max-h-52 overflow-auto">
          {sizes?.map((size) => (
            <div
              key={size}
              className={`cursor-pointer py-1 ${
                selectedSize === size ? "text-black" : "text-gray-400"
              }`}
              onClick={() => handleSizeClick(size)}
            >
              <span>{size}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      
      <div className="flex items-center gap-2 mt-4">
        <span className="text-[18px]">تخفیف دار</span>
        <Switch checked={discount} onCheckedChange={handleDiscountChange} />
      </div>
    </Accordion>
  );
}
