import { Product } from "@/types/product/typeProduct";

export default function ProductDescription({
  productDescription,
}: {
  productDescription: Product;
}) {
  return (
    <div className="my-[10px]">
      <div className="text-[16px] mb-[20px] text-[#000000b6]">
        <div className="flex gap-1.5">
          <span>توضیحات</span>
          <span>{productDescription?.title}</span>
        </div>
      </div>
      <div className="flex flex-col gap-[15px]">
        {productDescription?.description.map((des) => {
          return (
            <div key={des}>
              <div className="flex gap-1">
                <div className="text-[16px]">✅</div>
                <div className="text-[14px] text-[#000000b6]">{des}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
