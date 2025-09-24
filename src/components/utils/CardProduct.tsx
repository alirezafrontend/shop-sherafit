"use client";

import { PropsItem } from "@/types/product/typeProduct";
import Image from "next/image";
import Link from "next/link";

export default function CardProduct({ item, className , classNameImg }: PropsItem) {
  console.log(item);

  const formatPrice = (x: number) => {
    return x.toLocaleString();
  };

  const finalPrice = item.price - (item.price * item.discount) / 100;

  return (
    <article className={`col-span-1 ${className}`}>
      <Link className="group block" href={`/shop/${item.id}`}>
        <div
          className={`relative w-full mb-[20px] overflow-hidden ${classNameImg}`}
        >
          <Image
            src={item.images[0]}
            alt={item.title}
            fill
            priority
            placeholder="blur"
            blurDataURL="/placeholder.png"
            className="!w-full object-cover"
          />
          <Image
            src={item.images[1]}
            alt={item.title}
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL="/placeholder.png"
            className="absolute top-0 left-0 !w-full !h-full object-cover hidden group-hover:block transition-opacity duration-500"
          />
          {item.discount > 0 && (
            <div className="absolute top-[10px] right-[10px] w-[35px] h-[20px] md:w-[47px] md:h-[24px] bg-[#000] flex justify-center items-center">
              <span className="text-[12px] md:text-[16px] text-[#fff]">
                {item.discount}%
              </span>
            </div>
          )}
        </div>
        <div>
          <h2 className="mb-[3px] text-[14px] md:text-[16px] text-center font-light line-clamp-1">
            {item.title}
          </h2>
          <div className="relative">
            <div>
              {item.discount > 0 && (
                <div className="flex justify-center">
                  <div className="relative text-[13px] md:text-[14px] inline-block">
                    <div className="relative z-10">
                      {formatPrice(item.price)}
                    </div>
                    <div className="absolute top-1/2 -left-[10%] -translate-y-[50%] w-[120%] h-[2px] bg-red-600 rounded z-20 -rotate-6 opacity-60"></div>
                  </div>
                </div>
              )}
              <div className="text-center text-[14px] !md:text-[16px] lg:text-[17px] font-light mt-[10px]">
                {formatPrice(finalPrice)}
                <span className="font-normal text-[14px] !md:text-[16px]">
                  {" "}
                  تومان
                </span>
              </div>
            </div>
            <div className="absolute top-0 grid-cols-5 gap-1 w-full hidden group-hover:grid bg-[#fff] transition-opacity duration-100 z-30">
              {item?.size.map((size) => {
                return (
                  <div
                    key={size}
                    className="flex justify-center items-center bg-[#fff] col-span-1 px-[10px] py-[1px] text-[11px] md:text-[13px] font-light border-[0.85px] border-[#ddd] text-center rounded"
                  >
                    {size}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
