export interface IEmptyMessage {
  title: string;
  description: string;
}

export const EMPTY_MESSAGES = {
  FAVORITES: {
    title: "Избранное пусто",
    description: "Избранные продукты не найдены",
  },
  PRODUCT: {
    title: "Продукт не найден",
    description: "Попробуйте изменить параметры поиска",
  },
  PRODUCTS: {
    title: "Продукты не найдены",
    description: "Попробуйте изменить параметры поиска",
  },
} as const satisfies Record<string, IEmptyMessage>;
