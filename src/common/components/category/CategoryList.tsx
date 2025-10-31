import { CategoryItem } from "@/common/components/category/CategoryItem";

interface ICategoryListProps {
  categoryList: string[];
}

export const CategoryList = ({ categoryList }: ICategoryListProps) => {
  return (
    <ul className="w-full overflow-x-auto scrollbar-hide flex items-center gap-x-1">
      {categoryList.map((item, index) => (
        <CategoryItem key={index} name={item} />
      ))}
    </ul>
  );
};
