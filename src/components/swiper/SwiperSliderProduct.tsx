"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface SwipersProps {
  sliders: string[];
}

export default function SwiperSliderProduct({ sliders }: SwipersProps) {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {sliders?.map((slider) => {
          return (
            <SwiperSlide key={slider}>
              <div className="relative w-full min-h-[400px]">
                <Image
                  src={slider}
                  alt={slider}
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
