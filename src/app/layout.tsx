import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "TRES Ajuda · protótipo",
  description: "Jornada de autoatendimento para máquinas TRES"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
