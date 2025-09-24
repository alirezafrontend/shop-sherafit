"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { bannerProps } from "@/types/banner/bannerTypes";

interface SwipersProps {
  banners: bannerProps[];
  classNameSlider?: string;
  classNameSlide?: string;
  classNameSlideTitle?: string;
  classNameNavigation?: string;
  widthImg?: number;
  heightImg?: number;
}

export default function SwipersBrands({
  banners,
  classNameSlider,
  classNameSlide,
  classNameSlideTitle,
  classNameNavigation,
  widthImg,
  heightImg,
}: SwipersProps) {
  return (
    <div className={`w-full ${classNameSlider}`}>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          370: { slidesPerView: 2 },
          520: { slidesPerView: 3 },
          670: { slidesPerView: 4 },
          840: { slidesPerView: 5 },
          930: { slidesPerView: 6 },
          1200: { slidesPerView: 7 },
        }}
        className="w-full"
      >
        {banners.map((banner) => {
          return (
            <SwiperSlide key={banner.alt}>
              <div className={`${classNameSlide}`}>
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  width={widthImg}
                  height={heightImg}
                  priority
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                  className="object-cover"
                />
              </div>
              <div className={`${classNameSlideTitle} mt-2 text-center`}>
                <h3 className="text-[14px]">{banner.alt}</h3>
              </div>
            </SwiperSlide>
          );
        })}
        <>
          <div
            className={`swiper-button-prev !-right-[7px] ${classNameNavigation}`}
          ></div>
          <div
            className={`swiper-button-next !-left-[7px] ${classNameNavigation}`}
          ></div>
        </>
      </Swiper>
    </div>
  );
}
