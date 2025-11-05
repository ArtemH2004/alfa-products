"use client";
import { SearchInput } from "@/common/components/ui/input/SearchInput";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";
import { useState } from "react";
import { FilterSheet } from "@/common/components/sheet/FilterSheet";
import { useFilterStore } from "@/store/filter/filterStore";
import { CategoryList } from "@/common/components/category/CategoryList";

export const SearchWrapper = () => {
  const [isFilterSheetOpen, setFilterSheetOpen] = useState(false);
  const appliedFilters = useFilterStore((state) => state.applied);

  const categoryList: string[] = [
    ...(appliedFilters?.priceRange.min && appliedFilters.priceRange.min !== 0 ? [`от ${appliedFilters?.priceRange.min}₽`] : []),
    ...(appliedFilters?.priceRange.max && appliedFilters.priceRange.max !== 0 ? [`до ${appliedFilters?.priceRange.max}₽`] : []),
    ...(appliedFilters?.brand ? [appliedFilters.brand] : []),
    ...(appliedFilters?.category ? [appliedFilters.category] : []),
  ].filter(Boolean);

  return (
    <>
      {isFilterSheetOpen && (
        <FilterSheet isOpen={isFilterSheetOpen} setOpen={setFilterSheetOpen} />
      )}
      <div className="flex flex-col w-full gap-y-4">
        <div className="flex items-center justify-between gap-4">
          <SearchInput />
          <div className="flex-center w-full max-w-35 2xs:w-1/3">
            <DefaultButton
              title="Фильтры"
              onClick={() => setFilterSheetOpen(true)}
              hasShadow
              isBlack
            />
          </div>
        </div>
        {categoryList.length !== 0 && (
          <CategoryList categoryList={categoryList} />
        )}
      </div>
    </>
  );
};
