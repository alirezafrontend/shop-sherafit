import { PhoneCall } from "lucide-react";

export default function FooterContact() {
  return (
    <div className="flex justify-center md:justify-start col-span-4 md:col-span-1">
      <div className="flex gap-[10px]">
        <div>
          <a href="tel:02191035824">
            <PhoneCall className="text-[var(--color-footer-link)] rotate-[270deg] !w-[20px] !h-[20px]" />
          </a>
        </div>
        <div className="flex flex-col gap-[10px]">
          <a href="tel:02191035824">
            <div className="text-[18px] font-bold text-[var(--color-footer-text)]">
              02191035824
            </div>
          </a>
          <div>
            <p className="text-[13px] text-[#fff] font-light">
              پاسخگویی در ساعات اداری <br />
              8- 13 و 14- 17:30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
