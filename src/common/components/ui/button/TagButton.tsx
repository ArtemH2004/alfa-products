interface TagButtonProps {
  isDisabled?: boolean;
  isActive?: boolean;
  title: string;
  onClick?: () => void;
}

export const TagButton = ({
  isDisabled,
  isActive,
  title,
  onClick,
}: TagButtonProps) => {
  return (
    <li className="flex-center">
      <button
        className={`bg-white border-default rounded-3xl flex-center px-3 py-1  ${
          isActive && "border-black"
        }`}
        onClick={onClick}
        disabled={isDisabled}
      >
        <span
          className={`text-nowrap text-center font-medium text-xs leading-3 ${
            isActive ? "text-black" : "text-gray-400"
          }`}
        >
          {title}
        </span>
      </button>
    </li>
  );
};
