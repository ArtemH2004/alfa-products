import { DefaultButton } from "@/common/components/ui/button/DefaultButton";

interface IButtonsBottomSheetProps {
  okButtonTitle: string;
  okButtonClick: (e: any) => void;
  resetButtonTitle: string;
  resetButtonClick: (e: any) => void;
}

export const ButtonsBottomSheet = ({
  okButtonClick,
  okButtonTitle,
  resetButtonTitle,
  resetButtonClick,
}: IButtonsBottomSheetProps) => {
  return (
    <div className="w-full flex-center gap-x-2.5 2xs:gap-x-5 pb-5">
      <DefaultButton
        title={okButtonTitle}
        onClick={okButtonClick}
      />
      <DefaultButton
        title={resetButtonTitle}
        onClick={resetButtonClick}
        isBlack
      />
    </div>
  );
};
