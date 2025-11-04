import { CircleLoading } from "@/common/components/loading/CircleLoading";
import { CategoryListLoading } from "@/common/components/loading/CategoryListLoading";
import { TextLoading } from "@/common/components/loading/TextLoading";

export const ProductContentLoading = () => {
  return (
    <section className="w-full bg-white rounded-3xl border-default shadow-default p-6 xs:p-8 flex flex-col gap-y-4">
      <header className="flex items-center justify-between gap-x-8">
        <CircleLoading size={40} />

        <div className="flex-center gap-x-4">
          <CircleLoading size={40} />
          <CircleLoading size={40} />
          <CircleLoading size={40} />
        </div>
      </header>

      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-8">
        <div className="rounded-3xl mx-auto w-full sm:w-3/4 lg:mx-0 lg:w-1/3 aspect-square bg-gray-300 animate-pulse" />

        <div className="w-full flex flex-col gap-y-4 sm:gap-y-6">
          {/* need 72 */}
          <div className="flex flex-col gap-y-5">
            <TextLoading sizeClassName="w-1/4 h-6" />
            <TextLoading sizeClassName="w-2/3 h-6" />
          </div>

          <div className="flex flex-col gap-y-3">
            <TextLoading sizeClassName="w-1/7 h-4.5" />
            <div className="flex items-center gap-x-4">
              <TextLoading sizeClassName="w-1/6 h-6" />
              <TextLoading sizeClassName="w-1/7 h-5" />
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <TextLoading sizeClassName="w-1/6 h-4.5" />

            <div className="flex flex-col gap-y-2">
              <TextLoading sizeClassName="w-full h-4" />
              <TextLoading sizeClassName="w-full h-4" />
              <TextLoading sizeClassName="w-full h-4" />
              <TextLoading sizeClassName="w-2/3 h-4" />
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <TextLoading sizeClassName="w-1/6 h-4.5" />

            <div className="flex w-1/2">
              <CategoryListLoading />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
