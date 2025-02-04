import HomeSwiper from "@/app/components/HomeSwiper/page";
import SectionFreeToWatch from "@/app/components/SectionFreeToWatch";
import SectionMovie from "@/app/components/SectionTrending";
import { SWRProvider } from "@/app/swr-provider";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <main>
      <HomeSwiper />
      <SectionMovie />
      <SectionFreeToWatch />
    </main>
  );
}
