import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Footer, Header, Sidebar } from "./components";
import "./globals.css";
import style from "./layout.module.css";

const noto_sans = Noto_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Top App",
  description: "Best top app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>
        <div className={style.wrapper}>
          <Header className={style.header} />
          <Sidebar className={style.sidebar} />
          <div className={style.body}>{children}</div>
          <Footer className={style.footer} />
        </div>
      </body>
    </html>
  );
}
