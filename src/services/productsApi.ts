import { ERoutes } from "@/router/routes";
import { IFullProductInfo, IShortProductInfo } from "@/store/product/types";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const productsApi = {
  async getProducts(): Promise<IShortProductInfo[]> {
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

  async getProductById(id: string): Promise<IFullProductInfo> {
    const response = await fetch(`${baseUrl}${ERoutes.PRODUCTS}/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch product by id: ${id}`);
    }

    return response.json();
  },

  async deleteProductById(id: string): Promise<void> {
    const response = await fetch(`${baseUrl}${ERoutes.PRODUCTS}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete product by id: ${id}`);
    }

    if (response.status !== 204) {
      return response.json();
    }
  },
};
