import { ERoutes } from "@/router/routes";
import { IShortProductInfo } from "@/store/product/types";
import Link from "next/link";
import { CategoryList } from "@/common/components/category/CategoryList";
import { priceFormatter } from "@/common/helpers/priceFormatter";

interface IProductCardProps {
  product: IShortProductInfo;
}

export const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <li className="w-full mx-auto">
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
            <h3 className="font-medium text-base leading-4.5 truncate">
              <strong className="">"{product.brand}"</strong> {product.name}
            </h3>
            <CategoryList categoryList={product.category} />
          </div>
        </article>
      </Link>
    </li>
  );
};
