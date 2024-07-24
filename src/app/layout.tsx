import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Providers } from "./providers";
import { connectToMongoDB } from "@/app/lib/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoes Web",
  description: "e-commerce to sell shoes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToMongoDB();
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NextTopLoader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
