import type { category } from "@/types/category/categoryTypes";
import CardCategory from "./CardCategory";
import { categoryHome } from "./ConstantCategory";

export default function CategoryHomeList() {
  return (
    <>
      <div className="hidden md:grid grid-cols-4 gap-x-[30px]">
        {categoryHome.map((cat: category) => {
          return (
            <CardCategory
              key={cat.id}
              src={cat.src}
              alt={cat.alt}
              href={cat.path}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-4 md:hidden gap-y-[20px]">
        {categoryHome.map((cat: category) => {
          return (
            <CardCategory
              key={cat.id}
              src={cat.srcMob}
              alt={cat.alt}
              href={cat.path}
            />
          );
        })}
      </div>
    </>
  );
}
