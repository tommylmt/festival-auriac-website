import type { Metadata } from "next";
import "@/assets/styles/global.css";
import Menu from "@/components/menu/Menu";

export const metadata: Metadata = {
  title: "Les ruelles d'Auriac • Festival | Le festival et ses baleinades",
  description: "Le festival des ruelles d'Auriac-sur-Vendinelle vous présente ses spectacles",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="fr">
      <body>
        <header>
            <Menu />
        </header>
        {children}
      </body>
    </html>
  );
}
