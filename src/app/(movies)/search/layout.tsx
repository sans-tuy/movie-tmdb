import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TMDB clone",
  description: "information about movies and tv series",
};

export default function MoviePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      <Footer />
    </section>
  );
}
