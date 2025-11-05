import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  IChosenFilters,
  IFilterOptions,
  IFilterState,
  IFilterStore,
} from "@/store/filter/types";
import { IShortProductInfo } from "@/store/product/types";

const initialFilters: IChosenFilters = {
  brand: "",
  priceRange: {
    min: 0,
    max: 0,
  },
  category: "",
  search: "",
};

const initialFilterOptions: IFilterOptions = {
  brands: [],
  priceRange: {
    min: 0,
    max: 0,
  },
  categories: [],
};

const initialState: IFilterState = {
  filters: initialFilterOptions,
  current: initialFilters,
  applied: null,
  isApplied: false,
};

export const useFilterStore = create<IFilterStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      actions: {
        getCurrentValueFilters: (key) => {
          const state = get();

          switch (key) {
            case "brand":
              return state.current.brand;
            case "category":
              return state.current.category;
            case "search":
              return state.current.search;
            case "priceRange":
              return state.current.priceRange;
            default:
              return "";
          }
        },

        getFilters: (key) => {
          const state = get();

          switch (key) {
            case "brand":
              return state.filters.brands;
            case "category":
              return state.filters.categories;
            default:
              return [];
          }
        },

        updateFilters: (key, value) => {
          set((state) => ({
            current: { ...state.current, [key]: value },
            isApplied: false,
          }));
        },

        applyFilters: () => {
          const { current } = get();
          set({
            applied: { ...current },
            isApplied: true,
          });
        },

        resetFilters: () => {
          set({
            current: { ...initialFilters },
            applied: null,
            isApplied: false,
          });
        },

        resetToApplied: () => {
          const { applied } = get();

          if (applied) {
            set({
              current: { ...applied },
            });
          } else {
            set({
              current: { ...initialFilters },
            });
          }
        },

        initializeFilters: (products) => {
          if (!products || products.length === 0) {
            set({ filters: initialFilterOptions });
            return;
          }

          const brands = [
            ...new Set(products.map((product) => product.brand)),
          ].filter(Boolean);

          const categories = [
            ...new Set(products.flatMap((product) => product.category)),
          ].filter(Boolean);

          const prices = products.map((product) => product.price);
          const minPrice = Math.min(...prices);
          const maxPrice = Math.max(...prices);

          set({
            filters: {
              brands,
              categories,
              priceRange: {
                min: minPrice,
                max: maxPrice,
              },
            },
          });
        },

        addSearchContent: (searchContent: string) => {
          const state = get();
          const updatedCurrent = {
            ...state.current,
            search: searchContent,
          };

          set({
            current: updatedCurrent,
            applied: updatedCurrent,
            isApplied: true,
          });
        },

        removeSearchContent: () => {
          const state = get();
          const updatedCurrent = {
            ...state.current,
            search: "",
          };

          set({
            current: updatedCurrent,
            applied: updatedCurrent,
            isApplied: true,
          });
        },

        getSearchContent: (
          productList: IShortProductInfo[]
        ): IShortProductInfo[] => {
          const state = get();
          const appliedFilters = state.applied;

          if (!appliedFilters) {
            return productList;
          }

          let filteredProducts = [...productList];

          if (appliedFilters.search) {
            const searchTerm = appliedFilters.search.toLowerCase().trim();
            filteredProducts = filteredProducts.filter((product) =>
              product.name.toLowerCase().includes(searchTerm)
            );
          }

          if (appliedFilters.brand) {
            filteredProducts = filteredProducts.filter(
              (product) => product.brand === appliedFilters.brand
            );
          }

          if (appliedFilters.category) {
            filteredProducts = filteredProducts.filter((product) =>
              product.category.includes(appliedFilters.category)
            );
          }

          if (appliedFilters.priceRange) {
            const { min, max } = appliedFilters.priceRange;
            filteredProducts = filteredProducts.filter((product) => {
              if (min > 0 && product.price < min) return false;
              if (max > 0 && product.price > max) return false;
              return true;
            });
          }

          return filteredProducts;
        },
      },
    }),
    {
      name: "filter-storage",
      partialize: (state) => ({
        filters: state.filters,
        current: state.current,
        applied: state.applied,
        isApplied: state.isApplied,
      }),
    }
  )
);
