"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product/typeProduct";
import CartItem from "./CartItem";
import CartPayment from "./CartPayment";

interface CartItemProps extends Product {
  qty: number;
}

interface CartShoppingProps {
  cartItems: CartItemProps[];
}

export default function CartShopping({ cartItems }: CartShoppingProps) {
  const [isClient, setIsClient] = useState(false);

  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col md:flex-row gap-[30px] mx-auto py-[30px] w-full max-w-[960px] min-h-[400px] px-[20px]">
      
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        {(cartItems || []).map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        {cartItems.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            سبد خرید شما خالی است.
          </p>
        )}
      </div>

      <div className="w-full md:w-1/3">
        <CartPayment cartItems={cartItems} />
      </div>
    </div>
  );
}
