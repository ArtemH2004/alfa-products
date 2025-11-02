"use client";
import { ProductList } from "@/common/components/product/ProductList";
import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import { EMPTY_MESSAGES } from "@/common/constants/emptyMessages";
import { useProductStore } from "@/store/product/productStore";

export const Products = () => {
  const productList = useProductStore((state) => state.products);
  return (
    <PageWrapper>
      <ProductList
        productList={productList}
        emptyMessage={EMPTY_MESSAGES.PRODUCTS}
      />
    </PageWrapper>
  );
};
