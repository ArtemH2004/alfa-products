interface IDefaultInputProps {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password" | "number" | "tel";
  placeholder?: string;
  isError?: boolean;
  disabled?: boolean;
  required?: boolean;
}

export const DefaultInput = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  isError,
  disabled = false,
  required = false,
}: IDefaultInputProps) => {
  return (
    <div className="w-full min-h-10 max-h-[11.5] relative flex">
      <input
        className={`peer border-default ${
          isError && "border-red-500"
        } rounded-3xl text-black bg-transparent border-default w-full h-10 px-4 transition-sm outline-none text-sm focus:border-gray-500 focus:ring-2 focus:ring-accent focus:dark:ring-offset-white focus:ring-offset-2`}
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
      />
      <label
        className="pointer-events-none bg-white text-gray-500 text-sm transition-sm peer absolute top-1/2 -translate-y-1/2 left-4 px-0.5 peer-focus:top-0 peer-focus:left-4 peer-focus:text-xs peer-valid:-top-0 peer-valid:left-4 peer-valid:text-xs"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};
