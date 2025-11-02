import { ProductList } from "@/common/components/product/ProductList";
import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import { EMPTY_MESSAGES } from "@/common/constants/emptyMessages";
import { productsApi } from "@/services/productsApi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Продукты",
};

export default async function ProductsPage() {
  const productList = await productsApi.getProducts();
  return (
    <PageWrapper>
      <ProductList
        productList={productList}
        emptyMessage={EMPTY_MESSAGES.PRODUCTS}
      />
    </PageWrapper>
  );
}
