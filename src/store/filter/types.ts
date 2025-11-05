import { IShortProductInfo } from "@/store/product/types";

export interface IFilterPriceRange {
  min: number;
  max: number;
}

export interface IFilterOptions {
  brands: string[];
  priceRange: IFilterPriceRange;
  categories: string[];
}

export interface IChosenFilters {
  brand: string;
  priceRange: IFilterPriceRange;
  category: string;
  search: string;
}

export interface IFilterState {
  filters: IFilterOptions;
  current: IChosenFilters;
  applied: IChosenFilters | null;
  isApplied: boolean;
}

export interface IFilterActions {
  getCurrentValueFilters: (
    key: keyof IChosenFilters
  ) => string | number | IFilterPriceRange;
  getFilters: (key: keyof IChosenFilters) => string[];
  updateFilters: (
    key: keyof IChosenFilters,
    value: string | number | IFilterPriceRange
  ) => void;
  applyFilters: () => void;
  resetFilters: () => void;
  resetToApplied: () => void;
  initializeFilters: (products: any[]) => void;
  addSearchContent: (searchContent: string) => void;
  removeSearchContent: () => void;
  getSearchContent: (productList: IShortProductInfo[]) => IShortProductInfo[];
}

export interface IFilterStore extends IFilterState {
  actions: IFilterActions;
}
