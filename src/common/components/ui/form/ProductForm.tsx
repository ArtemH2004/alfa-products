"use client";
import { DefaultInput } from "@/common/components/ui/input/DefaultInput";
import { DefaultTextArea } from "@/common/components/ui/textarea/DefaultTextArea";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import useInput from "@/common/hooks/useInput";
import { validators } from "@/common/helpers/validators";
import { useRouter } from "next/navigation";
import { useProductStore } from "@/store/product/productStore";
import { IFullProductInfo } from "@/store/product/types";

interface IProductFormProps {
  productValue: IFullProductInfo;
}

export const ProductForm = ({ productValue }: IProductFormProps) => {
  const router = useRouter();
  const brand = useInput(productValue.brand ?? "", validators.brand);
  const name = useInput(productValue.name ?? "", validators.product_name);
  const price = useInput(productValue.price.toString() ?? "", validators.price);
  const url = useInput(productValue.image ?? "", validators.url);
  const description = useInput(
    productValue.description ?? "",
    validators.description
  );
  const { addProduct } = useProductStore((state) => state.actions);

  const handleResetClick = () => {
    brand.reset();
    name.reset();
    price.reset();
    url.reset();
    description.reset();
  };

  const validateForm = (): boolean => {
    const errors = [
      brand.handleCheck(brand.value),
      name.handleCheck(name.value),
      price.handleCheck(price.value),
      url.handleCheck(url.value),
      description.handleCheck(description.value),
    ];

    return errors.every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const productData = {
        // TODO random id
        id: "1000",
        name: name.value,
        brand: brand.value,
        category: [],
        price: Number(price.value),
        image: url.value,
        description: description.value,
      };

      addProduct(productData);

      router.back();
    } catch {}
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DefaultInput
          label="Бренд"
          value={brand.value}
          onChange={brand.onChange}
          isError={!!brand.error}
          required
        />
        <DefaultInput
          label="Название"
          value={name.value}
          onChange={name.onChange}
          isError={!!name.error}
          required
        />
        <DefaultInput
          label="Цена"
          type="text"
          value={price.value}
          onChange={price.onChange}
          isError={!!price.error}
          required
        />
        <DefaultInput
          label="URL фото"
          value={url.value}
          onChange={url.onChange}
          isError={!!url.error}
          required
        />
      </div>

      <DefaultTextArea
        label="Описание"
        value={description.value}
        onChange={description.onChange}
        isError={!!description.error}
        required
      />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <DefaultButton title="Сохранить" type="submit" />
        <DefaultButton title="Отменить" onClick={handleResetClick} isBlack />
      </div>
    </form>
  );
};
