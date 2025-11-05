import { FilterRowList } from "@/common/components/filter/FilterRowList";
import { IChosenFilters, IFilterPriceRange } from "@/store/filter/types";
import { FilterPrice } from "@/common/components/filter/FilterPrice";

interface FilterWrapperProps {
  title: string;
  keyValue: keyof IChosenFilters;
  filterValue: IFilterPriceRange | string | null;
  isPrice?: boolean;
}

export const FilterWrapper = ({
  title,
  keyValue,
  filterValue,
  isPrice = false,
}: FilterWrapperProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <h3 className="mx-2 text-left font-semibold text-black">{title}</h3>

      {isPrice ? (
        <FilterPrice
          minFilterValue={(filterValue as IFilterPriceRange).min}
          maxFilterValue={(filterValue as IFilterPriceRange).max}
        />
      ) : (
        <FilterRowList keyValue={keyValue} filterValue={filterValue} />
      )}
    </div>
  );
};
