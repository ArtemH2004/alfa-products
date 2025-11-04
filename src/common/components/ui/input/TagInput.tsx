"use client";
import { ButtonWithIcon } from "@/common/components/ui/button/ButtonWithIcon";

interface ITagInputProps {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  disabled?: boolean;
  required?: boolean;
  onOkClick: () => void;
  onResetClick: () => void;
}

export const TagInput = ({
  label,
  value,
  onChange,
  isError,
  required,
  onOkClick,
  onResetClick,
}: ITagInputProps) => {
  const handleOkClick = () => {
    !isError && onOkClick();
  };
  return (
    <div className="w-full max-w-1/2 lg:max-w-1/3 relative flex">
      <div className="absolute left-0.5 top-1/2 -translate-y-1/2 z-10">
        <ButtonWithIcon
          iconName="create"
          title="Добавить"
          onClick={handleOkClick}
        />
      </div>
      <div className="absolute right-0.5 top-1/2 -translate-y-1/2 z-10">
        <ButtonWithIcon
          iconName="close"
          title="Удалить теги"
          onClick={onResetClick}
        />
      </div>
      <input
        className={`peer border-default ${
          !!isError && "border-red-500"
        } rounded-3xl bg-white text-black w-full pl-12 pr-12 pb-1 pt-4.5 transition-sm outline-none text-sm font-medium focus:border-gray-500 focus:ring-2 focus:ring-black focus:dark:ring-offset-white focus:ring-offset-2`}
        id={label}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        placeholder={""}
      />
      <label
        className="pointer-events-none whitespace-nowrap text-gray-500 text-sm transition-sm absolute z-10 top-1/2 -translate-y-1/2 left-12 peer-focus:top-1 peer-focus:text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-translate-y-0 peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-0"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};
