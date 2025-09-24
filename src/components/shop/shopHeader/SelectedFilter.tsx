import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

export default function SelectedFilter() {
  return (
    <Select dir="rtl">
      <SelectTrigger className="w-full !h-[62px] !rounded-0 !border-none !outline-none !shadow-none !focus:border-none !focus:outline-none !focus:ring-0">
        <SelectValue placeholder="مرتب سازی" />
      </SelectTrigger>
      <SelectContent
        sideOffset={0}
        side="top"
        position="popper"
        className="!w-full !rounded-0 !p-0"
      >
        <SelectGroup className="bg-[#fff] !border-none !w-full">
          <SelectItem
            className="!text-[14px] hover:bg-[#f0efef] cursor-pointer"
            value="new"
          >
            جدیدترین
          </SelectItem>
          <SelectItem
            className="!text-[14px] hover:bg-[#f0efef] cursor-pointer"
            value="popular"
          >
            پربازدیدترین
          </SelectItem>
          <SelectItem
            className="!text-[14px] hover:bg-[#f0efef] cursor-pointer"
            value="bestSales"
          >
            پرفروش ترین
          </SelectItem>
          <SelectItem
            className="!text-[14px] hover:bg-[#f0efef] cursor-pointer"
            value="lessPrice"
          >
            ارزان ترین
          </SelectItem>
          <SelectItem
            className="!text-[14px] hover:bg-[#f0efef] cursor-pointer"
            value="highPrice"
          >
            گران ترین
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
