import { TextLoading } from "@/common/components/loading/TextLoading";

export const CategoryListLoading = () => {
  const list = Array.from({ length: 3 });
  return (
    <ul className="w-full flex items-center gap-x-1">
      {list.map((_, index) => (
        <li key={index} className="w-1/4 border-default rounded-2xl px-2 py-1">
          <TextLoading sizeClassName="w-full h-2" />
        </li>
      ))}
    </ul>
  );
};
