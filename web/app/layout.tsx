import type { Metadata } from "next";
import { Open_Sans  } from "next/font/google";
import "./globals.css";
import "@/public/css/slick.css";

import Script from "next/script"

const openSans  = Open_Sans ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Script src="/js/jquery.js"/>

      <Script src="/js/main.js"/>
      <body className={openSans.className}>{children}</body>


    </html>
  );
}
