import React from "react";
import { partnerLogosList } from "./constantPartnerLogos";
import SwipersBrands from "@/components/swiper/SwipersBrands";

export default function PartnerLogos() {
  return (
    <section className="h-[150px] mb-[110px]">
      <SwipersBrands
        classNameSlider="h-[150px]"
        classNameSlide="ml-[20px] flex justify-center mb-[10px]"
        classNameSlideTitle="ml-[20px] flex justify-center text-[var(--color-content-faded)] font-medium"
        classNameNavigation="absolute !top-[80px]"
        banners={partnerLogosList}
        widthImg={140}
        heightImg={80}
      />
    </section>
  );
}
