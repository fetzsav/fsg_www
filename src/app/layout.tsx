import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Forest City Contracting",
  description: "Craftsmanship rooted in Savannahh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-[#2f2f2f] text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
