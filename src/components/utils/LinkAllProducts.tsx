import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LinkAllProducts({ src }: { src: string }) {
  return (
    <div>
      <Link href={src}>
        <div className="flex items-center gap-2 text-[#3f3f3f] text-[14px] lg:text-[16px]">
          <span>همه محصولات</span>
          <ChevronLeft className="!lg:w-[16px] !lg:h-[16px] !w-[14px] !h-[14px]" />
        </div>
      </Link>
    </div>
  );
}
