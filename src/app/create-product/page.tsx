import { Metadata } from "next";
import { CreateProduct } from "@/app/create-product/CreateProduct";

export const metadata: Metadata = {
  title: "Создание продукта",
};

export default function CreateProductPage() {
  return (
    <CreateProduct />
  );
}
