import type { Metadata } from "next";
import "@/common/styles/styles.css";
import { StoreProvider } from "@/common/providers/StoreProvider";

export const metadata: Metadata = {
  title: "Alfa Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
