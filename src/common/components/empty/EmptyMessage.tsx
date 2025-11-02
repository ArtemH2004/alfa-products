import { IEmptyMessage } from "@/common/constants/emptyMessages";

interface IEmptyMessageProps {
  message: IEmptyMessage;
}

export const EmptyMessage = ({ message }: IEmptyMessageProps) => {
  return (
    <div className="abs-center flex-center flex-col gap-y-2 text-center w-full px-4">
      <h3 className="text-black text-md">{message.title}</h3>
      <span className="text-gray-500 text-sm font-medium">
        {message.description}
      </span>
    </div>
  );
};
