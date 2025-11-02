import React from "react";

interface IFormWrapperProps {
  title: string;
  children: React.ReactNode;
}

export const FormWrapper = ({ title, children }: IFormWrapperProps) => {
  return (
    <section className="w-full bg-white flex flex-col gap-y-4 sm:gap-y-6 p-4 sm:p-6 border-default rounded-3xl shadow-default">
      <h2 className="text-gray-500 text-center sm:text-start">{title}</h2>
      {children}
    </section>
  );
};
