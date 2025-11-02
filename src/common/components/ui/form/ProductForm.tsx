import { DefaultInput } from "@/common/components/ui/input/DefaultInput";
import { DefaultTextArea } from "@/common/components/ui/textarea/DefaultTextArea";
import { DefaultButton } from "@/common/components/ui/button/DefaultButton";

export const ProductForm = () => {
  return (
    <form className="w-full flex flex-col gap-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DefaultInput label="Бренд" required />
        <DefaultInput label="Название" required />
        <DefaultInput label="Цена" type="number" required />
        <DefaultInput label="URL фото" required />
      </div>

      <DefaultTextArea label="Описание" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <DefaultButton title="Сохранить" type="submit" />
        <DefaultButton title="Отменить" type="reset" isBlack />
      </div>
    </form>
  );
};
