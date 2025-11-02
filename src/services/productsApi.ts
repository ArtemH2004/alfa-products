import { ERoutes } from "@/router/routes";
import { IFullProductInfo } from "@/store/product/types";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const productsApi = {
  async getProducts(): Promise<IFullProductInfo[]> {
    const url = `${baseUrl}${ERoutes.PRODUCTS}`;

    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  },
};
