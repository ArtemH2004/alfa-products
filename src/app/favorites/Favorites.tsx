"use client";
import { ProductList } from "@/common/components/product/ProductList";
import { EMPTY_MESSAGES } from "@/common/constants/emptyMessages";
import { useZustandHydration } from "@/common/hooks/useZustandHydration";
import { useProductStore } from "@/store/product/productStore";
import { useMemo } from "react";

export const Favorites = () => {
 const products = useProductStore((state) => state.products);

  const favoriteProducts = useMemo(() => {
    return products.filter((product) => product.isFavorite);
  }, [products]);
  const hydrationComplete = useZustandHydration(useProductStore);

  return (
    <ProductList
      productList={favoriteProducts}
      emptyMessage={EMPTY_MESSAGES.FAVORITES}
      isLoading={!hydrationComplete}
    />
  );
};
