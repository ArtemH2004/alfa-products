"use client";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import { ERoutes } from "@/router/routes";
import { useRouter } from "next/navigation";

export const MainPageWrapper = () => {
  const router = useRouter();

  const handleClick = () => {
    router.replace(ERoutes.PRODUCTS);
  };
  return (
    <div className="mx-auto my-30 w-fit flex-center flex-col gap-y-4 text-center">
      <h1 className="">Поиск продуктов по фильтрам</h1>
      <DefaultButton
        title="Перейти к продуктам"
        onClick={handleClick}
        isBlack
        hasShadow
      />
    </div>
  );
};
