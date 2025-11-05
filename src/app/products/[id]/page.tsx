import { Metadata } from "next";
import { ProductId } from "@/app/products/[id]/ProductId";
import { productsApi } from "@/services/productsApi";

interface IProductsIdPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = await productsApi.getProducts();
  return products.map((item) => ({
    id: item.id,
  }));
}

export const metadata: Metadata = {
  title: "Просмотр продукта",
};

export default async function ProductsIdPage({ params }: IProductsIdPageProps) {
  const { id } = await params;
  return <ProductId id={id} />;
}
