import Skeleton from "@/components/utils/Skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-7.5 gap-y-12">
      {Array.from({ length: 8 }).map((_, index) => {
        return (
          <Skeleton
            key={index}
            className="md:h-[320px] h-[220px]"
            classNameImg="md:h-[216px] h-[116px]"
          />
        );
      })}
    </div>
  );
}
