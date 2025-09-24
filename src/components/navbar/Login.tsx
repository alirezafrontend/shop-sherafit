import { User } from "lucide-react";
import { Button } from "../ui/button";

export default function Login() {
  return (
    <div>
      <Button variant={"clean"} className="cursor-pointer">
        <User className="!w-[20px] !h-[25px] text-[var(--color-navIcon)]" />
      </Button>
    </div>
  );
}
