import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface ButtonProps {
  title: string;
  href: string;
}

export default function ButtonProduct({ title, href }: ButtonProps) {
  return (
    <div className="flex justify-center items-center">
      <Link href={href}>
        <Button className="w-[198px] h-[45px] font-semibold bg-[var(--color-content-link)] text-[#fff] border-[1px] border-[var(--color-content-link)] hover:bg-[#fff] hover:text-[var(--color-content-link)] transition-all duration-200 rounded-none cursor-pointer">
          {title}
        </Button>
      </Link>
    </div>
  );
}
