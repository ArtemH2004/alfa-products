import React from "react";
import { ButtonWithIcon } from "@/common/components/ui/button/ButtonWithIcon";
import { useRouter } from "next/navigation";

interface IFormWrapperProps {
  title: string;
  children: React.ReactNode;
}

export const FormWrapper = ({ title, children }: IFormWrapperProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <section className="w-full bg-white flex flex-col gap-y-4 sm:gap-y-6 p-4 sm:p-6 border-default rounded-3xl shadow-default">
      <div className="flex items-center gap-x-2">
        <ButtonWithIcon
          title="Назад"
          iconName="arrow-back"
          onClick={handleBackClick}
        />
        <h2 className="text-gray-500 text-center sm:text-start">{title}</h2>
      </div>
      {children}
    </section>
  );
};
