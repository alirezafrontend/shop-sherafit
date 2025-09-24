"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/features/cart/CartToggleSlice";
import { RootState } from "@/app/store";
import { useEffect, useState } from "react";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.cartItems);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const numItems = items.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div>
      <Button
        onClick={() => dispatch(toggleCart())}
        variant={"clean"}
        className="cursor-pointer relative"
      >
        <ShoppingBag className="!w-[20px] !h-[25px] text-[var(--color-navIcon)] cursor-pointer" />
        {mounted && numItems > 0 && (
          <span className="bg-red-500 absolute -top-[2px] -right-[4px] w-[20px] h-[20px] text-[12px] rounded-full text-white flex justify-center items-center">
            {numItems}
          </span>
        )}
      </Button>
    </div>
  );
}
