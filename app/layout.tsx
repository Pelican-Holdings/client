import { Footer, Header, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Pelican Holdings",
  description: "Bitumen and Bituminous products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="relative">
        <Header />
        <Navbar />

        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
