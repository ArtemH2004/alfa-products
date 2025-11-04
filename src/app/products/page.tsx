import { Products } from "@/app/products/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Продукты",
};

export default function ProductsPage() {
  return <Products />;
}
