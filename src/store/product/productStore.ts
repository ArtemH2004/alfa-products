import { create } from "zustand";
import { IProductStore } from "@/store/product/types";
import { persist } from "zustand/middleware";

export const useProductStore = create<IProductStore>()(
  persist(
    (set, get) => ({
      products: [],
    //   _hasHydrated: false,

      actions: {
        // setHasHydrated: (state) => set(() => ({ _hasHydrated: state })),

        setProducts: (products) => set(() => ({ products })),

        getProductById: (id) => {
          const state = get();
          return state.products.find((product) => product.id === id);
        },

        addProduct: (product) =>
          set((state) => ({
            products: [...state.products, product],
          })),

        // editProduct: (id, updatedProduct) =>
        //   set((state) => ({
        //     products: state.products.map((product) =>
        //       product.id === id ? { ...updatedProduct, id } : product
        //     ),
        //   })),

        deleteProduct: (id) =>
          set((state) => ({
            products: state.products.filter((product) => product.id !== id),
          })),
      },
    }),
    {
      name: "product-storage",
      partialize: (state) => ({ products: state.products }),
      skipHydration: true,
    //   onRehydrateStorage(state) {
    //     state.actions.setHasHydrated(true);
    //   },
    //   onFinishHydration: (state: IProductStore) => {
    //     state.actions.setHasHydrated(true);
    //   },
    }
  )
);
