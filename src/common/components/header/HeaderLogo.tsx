import { ERoutes } from "@/router/routes";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href={ERoutes.PRODUCTS}>
      <span className="font-bold text-lg text-black">
        <strong className="text-gray-500">Alfa</strong>Products
      </span>
    </Link>
  );
};
