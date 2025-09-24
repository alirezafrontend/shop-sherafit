import Container from "@/components/container/Container";
import HeroBannerHome from "@/components/Home/HeroBannerHome/HeroBannerHome";
import CategoryHome from "@/components/Home/categoryHome/CategoryHome";
import NewProducts from "@/components/Home/newProducts/NewProducts";
import TopSellingProducts from "@/components/Home/topSellingProducts/TopSellingProducts";
import MainBanner from "@/components/Home/mainBanner/MainBanner";
import SpecialOffersPeoducts from "@/components/Home/specialOffersProducts/SpecialOffersPeoducts";
import PartnerLogos from "@/components/Home/partnerLogos/PartnerLogos";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="w-full min-h-screen">
        <HeroBannerHome />
        <Container className="px-[20px] xl:px-[40px]">
          <NewProducts />
          <CategoryHome />
          <TopSellingProducts />
          <MainBanner />
          <SpecialOffersPeoducts />
          <PartnerLogos />
        </Container>
      </div>
    </main>
  );
}
