import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import { handjet, manrope } from "./_components/fonts";




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
    <html lang="en">
      <body className={`${manrope.variable}`}>
        <main className="manrope">
          <div>
            <div className="min-w-[1400px]">
              <Header />
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
