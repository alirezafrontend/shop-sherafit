import { LinksNavbar } from "@/types/navbar/navbarTypes";
import { linksNav } from "@/utils/linksNav";
import Link from "next/link";

export default function NavbarLinksBig({ className }: { className: string }) {
  return (
    <nav className={`lg:flex hidden h-full items-center ${className}`}>
      <ul className="w-full h-full flex gap-7.5">
        {linksNav.map((link: LinksNavbar) => {
          if (!link.path) {
            return (
              <li
                className="flex items-center text-[var(--color-navLink)] hover:text-[var(--color-hoverNavLink)] transition-all duration-200 cursor-pointer"
                key={link.title}
              >
                {link.title}
              </li>
            );
          }
          return (
            <li
              key={link.title}
              className="text-[var(--color-navLink)] hover:text-[var(--color-hoverNavLink)] transition-all duration-200 cursor-pointer"
            >
              <Link className="flex items-center h-full" href={link.path}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
