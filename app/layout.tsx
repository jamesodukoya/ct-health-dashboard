import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

export const metadata: Metadata = {
  title: "Coalition Technologies Patient Dashboard",
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
