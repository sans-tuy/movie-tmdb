import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useFormState, useFormStatus } from "react-dom";
import Navbar from "@/app/navbar";
import { useParams } from "next/navigation";
import Footer from "@/app/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoes Web",
  description: "e-commerce to sell shoes",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
