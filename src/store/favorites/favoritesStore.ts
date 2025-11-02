import { create } from "zustand";
import { IFavoritesStore } from "@/store/favorites/types";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create<IFavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      isFavorite: (productId: string) => {
        const state = get();
        return state.favorites.some((item) => item.id === productId);
      },

      actions: {
        addFavorite: (product) =>
          set((state) => {
            if (state.favorites.some((item) => item.id === product.id)) {
              return state;
            }
            return { favorites: [...state.favorites, product] };
          }),

        removeFavorite: (productId) =>
          set((state) => ({
            favorites: state.favorites.filter((item) => item.id !== productId),
          })),
      },
    }),
    {
      name: "favorites-storage",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
