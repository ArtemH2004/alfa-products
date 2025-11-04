import { CategoryListLoading } from "@/common/components/loading/CategoryListLoading";
import { TextLoading } from "@/common/components/loading/TextLoading";

export const ProductCardLoading = () => {
  return (
    <li className="relative w-full mx-auto">
      <article className="select-none bg-white w-full border-default rounded-3xl flex flex-col justify-start shadow-default">
        <div className="w-full aspect-video rounded-3xl bg-gray-300 animate-pulse" />

        <div className="w-full flex flex-col gap-y-2 overflow-hidden p-4">
          <div className="flex items-center gap-x-2">
            <TextLoading sizeClassName="w-1/4 h-4.5" />
            <TextLoading sizeClassName="w-1/5 h-3.5" />
          </div>
          <TextLoading sizeClassName="w-3/4 h-4" />
          <CategoryListLoading />
        </div>
      </article>
    </li>
  );
};
