"use client";
import { useFavoritesStore } from "@/store/favorites/favoritesStore";
import { ProductList } from "@/common/components/product/ProductList";

export const Favorites = () => {
  const { favorites } = useFavoritesStore();
  return <ProductList productList={favorites} />;
};
