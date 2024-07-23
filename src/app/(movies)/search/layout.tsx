import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import { auth } from "@/auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TMDB clone",
  description: "information about movies and tv series",
};

export default async function MoviePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
  }
  return (
    <section>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      <Footer />
    </section>
  );
}
