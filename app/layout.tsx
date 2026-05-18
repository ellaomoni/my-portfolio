import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { portfolioContent } from "@/data/portfolio";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${portfolioContent.siteConfig.name} | ${portfolioContent.siteConfig.title}`,
  description: portfolioContent.siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
