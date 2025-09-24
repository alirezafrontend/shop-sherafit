"use client";

import { useEffect, useState } from "react";
import Container from "../container/Container";
import Cart from "./Cart";
import Login from "./Login";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import SearchNavbar from "./SearchNavbar";
import { usePathname } from "next/navigation";
import CartSidebar from "../cart/CartSidebar";
import NavbarSm from "./NavbarSm";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [toggleSmMenu, setToggleSmMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass =
    pathname === "/" && !scrolled
      ? "bg-transparent hover:bg-[var(--background-header)]"
      : "bg-[var(--background-header)]";

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[65px] transition-all duration-100 z-[200] ${bgClass}`}
    >
      <Container className="flex items-center h-full px-[20px] xl:px-[40px]">
        <NavbarLinks
          onToggleMenu={() => setToggleSmMenu((prev) => !prev)}
          className="w-[40%] lg:w-[80%] xl:w-[44%] order-1 lg:order-2 xl:order-1"
        />
        <Logo className="w-[20%] lg:w-[20%] xl:w-[12%] order-2 lg:order-1 xl:order-2" />
        <div className="order-3 w-[40%] lg:w-[20%] xl:w-[44%] h-full flex justify-end items-center">
          <SearchNavbar />
          <Login />
          <Cart />
        </div>
      </Container>
      {toggleSmMenu && <NavbarSm onClose={() => setToggleSmMenu(false)} />}
      <CartSidebar />
    </header>
  );
}
