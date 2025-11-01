interface IPageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: IPageWrapperProps) => {
  return (
    <div className="container min-h-screen flex flex-col">
      <header>Header</header>
      <div className="flex-1 w-full p-4">{children}</div>
    </div>
  );
};
