import type { Metadata } from "next";
import "@/common/styles/styles.css";

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
      <body>{children}</body>
    </html>
  );
}
