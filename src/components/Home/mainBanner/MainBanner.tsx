import Image from "next/image";

export default function MainBanner() {
  return (
    <section className="w-full min-h-[200px] mb-[110px]">
      <div>
        <Image
          src="/article-banner-main/bannerMainBig.jpg"
          alt="mainBanner"
          width={1500}
          height={500}
          className="hidden md:block w-full"
        />
        <Image
          src="/article-banner-main/bannerMainSm.jpg"
          alt="mainBanner"
          width={1500}
          height={500}
          className="block md:hidden w-full"
        />
      </div>
    </section>
  );
}
