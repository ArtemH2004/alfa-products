import { Metadata } from "next";
import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import { Favorites } from "@/app/favorites/Favorites";

export const metadata: Metadata = {
  title: "Избранное",
};

export default function FavoritesPage() {
  return (
    <PageWrapper>
      <Favorites />
    </PageWrapper>
  );
}
