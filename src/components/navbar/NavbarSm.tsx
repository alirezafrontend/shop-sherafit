import { X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { linksNav } from "@/utils/linksNav";
import { LinksNavbar } from "@/types/navbar/navbarTypes";

export default function NavbarSm({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 right-0 w-full h-screen flex lg:hidden 
                 bg-black/40 backdrop-blur-sm transition-all duration-300 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[300px] min-h-full pl-[20px] pt-[8px] pb-[40px] bg-white shadow-lg
                   translate-x-0 animate-slideIn flex flex-col"
      >
        <div className="flex justify-between items-center mr-[20px] mb-[15px] h-[35px]">
          <Image src="/menu-logo.png" width={44} height={35} alt="logoMobile" />
          <Button
            onClick={onClose}
            className="text-red-500 border-[1px] border-red-500 
                       w-[25px] h-[25px] !rounded-[50%] bg-white shadow-none flex items-center justify-center"
          >
            <X />
          </Button>
        </div>

        <nav className="flex flex-col gap-4 mt-4">
          {linksNav.map((link: LinksNavbar) => {
            if (!link.path) {
              return (
                <span
                  key={link.title}
                  className="text-black hover:text-[var(--color-hoverNavLink)] transition-all duration-200 cursor-pointer"
                >
                  {link.title}
                </span>
              );
            }
            return (
              <li key={link.title} className="mr-[20px] py-[5px] pl-[20px] list-none">
                <Link
                  onClick={onClose}
                  href={link.path}
                  className="text-black transition-all duration-200"
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
