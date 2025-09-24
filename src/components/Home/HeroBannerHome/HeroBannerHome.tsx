import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { heroBannersBig, heroBannersSm } from "./ConstantBanners";
import SwipSwiperHeroBannerers from "@/components/swiper/SwiperHeroBanner";

export default async function HeroBannerHome() {
  return (
    <section className="mb-[60px] min-h-screen">
      <SwipSwiperHeroBannerers
        className="hidden md:block"
        banners={heroBannersBig}
      />
      <SwipSwiperHeroBannerers
        className="block md:hidden !min-h-screen"
        banners={heroBannersSm}
      />
    </section>
  );
}
