import type { Metadata } from "next";
import { Open_Sans  } from "next/font/google";
import "./globals.css";
import "@/public/css/slick.css";

import Script from "next/script"



const openSans  = Open_Sans ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perú Hotelier",
  description: "Reserva ahora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

            <head>
            <link rel="icon" type="image/png" href="/img/favicon.png" />
                {/* Cargar jQuery desde un CDN */}
                <Script
                    src="/js/jquery.js"

                />

            </head>

      <body className={openSans.className}>{children}</body>
      <Script src="/js/main.js"  />

    </html>
  );
}
