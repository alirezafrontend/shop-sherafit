import Image from "next/image";

export default function ShopBanner() {
  return (
    <section className="w-full h-[365px]">
      <div className="relative hidden md:block w-full h-full">
        <Image
          src="/shop/bannerAllShop.webp"
          fill
          alt="bannerShop"
          className="object-cover"
        />
      </div>
      <div className="relative block md:hidden w-full h-full">
        <Image
          src="/shop/bannerAllShopMobile.webp"
          fill
          alt="bannerShop"
          className="object-cover"
        />
      </div>
    </section>
  );
}
