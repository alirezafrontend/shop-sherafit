"use client";

import { Search } from "lucide-react";
import { Button } from "../ui/button";

export default function SearchNavbar() {
  return (
    <div>
      <Button variant={"clean"} className="cursor-pointer">
        <Search className="!w-[18px] !h-[17px] text-[var(--color-navIcon)]" />
      </Button>
    </div>
  );
}
