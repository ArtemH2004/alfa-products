import Link from "next/link";
import { ButtonWithIcon } from "@/common/components/ui/button/ButtonWithIcon";

interface IHeaderLinkProps {
  title: string;
  iconName: "heart" | "create" | "products";
  linkTo: string;
}

export const HeaderLink = ({ title, iconName, linkTo }: IHeaderLinkProps) => {
  return (
    <li>
      <Link
        href={linkTo}
        className="flex-center leading-7.5 text-gray-500 hover:text-black hover:underline hover:underline-offset-4 active:opacity-65 "
      >
        <div className="block md:hidden">
          <ButtonWithIcon title={title} iconName={iconName} />
        </div>
        <span className="font-medium hidden md:block">{title}</span>
      </Link>
    </li>
  );
};
