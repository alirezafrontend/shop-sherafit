"use client";

import SwiperSliderProduct from "@/components/swiper/SwiperSliderProduct";
import Image from "next/image";
import { useState } from "react";

interface GallerySliderProps {
  productImg?: string[];
}

export default function GallerySlider({ productImg }: GallerySliderProps) {
  const [imgIndex, setImgIndex] = useState(0);

  if (!productImg) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="hidden md:flex overflow-hidden">
        <div
          className="flex min-w-[80px] flex-col gap-[20px] h-[350px] lg:h-[700px] xl:h-[850px] overflow-x-hidden overflow-y-scroll"
          style={{ direction: "ltr" }}
        >
          {productImg?.map((Img, index) => {
            return (
              <div
                onClick={() => setImgIndex(index)}
                className={`relative flex justify-center w-[80px] min-h-[80px] p-[5px] overflow-hidden cursor-pointer ${
                  imgIndex === index ? "border-[1px] border-[#000]" : ""
                }`}
                key={Img}
              >
                <Image className="object-cover" src={Img} fill alt={Img} />
              </div>
            );
          })}
        </div>
        <div className="relative flex w-full h-[350px] lg:h-[700px] xl:h-[850px] overflow-hidden mr-[30px]">
          <Image
            src={productImg[imgIndex]}
            fill
            className="object-cover"
            alt={productImg[imgIndex]}
          />
        </div>
      </div>
      <div className="block md:hidden min-h-[250px]">
        <SwiperSliderProduct sliders={productImg} />
      </div>
    </>
  );
}
