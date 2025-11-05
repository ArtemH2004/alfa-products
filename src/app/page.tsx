import { MainPageWrapper } from "@/common/components/wrapper/MainPageWrapper";
import { PageWrapper } from "@/common/components/wrapper/PageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
};

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <PageWrapper>
        <MainPageWrapper />
      </PageWrapper>
    </main>
  );
}
