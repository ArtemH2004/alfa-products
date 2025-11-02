import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ISearchStore } from "@/store/search/types";

export const useSearchStore = create<ISearchStore>()(
  persist(
    (set, get) => ({
      searchContent: "",

      actions: {
        addSearchContent: (searchContent) =>
          set(() => ({
            searchContent: searchContent,
          })),

        removeSearchContent: () =>
          set(() => ({
            searchContent: "",
          })),

        getSearchContent: (productList) => {
          const state = get();
          const searchContent = state.searchContent.toLowerCase().trim();

          if (!searchContent) {
            return productList;
          }

          const filteredList = productList.filter(
            (product) =>
              product.name.toLowerCase().includes(searchContent) ||
              product.brand.toLowerCase().includes(searchContent)
          );

          return filteredList;
        },
      },
    }),
    {
      name: "search-storage",
      partialize: (state) => ({ searchContent: state.searchContent }),
    }
  )
);
