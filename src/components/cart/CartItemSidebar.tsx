import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { decreaseToCart, increaseToCart } from "@/features/cart/CartSlice";

type PropsItem = {
  title: string;
  price: number;
  discount: number;
  colors: string[];
  size: string[];
  description: string[];
  images: string[];
  category: string;
  gender: string;
  id: string;
  qty: number;
};

export default function CartItemSidebar(item: PropsItem) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center p-[15px] mx-[25px] mt-[20px] mb-[10px] shadow-[0_0_25px_0_rgba(0,0,0,0.15)] rounded-[10px] gap-[20px]">
      <div className="w-full text-[#4a4a4a]">
        <div className="flex flex-col items-end mb-[15px]">
          <Link
            className="text-[16px] font-black hover:text-[var(--color-content-link-hover)] transition-colors duration-200"
            href={`/shop/${item.id}`}
          >
            {item.title}
          </Link>
        </div>
        <div className="w-full">
          <div className="w-[140px] h-[38px] flex border-[1px] border-[#EFEFEF]">
            <span
              onClick={() => dispatch(increaseToCart(item))}
              className="w-1/3 flex justify-center items-center cursor-pointer"
            >
              <Plus className="w-[16px]" />
            </span>
            <span className="w-1/3 text-[18px] flex justify-center items-center">
              {item.qty}
            </span>
            <span onClick={() => dispatch(decreaseToCart(item))} className="w-1/3 flex justify-center items-center cursor-pointer">
              <Minus className="w-[16px]" />
            </span>
          </div>
        </div>
        <div className="mt-[15px] text-[16px] flex justify-end">
          <span className="ml-[10px]">
            {(
              (item.price - (item.price * item.discount) / 100) *
              item.qty
            ).toLocaleString()}
          </span>
          <span>تومان</span>
        </div>
      </div>
      <div className="w-[100px] h-[100px] rounded-[15px] overflow-hidden">
        <Image src={item.images[0]} width={100} height={100} alt={item.title} />
      </div>
    </div>
  );
}
