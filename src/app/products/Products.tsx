"use client";
import { ProductList } from "@/common/components/product/ProductList";
import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import { EMPTY_MESSAGES } from "@/common/constants/emptyMessages";
import { useZustandHydration } from "@/common/hooks/useZustandHydration";
import { productsApi } from "@/services/productsApi";
import { useProductStore } from "@/store/product/productStore";
import { useEffect } from "react";

export const Products = () => {
  const setProducts = useProductStore((state) => state.actions.setProducts);
  const { products } = useProductStore();
  const hydrationComplete = useZustandHydration(useProductStore);

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

  return (
    <PageWrapper>
      <ProductList
        productList={products}
        emptyMessage={EMPTY_MESSAGES.PRODUCTS}
        isLoading={!hydrationComplete}
      />
    </PageWrapper>
  );
};
