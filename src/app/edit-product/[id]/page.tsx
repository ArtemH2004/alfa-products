import { Metadata } from "next";
import { EditProduct } from "@/app/edit-product/[id]/EditProduct";
import { productsApi } from "@/services/productsApi";

interface IEditProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = await productsApi.getProducts();
  return products.map((item) => ({
    id: item.id,
  }));
}

export const metadata: Metadata = {
  title: "Редактирование продукта",
};

export default async function EditProductPage({
  params,
}: IEditProductPageProps) {
  const { id } = await params;
  return <EditProduct id={id} />;
}
