import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Header, Sidebar } from "./components";

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
        <Header />
        <main>
          <Sidebar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
