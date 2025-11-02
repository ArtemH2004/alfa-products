import Image from "next/image";

interface ISearchInputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ value, onChange }: ISearchInputProps) => {
  return (
    <div className="w-full max-w-4/5 relative flex">
      <Image
        src="/icons/search.svg"
        alt=""
        width={25}
        height={25}
        className="absolute z-10 left-3 top-1/2 -translate-y-1/2 object-contain object-center"
      />
      <input
        className={`peer border-default shadow-default rounded-3xl bg-white text-black w-full pl-11 pr-3 pb-1 pt-4.5 transition-sm outline-none text-sm font-medium focus:border-gray-500 focus:ring-2 focus:ring-black focus:dark:ring-offset-red-100 focus:ring-offset-2`}
        id="search"
        type="text"
        placeholder=""
        value={value}
        onChange={onChange}
      />
      <label
        className="pointer-events-none whitespace-nowrap text-gray-500 text-sm transition-sm absolute z-10 top-1/2 -translate-y-1/2 left-11 peer-focus:top-1 peer-focus:text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-translate-y-0 peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-0"
        htmlFor=""
      >
        Поиск
      </label>
    </div>
  );
};
