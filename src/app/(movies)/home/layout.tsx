import Footer from "@/app/footer";
import Navbar from "@/app/navbar";
import type { Metadata } from "next";

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
