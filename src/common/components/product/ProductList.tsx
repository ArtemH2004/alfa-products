import { ProductCard } from "@/common/components/product/ProductCard";
import { IShortProductInfo } from "@/store/product/types";

interface IProductListProps {
  productList: IShortProductInfo[];
}

export const ProductList = ({ productList }: IProductListProps) => {
  return (
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {productList.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ul>
  );
};
