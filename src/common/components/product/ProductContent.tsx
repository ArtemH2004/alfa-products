"use client";
import { IFullProductInfo } from "@/store/product/types";
import { CategoryList } from "@/common/components/category/CategoryList";
import { priceFormatter } from "@/common/helpers/priceFormatter";
import { ButtonWithIcon } from "@/common/components/ui/button/ButtonWithIcon";
import { useRouter } from "next/navigation";
import { productsApi } from "@/services/productsApi";
import { useFavoritesStore } from "@/store/favorites/favoritesStore";

interface IProductContentProps {
  product: IFullProductInfo;
}

export const ProductContent = ({ product }: IProductContentProps) => {
  const router = useRouter();
  const isFavorite = useFavoritesStore((state) => state.isFavorite);
  const favoriteActions = useFavoritesStore((state) => state.actions);

  const handleFavoriteClick = () => {
    isFavorite(product.id)
      ? favoriteActions.removeFavorite(product.id)
      : favoriteActions.addFavorite(product);
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleDeleteClick = async () => {
    try {
      await productsApi.deleteProductById(product.id);
      handleBackClick();
      router.refresh();
    } catch {}
  };

  return (
    <section className="w-full bg-white rounded-3xl border-default p-6 xs:p-8 flex flex-col gap-y-4">
      <header className="flex items-center justify-between gap-x-8">
        <ButtonWithIcon
          title="Назад"
          iconName="arrow-back"
          onClick={handleBackClick}
        />

        <div className="flex-center gap-x-4">
          <ButtonWithIcon
            title="Удалить"
            iconName="bin"
            onClick={handleDeleteClick}
          />
          <ButtonWithIcon
            title="Редактировать"
            iconName="edit"
            onClick={() => {}}
          />
          <ButtonWithIcon
            title="Избранное"
            iconName={isFavorite(product.id) ? "heart-filled" : "heart"}
            onClick={handleFavoriteClick}
          />
        </div>
      </header>

      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-8">
        <img
          className="rounded-3xl mx-auto w-full sm:w-3/4 lg:mx-0 lg:w-1/3 aspect-square object-center object-cover"
          src={product.image}
          alt={`${product.brand} ${product.name} image`}
          loading="lazy"
        />

        <div className="w-full flex flex-col gap-y-4 sm:gap-y-6">
          <h2 className="font-medium text-2xl leading-9">
            <strong>"{product.brand}"</strong>
            <br />
            {product.name}
          </h2>

          <div className="flex flex-col gap-y-1">
            <h3 className="uppercase text-gray-500 font-semibold text-lg">
              Цена
            </h3>
            <div className="flex items-center gap-x-4">
              <span className="text-2xl font-semibold">{`${priceFormatter(
                product.price
              )}₽`}</span>
              <span className="text-xl font-semibold text-gray-300 line-through">{`${product.price}₽`}</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            <h3 className="uppercase text-gray-500 font-semibold text-lg">
              Описание
            </h3>
            <span className="text-base font-medium">{product.description}</span>
          </div>

          <div className="flex flex-col gap-y-1">
            <h3 className="uppercase text-gray-500 font-semibold text-lg">
              Категории
            </h3>
            <CategoryList categoryList={product.category} />
          </div>
        </div>
      </div>
    </section>
  );
};
