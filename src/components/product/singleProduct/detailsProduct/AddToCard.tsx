import { RootState } from "@/app/store";
import { Button } from "@/components/ui/button";
import {
  decreaseToCart,
  increaseToCart,
  removeItem,
} from "@/features/cart/CartSlice";
import { openCart } from "@/features/cart/CartToggleSlice";
import { Product } from "@/types/product/typeProduct";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export default function AddToCard({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.cart.cartItems.find((item) => item.id === product.id)
  );

  return (
    <div className="w-full mt-[40px] mb-[60px]">
      {cartItem ? (
        <div className="flex items-center gap-[20px]">
          <div className="flex justify-center items-center w-[39px] h-[39px] bg-[#EDEDED] hover:bg-[#BCBCBC] group border-[1px] border-[#BCBCBC]">
            <button onClick={() => dispatch(removeItem(product))}>
              <Trash2 className="w-[21px] h-[21px] group-hover:text-[#EDEDED] cursor-pointer transition-all duration-300" />
            </button>
          </div>
          <div className="flex items-center h-[39px] bg-white border-[1px] border-[#EFEFEF]">
            <div
              onClick={() => dispatch(increaseToCart(product))}
              className="flex justify-center items-center w-[42px] cursor-pointer"
            >
              <Plus />
            </div>
            <div className="flex justify-center items-center w-[56px]">
              {cartItem.qty}
            </div>
            <div
              onClick={() => dispatch(decreaseToCart(product))}
              className="flex justify-center items-center w-[42px] cursor-pointer"
            >
              <Minus />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[45px] flex justify-center items-center py-[10px] px-[24px] text-[#fff] bg-[#000] cursor-pointer border-[1px] border-[#000] md:hover:bg-[#fff] md:hover:text-[#000] transition-all duration-200">
          <Button
            onClick={() => {
              dispatch(increaseToCart(product));
              dispatch(openCart());
            }}
            className="rounded-none w-full text-[16px] font-semibold !cursor-pointer"
          >
            افزودن به سبد خرید
          </Button>
        </div>
      )}
    </div>
  );
}
