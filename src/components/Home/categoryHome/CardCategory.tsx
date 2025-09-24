import Image from "next/image";
import Link from "next/link";

interface CardCategoryProps {
  src: string;
  alt: string;
  href: string;
}

export default function CardCategory({ src, alt, href }: CardCategoryProps) {
  return (
    <div className="w-full col-span-4 md:col-span-1">
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="object-cover w-full h-[165px] md:h-[185px] lg:h-[395px]"
        />
      </Link>
    </div>
  );
}
