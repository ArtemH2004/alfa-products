import { ProductList } from "@/common/components/product/ProductList";
import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Продукты",
};

export default function ProductsPage() {
  return (
    <PageWrapper>
      <ProductList />
    </PageWrapper>
  );
}
