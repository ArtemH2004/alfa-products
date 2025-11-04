import { Metadata } from "next";
import { EditProduct } from "@/app/edit-product/[id]/EditProduct";

interface IEditProductPageProps {
  params: Promise<{ id: string }>;
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
