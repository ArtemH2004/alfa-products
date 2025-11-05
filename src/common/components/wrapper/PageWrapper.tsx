import { Header } from "@/common/components/header/Header";
import { SearchWrapper } from "@/common/components/wrapper/SearchWrapper";

interface IPageWrapperProps {
  children: React.ReactNode;
  filtersActive?: boolean;
}

export const PageWrapper = ({
  children,
  filtersActive = false,
}: IPageWrapperProps) => {
  return (
    <div className="container min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 w-full p-4 flex flex-col gap-y-4">
        {filtersActive && <SearchWrapper />}
        <>{children}</>
      </div>
    </div>
  );
};
