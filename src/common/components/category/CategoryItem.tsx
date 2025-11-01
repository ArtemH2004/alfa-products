interface ICategoryItemProps {
  name: string;
}

export const CategoryItem = ({ name }: ICategoryItemProps) => {
  return (
    <li className="border-default rounded-2xl text-gray-400 text-xs px-2 text-nowrap">
      {name}
    </li>
  );
};
