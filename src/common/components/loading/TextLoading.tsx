interface TextLoadingProps {
  sizeClassName: string;
}

export const TextLoading = ({ sizeClassName }: TextLoadingProps) => {
  return <div className={`${sizeClassName} bg-gray-300 rounded-3xl animate-pulse`} />;
};
