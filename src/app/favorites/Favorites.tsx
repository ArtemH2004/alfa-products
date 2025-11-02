"use client";
import { useFavoritesStore } from "@/store/favorites/favoritesStore";
import { ProductList } from "@/common/components/product/ProductList";
import { EMPTY_MESSAGES } from "@/common/constants/emptyMessages";

export const Favorites = () => {
  const { favorites } = useFavoritesStore();
  return (
    <ProductList
      productList={favorites}
      emptyMessage={EMPTY_MESSAGES.FAVORITES}
    />
  );
};
