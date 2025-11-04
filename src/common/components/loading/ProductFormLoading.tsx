import { CircleLoading } from "@/common/components/loading/CircleLoading";
import { CategoryListLoading } from "@/common/components/loading/CategoryListLoading";
import { TextLoading } from "@/common/components/loading/TextLoading";

export const ProductFormLoading = () => {
  return (
    <section className="w-full bg-white flex flex-col gap-y-4 sm:gap-y-6 p-4 sm:p-6 border-default rounded-3xl shadow-default">
      <div className="flex items-center gap-x-2">
        <CircleLoading size={40} />
        <TextLoading sizeClassName="w-1/3 h-5" />
      </div>
      <div className="w-full flex flex-col gap-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextLoading sizeClassName="w-full h-10" />
          <TextLoading sizeClassName="w-full h-10" />
          <TextLoading sizeClassName="w-full h-10" />
          <TextLoading sizeClassName="w-full h-10" />
        </div>

        <TextLoading sizeClassName="w-full h-20" />

        <div className="flex flex-col gap-y-4">
          <TextLoading sizeClassName="w-1/2 lg:w-1/3 h-10" />
          <div className="flex w-1/2">
            <CategoryListLoading />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <TextLoading sizeClassName="w-full h-10.5" />
          <TextLoading sizeClassName="w-full h-10.5" />
        </div>
      </div>
    </section>
  );
};
