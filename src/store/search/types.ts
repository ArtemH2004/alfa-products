import { IShortProductInfo } from "@/store/product/types";

export interface ISearchState {
  searchContent: string;
}

export interface ISearchActions {
  addSearchContent: (searchContent: string) => void;
  removeSearchContent: () => void;
  getSearchContent: (productList: IShortProductInfo[]) => IShortProductInfo[];
}

export interface ISearchStore extends ISearchState {
  actions: ISearchActions;
}
