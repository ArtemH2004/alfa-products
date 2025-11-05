import { TagButton } from "@/common/components/ui/button/TagButton";
import { useFilterStore } from "@/store/filter/filterStore";
import { IChosenFilters, IFilterPriceRange } from "@/store/filter/types";

interface IFilterRowListProps {
  keyValue: keyof IChosenFilters;
  filterValue: IFilterPriceRange | string | null;
}

export const FilterRowList = ({
  keyValue,
  filterValue,
}: IFilterRowListProps) => {
  const { updateFilters, getFilters } = useFilterStore(
    (state) => state.actions
  );
  const filterList = getFilters(keyValue);

  return (
    <ul className="flex flex-wrap items-center gap-1.5">
      {filterList.map((item, index) => (
        <TagButton
          key={index}
          title={item}
          onClick={() => updateFilters(keyValue, item)}
          isActive={item === filterValue}
        />
      ))}
    </ul>
  );
};
