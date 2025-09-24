"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { bannerProps } from "@/types/banner/bannerTypes";

interface SwipersProps {
  banners: bannerProps[];
  className?: string;
}

export default function SwiperHeroBannerers({ banners, className }: SwipersProps) {
  return (
    <div className={`w-full ${className}`}>
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
        {banners.map((banner) => {
          return (
            <SwiperSlide key={banner.alt}>
              <div
                className={`relative w-full h-[100px] md:h-screen ${className}`}
              >
                <Image
                  src={banner.src}
                  alt={banner.alt}
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
