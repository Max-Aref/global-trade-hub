import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Trade Hub - Wholesale Suppliers from Egypt to the U.S.",
  description:
    "Discover a comprehensive resource hub connecting wholesale suppliers in Egypt with the American market. Explore high-quality products, streamline international trade, and grow your business with our AI-powered platform tailored for global trade success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <html lang='ar-EG'>  */}
      <body
        className={twMerge(inter.className, "bg-black text-white antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
