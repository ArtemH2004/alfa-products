import { ProductForm } from "@/common/components/ui/form/ProductForm";
import { FormWrapper } from "@/common/components/wrapper/FormWrapper";
import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Создание продукта",
};

export default function CreateProductPage() {
  return (
    <PageWrapper>
      <FormWrapper title="Создание продукта">
        <ProductForm />
      </FormWrapper>
    </PageWrapper>
  );
}
