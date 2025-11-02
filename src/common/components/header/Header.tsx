import { HeaderLogo } from "@/common/components/header/HeaderLogo";
import { HeaderNavigation } from "@/common/components/header/HeaderNavigation";

export const Header = () => {
  return (
    <header className="w-full px-4 py-3 bg-white flex items-center justify-between gap-x-8 border-default border-t-0 rounded-b-3xl shadow-default">
      <HeaderLogo />
      <HeaderNavigation />
    </header>
  );
};
