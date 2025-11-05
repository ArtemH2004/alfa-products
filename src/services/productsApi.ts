import { ERoutes } from "@/router/routes";
import { IFullProductInfo } from "@/store/product/types";

const baseUrl = "https://6904befe6b8dabde4964f461.mockapi.io";

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
