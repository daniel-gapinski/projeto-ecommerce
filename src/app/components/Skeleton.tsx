import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 md:max-w-7xl md:mx-auto">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col rounded-xl overflow-hidden bg-white hover:scale-105 transition-all p-4"
        >
          <Skeleton className="h-60 w-full mb-5" />
          <div className="flex flex-col gap-2 mb-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <div className="p-2 flex justify-between items-center mt-auto">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
