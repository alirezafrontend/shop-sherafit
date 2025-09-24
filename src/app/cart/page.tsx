"use client";

import { useEffect, useState } from "react";
import CartShopping from "@/components/cart/CartShopping";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Cartpage() {
  const [isClient, setIsClient] = useState(false);
  const CartItems = useSelector((state: RootState) => state.cart.cartItems);

  useEffect(() => {
    setIsClient(true);
  }, []);

  
  if (!isClient) {
    return <div className="min-h-[500px] pt-[65px]"></div>; 
  }

  return (
    <div className="min-h-[500px] pt-[65px] flex flex-col justify-center">
      {CartItems?.length > 0 ? (
        <CartShopping cartItems={CartItems} />
      ) : (
        <div className="w-[250px] mx-auto flex flex-col gap-[20px] items-center">
          <p className="text-center text-[18px]">سبد خریدت خالیه</p>
          <p className="text-center text-[20px]">چند تا کالا بهش اضافه کن</p>
          <Link className="flex" href="/shop/page/1">
            <Button className="w-3/4 mx-auto px-[50px] py-[10px] flex justify-center items-center bg-black border-[1px] border-black rounded-none text-white text-[18px] cursor-pointer hover:bg-white hover:text-black transition-all duration-200">
              فروشگاه
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
