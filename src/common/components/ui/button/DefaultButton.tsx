interface IDefaultButtonProps {
  title: string;
  onClick?: () => void;
  isBlack?: boolean;
  type?: "button" | "submit" | "reset";
}

export const DefaultButton = ({
  title,
  onClick,
  isBlack = false,
  type = "button",
}: IDefaultButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        isBlack ? "bg-black text-white" : "bg-transparent text-black"
      } w-full px-4 py-2 border-default rounded-3xl font-medium border-black hover:opacity-85 active:opacity-65`}
    >
      {title}
    </button>
  );
};
