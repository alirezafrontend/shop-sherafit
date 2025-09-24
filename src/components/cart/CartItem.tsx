import { decreaseToCart, increaseToCart } from "@/features/cart/CartSlice";
import { Product } from "@/types/product/typeProduct";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

interface CartItemProps extends Product {
  qty: number;
}

export default function CartItem(item: CartItemProps) {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-wrap md:flex-nowrap px-[20px] py-[7px] rounded-[5px] gap-[15px] mb-[10px] items-center shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
      <div className="w-[95px] h-[114px] overflow-hidden">
        <Image src={item.images[0]} width={95} height={114} alt={item.title} />
      </div>
      <div>
        <div className="mb-[10px] text-[#616161] text-[17px]">{item.title}</div>
        <div className="text-[#636363] text-[14px] flex gap-[10px]">
          <div>
            <span className="ml-[5px]">{item.price.toLocaleString()}</span>
            <span>تومان</span>
          </div>
          <div className="w-[30px] h-[30px] rounded-full bg-black text-white flex justify-center items-center">
            {item.discount} %
          </div>
        </div>
      </div>
      <div className="w-full md:w-[30%] flex items-center justify-between md:flex-col mr-auto">
        <div className="mb-[10px] text-[#646464]">
          <span className="text-[18px] ml-[5px]">
            {(
              (item.price - (item.price * item.discount) / 100) *
              item.qty
            ).toLocaleString()}
          </span>
          <span className="text-[16px]">تومان</span>
        </div>
        <div className="flex gap-[5px] h-[35px]">
          <span
            onClick={() => dispatch(increaseToCart(item))}
            className="w-[40px] bg-[#e4e3e1] h-full flex justify-center items-center rounded-[5px] cursor-pointer"
          >
            <Plus />
          </span>
          <span className="w-[55px] bg-white border-[1px] border-[#e4e3e1] h-full flex justify-center items-center rounded-[5px]">
            {item.qty}
          </span>
          <span
            onClick={() => dispatch(decreaseToCart(item))}
            className="w-[40px] bg-[#e4e3e1] h-full flex justify-center items-center rounded-[5px] cursor-pointer"
          >
            <Minus />
          </span>
        </div>
      </div>
    </div>
  );
}
