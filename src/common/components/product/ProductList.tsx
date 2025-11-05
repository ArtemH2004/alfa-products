"use client";
import { ProductCard } from "@/common/components/product/ProductCard";
import { IShortProductInfo } from "@/store/product/types";
import { useEffect, useState } from "react";
import { EmptyMessage } from "@/common/components/empty/EmptyMessage";
import { IEmptyMessage } from "@/common/constants/emptyMessages";
import { ProductListLoading } from "@/common/components/loading/ProductListLoading";
import { useZustandHydration } from "@/common/hooks/useZustandHydration";
import { useFilterStore } from "@/store/filter/filterStore";

interface IProductListProps {
  productList: IShortProductInfo[];
  emptyMessage: IEmptyMessage;
  isLoading?: boolean;
}

export const ProductList = ({
  productList,
  emptyMessage,
  isLoading = false,
}: IProductListProps) => {
  const hydrationComplete = useZustandHydration(useFilterStore);
  const { getSearchContent } = useFilterStore((state) => state.actions);
  const appliedFilters = useFilterStore((state) => state.applied);
  const [filteredProducts, setFilteredProducts] =
    useState<IShortProductInfo[]>(productList);

  useEffect(() => {
    const filtered = getSearchContent(productList);
    setFilteredProducts(filtered);
  }, [productList, appliedFilters, getSearchContent]);

  return (
    <>
      {isLoading && !hydrationComplete ? (
        <ProductListLoading />
      ) : filteredProducts.length !== 0 ? (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </ul>
      ) : (
        <EmptyMessage message={emptyMessage} />
      )}
    </>
  );
};
