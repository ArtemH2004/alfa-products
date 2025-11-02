import { IShortProductInfo } from "@/store/product/types";

export interface IFavoritesState {
  favorites: IShortProductInfo[];
}

export interface IFavoritesActions {
  addFavorite: (product: IShortProductInfo) => void;
  removeFavorite: (productId: string) => void;
}

export interface IFavoritesStore extends IFavoritesState {
  isFavorite: (productId: string) => boolean;
  actions: IFavoritesActions;
}
