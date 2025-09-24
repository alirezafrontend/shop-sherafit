import { Menu } from "lucide-react";

export default function NavbarLinksSm({
  className,
  onToggleMenu,
}: {
  className: string;
  onToggleMenu: () => void;
}) {
  return (
    <div className={`${className}`}>
      <Menu
        onClick={onToggleMenu}
        className="text-[var(--color-navLink)] cursor-pointer"
      />
    </div>
  );
}
