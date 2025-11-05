"use client";
import { BottomSheet } from "@/common/components/sheet/BottomSheet";
import { ButtonsBottomSheet } from "@/common/components/sheet/ButtonsBottomSheet";
import { useFilterStore } from "@/store/filter/filterStore";
import { useProductStore } from "@/store/product/productStore";
import { FilterWrapper } from "@/common/components/wrapper/FilterWrapper";
import { useEffect } from "react";
import { useZustandHydration } from "@/common/hooks/useZustandHydration";

interface IFilterSheetProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const FilterSheet = ({ isOpen, setOpen }: IFilterSheetProps) => {
  const hydrationComplete = useZustandHydration(useFilterStore);
  const products = useProductStore((state) => state.products);
  const currentFilters = useFilterStore((state) => state.current);
  const { resetToApplied, applyFilters, resetFilters } = useFilterStore(
    (state) => state.actions
  );

  const initializeFilters = useFilterStore(
    (state) => state.actions.initializeFilters
  );

  useEffect(() => {
    if (products.length > 0) {
      initializeFilters(products);
    }
  }, [products, initializeFilters, currentFilters]);

  const handleClose = () => {
    resetToApplied();
    setOpen(false);
  };

  const handleOkClick = () => {
    applyFilters();
    handleClose();
  };

  const handleResetClick = () => {
    resetFilters();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={handleClose} title="Фильтры">
      {hydrationComplete ? (
        <div className="w-full flex flex-col gap-y-4 px-5">
          <FilterWrapper
            title="Цена"
            keyValue="category"
            filterValue={currentFilters.priceRange}
            isPrice
          />

          <FilterWrapper
            title="Бренды"
            keyValue="brand"
            filterValue={currentFilters.brand}
          />

          <FilterWrapper
            title="Категории"
            keyValue="category"
            filterValue={currentFilters.category}
          />

          <ButtonsBottomSheet
            okButtonTitle="Применить"
            okButtonClick={handleOkClick}
            resetButtonTitle="Сбросить"
            resetButtonClick={handleResetClick}
          />
        </div>
      ) : (
        <>loading</>
      )}
    </BottomSheet>
  );
};
