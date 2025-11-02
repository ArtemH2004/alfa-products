interface IDefaultTextAreaProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  isError?: boolean;
  disabled?: boolean;
  required?: boolean;
}

export const DefaultTextArea = ({
  label,
  value,
  onChange,
  placeholder,
  isError,
  disabled = false,
  required = false,
}: IDefaultTextAreaProps) => {
  const isLabelLifted = !!value || placeholder;
  return (
    <div className="w-full min-h-20 relative flex pt-2">
      <textarea
        className={`peer border-default ${
          isError && "border-red-500"
        } resize-none scrollbar-hide rounded-3xl text-black bg-transparent border-default w-full h-20 px-4 py-2.5 transition-md outline-none text-sm focus:border-gray-500 focus:ring-2 focus:ring-black   focus:ring-offset-2`}
        id={label}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
      />
      <label
        className={`"pointer-events-none bg-white text-gray-500 text-sm transition-sm peer absolute left-4 px-0.5 ${
          isLabelLifted ? "top-0 text-xs" : "top-4.5"
        } peer-focus:top-0 peer-focus:text-xs`}
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};
