import { ERoutes } from "@/router/routes";
import { HeaderLink } from "@/common/components/ui/link/HeaderLink";

export const HeaderNavigation = () => {
  return (
    <nav>
      <ul className="flex-center gap-x-2 2xs:gap-x-4 xl:gap-x-6">
        <HeaderLink
          title="Создать"
          iconName="create"
          linkTo={ERoutes.CREATE_PRODUCTS}
        />
        <HeaderLink
          title="Продукты"
          iconName="products"
          linkTo={ERoutes.PRODUCTS}
        />
        <HeaderLink
          title="Избранное"
          iconName="heart"
          linkTo={ERoutes.FAVORITES}
        />
      </ul>
    </nav>
  );
};
