export default function Skeleton({
  className,
  classNameImg,
}: {
  className: string;
  classNameImg: string;
}) {
  return (
    <div
      className={`w-full bg-gray-300 col-span-1  animate-pulse ${className}`}
    >
      <div
        className={`relative w-full mb-5 bg-gray-200 rounded ${classNameImg}`}
      ></div>
      <div className="space-y-3">
        <div className="h-6 w-3/4 mx-auto bg-gray-400 rounded"></div>
        <div className="flex justify-center gap-2">
          <div className="h-5 w-10 lg:w-16 bg-gray-400 rounded"></div>
          <div className="h-5 w-10 lg:w-16 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  );
}
