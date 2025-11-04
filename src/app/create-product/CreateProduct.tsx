"use client";
import { ProductForm } from "@/common/components/ui/form/ProductForm";
import { FormWrapper } from "@/common/components/wrapper/FormWrapper";
import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import { IFullProductInfo } from "@/store/product/types";

export const CreateProduct = () => {
  const product: IFullProductInfo = {
    id: "",
    name: "",
    brand: "",
    category: [],
    price: 0,
    image: "",
    description: "",
  };

  return (
    <PageWrapper>
      <FormWrapper title="Создание продукта">
        <ProductForm productValue={product} />
      </FormWrapper>
    </PageWrapper>
  );
};
