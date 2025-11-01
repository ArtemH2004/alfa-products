import Image from "next/image";

interface IButtonWithIconProps {
  size?: number;
  title: string;
  iconName: "arrow-back" | "bin" | "edit" | "heart-filled" | "heart";
  type?: "button" | "submit" | "reset";
  onClick?: (e: any) => void;
  isRed?: boolean;
}

export const ButtonWithIcon = ({
  size = 30,
  title,
  iconName,
  type = "button",
  onClick,
  isRed = false,
}: IButtonWithIconProps) => {
  const iconSize = size * 0.8;
  return (
    <button
      type={type}
      title={title}
      onClick={onClick}
      className={`flex-center select-none rounded-full p-2 ${
        isRed ? "text-red-500" : "text-gray-500"
      }  hover:bg-gray-100 active:bg-gray-200`}
    >
      <Image
        src={`/icons/${iconName}.svg`}
        alt=""
        width={iconSize}
        height={iconSize}
        objectFit="contain"
        objectPosition="center"
      />
      <span className="visually-hidden">{title}</span>
    </button>
  );
};
