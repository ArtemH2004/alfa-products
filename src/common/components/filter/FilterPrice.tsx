import { validators } from "@/common/helpers/validators";
import useInput from "@/common/hooks/useInput";
import { useFilterStore } from "@/store/filter/filterStore";
import { DefaultInput } from "@/common/components/ui/input/DefaultInput";
import { IFilterPriceRange } from "@/store/filter/types";
import { useEffect } from "react";

interface IFilterPriceProps {
  minFilterValue: number;
  maxFilterValue: number;
}

export const FilterPrice = ({
  minFilterValue,
  maxFilterValue,
}: IFilterPriceProps) => {
  const { updateFilters } = useFilterStore((state) => state.actions);
  const currentPriceRange = useFilterStore((state) => state.current.priceRange);
  const minValue = useInput(currentPriceRange.min.toString(), validators.price);
  const maxValue = useInput(currentPriceRange.max.toString(), validators.price);

  useEffect(() => {
    if (currentPriceRange.min === 0) minValue.reset();
    if (currentPriceRange.max === 0) maxValue.reset();
  }, [currentPriceRange]);

  const updatePriceRange = (key: "min" | "max", value: string) => {
    updateFilters("priceRange", {
      min: key === "min" ? Number(value) : Number(minValue.value),
      max: key === "max" ? Number(value) : Number(maxValue.value),
    } as IFilterPriceRange);
  };

  const handleMinValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    minValue.onChange(event);
    updatePriceRange("min", event.target.value);
  };

  const handleMaxValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    maxValue.onChange(event);
    updatePriceRange("max", event.target.value);
  };

  return (
    <div className="flex justify-between items-center gap-x-3">
      <DefaultInput
        label="От"
        value={minValue.value}
        onChange={handleMinValueChange}
        isError={!!minValue.error}
      />
      <DefaultInput
        label="До"
        value={maxValue.value}
        onChange={handleMaxValueChange}
        isError={!!maxValue.error}
      />
    </div>
  );
};
