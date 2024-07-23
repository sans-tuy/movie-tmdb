import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import { auth } from "@/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Shoes Web",
  description: "e-commerce to sell shoes",
};

export default async function HomeLayout({
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
