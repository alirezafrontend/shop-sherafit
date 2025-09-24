import { Product } from "@/types/product/typeProduct";
import { Button } from "../ui/button";

interface CartItemProps extends Product {
  qty: number;
}

interface CartPaymentProps {
  cartItems: CartItemProps[];
}

export default function CartPayment({ cartItems }: CartPaymentProps) {
  const totlaPrice = cartItems?.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  const totlaPriceOff = cartItems?.reduce((acc, item) => {
    return acc + (item.price - (item.price * item.discount) / 100) * item.qty;
  }, 0);

  return (
    <div className="flex flex-col gap-[20px] w-full px-[30px] py-[25px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] rounded-[5px]">
      <div className="flex flex-col gap-[15px]">
        <div className="flex justify-between items-center">
          <div className="text-[#bcbcbc]">جمع کل</div>
          <div>
            <span className="text-[#959595] text-[18px] ml-[5px]">
              {totlaPrice.toLocaleString()}
            </span>
            <span className="text-[14px] text-[#bcbcbc]">تومان</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#959595] text-[18px] ml-[5px]">پرداختی</div>
          <div>
            <span className="text-[#24180E] text-[25px]">
              {totlaPriceOff.toLocaleString()}
            </span>
            <span className="text-[14px] text-[#bcbcbc]">تومان</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Button className="w-full text-[18px] bg-black border-[1px] border-black text-white hover:text-black hover:bg-white transition-all duration-200 rounded-none cursor-pointer">
          مرحله بعد
        </Button>
      </div>
    </div>
  );
}
