import { ProductCard } from "@/common/components/product/ProductCard";
import { data } from "@/store/data";

export const ProductList = () => {
  return (
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ul>
  );
};
