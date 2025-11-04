import { ProductCardLoading } from "@/common/components/loading/ProductCardLoading";

export const ProductListLoading = () => {
  const list = Array.from({ length: 4 });
  return (
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {list.map((_, index) => (
        <ProductCardLoading key={index} />
      ))}
    </ul>
  );
};
