import Image from "next/image";
import Link from "next/link";

export default function Logo({ className }: { className: string }) {
  return (
    <div
      className={`w-[12%] h-full flex justify-center items-center ${className}`}
    >
      <Link href="/">
        <Image
          className="md:flex hidden"
          src="/logo.png"
          width={140}
          height={65}
          alt="logo"
        />
        <Image
          className="md:hidden flex"
          src="/logoMobile.png"
          width={32}
          height={25}
          alt="logo"
        />
      </Link>
    </div>
  );
}
