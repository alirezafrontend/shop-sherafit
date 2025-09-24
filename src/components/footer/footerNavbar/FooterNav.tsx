import { FooterLinks } from "./ConstantFooterLinks";
import type { footerLinks } from "@/types/footer/footerTypes";

export default function FooterNav() {
  return (
    <div className="flex justify-center md:justify-start col-span-4 md:col-span-1">
      <div>
        <h3 className="mb-[10px] text-[17px] text-[var(--color-footer-heading)] font-bold">
          لینک های مفید
        </h3>
        <ul className="flex flex-col gap-[10px]">
          {FooterLinks.map((link: footerLinks) => {
            return (
              <li key={link.id} className="text-[14px] text-[#d4d4d4]">
                {link.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
