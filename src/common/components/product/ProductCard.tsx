"use client";
import { ERoutes } from "@/router/routes";
import { IShortProductInfo } from "@/store/product/types";
import Link from "next/link";
import { CategoryList } from "@/common/components/category/CategoryList";
import { priceFormatter } from "@/common/helpers/priceFormatter";
import { ButtonWithIcon } from "@/common/components/ui/button/ButtonWithIcon";
import { useProductStore } from "@/store/product/productStore";
import { useRouter } from "next/navigation";
import { memo } from "react";

interface IProductCardProps {
  product: IShortProductInfo;
}

export const ProductCard = memo(({ product }: IProductCardProps) => {
  const router = useRouter();
  const { deleteProduct, addFavorite, removeFavorite } = useProductStore(
    (state) => state.actions
  );

  const handleDeleteClick = () => {
    deleteProduct(product.id);
  };

  const handleEditClick = () => {
    router.push(`${ERoutes.EDIT_PRODUCTS}/${product.id}`);
  };

  const handleFavoriteClick = () => {
    product.isFavorite ? removeFavorite(product.id) : addFavorite(product.id);
  };

  return (
    <li className="relative w-full mx-auto">
      <div className="absolute top-4 right-4 z-10 flex-center gap-x-2">
        <ButtonWithIcon
          title="Удалить"
          iconName="bin"
          onClick={handleDeleteClick}
          size={20}
        />
        <ButtonWithIcon
          title="Редактировать"
          iconName="edit"
          onClick={handleEditClick}
          size={20}
        />
        <ButtonWithIcon
          title="Избранное"
          iconName={product.isFavorite ? "heart-filled" : "heart"}
          onClick={handleFavoriteClick}
          size={20}
        />
      </div>

      <Link
        href={`${ERoutes.PRODUCTS}/${product.id}`}
        className="select-none w-full flex-center rounded-3xl shadow-default hover:drop-shadow-xl"
      >
        <article className="bg-white w-full border-default rounded-3xl flex flex-col justify-start">
          <img
            className="w-full aspect-video rounded-3xl object-center object-cover"
            src={product.image}
            alt={`${product.brand} ${product.name} image`}
            loading="lazy"
          />

          <div className="w-full flex flex-col gap-y-2 overflow-hidden p-4">
            <div className="flex items-center gap-x-2">
              <span className="text-lg font-semibold leading-4.5">{`${priceFormatter(
                product.price
              )}₽`}</span>
              <span className="text-sm font-semibold text-gray-300 line-through leading-3.5">{`${product.price}₽`}</span>
            </div>
            <h3 className="font-medium text-base leading-4 truncate">
              <strong className="">"{product.brand}"</strong> {product.name}
            </h3>
            <CategoryList categoryList={product.category} />
          </div>
        </article>
      </Link>
    </li>
  );
});
