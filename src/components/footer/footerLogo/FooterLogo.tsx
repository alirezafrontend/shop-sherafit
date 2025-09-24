import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className="flex justify-center md:justify-start col-span-4 md:col-span-1">
      <div>
        <div className="flex justify-center">
          <Image
            src="/logoFooter.png"
            width={251}
            height={217}
            alt="footerLogo"
          />
        </div>
        <div className="flex justify-center md:justify-end">
          <a href="https://trustseal.enamad.ir/?id=488069&Code=CLyxhJeA65NdLrGIB3662ipWugES5Hfh">
            <Image
              src="/ENAMADpng.png"
              width={75}
              height={82}
              alt="footerENAMAD"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
