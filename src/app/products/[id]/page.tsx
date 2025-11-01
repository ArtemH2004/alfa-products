import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import { ProductContent } from "@/common/components/product/ProductContent";
import { productsApi } from "@/services/productsApi";
import { Metadata } from "next";

interface IProductsIdPageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Просмотр продукта",
};

export default async function ProductsIdPage({ params }: IProductsIdPageProps) {
  const { id } = await params;
  const product = await productsApi.getProductById(id);
  return (
    <PageWrapper>
      <ProductContent product={product} />
    </PageWrapper>
  );
}
