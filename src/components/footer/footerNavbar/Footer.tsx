import Container from "../../container/Container";
import FooterAboutNav from "../footerAboutLinks/FooterAboutNav";
import FooterContact from "../footerContact/FooterContact";
import FooterLogo from "../footerLogo/FooterLogo";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <footer>
      <section className="bg-[var(--color-footer-bg)] py-[80px] min-h-[200px]">
        <Container className="px-[20px] md:px-[40px]">
          <div className="grid grid-cols-4 gap-x-[20px] gap-y-[30px]">
            <FooterNav />
            <FooterAboutNav />
            <FooterContact />
            <FooterLogo />
          </div>
        </Container>
      </section>
      <section className="bg-[#fff] h-[32px]">
        <Container className="flex justify-center items-center px-[10px] py-[10px]">
          <div className="text-[17px] lg:text-[20px] font-bold">
            Developed By Alireza Hasanpour
          </div>
        </Container>
      </section>
    </footer>
  );
}
