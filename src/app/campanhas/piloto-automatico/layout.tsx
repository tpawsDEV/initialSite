import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Campanhas - Piloto Automático",
  description: "Campanhas de Piloto Automático",
};
import { ReactNode } from "react";
import { SiteHeader } from "@/components/menus/header";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <SiteHeader />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
