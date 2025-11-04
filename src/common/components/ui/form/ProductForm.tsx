"use client";
import { DefaultInput } from "@/common/components/ui/input/DefaultInput";
import { DefaultTextArea } from "@/common/components/ui/textarea/DefaultTextArea";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import useInput from "@/common/hooks/useInput";
import { validators } from "@/common/helpers/validators";
import { useRouter } from "next/navigation";
import { useProductStore } from "@/store/product/productStore";
import { IFullProductInfo } from "@/store/product/types";
import { CategoryList } from "@/common/components/category/CategoryList";
import { useState } from "react";
import { TagInput } from "@/common/components/ui/input/TagInput";

interface IProductFormProps {
  productValue: IFullProductInfo;
  isEdit?: boolean;
}

export const ProductForm = ({
  productValue,
  isEdit = false,
}: IProductFormProps) => {
  const router = useRouter();
  const brand = useInput(productValue.brand ?? "", validators.brand);
  const name = useInput(productValue.name ?? "", validators.product_name);
  const price = useInput(productValue.price.toString() ?? "", validators.price);
  const url = useInput(productValue.image ?? "", validators.url);
  const description = useInput(
    productValue.description ?? "",
    validators.description
  );
  const tag = useInput("", validators.tag);
  const [category, setCategory] = useState<string[]>(
    productValue.category ?? []
  );
  const [formError, setFormError] = useState<string>("");
  const { addProduct, editProduct } = useProductStore((state) => state.actions);

  const handleResetClick = () => {
    brand.reset();
    name.reset();
    price.reset();
    url.reset();
    description.reset();
    tag.reset();
    setCategory(productValue.category ?? []);
    setFormError("");
  };

  const validateForm = (): string | null => {
    const fieldErrors = [
      brand.handleCheck(brand.value),
      name.handleCheck(name.value),
      price.handleCheck(price.value),
      url.handleCheck(url.value),
      description.handleCheck(description.value),
    ].filter(Boolean);

    if (fieldErrors.length > 0) {
      return fieldErrors[0];
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormError("");

    const error = validateForm();
    if (error) {
      setFormError(error);
      return;
    }

    try {
      const productData: IFullProductInfo = {
        id: isEdit ? productValue.id : Date.now().toString(),
        name: name.value,
        brand: brand.value,
        category: category,
        price: Number(price.value),
        image: url.value,
        description: description.value,
        isFavorite: false,
      };

      isEdit
        ? editProduct(productValue.id, productData)
        : addProduct(productData);

      router.back();
    } catch {}
  };

  const handleOkTagClick = () => {
    const newTag = tag.value;

    if (newTag && !category.includes(newTag)) {
      setCategory([...category, newTag]);
      tag.reset();
    }
  };

  const handleResetTagClick = () => {
    setCategory([]);
    tag.reset();
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

      <div className="flex flex-col gap-y-4">
        <TagInput
          label="Тег"
          value={tag.value}
          onChange={tag.onChange}
          isError={!!tag.error}
          required={category.length === 0}
          onOkClick={handleOkTagClick}
          onResetClick={handleResetTagClick}
        />
        {category.length !== 0 && <CategoryList categoryList={category} />}
      </div>

      {formError && (
        <div className="text-red-500 text-center font-medium text-sm">{formError}</div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <DefaultButton title="Сохранить" type="submit" />
        <DefaultButton title="Отменить" onClick={handleResetClick} isBlack />
      </div>
    </form>
  );
};
