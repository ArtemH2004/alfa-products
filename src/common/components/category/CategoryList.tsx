import { TagButton } from "@/common/components/ui/button/TagButton";

interface ICategoryListProps {
  categoryList: string[];
  isDisabled?: boolean;
}

export const CategoryList = ({
  categoryList,
  isDisabled = true,
}: ICategoryListProps) => {
  return (
    <ul className="w-full overflow-x-auto scrollbar-hide flex items-center gap-x-1">
      {categoryList.map((item, index) => (
        <TagButton key={index} title={item} isDisabled={isDisabled} />
      ))}
    </ul>
  );
};
