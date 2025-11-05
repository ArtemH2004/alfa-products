import { ERoutes } from "@/router/routes";
import { IFullProductInfo } from "@/store/product/types";
import { notFound } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const productsApi = {
  async getProducts(): Promise<IFullProductInfo[]> {
    const url = `${baseUrl}${ERoutes.PRODUCTS}`;

    const response = await fetch(url, {
      method: "GET",
    });

    if (response.status === 404) {
      return notFound();
    }

    const data = await response.json();
    return data;
  },
};
