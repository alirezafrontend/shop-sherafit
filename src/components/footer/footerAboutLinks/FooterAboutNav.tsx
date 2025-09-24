import { FooterAboutLinks } from "./ConstantFooterAboutLinks";
import type { footerLinks } from "@/types/footer/footerTypes";

export default function FooterAboutNav() {
  return (
    <div className="flex justify-center md:justify-start col-span-4 md:col-span-1">
      <ul className="flex flex-col gap-[10px]">
        <li className="text-[17px] text-[var(--color-footer-heading)] font-bold">
          درباره برند شرافیت
        </li>

        {FooterAboutLinks.map((link: footerLinks) => {
          return (
            <li key={link.id} className="text-[14px] text-[#d4d4d4]">
              {link.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
