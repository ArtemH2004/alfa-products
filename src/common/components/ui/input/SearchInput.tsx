"use client";
import { validators } from "@/common/helpers/validators";
import useInput from "@/common/hooks/useInput";
import { useSearchStore } from "@/store/search/searchStore";
import Image from "next/image";
import { ButtonWithIcon } from "@/common/components/ui/button/ButtonWithIcon";

export const SearchInput = () => {
  const searchValue = useSearchStore((state) => state.searchContent);
  const { addSearchContent, removeSearchContent } = useSearchStore(
    (state) => state.actions
  );
  const search = useInput(searchValue, validators.search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    search.onChange(e);
    addSearchContent(e.target.value);
  };

  const handleResetClick = () => {
    search.reset();
    removeSearchContent();
  };

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
        className={`peer border-default ${
          !!search.error && "border-red-500"
        } shadow-default rounded-3xl bg-white text-black w-full pl-11 pr-11 pb-1 pt-4.5 transition-sm outline-none text-sm font-medium focus:border-gray-500 focus:ring-2 focus:ring-black focus:dark:ring-offset-red-100 focus:ring-offset-2`}
        id="search"
        type="text"
        placeholder=""
        value={search.value}
        onChange={handleChange}
      />
      <label
        className="pointer-events-none whitespace-nowrap text-gray-500 text-sm transition-sm absolute z-10 top-1/2 -translate-y-1/2 left-11 peer-focus:top-1 peer-focus:text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:-translate-y-0 peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-0"
        htmlFor="search"
      >
        Поиск
      </label>
      {search.value.length !== 0 && (
        <div className="absolute z-10 right-1 top-1/2 -translate-y-1/2 object-contain object-center">
          <ButtonWithIcon
            title="Очистить"
            iconName="close"
            onClick={handleResetClick}
            size={25}
          />
        </div>
      )}
    </div>
  );
};
