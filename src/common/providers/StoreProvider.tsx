"use client";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/product/productStore";
import { productsApi } from "@/services/productsApi";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const setProducts = useProductStore((state) => state.actions.setProducts);
  const products = useProductStore((state) => state.products);
  const [hydrationComplete, setHydrationComplete] = useState(false);

  useEffect(() => {
    if (useProductStore.persist.hasHydrated()) {
      setHydrationComplete(true);
      return;
    }

    const unsubscribe = useProductStore.persist.onFinishHydration(() => {
      setHydrationComplete(true);
    });

    useProductStore.persist.rehydrate();

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!hydrationComplete) return;

    const initializeStore = async () => {
      if (products.length === 0) {
        try {
          const productsData = await productsApi.getProducts();
          setProducts(productsData);
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      }
    };

    initializeStore();
  }, [hydrationComplete, products.length, setProducts]);

  return <>{children}</>;
}
