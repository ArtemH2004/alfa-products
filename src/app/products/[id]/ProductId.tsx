"use client";
import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import { ProductContent } from "@/common/components/product/ProductContent";
import { useProductStore } from "@/store/product/productStore";
import { EmptyMessage } from "@/common/components/empty/EmptyMessage";
import { EMPTY_MESSAGES } from "@/common/constants/emptyMessages";
import { useZustandHydration } from "@/common/hooks/useZustandHydration";
import { ProductContentLoading } from "@/common/components/loading/ProductContentLoading";

interface IProductIdProps {
  id: string;
}

export const ProductId = ({ id }: IProductIdProps) => {
  const hydrationComplete = useZustandHydration(useProductStore);
  const { getProductById } = useProductStore((state) => state.actions);
  const product = getProductById(id);
  return (
    <PageWrapper>
      {!hydrationComplete ? <ProductContentLoading /> : !!product ? (
        <ProductContent product={product} />
      ) : (
        <EmptyMessage message={EMPTY_MESSAGES.PRODUCT} />
      )}
    </PageWrapper>
  );
};
