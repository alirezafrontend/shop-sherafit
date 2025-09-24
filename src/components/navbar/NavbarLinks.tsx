import NavbarLinksBig from "./NavbarLinksBig";
import NavbarLinksSm from "./NavbarLinksSm";

export default function NavbarLinks({
  className,
  onToggleMenu,
}: {
  className: string;
  onToggleMenu: () => void;
}) {
  return (
    <div className={`${className}`}>
      <NavbarLinksBig className="lg:flex hidden" />
      <NavbarLinksSm className="lg:hidden flex" onToggleMenu={onToggleMenu} />
    </div>
  );
}
