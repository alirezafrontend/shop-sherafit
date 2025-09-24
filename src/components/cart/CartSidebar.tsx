"use client";

import { useSelector, useDispatch } from "react-redux";
import { selectShowCart, closeCart } from "@/features/cart/CartToggleSlice";
import { ShoppingBag, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { RootState } from "@/app/store";
import CartItemSidebar from "./CartItemSidebar";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function CartSidebar() {
  const showCart = useSelector(selectShowCart);
  const dispatch = useDispatch();
  const Items = useSelector((state: RootState) => state.cart.cartItems);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        dispatch(closeCart());
      }
    }

    if (showCart) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCart, dispatch]);

  useEffect(() => {
    dispatch(closeCart());
  }, [pathname, dispatch]);

  console.log("Items...", Items);

  const totalPrice = Items.reduce(
    (acc, item) =>
      acc + (item.price - (item.price * item.discount) / 100) * item.qty,
    0
  );

  const totalPriceStr = totalPrice.toLocaleString();

  if (!showCart) return null;

  return (
    <div
      ref={sidebarRef}
      className="fixed top-0 left-0 w-full max-w-[600px] h-screen bg-white shadow-lg z-50 flex flex-col justify-between"
    >
      <div className="flex justify-between px-[30px] py-[20px]">
        <button onClick={() => dispatch(closeCart())}>
          <X className="w-6 h-6 cursor-pointer" />
        </button>
        <div className="flex gap-[10px] justify-center">
          <span className="text-[14px]">سبد خرید</span>
          <ShoppingBag className="w-[16px]" />
        </div>
      </div>
      <div className="w-full h-full max-h-[100%] overflow-auto">
        {Items?.map((item) => {
          return <CartItemSidebar key={item.id} {...item} />;
        })}
      </div>
      <div className="w-full max-w-[600px] h-[160px] fixed bottom-0 left-0 flex justify-center items-center px-[35px] py-[20px] bg-white shadow-[0_-10px_30px_0_rgba(0,0,0,0.13)]">
        {Items?.length > 0 ? (
          <div className="w-full h-full flex-col">
            <div className="w-full h-[50%] flex items-center">
              <div className="w-[190px] text-[#717171] text-[15px]">
                قیمت پرداختی
              </div>
              <div className="w-full h-[2px] bg-[#aeaeae] mx-[10px]"></div>
              <div className="w-[130px]">
                <span className="ml-[10px] text-[22px]">{totalPriceStr}</span>
                <span className="text-[13px]">تومان</span>
              </div>
            </div>
            <div className="w-full h-[50%] flex justify-between">
              <div className="w-[48%] h-[46px]">
                <Link
                  className="w-full flex justify-between px-[24px] py-[10px] bg-black text-white border-[1px] border-black hover:bg-white hover:text-black transition-all duration-200"
                  href="/cart"
                >
                  <span className="text-[16px]">تکمیل خرید</span>
                  <ShoppingBag className="w-[16px]" />
                </Link>
              </div>
              <div className="w-[48%] h-[46px] flex items-center bg-[#ececec] px-[24px] py-[10px] border-[1px] border-[#BCBCBC] text-[#EDEDED] cursor-pointer">
                <span className="text-[#4A4A4A]">ادامه خرید</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Link href="/shop/page/1">
              <Button className="bg-black text-white text-[17px] font-bold px-[35px] py-[20px] rounded-none hover:text-black hover:border-[1px] hover:border-black hover:bg-white transition-all duration-200 cursor-pointer">
                رفتن به فروشگاه
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
