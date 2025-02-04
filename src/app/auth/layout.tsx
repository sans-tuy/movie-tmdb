import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login Woo commerce",
  description: "Generated by Next.js",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session) {
    redirect("/home");
  }
  return <section>{children}</section>;
}
