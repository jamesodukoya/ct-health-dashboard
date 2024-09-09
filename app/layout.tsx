import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})


export const metadata: Metadata = {
  title: "Coalition Technologies Healthcare Dashboard",
  description: "Healthcare analytics at its best!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
