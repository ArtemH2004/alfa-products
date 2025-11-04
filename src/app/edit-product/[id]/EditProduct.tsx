"use client";
import { EmptyMessage } from "@/common/components/empty/EmptyMessage";
import { ProductForm } from "@/common/components/ui/form/ProductForm";
import { FormWrapper } from "@/common/components/wrapper/FormWrapper";
import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import { EMPTY_MESSAGES } from "@/common/constants/emptyMessages";
import { useZustandHydration } from "@/common/hooks/useZustandHydration";
import { useProductStore } from "@/store/product/productStore";

interface IEditProductProps {
  id: string;
}

export const EditProduct = ({ id }: IEditProductProps) => {
  const hydrationComplete = useZustandHydration(useProductStore);
  const { getProductById } = useProductStore((state) => state.actions);
  const product = getProductById(id);
  return (
    <PageWrapper>
      {!hydrationComplete ? (
        <>loading</>
      ) : !!product ? (
        <FormWrapper title="Редактирование продукта">
          <ProductForm productValue={product} />
        </FormWrapper>
      ) : (
        <EmptyMessage message={EMPTY_MESSAGES.PRODUCT} />
      )}
    </PageWrapper>
  );
};
