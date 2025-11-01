import { IFullProductInfo } from "@/store/product/types";
import { CategoryList } from "@/common/components/category/CategoryList";
import { priceFormatter } from "@/common/helpers/priceFormatter";

interface IProductContentProps {
  product: IFullProductInfo;
}

export const ProductContent = ({ product }: IProductContentProps) => {
  return (
    <section className="w-full bg-white rounded-3xl border-default p-8">
      <div className="w-full flex items-start justify-between gap-x-8">
        <img
          className="rounded-3xl size-1/3 object-center object-cover"
          src={product.image}
          alt={`${product.brand} ${product.name} image`}
          loading="lazy"
        />

        <div className="w-full flex flex-col gap-y-6">
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
