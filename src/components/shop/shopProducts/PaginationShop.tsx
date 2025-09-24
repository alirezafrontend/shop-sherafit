import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPage: number;
};

export default function PaginationShop({ currentPage, totalPage }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("page");
    const query = newParams.toString();
    router.push(`/shop/page/${page}${query ? `?${query}` : ""}`);
  };

  const getVisiblePages = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPage <= 3) {
      for (let i = 1; i <= totalPage; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("ellipsis");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPage - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPage - 2) pages.push("ellipsis");

      pages.push(totalPage);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination dir="rtl">
      <PaginationContent className="flex items-center gap-1">
        
        {currentPage > 1 && (
          <PaginationItem
            className="cursor-pointer"
            onClick={() => goToPage(currentPage - 1)}
          >
            <ChevronRight className="w-5 h-5" />
          </PaginationItem>
        )}


        {visiblePages.map((p, index) =>
          p === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${index}`} className="cursor-default">
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p} className="cursor-pointer">
              <PaginationLink
                isActive={p === currentPage}
                onClick={() => goToPage(p)}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}


        {currentPage < totalPage && (
          <PaginationItem
            className="cursor-pointer"
            onClick={() => goToPage(currentPage + 1)}
          >
            <ChevronLeft className="w-5 h-5" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
