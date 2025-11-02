"use client";
import { ProductCard } from "@/common/components/product/ProductCard";
import { IShortProductInfo } from "@/store/product/types";
import { useSearchStore } from "@/store/search/searchStore";
import { useEffect, useState } from "react";
import { EmptyMessage } from "@/common/components/empty/EmptyMessage";
import { IEmptyMessage } from "@/common/constants/emptyMessages";

interface IProductListProps {
  productList: IShortProductInfo[];
  emptyMessage: IEmptyMessage;
}

export const ProductList = ({
  productList,
  emptyMessage,
}: IProductListProps) => {
  const { getSearchContent } = useSearchStore((state) => state.actions);
  const searchContent = useSearchStore((state) => state.searchContent);
  const [searchedProducts, setSearchedProducts] =
    useState<IShortProductInfo[]>(productList);

  useEffect(() => {
    const searched = getSearchContent(productList);
    setSearchedProducts(searched);
  }, [productList, searchContent, getSearchContent]);

  return (
    <>
      {searchedProducts.length !== 0 ? (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {searchedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </ul>
      ) : (
        <EmptyMessage message={emptyMessage} />
      )}
    </>
  );
};
