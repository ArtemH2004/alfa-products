import { Metadata } from "next";
import { ProductId } from "@/app/products/[id]/ProductId";

interface IProductsIdPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [];
}

export const metadata: Metadata = {
  title: "Просмотр продукта",
};

export default async function ProductsIdPage({ params }: IProductsIdPageProps) {
  const { id } = await params;
  return <ProductId id={id} />;
}
