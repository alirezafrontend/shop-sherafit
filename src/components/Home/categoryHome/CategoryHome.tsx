import HeaderProduct from "@/components/utils/HeaderProduct";
import TitleProduct from "@/components/utils/TitleProduct";
import CategoryHomeList from "./CategoryHomeList";

export default function CategoryHome() {
  return (
    <section className="w-full min-h-[200px] mb-[110px]">
      <HeaderProduct>
        <TitleProduct title="خرید با دسته‌بندی" />
      </HeaderProduct>
      <CategoryHomeList />
    </section>
  );
}
