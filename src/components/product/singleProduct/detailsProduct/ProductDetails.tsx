import { Product } from "@/types/product/typeProduct";
import ProductPrice from "./ProductPrice";
import ProductOptionSelector from "./ProductOptionSelector";
import AddToCard from "./AddToCard";
import ProductDescription from "./ProductDescription";

interface ProductDetailsProps {
  product?: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  if (!product) return null;

  return (
    <div className="h-[350px] lg:h-[700px] xl:h-[850px]">
      <h1 className="mb-[5px] text-center md:text-right">
        <span className="text-[22px] font-light">{product?.title}</span>
      </h1>
      <ProductPrice productPrice={product} />
      <ProductOptionSelector productSelected={product} />
      <AddToCard product={product}/>
      <ProductDescription productDescription={product} />
    </div>
  );
}
